'use client'

import { useEffect, useRef, useState } from 'react'

const usePopover = (triggerRef?: React.RefObject<HTMLButtonElement>) => {
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

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (!popoverRef.current) return
      if (!popoverRef.current.contains(event.target as Node)
        &&
        !triggerRef?.current?.contains(event.target as Node)) {
        closePopover()
      }
    }

    if (isOpened) {
      document.addEventListener('mousedown', handleClickOutside)
    } else {
      document.removeEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isOpened, popoverRef, triggerRef])

  return { popoverRef, openPopover, closePopover, togglePopover, isOpened }
}

export default usePopover
