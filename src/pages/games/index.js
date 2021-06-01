import React from "react";
import { Link } from "gatsby";
import Layout from "../../components/Layout";
import ProjectCard from "../../components/ProjectCard";

export default function Games () {
    return (
        <Layout>
            <div className="cards">
                <Link to="/games/treasure-hunter"><ProjectCard title="Treasure Hunter" /></Link>
                <Link to="/games/crimson-shrine"><ProjectCard title="Crimson Shrine" /></Link>
                <Link to="/games/seabrook"><ProjectCard title="The Incident at the Seabrook Residence" /></Link>
            </div>
        </Layout>
    )
}