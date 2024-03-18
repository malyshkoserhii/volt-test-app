import { Bars } from 'react-loader-spinner';
import { COLORS } from '../../themes';

import { loaderWrapper } from './loader.styles';

export const Loader = () => {
  return (
    <Bars
      height="50"
      width="50"
      color={COLORS.cyan}
      ariaLabel="bars-loading"
      wrapperClass={loaderWrapper}
      visible={true}
    />
  );
};
