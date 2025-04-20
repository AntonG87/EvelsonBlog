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
        <ul className="flex gap-[65px]">
          {navItems.map(({ label, path }) => {
            const isActive = pathname === path;           // или startsWith
            return (
              <li key={path}>
                <Link
                  href={path}
                  className={clsx(
                    'font-montserrat font-bold text-[20px] text-white transition',
                    'hover:text-indigo-800',
                    isActive &&
                    'bg-white/20  text-indigo-500 px-5 py-2 rounded-full shadow-md',
                  )}
                >
                  {label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
};
