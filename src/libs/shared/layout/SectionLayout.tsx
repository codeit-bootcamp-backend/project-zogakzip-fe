import classNames from 'classnames/bind'
import styles from './SectionLayout.module.scss'

const cx = classNames.bind(styles)

type SectionLayoutProps = {
  title: string
  content: React.ReactNode
  headerButton?: React.ReactNode
  width?: string
  headerMarginBottom?: string
}

const SectionLayout = ({ title, content, headerButton, width = '100%', headerMarginBottom = '60px' }: SectionLayoutProps) => {
  return (
    <div className={cx('container')} style={{ width }}>
      <div className={cx('header')} style={{ marginBottom: headerMarginBottom }}>
        <h1 className={cx('title')}>{title}</h1>
        {headerButton && (
          <div className={cx('buttonWrapper')}>
            {headerButton}
          </div>
        )}
      </div>
      {content}
    </div>
  )
}

export default SectionLayout
