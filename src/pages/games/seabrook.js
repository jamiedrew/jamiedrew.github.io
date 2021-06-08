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
                <div className="link"><a href="https://otterdisgrace.itch.io/seabrook"><Fa icon={faHtml5} /> Play in browser</a></div>

                <ImageGallery folder="seabrook" />
            </header>

            <main>
                <p>You, whoever you might be, are a contractor working with the Department of <span className="redacted">█████████████</span>, digitising their old paper records for the new era. You've been assigned the poorly-scanned case of the Seabrooks, a family in a small Northern town who reported bumps in the night almost 20 years ago.</p>

                <h3>Our cyberpunk future is not as cool as I thought it would be</h3>
                <p>I wanted to make a cyberpunk story, but not a neon-and-rainslick cyberpunk story; I wanted to write the kind of cyberpunk that dresses itself in chinos and sits down for eight hours a day to spy on you and sell your darkest secrets to advertisers.</p> 

                <h3>Simulating the worst jobs I've ever had</h3>
                <p><em>The Incident...</em> is inspired by two degrees in linguistics and the hours I spent transcribing audio and making sense of historical documents, as well as a couple of years working part-time in audio transcription. These weren't <em>bad</em> jobs, exactly, but it's hard not to get invested in the lives of the people you're listening to and reading about, and it feels sort of unfair that they don't even know you exist.</p>

                <p>Initially there was a more explicit tutorial around the game's mechanics, but I feel like if I had to suffer badly-written instructions then so do you.</p>

                <h3>Player Responses</h3>
                <p>Within the first month of its release more than 500 people played <em>The Incident at the Seabrook Residence</em>, a lot of them more than once. There's a grading system in place that tracks how well you "performed" and unlocks a secret ending with a grade of A or above.</p>

                <p>The game is set in the last days of 2003, but a lot of players in 2020 resonated with that secret ending, in which one of the characters pushes back against your state-sanctioned invasion of her privacy.</p>
            </main>

            
        </Layout>
    )
}

export default seabrook;