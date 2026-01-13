"use client"

import React from 'react'
import Link from 'next/link'
import './Footer.css'

const Footer = () => {
    return (
        <div className="Footer">
            <div className="leftFootWrapper">
                <div className="leftFooter">
                    <div className="leftLeft">
                        <div className="Logo LogoFooter">
                            <div className="triangle-logo"></div>
                            <h1>PHOTOSNAP</h1>
                        </div>


                        <div className="socialIcons">

                            <a href="www.facebook.com"><img src="/assets/shared/desktop/facebook.svg" /></a>
                            <a href="www.facebook.com"><img src="/assets/shared/desktop/youtube.svg" /></a>
                            <a href="www.facebook.com"><img src="/assets/shared/desktop/twitter.svg" /></a>
                            <a href="www.facebook.com"><img src="/assets/shared/desktop/pinterest.svg" /></a>
                            <a href="www.facebook.com"><img src="/assets/shared/desktop/instagram.svg" /></a>

                        </div>

                    </div>

                    <div className="leftRight">
                        <ul>
                            <li>HOME</li>
                            <li>STORIES</li>
                            <li>FEATURES</li>
                            <li>PRICING</li>
                        </ul>

                    </div>

                </div>
            </div>


            <div className="rightFooter">

                <div className="arrowMEe">
                    <h3>GET AN INVITE</h3>

                    <img src="/assets/shared/desktop/arrow.svg" />
                </div>



                <div className="copyright">
                    <h3>Copyright 2019. All Rights Reserved</h3>
                </div>


            </div>
        </div>
    )
}

export default Footer
