import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import ProjectCreation from "../components/ProjectCreation";
import Admin from "./Admin";

const AdminProjectNew = ({ history }) => {

    const userLogin = useSelector(state => state.userLogin);
    const { userInfo } = userLogin;

    useEffect(() => {
        if (!userInfo) {
            history.push('/login');
        }
    }, [history, userInfo]);

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
