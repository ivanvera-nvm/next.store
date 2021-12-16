import Link from 'next/link'
import React from 'react'

import Logo from 'src/components/ui/Logo'

const links = [
  {
    href: '/apparel-and-accesories',
    name: 'Apparel',
  },
  {
    href: '/office',
    name: 'Office',
  },
]

function Navlinks() {
  return (
    <nav className="flex items-center justify-around min-h-[48px] w-full sm:w-fit">
      <Link href="/">
        <a className="m-1">
          <Logo />
        </a>
      </Link>
      {links.map((x) => (
        <Link key={x.href} href={x.href}>
          <a className="m-1">{x.name}</a>
        </Link>
      ))}
    </nav>
  )
}

export default Navlinks
