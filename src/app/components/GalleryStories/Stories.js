import React from 'react'
import './Stories.css'

const Stories = ({ Title, text, bg }) => {
    return (
        <div className="stor" style={{
            backgroundImage: `url(${bg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",


        }}>

            <div className="titlePara">
                <h1>{Title}</h1>

                <h3>by {text}</h3>


                <hr />

                <div className="readStory">
                    <h3>READ STORY</h3>

                    <img className='svgArrow' src="./assets/shared/desktop/arrow.svg" />

                </div>



            </div>



        </div>
    )
}

export default Stories
