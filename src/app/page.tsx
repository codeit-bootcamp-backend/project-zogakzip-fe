import { META_HOME } from '@app/_meta'
import { redirect } from 'next/navigation'

const HomePage = () => {
  redirect('/groups')
  return (
    <main>
      홈페이지
    </main>
  )
}

export const metadata = META_HOME
export default HomePage
