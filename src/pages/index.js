import React from "react"
import Layout from "../components/Layout";
import { StaticImage } from "gatsby-plugin-image";

import { FontAwesomeIcon as Fa} from '@fortawesome/react-fontawesome'
import { faGithub, faTwitter, faItchIo } from "@fortawesome/free-brands-svg-icons";
import { faEnvelopeOpenText } from "@fortawesome/free-solid-svg-icons";

import "../styles/content.scss";

export default function Home() {

  return (
    <Layout>
      <div className="frontpage">

        <ul className="socials">
          <li>
              <a href="mailto:jamiedrew@tutanota.com">
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

        <StaticImage
          src="../images/jamie.png"
          alt=""
          width={350}
          height={350}
          placeholder="blurred" />

        <div className="info">
          <p>I used to be a camera man, and now I'm a code man.</p>
          <p>(I am still sometimes a camera man.)</p>
        </div>

      </div>
    </Layout>
  )
}