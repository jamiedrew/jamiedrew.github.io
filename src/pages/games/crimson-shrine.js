import React from "react";
import Layout from "../../components/Layout";
import ImageGallery from "../../components/ImageGallery";
import { FontAwesomeIcon as Fa} from '@fortawesome/react-fontawesome'
import { faWindows } from "@fortawesome/free-brands-svg-icons";

const CrimsonShrine = () => {
    return (
        <Layout>

            <header>
                <h2>Crimson Shrine</h2>
                <span className="link"><a href="https://otterdisgrace.itch.io/crimson-shrine"><Fa icon={faWindows} /> Windows</a></span>
            </header>

            <main>
                <p>For Hallowe'en 2020 I made a first-person shooter inspired by the sorely-missed <em>TimeSplitters</em> games; the stories of Robert W.Chambers, James Tiptree Jr., Algernon Blackwood; and <em>Halo 3</em>'s "Ghost of Lockout."</p>

                <p>So: <em>Crimson Shrine</em> is ostensibly a remake of a multiplayer shooter my brother and I used to play, except <em>Crimson Shrine</em> didn't and doesn't exist, the developer appears to be working from half-remembered dreams, and new bugs keep working themselves into the code.</p>

                <p>In practice, this is a single map of a multiplayer first-person shooter you can only play alone... <em>for a while</em>.</p>
            </main>

            <ImageGallery folder="crimson-shrine" />

        </Layout>
    )
}

export default CrimsonShrine;
