"use client"

import React from 'react'
import './Header.css'
import Link from 'next/link'
import { usePathname } from "next/navigation";

const Header = () => {
  const pathname = usePathname();

  return (
    <div className="header">

      <div className="Logo">
        <Link href="/">
          <div className="triangle-logo"></div>
          <h1>PHOTOSNAP</h1>
        </Link>
      </div>

      <nav className="nav">
        <Link
          href="/stories"
          className={`nav-link ${pathname === "/stories" ? "active" : ""}`}
        >
          Stories
        </Link>

        <Link
          href="/features"
          className={`nav-link ${pathname === "/features" ? "active" : ""}`}
        >
          Feature
        </Link>

        <Link
          href="/pricing"
          className={`nav-link ${pathname === "/pricing" ? "active" : ""}`}
        >
          Pricing
        </Link>
      </nav>

      <div className="button">
        <button className="inviteButton">GET AN INVITE</button>
      </div>

    </div>
  )
}

export default Header
