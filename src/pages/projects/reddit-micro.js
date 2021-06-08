import React from "react";
import Layout from "../../components/Layout";
import { FontAwesomeIcon as Fa} from '@fortawesome/react-fontawesome'
import { faAngleDoubleRight } from "@fortawesome/free-solid-svg-icons";

const RedditMicro = () => {
    return (
        <Layout>
            <header>
                <h2>Reddit Micro</h2>
                <div className="link"><Fa icon={faAngleDoubleRight}/> <a href="https://jd-reddit-micro.netlify.app">jd-reddit-micro.netlify.app</a></div>
            </header>

            <main>
                <p>I learned to code during the COVID-19 pandemic thanks to <a href="https://codecademy.com">Codecademy</a> and its users' generous offer of memberships to people who had lost their income to the virus. One of the early course projects is a Reddit client made from scratch in <a href="https://reactjs.org">React</a>.</p>
            </main>

        </Layout>
    )
}

export default RedditMicro;
