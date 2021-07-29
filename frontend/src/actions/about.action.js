import axios from "axios";
import { ABOUT_UPDATE_FAIL, ABOUT_UPDATE_REQUEST, ABOUT_UPDATE_SUCCESS } from "../constants/about.constant";


export const aboutUpdate = (entry, about) => async(dispatch, getState) => {

    try {
        dispatch({ type: ABOUT_UPDATE_REQUEST });

        const { userLogin: { userInfo } } = getState();

        const config = {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${userInfo.token}`
            }
        };

        const { data } = await axios.put(`/api/about/${entry}`, about, config);

        dispatch({ type: ABOUT_UPDATE_SUCCESS, payload: data });
    } catch (error) {
        dispatch({
            type: ABOUT_UPDATE_FAIL,
            payload: error.response && error.response.data.message ?
                error.response.data.message : error.message,
        });
    }
};