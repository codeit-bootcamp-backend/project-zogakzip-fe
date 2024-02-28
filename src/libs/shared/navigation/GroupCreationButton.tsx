'use client'

import { usePathname, useRouter } from 'next/navigation'
import Button from '../button/Button'

type GroupCreationButtonProps = {
}

const GroupCreationButton = ({ }: GroupCreationButtonProps) => {
  const path = usePathname()
  const router = useRouter()

  if (path === '/groups') {
    return <Button size='medium' onClick={() => { router.push('/groups/create') }}>그룹 만들기</Button>
  }

}

export default GroupCreationButton
