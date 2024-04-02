'use client'

import { useEffect, useRef, useState } from 'react'

const useModal = () => {
  const modalRef = useRef<HTMLDialogElement>(null)
  const [isOpened, setIsOpened] = useState(false)

  const openModal = () => {
    setIsOpened(true)
  }

  const closeModal = () => {
    setIsOpened(false)
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

  return { modalRef, openModal, closeModal, isOpened }
}

export default useModal
