import Link from "next/link"
import Image from "next/image"

import logoImg from '@/assets/logo.png'
import css from './main-header.module.css'

import MainHeaderBg from "./MainHeaderBg"

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
            <Link href="/meals">Browse Meals</Link>
          </li>
          <li>
            <Link href="/community">Reciper Community</Link>
          </li>
        </ul>
      </nav>
    </header>

  </>
  )
}