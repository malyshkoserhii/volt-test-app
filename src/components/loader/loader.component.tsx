import * as React from 'react'

import { loaderWrapper } from './loader.styles'
import { Bars } from 'react-loader-spinner'
import { COLORS } from '../../themes'

export const Loader = ():React.ReactNode => {
  return (
    <Bars
      height="50"
      width="50"
      color={COLORS.cyan}
      ariaLabel="bars-loading"
      wrapperClass={loaderWrapper}
      visible={true}
    />
  )
}
