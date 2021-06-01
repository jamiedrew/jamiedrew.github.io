import React from "react";
import Layout from "../../components/Layout";
import ImageGallery from "../../components/ImageGallery";
import { FontAwesomeIcon as Fa} from '@fortawesome/react-fontawesome'
import { faHtml5 } from "@fortawesome/free-brands-svg-icons";

const seabrook = () => {
    return (
        <Layout>
            <header>
                <h2>The Incident at the Seabrook Residence</h2>
                <span className="link"><a href="https://otterdisgrace.itch.io/seabrook"><Fa icon={faHtml5} /> Play in browser</a></span>
            </header>

            <main>
                <p>I wanted to make a cyberpunk story, but not a neon-and-rainslick cyberpunk story; I wanted to write the kind of cyberpunk that dresses itself in chinos and sits down for eight hours a day to spy on you and sell your darkest secrets to advertisers.</p>

                <p><em>The Incident</em> is a ghost story, too. And a family drama. But it's not <em>your</em> family -- it's a family that lives on the other side of the screen. You've taken a job cleaning up digitised records for the Department of █████████████; the computer's Optical Character Recognition systems can only do so much, and they need a human eye to look over them.</p>

                <p>To fill in the blanks in the story of the Seabrooks you'll need to rely on context clues. Does that garbled text refer to a "dog" or a "cat"? Did Harry ask Jeeves about "inferential statistics" or a "coal mine disaster"?</p>

                <p>Just <em>who</em> is that knocking on the door at night?</p>
            </main>

            <ImageGallery folder="seabrook" />
        </Layout>
    )
}

export default seabrook;