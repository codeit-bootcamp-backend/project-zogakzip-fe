'use client'

import classNames from 'classnames/bind'
import styles from './BadgeCarousel.module.scss'
import Badge from '@libs/shared/badge/Badge'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import { RefObject, useCallback, useEffect, useRef, useState } from 'react'
import Icon from '@libs/shared/icon/Icon'

const cx = classNames.bind(styles)

type BadgeCarouselProps = {
  badges: string[]
}

const BadgeCarousel = ({ badges }: BadgeCarouselProps) => {
  const sliderRef: RefObject<Slider> = useRef(null)
  const [disablePrev, setDisablePrev] = useState(true)
  const [disableNext, setDisableNext] = useState(false)
  const previous = useCallback(() => sliderRef?.current?.slickPrev(), [])
  const next = useCallback(() => sliderRef?.current?.slickNext(), [])

  const checkIsDisableNext = () => {
    if (sliderRef?.current?.innerSlider?.list?.querySelectorAll('.slick-slide')) {
      const sliderRect = sliderRef.current.innerSlider.list.getBoundingClientRect()

      const slides = sliderRef.current.innerSlider.list.querySelectorAll('.slick-slide')
      const lastSlideRect = slides[slides.length - 1].getBoundingClientRect()

      const isLastSlideVisible = lastSlideRect.right <= sliderRect.right
      return isLastSlideVisible
    }
    return true
  }

  const settings = {
    className: 'slider variable-width',
    variableWidth: true,
    infinite: false,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    afterChange: (currnet: number) => {
      setDisablePrev(currnet === 0)
      setDisableNext(checkIsDisableNext())
    },
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setDisableNext(checkIsDisableNext())
    }, 0)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className={cx('container', { disablePrev, disableNext })}>
      <button onClick={previous} className={cx('arrow', 'prev', { disablePrev })} disabled={disablePrev}>
        <Icon name='toggle-arrow' rotate={90} width={8} height={4} alt='이전 캐러셀 화살표' />
      </button>
      <button onClick={next} className={cx('arrow', 'next', { disableNext })} disabled={disableNext}>
        <Icon name='toggle-arrow' rotate={270} width={8} height={4} alt='다음 캐러셀 화살표' />
      </button>
      <Slider  {...settings} ref={sliderRef}>
        {badges.map((badge, idx) => (
          <Badge key={idx} text={badge} />
        ))}
      </Slider>
    </div>
  )
}

export default BadgeCarousel
