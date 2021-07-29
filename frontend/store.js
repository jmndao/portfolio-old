import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { updateAboutReducer } from "./src/reducers/about.reducer";
import { userLoginReducer } from "./src/reducers/user.reducer";


const reducers = combineReducers({
    updateAbout: updateAboutReducer,
    userLogin: userLoginReducer
});

const userInfoFromStorage = localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : [];

const initialState = {
    userLogin: { userInfo: userInfoFromStorage }
};

const middleware = [thunk];

const store = createStore(
    reducers,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))

);

export default store;