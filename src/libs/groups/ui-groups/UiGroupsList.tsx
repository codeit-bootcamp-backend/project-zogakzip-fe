import classNames from 'classnames/bind'
import styles from './UiGroupsList.module.scss'
import { Group } from '@services/api/types'
import EmptyData from '@libs/shared/empty-data/EmptyData'
import GroupCard from '@libs/shared/group-card/GroupCard'
import Button from '@libs/shared/button/Button'
import Link from 'next/link'

const cx = classNames.bind(styles)

type UiGroupsListProps = {
  groups: Group[]
  moreButton: React.ReactNode
}

const UiGroupsList = ({ groups, moreButton }: UiGroupsListProps) => {
  if (groups.length === 0) return (
    <div className={cx('emptyContainer')}>
      <EmptyData title='등록된 그룹이 없습니다.' content='가장 먼저 그룹을 만들어보세요!' />
      <Link href='/groups/create'>
        <Button size='large'>그룹 만들기</Button>
      </Link>
    </div>
  )

  return (
    <>
      <div className={cx('container')}>
        {groups.map((group) => (
          <GroupCard key={group.id} card={group} />
        ))}
      </div>
      {moreButton}
    </>
  )
}

export default UiGroupsList
