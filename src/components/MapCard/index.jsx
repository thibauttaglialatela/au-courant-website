import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { useState, useEffect } from 'react'
import L from 'leaflet'
import styled from 'styled-components'

import orangeIcon from '../../assets/orange-map-marker.png'

let DefaultIcon = L.icon({
  iconUrl: orangeIcon,
  iconSize: [40, 40],
  iconAnchor: [20, 40],
  popupAnchor: [1, -34],
})

L.Marker.prototype.options.icon = DefaultIcon

const CardWrapper = styled.article`
  height: 20rem;
  width: 100%;

  @media screen and (min-width: 426px) {
    height: 20rem;
    max-width: 30rem;
  }
`
const StyledMapContainer = styled(MapContainer)`
  height: 100%;
  width: 100%;
`
function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const media = window.matchMedia('(max-width:425px)')
    setIsMobile(media.matches)
  }, [])

  return isMobile
}

function MapCard() {
  const position = [48.809243, 2.434977]

  const IsMobile = useIsMobile()

  return (
    <CardWrapper>
      <StyledMapContainer
        center={position}
        zoom={15}
        scrollWheelZoom={false}
        touchZoom={!IsMobile}
        doubleClickZoom={!IsMobile}
        boxZoom={!IsMobile}
        keyboard={!IsMobile}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <Marker position={position}>
          <Popup>Au courant ⚡️</Popup>
        </Marker>
      </StyledMapContainer>
    </CardWrapper>
  )
}

export default MapCard
