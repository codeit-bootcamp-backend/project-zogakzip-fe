'use client'

import classNames from 'classnames/bind'
import styles from './LikeButton.module.scss'
import Icon from '../icon/Icon'
import postLikeGroup from '@libs/groups/data-access-groups/postLikeGroup'
import useConfirmModal from '../modal/useConfirmModal'
import postLikePost from '@libs/posts/data-access-posts/postLikePost'
import { Dispatch, SetStateAction, useState } from 'react'
import { motion } from 'framer-motion'

const cx = classNames.bind(styles)

type LikeButtonProps = {
  type: 'group' | 'post'
  id: number
  setLikeCount: Dispatch<SetStateAction<number>>
}

type Flower = {
  id: number;
  x: number;
}

const LikeButton = ({ type, id, setLikeCount }: LikeButtonProps) => {
  const { renderConfirmModal, openConfirmModal } = useConfirmModal()
  const [flowers, setFlowers] = useState<Flower[]>([])

  const handleClickLikeButton = async () => {
    const newFlower = {
      id: Math.random(),
      x: Math.random() * 100 + 40, // 좌우 랜덤 위치
    }
    setFlowers([
      ...flowers,
      newFlower,
    ])

    setTimeout(() => {
      setFlowers((prevFlowers) => prevFlowers.filter((flower) => flower.id !== newFlower.id))
    }, 2000)

    try {
      if (type === 'group') await postLikeGroup(id)
      else await postLikePost(id)
      setLikeCount((prev) => prev + 1)
    } catch (error) {
      openConfirmModal({
        title: '공감하기 실패',
        description: `${type === 'group' ? '그룹' : '추억'} 공감에 실패했습니다.`,
      })
    }
  }

  return (
    <>
      <button onClick={handleClickLikeButton} className={cx('container')}>
        <div className={cx('contentContainer')}>
          <Icon name='flower' width={22} height={22} alt='꽃' />
          <span className={cx('text')}>공감 보내기</span>
        </div>
        {flowers.map((flower) => (
          <motion.div
            key={flower.id}
            initial={{ opacity: 1, y: -60 }}
            animate={{ opacity: 0, y: -150 }}
            transition={{ duration: 2, ease: 'linear' }}
            style={{ position: 'absolute', left: flower.x }}
          >
            <Icon name='flower' width={22} height={22} alt='꽃' />
          </motion.div>
        ))}
      </button>
      {renderConfirmModal()}
    </>
  )
}

export default LikeButton
