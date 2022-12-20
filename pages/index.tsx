import styled from '@emotion/styled'
import { useEffect } from 'react'

import useGeolocation, { MAP_ID } from 'src/hooks/useGeolocation'

export default function Home() {
  const { location } = useGeolocation()

  useEffect(() => {
    new naver.maps.Map(MAP_ID, {
      center: new naver.maps.LatLng(
        location?.latitude ?? 0,
        location?.longitude ?? 0
      ),
      zoom: 15,
    })
  }, [location])

  return <Map id={MAP_ID}></Map>
}

const Map = styled.div`
  width: 100%;
  height: 400px;
`
