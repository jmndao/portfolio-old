import React from "react";
import AboutForm from "../components/AboutForm";
import Admin from "./Admin";

const AdminAbout = () => {
    return (
        <>
            <Admin />
            <div className="admin-page-display-section">
                <h1>About</h1>
                <div className="admin-about-form-wrapper">
                    <AboutForm />
                </div>
            </div>
        </>
    )
}

export default AdminAbout;
