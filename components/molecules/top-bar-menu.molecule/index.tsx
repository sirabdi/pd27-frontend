import React from 'react';
import Link from 'next/link';
import useDialog from '@/hooks/general/useDialog';

interface Props {
  authDialog: ReturnType<typeof useDialog>;
}

const authorizedMenuItems = [
  { label: 'News', href: '/news' },
  { label: 'Notice', href: '/notice' },
  { label: 'Contact', href: '/contact' },
  { label: 'Profile', href: '/profile' },
];

const unauthorizedMenuItems = [
  { label: 'Login', href: '#' },
  { label: 'Sign Up', href: '#' },
];

const TopBarMenu = ({ authDialog }: Props) => {
  return (
    <nav className='global-menu'>
      <ul>
        {unauthorizedMenuItems.map((item, index) => (
          <li key={index}>
            <Link
              href={item.href}
              className='global-menu-link'
              onClick={() => authDialog.open()}
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default TopBarMenu;
