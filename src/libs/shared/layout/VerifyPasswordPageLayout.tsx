import classNames from 'classnames/bind'
import styles from './VerifyPasswordPageLayout.module.scss'
import PageLayout from './PageLayout'
import SectionLayout from './SectionLayout'

const cx = classNames.bind(styles)

type VerifyPasswordPageLayoutProps = {
  title: string
  description: string
  formContent: React.ReactNode
}

const VerifyPasswordPageLayout = ({ title, description, formContent }: VerifyPasswordPageLayoutProps) => {
  return (
    <PageLayout paddingBlock='284px 384px'>
      <SectionLayout
        title={title}
        headerMarginBottom='20px'
        width='400px'
        content={(
          <>
            <h2 className={cx('description')}>
              {description}
            </h2>
            <div className={cx('formWrapper')}>
              {formContent}
            </div>
          </>
        )}
      />
    </PageLayout>
  )
}

export default VerifyPasswordPageLayout
