import {Link} from 'gatsby'
import React from 'react'
import Icon from './icon'
import logo from './images/header/tensure-logo-header.svg'
import {cn} from '../lib/helpers'

import styles from './header.module.css'

const Header = ({onHideNav, onShowNav, showNav}) => (
  <div className={styles.root}>
    <div className={styles.wrapper}>
      <div className={styles.branding}>
        <Link to='/'><img src={logo} alt="Logo" /></Link>
      </div>

      <button className={styles.toggleNavButton} onClick={showNav ? onHideNav : onShowNav}>
        <Icon symbol='hamburger' />
      </button>

      <nav className={cn(styles.nav, showNav && styles.showNav)}>
        <ul>
          <li>
            <Link to='/what-we-do/'>what we do</Link>
          </li>
          <li>
            <Link to='/who-we-are/'>who we are</Link>
          </li>
          <li>
            <Link to='/apprenticeships/'>apprenticeships</Link>
          </li>
          <li>
            <Link to='/insights/'>insights</Link>
          </li>
          <li>
            <Link to='/contact/'>contact</Link>
          </li>
        </ul>
      </nav>
    </div>
  </div>
)

export default Header
