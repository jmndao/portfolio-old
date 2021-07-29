import { ABOUT_UPDATE_FAIL, ABOUT_UPDATE_REQUEST, ABOUT_UPDATE_SUCCESS } from "../constants/about.constant";



const updateAboutReducer = (state = {}, action) => {
    switch (action.type) {

        case ABOUT_UPDATE_REQUEST:
            return { loading: true }
        case ABOUT_UPDATE_SUCCESS:
            return { loading: false, success: true, about: action.payload }
        case ABOUT_UPDATE_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state
    }
}

export { updateAboutReducer };