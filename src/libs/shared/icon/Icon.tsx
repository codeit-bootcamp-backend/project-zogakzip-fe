import classNames from 'classnames/bind'
import styles from './Icon.module.scss'
import Image from 'next/image'

const cx = classNames.bind(styles)

type IconProps = {
  name: string
  width: number
  height: number
  alt: string
  rotate?: 0 | 45 | 90 | 180 | 270 | 360
  priority?: boolean
}

const Icon = ({
  name,
  width,
  height,
  alt,
  rotate = 0,
  priority = false,
  ...restProps
}: IconProps) => {
  return (
    <Image
      src={`/images/${name}.svg`}
      width={width}
      height={height}
      alt={alt}
      className={cx(
        'container',
        `rotate-${rotate}`,
      )}
      priority={priority}
      {...restProps}
    />
  )
}

export default Icon
