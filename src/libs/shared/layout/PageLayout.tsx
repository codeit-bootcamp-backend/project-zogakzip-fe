import classNames from 'classnames/bind'
import styles from './PageLayout.module.scss'

const cx = classNames.bind(styles)

type PageLayoutProps = {
  children: React.ReactNode
  paddingBlock: string
}

const PageLayout = ({ children, paddingBlock }: PageLayoutProps) => {
  return (
    <main className={cx('container')} style={{ paddingBlock }}>
      {children}
    </main>
  )
}

export default PageLayout
