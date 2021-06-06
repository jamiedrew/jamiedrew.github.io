import React from 'react'
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const ImageGallery = ({ folder }) => {

    const data = useStaticQuery(graphql`
        query {
            allFile(filter: {sourceInstanceName: {eq: "projectImages"}}) {
                edges {
                    node {
                        relativePath
                        name
                        childImageSharp {
                            gatsbyImageData(
                                width: 640
                                placeholder: BLURRED
                            )
                        }
                    }
                }
            }
        }
        
    `)

    const images = data.allFile.edges.filter(img => img.node.relativePath.includes(folder));
    if (images.length === 0) return null;

    return (
        <div className="gallery">
            { images.map(img => 
                <GatsbyImage
                    key={img.node.name}
                    image={getImage(img.node)}
                    alt="" />
            ) }
        </div>
    )
}

export default ImageGallery;
