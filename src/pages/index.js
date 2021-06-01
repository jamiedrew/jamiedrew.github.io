import React from "react"
import Layout from "../components/Layout";
import { StaticImage } from "gatsby-plugin-image";
import "../styles/content.scss";

export default function Home() {

  return (
    <Layout>
      <div className="frontpage">

        <StaticImage
          src="../images/jamie.png"
          alt=""
          width={350}
          height={350}
          placeholder="blurred" />

        <div className="info">
          <p>Hello my name is Jamie and this is placeholder text. I used to be a camera man, but now I'm a code man. Please look at my things that I have made and done. They took ages. I don't know why this picture looks so weird.</p>
        </div>

      </div>
    </Layout>
  )
}