import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { userLoginReducer } from "./reducers/user.reducer";
import { getAboutReducer, aboutUpdateReducer, firebaseUploderReducer } from "./reducers/about.reducer";
import { getProjectsReducer, projectCreateReducer, projectDeleteReducer, projectGetReducer, projectUpdateReducer } from "./reducers/project.reducer";
import { formSubmitReducer } from "./reducers/contact.reducer";
import { resumeDownloadReducer } from "./reducers/home.reducer";

const reducers = combineReducers({
    userLogin: userLoginReducer,
    getAbout: getAboutReducer,
    getProjects: getProjectsReducer,
    formSubmit: formSubmitReducer,
    resumeDownload: resumeDownloadReducer,
    aboutUpdate: aboutUpdateReducer,
    firebaseUploader: firebaseUploderReducer,
    projectDelete: projectDeleteReducer,
    projectCreate: projectCreateReducer,
    projectUpdate: projectUpdateReducer,
    projectGet: projectGetReducer
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