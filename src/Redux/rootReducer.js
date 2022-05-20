import { combineReducers } from "redux";
import loginReducer from "./Login/loginReducer";
import spinReducer from "./Spin/spinReducer";

const rootReducer = combineReducers({
    login: loginReducer,
    spin: spinReducer,
    // ui: uiReducer,
    // faq: faqReducer,
    // blogs: blogsReducer,
    // categories: categoriesReducer
});

export default rootReducer;