import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { userLoginReducer } from "./reducers/user.reducer";
import { getAboutReducer } from "./reducers/about.reducer";
import { getProjectsReducer } from "./reducers/project.reducer";

const reducers = combineReducers({
    userLogin: userLoginReducer,
    getAbout: getAboutReducer,
    getProjects: getProjectsReducer,
});

const userInfoFromStorage = localStorage.getItem("userInfo") ?
    JSON.parse(localStorage.getItem("userInfo")) : [];

const initialState = {
    userLogin: { userInfo: userInfoFromStorage },
};

const middleware = [thunk];

const store = createStore(
    reducers,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
);

export default store;