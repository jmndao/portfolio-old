import {
    ABOUT_PROFILE_INFO_FAIL,
    ABOUT_PROFILE_INFO_REQUEST,
    ABOUT_PROFILE_INFO_SUCCESS,
} from "../constants/about.constant";

export const getAboutReducer = (
    state = {
        profileInfo: {
            education: [],
            languageSkill: [],
            programmingSkill: [],
            workExperience: [],
            activity: [],
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