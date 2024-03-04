import classNames from 'classnames/bind'
import styles from './UiMemoriesList.module.scss'
import { Memory } from '@services/api/types'
import MemoryCard from '@libs/shared/memory-card/MemoryCard'
import Button from '@libs/shared/button/Button'
import EmptyData from '@libs/shared/empty-data/EmptyData'
import Link from 'next/link'

const cx = classNames.bind(styles)

type UiMemoriesListProps = {
  memories: Memory[]
  groupId: number
}

const UiMemoriesList = ({ memories, groupId }: UiMemoriesListProps) => {
  if (memories.length === 0) return (
    <div className={cx('emptyContainer')}>
      <EmptyData title='게시된 추억이 없습니다.' content='첫 번째 추억을 올려보세요!' />
      <Link href={`groups/${groupId}/posts/create`}>
        <Button size='large'>추억 올리기</Button>
      </Link>
    </div>
  )

  return (
    <>
      <div className={cx('container')}>
        {memories.map((memory) => (
          <MemoryCard key={memory.id} card={memory} />
        ))}
      </div>
      <Button size='extraLarge' color='bright'>더보기</Button>
    </>
  )
}

export default UiMemoriesList
