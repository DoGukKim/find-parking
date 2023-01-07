import { NextPageWithLayout } from './_app'
import { Layout } from 'src/components/layout'

const Home: NextPageWithLayout = () => {
  return <div></div>
}

export default Home

Home.getLayout = (page) => <Layout meta={{ title: 'home' }}>{page}</Layout>
