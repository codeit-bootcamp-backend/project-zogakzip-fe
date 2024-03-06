import { META_GROUP_CREATE } from '@app/_meta'
import SectionLayout from '@libs/shared/layout/SectionLayout'
import PageLayout from '@libs/shared/layout/PageLayout'
import GroupCreateForm from '@libs/groups/feature-groups/GroupCreateForm'

type GroupCreatePageProps = {
}

const GroupCreatePage = ({ }: GroupCreatePageProps) => {

  return (
    <PageLayout paddingBlock='66px 140px'>
      <SectionLayout
        title='그룹 만들기'
        width='400px'
        headerMarginBottom='60px'
        content={<GroupCreateForm />}
      />
    </PageLayout>
  )
}

export const metadata = META_GROUP_CREATE
export default GroupCreatePage
