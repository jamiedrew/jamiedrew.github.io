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
                <p>Somebody found something out in the desert. Something vast and strange. Something invaluable.</p>

                <h3>Greed will weigh you down</h3>
                <p>A puzzle platformer about jumping around and collecting treasure. Each treasure adds a little weight, though, so you can't jump quite so high, and the world might not react like you expect.</p>

                <h3>The prototype</h3>
                <p>The original version of Treasure Hunter was made over a weekend for the 75th <a href="https://minijamofficial.com/">Mini Jam</a> and the reaction was so overwhelmingly positive I put my then-current project on hold to make a full version of it.</p>

                <p>That version has been described as 1) "anticapitalist Mario" and 2) "fucking impossible."</p>

                <p>It is my favourite feedback I've ever received.</p>
            </main>
        </Layout>
    )
}

export default TreasureHunter;
