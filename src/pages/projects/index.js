import React from 'react'
import Layout from '../../components/Layout'
import ProjectCard from "../../components/ProjectCard";
import { Link } from "gatsby";

export default function Projects() {
    return (
        <Layout>
            <div className="cards">
                <Link to="/projects/micronote"><ProjectCard title="Micronote" /></Link>
                <Link to="/projects/reddit-micro"><ProjectCard title="Reddit Micro" /></Link>
                <Link to="/projects/joke-machine"><ProjectCard title="Joke Machine" /></Link>
            </div>
        </Layout>
    )
}