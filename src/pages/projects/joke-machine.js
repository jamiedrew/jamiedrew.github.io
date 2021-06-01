import React from "react";
import Layout from "../../components/Layout";

const JokeMachine = () => {
    return (
        <Layout>
            <header>
                <h2>The Joke Machine</h2>
                <span className="link"><a href="https://jamiedrew.github.io/joke-machine/">jamiedrew.github.io/joke-machine</a></span>
            </header>

            <main>
                <p>My old coworker and I would exchange a joke a day.</p>
                <p>After about a week I had run out of jokes.</p>
                <p>And so: a random joke generator, written in JavaScript. This is one of the first web apps I ever made, so it's pretty bare bones. Refresh the page to see a new joke. Some of them are even quite good!</p>
            </main>
        </Layout>
    )
}

export default JokeMachine;
