import React, { useEffect } from "react";
import Admin from "./Admin";
import ProjectListing from "../components/ProjectListing";
import { useSelector } from "react-redux";

const AdminProject = ({ history }) => {

    const userLogin = useSelector(state => state.userLogin);
    const { userInfo } = userLogin;

    useEffect(() => {
        if (!userInfo) {
            history.push('/login');
        }
    }, [history, userInfo]);
    
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
