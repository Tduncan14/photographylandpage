"use client"

import { useState } from 'react'
import './Pricing.css'
import FooterHero from '../components/FooterHero/FooterHero';



const page = () => {

    const [isYearly, setIsYearly] = useState(false);


    return (
        <div className="bigPrice">

            <div className="PricingContent">

                <div className="borderFeature ">

                    <div className="PricingPricing  borderMee">

                        <h1>PRICING</h1>


                        <p> Create a your stories. Photosnap is a platform  for photographers
                            and visual storytellers. It's the simple way to create and share your photos.
                        </p>




                    </div>


                    <div className="PriceImage">
                        <img src="assets/pricing/desktop/Hero.jpg" />
                    </div>

                </div>
            </div>

            {/* monthly side */}

            <div className="payments">



                <div className="yearMEE">

                    <div className="toggle-container">
                        <span className={`label ${!isYearly ? "active" : ""}`}>
                            Monthly
                        </span>

                        <div
                            className={`toggle ${isYearly ? "active" : ""}`}
                            onClick={() => setIsYearly(!isYearly)}
                        >
                            <div className="toggle-circle" />
                        </div>

                        <span className={`label ${isYearly ? "active" : ""}`}>
                            Yearly
                        </span>
                    </div>

                    {/* Basic */}

                    <div className="yearly">

                        <div className="Monthlyp">

                            <h2>Basic</h2>


                            <p>Includes basic usage of our platform.
                                Recommended for new and aspiring photographers
                            </p>

                            {isYearly !== true ? (<div className="Price">
                                <h1>$19.00</h1>
                                <h5>per month</h5>
                            </div>)
                                : (<div className="Price">
                                    <h1>$190.00</h1>
                                    <h5>per year</h5>
                                </div>)}





                            <button> PICK PLAN</button>


                        </div>

                        {/* Pro */}

                        <div className="Monthlyp">

                            <h2>Pro</h2>


                            <p>More advanced features available.
                                Recommended for photography veterans and professionals.
                            </p>

                            {isYearly !== true ? (<div className="Price">
                                <h1>$39.00</h1>
                                <h5>per month</h5>
                            </div>)
                                : (<div className="Price">
                                    <h1>$390.00</h1>
                                    <h5>per year</h5>
                                </div>)}





                            <button> PICK PLAN</button>


                        </div>



                        {/* Business */}

                        <div className="Monthlyp">

                            <h2>Business</h2>


                            <p>
                                Additional features available such as more detailed metrics. Recommended for
                                business owners
                            </p>

                            {isYearly !== true ? (<div className="Price">
                                <h1>$99.00</h1>
                                <h5>per month</h5>
                            </div>)
                                : (<div className="Price">
                                    <h1>$990.00</h1>
                                    <h5>per year</h5>
                                </div>)}





                            <button> PICK PLAN</button>


                        </div>

                    </div>


                </div>




            </div>



            <div className="tablePrice">

                <h1>COMPARE</h1>

                <table class="pricing-table">
                    <thead>
                        <tr>
                            <th>Feature Name</th>
                            <th>Basic</th>
                            <th>Pro</th>
                            <th>Business</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td>UNLIMITED STORY POSTING</td>
                            <td class="check">✔</td>
                            <td class="check">✔</td>
                            <td class="check">✔</td>
                        </tr>

                        <tr>
                            <td>UNLIMITED PHOTO UPLOAD</td>
                            <td class="check">✔</td>
                            <td class="check">✔</td>
                            <td class="check">✔</td>
                        </tr>

                        <tr>
                            <td>EMBEDDING CUSTOM CONTENT</td>
                            <td></td>
                            <td class="check">✔</td>
                            <td class="check">✔</td>
                        </tr>

                        <tr>
                            <td>CUSTOMIZE METADATA</td>
                            <td></td>
                            <td class="check">✔</td>
                            <td class="check">✔</td>
                        </tr>

                        <tr>
                            <td>ADVANCED METRICS</td>
                            <td></td>
                            <td class="check"></td>
                            <td class="check">✔</td>
                        </tr>

                        <tr>
                            <td>PHOTO DOWNLOADS</td>
                            <td></td>
                            <td></td>
                            <td class="check">✔</td>
                        </tr>

                        <tr>
                            <td>SEARCH ENGINE INDEXING</td>
                            <td></td>
                            <td></td>
                            <td class="check">✔</td>
                        </tr>

                        <tr>
                            <td>CUSTOM ANALYTICS</td>
                            <td></td>
                            <td class="check"></td>
                            <td class="check">✔</td>
                        </tr>
                    </tbody>
                </table>

            </div>


            <FooterHero />

        </div>
    )
}

export default page
