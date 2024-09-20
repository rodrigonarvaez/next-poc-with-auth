'use client'

import { clsx } from 'clsx'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { signOutAction } from '../actions'

export interface MenuOption {
  label: string
  href: string
}
const baseUrl = '/dashboard'

const menuOptions = [
  {
    label: 'Home',
    href: baseUrl,
  },
  {
    label: 'Settings',
    href: `${baseUrl}/settings`,
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
        <li>
          <form action={signOutAction}>
            <button className="border-primary-dark text-primary-dark hover:bg-primary-dark border-2 px-2 hover:text-white">
              Sign Out
            </button>
          </form>
        </li>
      </ul>
    </nav>
  )
}
