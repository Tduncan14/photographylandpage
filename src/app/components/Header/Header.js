import React from 'react'
import './Header.css'
import Link from 'next/link'


const Header = () => {
  return (
    <div className="header">

      <div className="Logo">
        <div className="triangle-logo"></div>
        <h1>PHOTOSNAP</h1>
      </div>


      <nav className="nav">

        <Link href="/">Home</Link>


        <Link href="/features">Feature</Link>

        <Link href="/Pricing"> Pricing </Link>


      </nav>


      <div className="button">

        <button className="inviteButton"> GET AN INVITE </button>

      </div>

    </div>
  )
}

export default Header
