'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';          // по желанию

interface Props {
  className?: string;
}

const navItems = [
  { label: 'About',   path: '/about' },
  { label: 'Home',    path: '/' },
  { label: 'Contact', path: '/contact' },
] as const;

export const NavHeader: React.FC<Props> = ({ className }) => {
  const pathname = usePathname();

  return (
    <div
      className={clsx(
        ' h-[85px] flex items-center justify-center',
        className,
      )}
    >
      <nav>
        <ul className="flex gap-[40px]">
          {navItems.map(({ label, path },index) => {
            const isActive = pathname === path;           // или startsWith
            return (
              <div key={index} className={'w-[124px] text-center'}>
              <li  className={'w-full text-[20px]'}>
                <Link
                  href={path}
                  className={clsx(
                    'font-montserrat font-bold  text-white transition',
                    'hover:text-indigo-800',
                    isActive &&
                    'bg-white/20  text-indigo-500 px-5 py-2 rounded-full shadow-md',
                  )}
                >
                  {label}
                </Link>
              </li>
              </div>
            );
          })}
        </ul>
      </nav>
    </div>
  );
};
