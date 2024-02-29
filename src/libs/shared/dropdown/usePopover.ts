'use client'

import { useEffect, useRef, useState } from 'react'

const usePopover = () => {
  const popoverRef = useRef<HTMLDialogElement>(null)
  const [isOpened, setIsOpened] = useState(false)

  const openPopover = () => {
    setIsOpened(true)
  }

  const closePopover = () => {
    setIsOpened(false)
  }

  const togglePopover = () => {
    setIsOpened((prev) => !prev)
  }

  useEffect(() => {
    if (!popoverRef.current) return
    if (isOpened) popoverRef.current.show()
    else popoverRef.current.close()
  }, [isOpened])

  return { popoverRef, openPopover, closePopover, togglePopover, isOpened }
}

export default usePopover
