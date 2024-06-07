// Desc: Custom hook to handle authentication state and actions. This hook is used to get the authentication state and actions from the redux store. It returns the isAuthenticated state, userData, login, and logout functions. The isAuthenticated state is used to check if the user is authenticated or not. The userData is used to get the user data. The login function is used to set the authentication state to true and set the user data. The logout function is used to set the authentication state to false and clear the user data.
//  This hook is used in components to handle authentication state and actions.
import { useDispatch , useSelector } from 'react-redux';
import { RootState } from '../store/store.ts';
import {
    login as loginAction,
    logout as logoutAction
} from '../features/authSlice.ts';

interface UserObject {
    _id: string;
    email: string;
    username: string;
    fullname: string;
    avatar: File;
    coverImage: File;
    watchHistory: Array<Object>;
    createdAt: string;
    updatedAt: string;
    __v: number;
}
interface UseAuth {
    isAuthenticated: boolean;
    user: UserObject | null;
    login: (userData: object) => void;
    logout : () => void;
}

   const useAuth = (): UseAuth => {
    const dispatch = useDispatch();
    const {status,user } = useSelector((state: RootState) => state.auth);
   

    const login = (userData: object) => {
        dispatch(loginAction(userData as UserObject));
    }
    const logout = () => {
        dispatch(logoutAction());
    }

    return {
        isAuthenticated: status,
        user,
        login,
        logout
    }
}
export default useAuth;


