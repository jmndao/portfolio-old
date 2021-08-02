import { DOWNLOAD_RESUME_FAIL, DOWNLOAD_RESUME_REQUEST, DOWNLOAD_RESUME_SUCCESS } from "../constants/home.constant";


export const resumeDownloadReducer = (state = {}, action) => {

    switch (action.type) {
        case DOWNLOAD_RESUME_REQUEST:
            return { loading: true }
        case DOWNLOAD_RESUME_SUCCESS:
            return { loading: false, success: true }
        case DOWNLOAD_RESUME_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state
    }
};