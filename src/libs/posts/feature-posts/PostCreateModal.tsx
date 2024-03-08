'use client'

import classNames from 'classnames/bind'
import styles from './PostCreateModal.module.scss'
import Icon from '@libs/shared/icon/Icon'
import SectionLayout from '@libs/shared/layout/SectionLayout'
import PostCreateForm from './PostCreateForm'
import useModal from '@libs/shared/modal/useModal'
import { PostCreateFormInput } from '@services/api/types'

const cx = classNames.bind(styles)

type PostCreateModalProps = {
  postCreateFormModal: ReturnType<typeof useModal>
  authCheckFormModal: ReturnType<typeof useModal>
  onSubmit: (data: PostCreateFormInput) => void
}

const PostCreateModal = ({
  postCreateFormModal,
  authCheckFormModal,
  onSubmit,
  ...restProps
}: PostCreateModalProps) => {
  return (
    <dialog
      ref={postCreateFormModal.modalRef}
      onKeyDown={(e) => { if (e.key === 'Escape') postCreateFormModal.closeModal() }}
      className={cx('dialog')}
      {...restProps}
    >
      <button
        type='button'
        className={cx('closeButton')}
        onClick={() => { postCreateFormModal.closeModal() }}
      >
        <Icon name='cancel' width={30} height={30} alt='닫기 아이콘' />
      </button>
      <div className={cx('header')}>
        <Icon name='logo' width={137} height={48} alt='로고' />
      </div>
      <SectionLayout
        title='추억 올리기'
        headerMarginBottom='60px'
        width='960px'
        content={(
          <PostCreateForm
            authCheckFormModal={authCheckFormModal}
            onSubmit={onSubmit}
          />
        )}
      />
    </dialog>
  )
}

export default PostCreateModal
