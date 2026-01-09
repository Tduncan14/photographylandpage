import Image from "next/image";
import ArtGallery from "./components/ArtGallery/PhotoGallery";
import Stories from "./components/GalleryStories/Stories";
import './index.css';

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

        </section>

      </main>
    </div>
  );
}
