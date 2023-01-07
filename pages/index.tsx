import styled from '@emotion/styled'

import { NextPageWithLayout } from './_app'

import { MAP_ID } from 'src/domain/map/constant'
import useNaverMap from 'src/hooks/useNaverMap'
import useGoToCurrentLocation from 'src/hooks/useGoToCurrentLocation'

import { Layout } from 'src/components/layout'

const Home: NextPageWithLayout = () => {
  const mapRef = useNaverMap()
  useGoToCurrentLocation(mapRef.current)

  return <MapFame id={MAP_ID} />
}

export default Home

Home.getLayout = (page) => <Layout meta={{ title: 'home' }}>{page}</Layout>

const MapFame = styled.div`
  width: 100%;
  height: 100%;
`
