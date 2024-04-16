import axios from "axios";

const baseUrl = import.meta.env.VITE_BACKEND_URL;

const loginService = async (username: string , email : string , password:string) => {
    try {
        const response = await axios.post(`${baseUrl}/users/login` , {
          username,
          email,
          password
        });
        return response
    } catch (error:any) {
        return "Error while login" + error.message;
    }
}
export {
    loginService
}