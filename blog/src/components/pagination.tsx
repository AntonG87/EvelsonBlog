'use client';

import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import clsx from 'clsx';

interface Props {
  className?: string;
  totalPages: number;
}

export const PaginationComponent: React.FC<Props> = ({ className, totalPages }) => {
  const searchParams = useSearchParams();
  const currentPage = parseInt(searchParams.get('page') || '1', 10);

  const createPageLink = (page: number) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set('page', page.toString());
    return `/?${params.toString()}`;
  };

  return (
    <div className={className}>
      <div className="flex items-center justify-center max-sm:text-[15px]">

        {/* Previous button */}
        <Link
          href={currentPage > 1 ? createPageLink(currentPage - 1) : createPageLink(currentPage)}
          scroll={false}
          className={clsx(
            "px-3 py-1 rounded-md",
            currentPage <= 1 && "pointer-events-none opacity-50"
          )}
        >
          Previous
        </Link>

        {/* Страницы */}
        {Array.from({ length: totalPages }, (_, i) => {
          const page = i + 1;
          return (
            <Link
              key={page}
              href={createPageLink(page)}
              scroll={false}
              className={clsx(
                "px-3 py-1 rounded-md",
                currentPage === page ? "bg-white text-black font-semibold shadow" : "hover:bg-gray-200"
              )}
            >
              {page}
            </Link>
          );
        })}

        {/* Next button */}
        <Link
          href={currentPage < totalPages ? createPageLink(currentPage + 1) : createPageLink(currentPage)}
          scroll={false}
          className={clsx(
            "px-3 py-1 rounded-md",
            currentPage >= totalPages && "pointer-events-none opacity-50"
          )}
        >
          Next
        </Link>

      </div>
    </div>
  );
};
