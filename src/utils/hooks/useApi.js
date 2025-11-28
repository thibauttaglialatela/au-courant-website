import { useState, useEffect, useRef, useCallback } from 'react'

const useApi = (endpoint, options) => {
  const apiUrl =
    import.meta.env.VITE_API_URL_DEV || import.meta.env.VITE_API_URL

  const [data, setData] = useState(null)
  const [error, setError] = useState(null)   // passe en objet
  const [loading, setLoading] = useState(true)

  const abortControllerRef = useRef()

  const fetchApi = useCallback(async () => {
    if (!apiUrl || !endpoint) return

    const abortController = new AbortController()
    abortControllerRef.current = abortController

    setLoading(true)

    try {
      const response = await fetch(apiUrl + endpoint, {
        ...options,
        signal: abortController.signal,
      })

      const contentType = response.headers.get("content-type")
      const isJson = contentType && contentType.includes("application/json")
      const body = isJson ? await response.json().catch(() => null) : null

      if (!response.ok) {
        setError({
          status: body?.status ?? response.status,
          message: body?.message ?? "Erreur serveur",
        })
        setData(null)
        return
      }

      setData(body)
      setError(null)

    } catch (err) {
      if (err.name === "AbortError") return

      // erreur réseau ou fetch
      setError({
        status: 0,
        message: err.message || "Erreur inconnue"
      })
    } finally {
      setLoading(false)
    }
  }, [apiUrl, endpoint, options])

  useEffect(() => {
    fetchApi()
    return () => abortControllerRef.current?.abort()
  }, [fetchApi])

  return { loading, error, data, refetch: fetchApi }
}

export default useApi
