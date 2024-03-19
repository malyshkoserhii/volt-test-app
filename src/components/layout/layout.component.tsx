import * as React from 'react'

import { childrenWrapper, container } from './layout.styles'
import { Header } from '../header'
import { Footer } from '../footer'

type LayoutProps = {
  children: React.ReactNode
}

export const Layout: React.FunctionComponent<LayoutProps> = ({ children }) => {
  return (
    <div className={container}>
      <Header />
      <div className={childrenWrapper}>{children}</div>
      <Footer />
    </div>
  )
}
