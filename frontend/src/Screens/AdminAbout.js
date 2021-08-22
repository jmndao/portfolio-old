import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import AboutForm from "../components/AboutForm";
import Admin from "./Admin";

const AdminAbout = ({ history }) => {

    const userLogin = useSelector(state => state.userLogin);
    const { userInfo } = userLogin;

    useEffect(() => {
        if (!userInfo) {
            history.push('/login');
        }
    }, [history, userInfo]);

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
