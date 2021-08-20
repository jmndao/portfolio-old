import React from "react";
import Admin from "./Admin";
import ProjectListing from "../components/ProjectListing";

const AdminProject = () => {
    return (
        <>
            <div className="admin-project-display-section">
                <Admin />
                <div className="admin-project-wrapper">
                    <h1>Projects</h1>
                    <ProjectListing />
                </div>
            </div>
        </>
    )
}

export default AdminProject;
