import { useEffect, useRef } from 'react'

import { MAP_ID } from 'src/domain/map/constant'

const useNaverMap = () => {
  const mapRef = useRef<naver.maps.Map | undefined>()

  useEffect(() => {
    mapRef.current = new naver.maps.Map(MAP_ID, {
      zoom: 15,

      disableKineticPan: false, //사용자가 지도를 드래그했을 때 관성 효과
      tileTransition: true, //지도 타일을 전환할 때 페이드 인 효과
      disableTwoFingerTapZoom: true, //사용자가 지도 위에서 두 손가락으로 두 번 탭해 지도를 축소하는 기능
    })
  }, [])

  return mapRef
}

export default useNaverMap
