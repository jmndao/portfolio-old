import {
    ABOUT_PROFILE_INFO_FAIL,
    ABOUT_PROFILE_INFO_REQUEST,
    ABOUT_PROFILE_INFO_SUCCESS,
    ABOUT_PROFILE_UPDATE_REQUEST,
    ABOUT_PROFILE_UPDATE_SUCCESS,
    ABOUT_PROFILE_UPDATE_FAIL,
    ABOUT_PROFILE_UPDATE_RESET,
    FIREBASE_UPLOAD_PROGRESS,
    FIREBASE_UPLOAD_ERROR,
    FIREBASE_UPLOAD_END
} from "../constants/about.constant";

export const getAboutReducer = (
    state = {
        profileInfo: {
            education: [],
            languageSkill: [],
            programmingSkill: [],
            otherSkill: [],
            workExperience: [],
            activity: [],
            interest: [],
            certification: []
        },
    },
    action
) => {
    switch (action.type) {
        case ABOUT_PROFILE_INFO_REQUEST:
            return {...state, loading: true };
        case ABOUT_PROFILE_INFO_SUCCESS:
            return { loading: false, profileInfo: action.payload };
        case ABOUT_PROFILE_INFO_FAIL:
            return { loading: false, error: action.payload };
        default:
            return {...state };
    }
};

export const aboutUpdateReducer = (state = {
        profileInfo: {
            education: [],
            languageSkill: [],
            programmingSkill: [],
            otherSkill: [],
            workExperience: [],
            activity: [],
            interest: [],
            certification: []
        },
    },
    action
) => {
    switch (action.type) {
        case ABOUT_PROFILE_UPDATE_REQUEST:
            return {...state, loading: true };
        case ABOUT_PROFILE_UPDATE_SUCCESS:
            return { loading: false, success: true, profileInfo: action.payload };
        case ABOUT_PROFILE_UPDATE_FAIL:
            return { loading: false, error: action.payload };
        case ABOUT_PROFILE_UPDATE_RESET:
            return {};
        default:
            return {...state };
    }
};

export const firebaseUploderReducer = (state = {}, action) => {

    switch (action.type) {
        case FIREBASE_UPLOAD_PROGRESS:
            return { onProgress: true, id: action.payload }
        case FIREBASE_UPLOAD_ERROR:
            return { onProgress: false, uploadError: action.payload }
        case FIREBASE_UPLOAD_END:
            return { onProgress: false, fileUrl: action.payload }
        default:
            return state;
    }
};