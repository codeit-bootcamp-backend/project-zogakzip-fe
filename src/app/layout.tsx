import '@styles/css/vars.css'
import '@styles/base.scss'
import SpoqaHanSansNeo from 'public/fonts/localfonts'
import { META_ROOT } from './_meta'
import Providers from '@services/Providers'

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="ko">
      <body className={SpoqaHanSansNeo.className}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}

export const metadata = META_ROOT
export default RootLayout
