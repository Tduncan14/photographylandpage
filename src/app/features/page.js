import React from 'react'
import './feature.css'
import Iconsgallery from '../components/iconsGallery/Iconsgallery'
import FooterHero from '../components/FooterHero/FooterHero'

const page = () => {
    return (
        <div className="featureF">

            <div className="FeaturesContent">

                <div className="borderFeature ">

                    <div className="FeatureFeature borderMee">

                        <h1>FEATURES</h1>


                        <p> We make sure all of our features are designed to be loved
                            by every aspiring and even professional photographers who
                            wanted to share their stories
                        </p>

                    </div>


                    <div className="FeatureImage">
                        <img src="/assets/features/desktop/hero.jpg" />
                    </div>

                </div>
            </div>

            <div className="FeaturesGallery">

                <Iconsgallery icon={"assets/features/desktop/responsive.svg"} title={"100% Responsive"} para={"No matter which the device you're on, our site is fully responsive and stories look beautiful on any screen"} />
                <Iconsgallery icon={"assets/features/desktop/no-limit.svg"} title={"No Photo Upload Limit"} para={"Our tool has no limits on uploads or bandwidth. Freely upload in bulk and share all of your stories in one go"} />
                <Iconsgallery icon={"assets/features/desktop/embed.svg"} title={"Available to Embed"} para={"Embed Tweets, Facebook posts, instagram media, Vimeo or Youtube videos, Google Maps, and more"} />

                {/*  secondTwo*/}

                <Iconsgallery icon={"assets/features/desktop/custom-domain.svg"} title={"Custom Domain"} para={"With Photosnap subscriptions you can host your stories on your wn domain. You can also remove our branding"} />
                <Iconsgallery icon={"assets/features/desktop/boost-exposure.svg"} title={"Boost Your Exposure"} para={"Users that viewed your story or gallery can easily get notified of new and featured stories with our built in mailing list "} />
                <Iconsgallery icon={"assets/features/desktop/drag-drop.svg"} title={"Drag & Drop Image"} para={"Easily drag and drop your image and get beautiful shots everytime. No over the top tooling to add friction to creating stories"} />


            </div>




            <FooterHero />

        </div>
    )
}

export default page
