import React from "react";
import { Link, graphql, useStaticQuery } from "gatsby";

import { FontAwesomeIcon as Fa} from '@fortawesome/react-fontawesome'
import { faGithub, faTwitter, faItchIo } from "@fortawesome/free-brands-svg-icons";
import { faEnvelopeOpenText } from "@fortawesome/free-solid-svg-icons";

import "../styles/layout.scss";

export default function Navbar() {

    const data = useStaticQuery(graphql`query MyQuery {
            site {
                siteMetadata {
                    title
                }
            }
        }
    `);

    const { title } = data.site.siteMetadata;

    return (
        <nav class="navbar">
            <span id="title"><Link to="/">{title}</Link></span>

            <ul className="links">
                <li><Link to="/games">Games</Link></li>
                <li><Link to="/projects">Web Things</Link></li>
            </ul>

            <ul className="socials">
                <li>
                    <a href="mailto:hello@jamiedrew.co.uk">
                        <Fa icon={faEnvelopeOpenText} />
                        <span>email</span>
                    </a>
                </li>
                <li>
                    <a href="http://github.com/jamiedrew">
                        <Fa icon={faGithub} />
                        <span>github</span>
                    </a>
                </li>
                <li>
                    <a href="https://otterdisgrace.itch.io/">
                        <Fa icon={faItchIo} />
                        <span>itch.io</span>
                    </a>
                </li>
                <li>
                    <a href="http://twitter.com/heyjamiedrew">
                        <Fa icon={faTwitter} />
                        <span>twitter</span>
                    </a>
                </li>
            </ul>
        </nav>
    )
}