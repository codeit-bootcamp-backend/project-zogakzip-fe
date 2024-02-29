'use client'

import classNames from 'classnames/bind'
import styles from './DiffDay.module.scss'
import { useEffect, useState } from 'react'

const cx = classNames.bind(styles)

type DiffDayProps = {
  createdAt: string
}

const DiffDay = ({ createdAt }: DiffDayProps) => {
  const [isCalculated, setIsCalculated] = useState(false)
  const [diffInDays, setDiffInDays] = useState(0)

  useEffect(() => {
    const diffInMs = new Date().getTime() - new Date(createdAt).getTime()
    setDiffInDays(Math.floor(diffInMs / (1000 * 60 * 60 * 24)))
    setIsCalculated(true)
  }, [createdAt])

  return (
    <div className={cx('day')}>{`D+${isCalculated ? diffInDays : ''}`}</div>
  )
}

export default DiffDay
