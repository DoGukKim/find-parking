import { useCallback, useEffect, useRef } from 'react'
import { renderToString } from 'react-dom/server'

import { Location } from 'src/domain/map/type'
import { COLOR_THEME } from 'src/theme/color'
import useGeolocation from './useGeolocation'

import Icon from 'src/components/icon/Icon'

const useGoTLocation = (map: naver.maps.Map | undefined) => {
  const GPSControlerRef = useRef<naver.maps.CustomControl>()
  const { location } = useGeolocation()

  /**
   * @description
   * emotion 스타일 컴포넌트를 사용할 경우 스타일이 적용되지 않습니다.
   */
  const getGPSButton = (type: 'clicked' | 'normal' = 'normal') => {
    return renderToString(
      <button
        style={{
          backgroundColor: 'white',
          padding: '5px',
          border: `1px solid ${COLOR_THEME.grey300}`,
          borderRadius: '2px',
        }}
      >
        <Icon
          type="GPSSignal"
          fill={type === 'clicked' ? 'blue400' : 'grey700'}
          height={35}
          width={35}
        />
      </button>
    )
  }

  const goToCenter = useCallback(
    (location: Location | undefined) => {
      if (!location || !map) return

      map.setCenter(location)
      map.setZoom(15)
    },
    [map]
  )

  useEffect(() => {
    if (!map) return

    naver.maps.Event.once(map, 'init', () => {
      GPSControlerRef.current = new naver.maps.CustomControl(getGPSButton(), {
        position: naver.maps.Position.RIGHT_CENTER,
      })

      GPSControlerRef.current.setMap(map)

      goToCenter(location)

      naver.maps.Event.addDOMListener(
        GPSControlerRef.current.getElement(),
        'click',
        () => {
          goToCenter(location)

          /**
           * @description
           * 초기에 설정한 CustomControl의 html에 상태값을 변경하여 아이콘 색상을 변경해도 적용되지 않습니다.
           * 새로운 html을 적용하기 위해서는 새로 set하여 다시 그려야 합니다.
           */
          GPSControlerRef.current?.html(getGPSButton('clicked'))
        }
      )
    })
  }, [location, map, goToCenter])

  // @FIXME:
  // useEffect(() => {
  //   if (!map) return

  //   naver.maps.Event.addDOMListener(map.getElement(), 'idle', () => {
  //     console.log('center changed')
  //     GPSControlerRef.current?.html(getGPSButton())
  //   })
  // }, [map])
}

export default useGoTLocation
