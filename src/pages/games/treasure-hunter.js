import React from "react";
import Layout from "../../components/Layout";
import { FontAwesomeIcon as Fa} from '@fortawesome/react-fontawesome'
import { faHtml5 } from "@fortawesome/free-brands-svg-icons";

const TreasureHunter = () => {
    return (
        <Layout>
            <header>
                <h2>Treasure Hunter</h2>
                <span className="link"><a href="https://otterdisgrace.itch.io/treasure-hunter"><Fa icon={faHtml5} /> [PROTOTYPE] play in browser</a></span>
            </header>

            <main>
                <p>A 2D platforming game where every collectable adds a little weight.</p>

                <p>The prototype has been described as 1) "anticapitalist Mario" and 2) "fucking impossible."</p>

                <p>The original version of Treasure Hunter was made over a weekend for the 75th <a href="https://minijamofficial.com/">Mini Jam</a> and the reaction was so overwhelmingly positive I put my then-current project on hold to make a full version of it.</p>
            </main>
        </Layout>
    )
}

export default TreasureHunter;
