import React from "react";
import Layout from "../../components/Layout";

const RedditMicro = () => {
    return (
        <Layout>
            <header>
                <h2>Reddit Micro</h2>
                <span className="link"><a href="https://jd-reddit-micro.netlify.app">jd-reddit-micro.netlify.app</a></span>
            </header>

            <main>
                <p>I learned to code during the COVID-19 pandemic thanks to <a href="https://codecademy.com">Codecademy</a> and its users' generous offer of memberships to people who had lost their income to the virus. One of the early course projects is a Reddit client made from scratch in <a href="https://reactjs.org">React</a>.</p>

                <p>For simplicity's sake this client uses a defunct API that doesn't require the user to sign in via OAuth, so it only retrieves about 25 posts according to your parameters, but it works, so it goes on the site.</p>

                <p>It works for me as I've never once made a post on Reddit. I'm a lurker born and bred.</p>
            </main>

        </Layout>
    )
}

export default RedditMicro;
