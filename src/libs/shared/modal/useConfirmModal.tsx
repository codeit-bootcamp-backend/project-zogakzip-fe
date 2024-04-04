'use client'

import { useEffect, useRef, useState } from 'react'
import ConfirmModal from './ConfirmModal'

type ConfirmModalArgs = {
  title: string
  description?: string
  onClose?: () => void
}

const useConfirmModal = () => {
  const modalRef = useRef<HTMLDialogElement>(null)
  const [isOpened, setIsOpened] = useState(false)
  const [modalArgs, setModalArgs] = useState<ConfirmModalArgs | null>(null)

  const openConfirmModal = (args: ConfirmModalArgs) => {
    setModalArgs(args)
    setIsOpened(true)
  }

  const renderConfirmModal = () => {
    if (isOpened && modalArgs) {
      return (
        <ConfirmModal
          title={modalArgs.title}
          description={modalArgs?.description || '알 수 없는 오류가 발생했습니다.'}
          ref={modalRef}
          onClose={() => {
            setIsOpened(false)
            if (modalArgs.onClose) modalArgs.onClose()
          }}
        />
      )
    }
  }

  useEffect(() => {
    if (!modalRef.current) return

    if (isOpened) {
      modalRef.current.showModal()
      document.body.style.overflow = 'hidden'
    }
    else {
      modalRef.current.close()
      document.body.style.overflow = 'auto'
    }

    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [isOpened])

  return { renderConfirmModal, openConfirmModal }
}

export default useConfirmModal
