"use client"

import React from 'react'
import Stories from "../components/GalleryStories/Stories";
import './stories.css'

const StoryPage = () => {
    return (
        <div>
            <div className="fullMoon">

                <div className="contentMoon">

                    <h3>LAST MONTH'S  FEATURED  STORY </h3>


                    <h1>HAZY FULL MOON OF APPALACHIA</h1>

                    <h4>March 2nd 2020 <span className='contentName'> by John Appleseed</span></h4>


                    <p>The dissected plateau area, while not actually made up of  geological mountains, is popularly
                        called 'mountains,' especially in eastern Kentucky and West Virginia, and while the ridges
                        are not high, the terrain is extremely rugged.
                    </p>


                    <div className="readMeStory">
                        <h2> READ THE STORY</h2>
                        <img src="/assets/shared/desktop/arrow.svg" />
                    </div>

                </div>


            </div>

            <div className="storiesStory">
                <Stories Title={'The Mountains'} text={"John Appleseed"} bg={"assets/stories/desktop/mountains.jpg"} />
                <Stories Title={'The Mountains'} text={"John Appleseed"} bg={"assets/stories/desktop/cityscapes.jpg"} />
                <Stories Title={'The Mountains'} text={"John Appleseed"} bg={"assets/stories/desktop/18-days-voyage.jpg"} />
                <Stories Title={'The Mountains'} text={"John Appleseed"} bg={"assets/stories/desktop/architecturals.jpg"} />

                {/* one row */}

                <Stories Title={'The Mountains'} text={"John Appleseed"} bg={"assets/stories/desktop/world-tour.jpg"} />
                <Stories Title={'The Mountains'} text={"John Appleseed"} bg={"assets/stories/desktop/unforeseen-corners.jpg"} />
                <Stories Title={'The Mountains'} text={"John Appleseed"} bg={"assets/stories/desktop/king-on-africa.jpg"} />
                <Stories Title={'The Mountains'} text={"John Appleseed"} bg={"assets/stories/desktop/trip-to-nowhere.jpg"} />

                {/* second row */}



                <Stories Title={'The Mountains'} text={"John Appleseed"} bg={"assets/stories/desktop/rage-of-the-sea.jpg"} />
                <Stories Title={'The Mountains'} text={"John Appleseed"} bg={"assets/stories/desktop/running-free.jpg"} />
                <Stories Title={'The Mountains'} text={"John Appleseed"} bg={"assets/stories/desktop/behind-the-waves.jpg"} />
                <Stories Title={'The Mountains'} text={"John Appleseed"} bg={"assets/stories/desktop/calm-waters.jpg"} />

                {/* three row */}



                <Stories Title={'The Mountains'} text={"John Appleseed"} bg={"assets/stories/desktop/milky-way.jpg"} />
                <Stories Title={'The Mountains'} text={"John Appleseed"} bg={"assets/stories/desktop/dark-forest.jpg"} />
                <Stories Title={'The Mountains'} text={"John Appleseed"} bg={"assets/stories/desktop/somwarpet.jpg"} />
                <Stories Title={'The Mountains'} text={"John Appleseed"} bg={"assets/stories/desktop/land-of-dreams.jpg"} />

                {/* fourth row */}






            </div>
        </div>
    )
}

export default StoryPage