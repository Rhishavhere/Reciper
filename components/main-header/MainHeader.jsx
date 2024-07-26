import Link from "next/link"
import Image from "next/image"

import logoImg from '@/assets/logo.png'
import css from './main-header.module.css'

import MainHeaderBg from "./MainHeaderBg"
import NavLink from "./NavLink";

export default function MainHeader() {
  return (<>
    <MainHeaderBg />
    <header className={css.header}>
      <Link className={css.logo} href="/">
        <Image src={logoImg} alt="A plate with food on it" priority />
        Reciper
      </Link>
      <nav className={css.nav}>
        <ul>
          <li>
            <NavLink href="/meals">Browse Meals</NavLink>
          </li>
          <li>
            <NavLink href="/community">Community</NavLink> 
          </li>
        </ul>
      </nav>
    </header>

  </>
  )
}