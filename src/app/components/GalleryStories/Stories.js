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

                    <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-arrow-narrow-right"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M5 12l14 0" /><path d="M15 16l4 -4" /><path d="M15 8l4 4" /></svg>
                </div>



            </div>



        </div>
    )
}

export default Stories
