import React from "react";
import { Link } from "gatsby";
import Layout from "../../components/Layout";

const Micronote = () => {
    return (
        <Layout>

            <header>
                <h2>Micronote</h2>
                <span className="link"><a href="http://micronote.herokuapp.com">micronote.herokuapp.com</a></span>
            </header>
            
            <main>
                <p>For years I've been fascinated by the <a href="https://en.wikipedia.org/wiki/Commonplace_book">commonplace book</a> -- a notebook kept on hand to write down your thoughts, observations, things you've heard and seen. They're unstructured (really, who can plan far enough ahead to write a table of contents?) and enlightening.</p>

                <p>This kind of thing has mostly evolved into note-taking apps and personal wikis, but I like to have something on hand to write or doodle whatever comes into my head over the course of a day.</p>

                <p>I've tried every note-taking app under the sun and while some of them are great -- <a href="https://simplenote.com/">Simplenote</a> is the closest thing to perfect I can find -- there's a few common problems across every one I've tried:</p>

                <ol>
                    <li>They're slow.</li>
                    <li>They're uncluttered and/or unattracttive and/or unintuitive.</li>
                    <li>They generally require a signed-in user to function.</li>
                </ol>

                <p>Micronote (<Link to="/projects/reddit-micro">I'm not very good at naming things</Link>) was made to alleviate some of these problems.</p>

                <h3>Local Storage</h3>
                <p>First and foremost, the user's notes are stored locally using the browser's local storage capabilities.</p>

                <h3>Note Syncing</h3>
                <p>If the user signs in, their local notes are synced to a <a href="http://mongodb.com">MongoDB</a> database. Old notes are updated to reflect the user's most recent edits, any new notes are uploaded to the database and the note list is reordered to maintain the sorted-by-created order.</p>

                <h3>Asynchronous Operations</h3>
                <p>User operations are handled asynchronously; created or edited notes are stored locally first, and if the user is logged in to their account, the app also updates the database. The result is a very smooth, very streamlined user experience: there's no need to wait for notes to upload.</p>
                <p>The <a href="https://localforage.github.io/localForage/">localforage</a> library helped with this.</p>

                <h3>Security</h3>
                <p>I rolled my own authentication script for Micronote; existing strategies would call to the database on every user request, which dramatically slowed performance in user tests.</p>

            </main>

            
        </Layout>
    )
}

export default Micronote;
