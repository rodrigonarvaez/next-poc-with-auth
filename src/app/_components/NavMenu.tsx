'use client'

import { clsx } from 'clsx'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export interface MenuOption {
  label: string
  href: string
}

const menuOptions = [
  {
    label: 'Home',
    href: '/',
  },
  {
    label: 'Sign In',
    href: '/sign-in',
  },
]

export default function NavMenu() {
  const pathname = usePathname()
  return (
    <nav>
      <ul className="flex items-baseline gap-2">
        {menuOptions.map((option, index) => (
          <Link
            key={`menu-option-${index}`}
            href={option.href}
            className={clsx(
              {
                'text-primary text-lg font-bold': pathname === option.href,
              },
              'text-primary-light',
            )}
          >
            <li>{option.label}</li>
          </Link>
        ))}
      </ul>
    </nav>
  )
}
