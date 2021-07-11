import Atoms from '@/components/atoms/index'
import Blocks from '@/components/blocks/index'
import Pages from '@/components/pages/index'
import SampleUtil from '../utils/smaple/sampleUtil'

export const Home: React.FC = () => {
  const sampleUtil = SampleUtil()
  console.log(sampleUtil)
  return (
    <>
      <Atoms.Sample />
      <Atoms.Sample2 />
      <Blocks.Sample />
      <Pages.Sample />
    </>
  )
}

export default Home
