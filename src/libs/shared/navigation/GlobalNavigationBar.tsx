import classNames from 'classnames/bind'
import styles from './GlobalNavigationBar.module.scss'
import Link from 'next/link'
import Icon from '../icon/Icon'
import GroupCreationButton from './GroupCreationButton'

const cx = classNames.bind(styles)

type GlobalNavigationBarProps = {

}

const GlobalNavigationBar = ({ }: GlobalNavigationBarProps) => {
  return (
    <nav className={cx('container')}>
      <Link href='/groups' className={cx('logoWrapper')}>
        <Icon name='logo' width={137} height={48} alt='로고' priority={true} />
      </Link>
      <div className={cx('buttonWrapper')}>
        <GroupCreationButton />
      </div>
    </nav>
  )
}

export default GlobalNavigationBar
