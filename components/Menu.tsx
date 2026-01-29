'use client';

import React from 'react';
import { usePathname } from 'next/navigation';

const Menu = () => {
  const pathname = usePathname();
  
  const menuItems = [
    { href: '/', label: 'Home', ariaLabel: 'Home page' },
    { href: '/resume', label: 'Resume', ariaLabel: 'Resume page' },
    { href: '/tech-skills', label: 'Technical', ariaLabel: 'Technical skills page' },
    { href: '/sfia-skills', label: 'Management', ariaLabel: 'Management skills page' },
  ];

  return (
    <nav className="menu mt-4" aria-label="Site navigation">
      <ul role="list">
        {menuItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <li key={item.href}>
              <a 
                href={item.href} 
                aria-label={item.ariaLabel}
                className={isActive ? 'menu-active' : ''}
              >
                {item.label}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
export default Menu