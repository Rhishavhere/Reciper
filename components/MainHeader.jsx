import Link from "next/link"

import logoImg from '@/assets/logo.png'
import css from './main-header.module.css'

export default function MainHeader() {
  return (<>
    <header className={css.header}>
      <Link className={css.logo} href="/">
        <img src={logoImg.src} alt="A plate with food on it" />
        Reciper
      </Link>
    </header>

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
  </>
  )
}