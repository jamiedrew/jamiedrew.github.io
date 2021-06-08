import React from "react";
import Layout from "../../components/Layout";
import { FontAwesomeIcon as Fa} from '@fortawesome/react-fontawesome'
import { faAngleDoubleRight } from "@fortawesome/free-solid-svg-icons";

const JokeMachine = () => {
    return (
        <Layout>
            <header>
                <h2>The Joke Machine</h2>
                <div className="link"><Fa icon={faAngleDoubleRight} /> <a href="https://jamiedrew.github.io/joke-machine/">jamiedrew.github.io/joke-machine</a></div>
            </header>

            <main>
                <p>At an old job, my coworker and I would exchange a joke a day.</p>
                <p>We ran into a problem after about a week, namely that I had told him every joke I knew. I had run out of gags. I was justly shamed and run out of dodge. I'd never work in this town again, he said. I still can't go back to Archway, and it's been years.</p>
                <p>I swore I'd never let this happen to me or anyone else again, so I made a random joke generator in JavaScript. It pulls from an API and types them out with impeccable comic timing.</p>
            </main>
        </Layout>
    )
}

export default JokeMachine;
