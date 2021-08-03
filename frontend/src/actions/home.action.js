import axios from "axios";
import {
    DOWNLOAD_RESUME_FAIL,
    DOWNLOAD_RESUME_REQUEST,
    DOWNLOAD_RESUME_SUCCESS,
} from "../constants/home.constant";

const downloadResume = () => async(dispatch) => {
    try {
        dispatch({ type: DOWNLOAD_RESUME_REQUEST });

        const { data } = await axios.get("/api/download/resume", {
            responseType: "blob",
        });

        //Create a Blob from the PDF Stream
        const file = new Blob([data], {
            type: "application/pdf",
        });
        //Build a URL from the file
        const fileURL = URL.createObjectURL(file);
        //Open the URL on new Window
        const link = document.createElement("a");
        link.href = fileURL;
        link.setAttribute("download", `Resume_Jmndao.pdf`);
        // Append to html link element page
        document.body.appendChild(link);
        // Start download
        link.click();
        // Clean up and remove the link
        link.parentNode.removeChild(link);

        dispatch({ type: DOWNLOAD_RESUME_SUCCESS, payload: data });
    } catch (err) {
        dispatch({
            type: DOWNLOAD_RESUME_FAIL,
            payload: err.response && err.response.data.message ?
                err.response.data.message : err.message,
        });
    }
};

export { downloadResume };