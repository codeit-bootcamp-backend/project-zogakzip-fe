import BaseUrlSettingForm from '@libs/setting/feature-setting/BaseUrlSettingForm'
import PageLayout from '@libs/shared/layout/PageLayout'
import SectionLayout from '@libs/shared/layout/SectionLayout'

const SettingPage = () => {
  return (
    <PageLayout paddingBlock="284px 384px">
      <SectionLayout
        title="API Base URL 입력"
        headerMarginBottom='60px'
        width='600px'
        content={(<BaseUrlSettingForm />)}
      />
    </PageLayout>
  )
}

export default SettingPage
