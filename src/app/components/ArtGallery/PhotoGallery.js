import React from 'react'
import Image from 'next/image'
import './artGallery.css'

const ArtGallery = () => {
    return (
        <>
            <div className="artOne">
                <div className="gallery">
                    <img src="/assets/home/desktop/create-and-share.jpg"
                        alt='this a photographer'
                        className="photo" />

                </div>



                <div className="GalleryText textOne">

                    <div className="borderMe">

                        <h1>  Create and share your photo Stories </h1>


                        <p> Photosnap is a platform for photographers and visual </p>
                        <p> storytellers. We make it easy to share photos, tell </p>
                        <p>  stories and connect with others.</p>


                        <div className="anInvite">
                            <h2>GET AN INVITE</h2>

                            <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-arrow-narrow-right"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M5 12l14 0" /><path d="M15 16l4 -4" /><path d="M15 8l4 4" /></svg>
                        </div>

                    </div>


                </div >
            </div >



            <div className="artTwo">
                <div className="gallery">
                    <img src="/assets/home/desktop/beautiful-stories.jpg"
                        alt='this a photographer'
                        className="photo" />
                </div>

                <div className="GalleryText textTwo textThree">



                    <h1>  Beautiful <br />stories  <br /> every time </h1>


                    <p> We provide design templates to ensure your stories </p>
                    <p> look terrific.Easily add photos,text,embed maps and </p>
                    <p> media from other networks. Then share your story with everyone</p>


                    <div className="reverseME">
                        <h2>VIEW THE STORIES</h2>

                        <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-arrow-narrow-right"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M5 12l14 0" /><path d="M15 16l4 -4" /><path d="M15 8l4 4" /></svg>
                    </div>



                </div>
            </div>


            <div className="artThree">
                <div className="gallery">
                    <img src="/assets/home/desktop/designed-for-everyone.jpg"
                        alt='this a photographer'
                        className="photo" />
                </div>

                <div className="GalleryText textTwo">



                    <h1>  Create and share your photo Stories </h1>


                    <p> Photosnap is a platform for photographers and visual </p>
                    <p> storytellers. We make it easy to share photos, tell </p>
                    <p>  stories and connect with others.</p>


                    <div className="anInvite">
                        <h2>GET AN INVITE</h2>

                        <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-arrow-narrow-right"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M5 12l14 0" /><path d="M15 16l4 -4" /><path d="M15 8l4 4" /></svg>
                    </div>



                </div>
            </div>



        </>
    )
}

export default ArtGallery
