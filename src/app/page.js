import Image from "next/image";
import ArtGallery from "./components/ArtGallery/PhotoGallery";
import Stories from "./components/GalleryStories/Stories";
import './index.css';
import Iconsgallery from "./components/iconsGallery/Iconsgallery";

export default function Home() {
  return (
    <div className="flex min-h-screen  bg-zinc-50 font-sans dark:bg-black">
      <main>
        <section className="photoStories">

          <ArtGallery />



        </section>

        <section className="secondStories">
          <div className="story">
            <Stories Title={'The Mountains'} text={"John Appleseed"} bg={"assets/stories/desktop/mountains.jpg"} />
            <Stories Title={'Sunset Cityscapes'} text={"Benjamin Cruz"} bg={"assets/stories/desktop/cityscapes.jpg"} />
            <Stories Title={'18 Days Voyage'} text={"Alexei Borodin"} bg={"assets/stories/desktop/18-days-voyage.jpg"} />
            <Stories Title={"Architecturals"} text={"Samanatha Brooke"} bg={"assets/stories/desktop/architecturals.jpg"} />
          </div>


          <div className="iconsSection
          ">
            <Iconsgallery icon={"/assets/features/desktop/responsive.svg"} title={"100% Responsive"} para={"No matter which the device you're on, our site is fully responsive and stories look beautiful on any screen."} />
            <Iconsgallery icon={"/assets/features/desktop/no-limit.svg"} title={"No Photo Upload Limit"} para={"Our tool has no limits on uploads or bandwidth. Freely upload in bulk and share all of your stories in one go"} />
            <Iconsgallery icon={"/assets/features/desktop/embed.svg"} title={"Available to Embed"} para={" Embed Tweets, Facebook posts, Instagram media, Vimeo or Youtube videos, Google Maps, and more."} />

          </div>

        </section>

      </main>
    </div>
  );
}
