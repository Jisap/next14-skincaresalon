import Link from "next/link"
import { useContext } from "react"
import { CursorContext } from "./CursorContext"
import { usePathname } from "next/navigation"


const links = [
  {
    href: '/',
    name: 'Home',
  },
  {
    href: '/about',
    name: 'About',
  },
  {
    href: '/treatments',
    name: 'Treatments',
  },
  {
    href: '/contact',
    name: 'Contact',
  },
]

const Nav = () => {
  return (
    <div>
      <div className="container mx-auto flex gap-8">
        {links.map((link, index) => {
          return (
            <Link href={link.href} key={index}>
              {link.name}
            </Link>
          )
        })}
      </div>
    </div>
  )
}

export default Nav