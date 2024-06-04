// Desc: Custom hook to handle authentication state and actions. This hook is used to get the authentication state and actions from the redux store. It returns the isAuthenticated state, userData, login, and logout functions. The isAuthenticated state is used to check if the user is authenticated or not. The userData is used to get the user data. The login function is used to set the authentication state to true and set the user data. The logout function is used to set the authentication state to false and clear the user data.
//  This hook is used in components to handle authentication state and actions.


import { useDispatch , useSelector } from 'react-redux';
import { RootState } from '../store/store.ts';
import {
    login as loginAction,
    logout as logoutAction
} from '../features/authSlice.ts';


interface UseAuth{
    isAuthenticated: boolean;
    userData: Object | null;
    login: (userData: Object) => void;
    logout : () => void;
}


const useAuth = (): UseAuth => {
    const {status,userData} = useSelector((state: RootState) => state.auth);
    const dispatch = useDispatch();

    const login = (userData: Object) => {
        dispatch(loginAction({status:true,userData}))
    }
    const logout = () => {
        dispatch(logoutAction());
    }

    return {
        isAuthenticated: status,
        userData,
        login,
        logout
    }
}
export default useAuth;


