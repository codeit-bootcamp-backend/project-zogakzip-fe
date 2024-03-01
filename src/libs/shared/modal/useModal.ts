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
    if (isOpened) modalRef.current.showModal()
    else modalRef.current.close()
  }, [isOpened])

  return { modalRef, openModal, closeModal, isOpened }
}

export default useModal
