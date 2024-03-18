import * as React from 'react';
import { useMediaQuery } from 'react-responsive';
import {
  MarginPagesDisplayed,
  MarginPagesDisplayedRes,
} from '../types/common.type';

export const usePaginationOptions = () => {
  const smallMobile = useMediaQuery({
    query: '(max-width: 420px)',
  });

  const largeMobile = useMediaQuery({
    query: '(max-width: 767px)',
  });

  const tablet = useMediaQuery({
    query: '(max-width: 1023px)',
  });

  const desktop = useMediaQuery({
    query: '(min-width: 1024px)',
  });

  const marginPagesDisplayed = React.useMemo(() => {
    const resolutionMap: Array<MarginPagesDisplayedRes> = [
      {
        type: 'smallMobile',
        result: smallMobile,
      },
      {
        type: 'largeMobile',
        result: largeMobile,
      },
      {
        type: 'tablet',
        result: tablet,
      },
      {
        type: 'desktop',
        result: desktop,
      },
    ];

    const marginPages: MarginPagesDisplayed = {
      smallMobile: 1,
      largeMobile: 2,
      tablet: 3,
      desktop: 4,
    };

    const result =
      resolutionMap?.find((resolution) => resolution?.result) ??
      resolutionMap[0];

    return marginPages[result?.type];
  }, [smallMobile, largeMobile, tablet, desktop]);

  return {
    marginPagesDisplayed,
  };
};
