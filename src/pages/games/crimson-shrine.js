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
                <div className="link"><a href="https://otterdisgrace.itch.io/crimson-shrine"><Fa icon={faWindows} /> Windows</a></div>
                <ImageGallery folder="crimson-shrine" />
            </header>

            <main>
                <p>For Hallowe'en 2020 I made a first-person shooter inspired by the sorely-missed <em>TimeSplitters</em> games; the stories of Robert W.Chambers, James Tiptree Jr., MR James, etc.; and <em>Halo 3</em>'s "Ghost of Lockout."</p>

                <h3>Intense Single Player Multiplayer Action</h3>
                <p><em>Crimson Shrine</em> is a "king of the hill"-type game in which players take control of a central point - the Shrine itself, surrounded by dark, narrow hallways and looked over by an ominous figure reaching from an uncanny doorway overlooking the abyss.</p>

                <h3><del>Un</del>limited Fun</h3>
                <p>The game is designed to be played over 10-15 minutes; horror outstays its welcome pretty quickly. Without spoiling anything, something different happens each time the player takes the shrine, but only up to three times. If the player takes the shrine after that, the game simply crashes.</p>
                <p>(Safely, of course.)</p>
            </main>

        </Layout>
    )
}

export default CrimsonShrine;
