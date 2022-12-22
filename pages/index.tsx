import styled from '@emotion/styled'
import { useEffect } from 'react'

import useGeolocation, { MAP_ID } from 'src/hooks/useGeolocation'
import { useParking } from 'src/services/reactQuery'

export default function Home() {
  const { location } = useGeolocation()

  const { data } = useParking()

  useEffect(() => {
    new naver.maps.Map(MAP_ID, {
      center: new naver.maps.LatLng(
        location?.latitude ?? 0,
        location?.longitude ?? 0
      ),
      zoom: 15,
    })
  }, [location])

  return (
    <>
      <Map id={MAP_ID}></Map>
      <div>{data && data[0].TMP01}</div>
    </>
  )
}

const Map = styled.div`
  width: 100%;
  height: 400px;
`
