import { configureStore } from '@reduxjs/toolkit';
import { loadingBarReducer } from 'react-redux-loading-bar';
import authReducer from './authUser/authUserSlice';
import isPreloadReducer from './isPreload/isPreloadSlice';
import registerReducer from './register/registerSlice';
import myProfileReducer from './myProfile/myProfileSlice';
import skillsReducer from './skills/skillsSlice';
export const store = configureStore({
  reducer: {
    auth: authReducer,
    register: registerReducer,
    isPreload: isPreloadReducer,
    myProfile: myProfileReducer,
    skills: skillsReducer,
    loadingBar: loadingBarReducer
  }
});