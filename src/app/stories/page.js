import React from 'react'
import Stories from "../components/GalleryStories/Stories";
import './stories.css'

const StoryPage = () => {
    return (
        <div>
            <div> StoryPage</div>

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