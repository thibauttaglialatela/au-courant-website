import { useState, useEffect, useRef, useCallback } from 'react'

const useApi = (endpoint, options) => {
  const apiUrl =
    import.meta.env.VITE_API_URL_DEV || import.meta.env.VITE_API_URL
  const [data, setData] = useState(null)
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(true)
  const abortControllerRef = useRef()

  const fetchApi = useCallback(async () => {
    // sécurité : on évite de fetch si endpoint non défini
    if (!apiUrl || !endpoint) {
      console.warn('⚠️ useApi appelé sans apiUrl ou endpoint')
      return
    }

    const abortController = new AbortController()
    abortControllerRef.current = abortController

    setLoading(true)
    try {
      const response = await fetch(apiUrl + endpoint, {
        ...options,
        signal: abortController.signal,
      })

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}))
        throw new Error(errorData.message || `Erreur HTTP ${response.status}`)
      }
      const contentType = response.headers.get('content-type')
      const data =
        contentType && contentType.includes('application/json')
          ? await response.json()
          : null

      setData(data)
      setError(null)
    } catch (err) {
      if (err.name === 'AbortError') {
        console.log('🛑 Fetch annulé (AbortController)')
        return
      }
      console.error('❌ Erreur dans useApi:', err)
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }, [apiUrl, endpoint, options])

  useEffect(() => {
    fetchApi()
    return () => {
      if (abortControllerRef.current) abortControllerRef.current.abort()
    }
  }, [fetchApi])

  return { loading, error, data, refetch: fetchApi }
}

export default useApi
