import React from "react";
import ProjectCreation from "../components/ProjectCreation";
import Admin from "./Admin";

const AdminProjectNew = () => {
    return (
        <>
            <div className="admin-page-display-section">
                <Admin />
                <div className="admin-project-new-wrapper">
                    <h1>Project Creation</h1>
                    <ProjectCreation />
                </div>
            </div>
        </>
    )
}

export default AdminProjectNew;
