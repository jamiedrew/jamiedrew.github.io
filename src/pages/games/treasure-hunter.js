import React from "react";
import Layout from "../../components/Layout";
import { FontAwesomeIcon as Fa} from '@fortawesome/react-fontawesome'
import { faHtml5 } from "@fortawesome/free-brands-svg-icons";

const TreasureHunter = () => {
    return (
        <Layout>
            <header>
                <h2>Treasure Hunter</h2>
            </header>

            <main>
                <p>Somebody found something out in the desert. Something vast and strange. Something invaluable. Nobody seems to know quite what <em>it</em> is, but there's nothing stopping a brave adventurer from trying to find out, right?</p>

                <h3>Greed will weigh you down</h3>
                <p>A puzzle platformer about jumping around and collecting treasure. Each treasure adds a little weight, though, so you can't jump quite so high, you can't run so fast, and the floor beneath you might not react like you expect.</p>

                <h3>More Worlds, More Problems</h3>
                <p>As I write this I'm trying to implement one new mechanic per "world" -- there are five planned in all -- each one interacting with the player's current state of encumbrance. Floating platforms buckle under an overloaded player; ice cracks underfoot, sending you to your doom or to a whole new area.</p>

                <h3>featuring...</h3>
                <p><em>Treasure Hunter</em> (that's still a working title) boasts an adaptive industrial soundtrack from the one and only <a href="https://mikenisbet.bandcamp.com/">Mike Nisbet</a>. I've heard some of it. It's great.</p>

                <h3>The prototype</h3>
                <p>The original version of Treasure Hunter was made over a weekend for the 75th <a href="https://minijamofficial.com/">Mini Jam</a> and the reaction was so overwhelmingly positive I put my then-current project on hold to make a full version of it.</p>

                <p>That version has been described as 1) "anticapitalist Mario" and 2) "fucking impossible."</p>

                <p>It is my favourite feedback I've ever received. <a href="https://otterdisgrace.itch.io/treasure-hunter">You can play it for yourself on itch.io.</a></p>
            </main>
        </Layout>
    )
}

export default TreasureHunter;
