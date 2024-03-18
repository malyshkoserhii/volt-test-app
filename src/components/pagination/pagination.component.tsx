import * as React from 'react';
import ReactPaginate from 'react-paginate';
import { useMediaQuery } from 'react-responsive';

import { container, paginationWrapper } from './pagination.styles';

type PaginationProps = {
  onPageChange: (selectedItem: { selected: number }) => void;
  totalPages: number;
  forcePage: number;
};

export const Pagination: React.FunctionComponent<PaginationProps> = ({
  onPageChange,
  totalPages,
  forcePage,
}) => {
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
    if (smallMobile) {
      return 1;
    }

    if (largeMobile) {
      return 2;
    }

    if (tablet) {
      return 3;
    }

    if (desktop) {
      return 6;
    }
  }, [smallMobile, largeMobile, tablet, desktop]);

  return totalPages > 1 ? (
    <div className={paginationWrapper}>
      <ReactPaginate
        className={container}
        breakLabel="..."
        nextLabel=">"
        onPageChange={onPageChange}
        pageRangeDisplayed={1}
        pageCount={totalPages}
        previousLabel="<"
        renderOnZeroPageCount={null}
        forcePage={forcePage}
        marginPagesDisplayed={marginPagesDisplayed}
      />
    </div>
  ) : null;
};
