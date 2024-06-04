import axios from "axios";

const baseUrl = import.meta.env.VITE_BACKEND_URL;

const loginService = async (username: string , email : string , password:string) => {
    try {
        const data ={username, email, password};
        const response = await axios.post(`${baseUrl}/users/login` , data, {
            headers:{
                'Content-Type': 'application/json',
            }
        });
        console.log("response is",response);
        return response
    } catch (error:any) {
        return "Error while login" + error.message;
    }
};

interface RegisterUserData {
    username: string;
    email: string;
    password: string;
    fullName: string;
    avatar?: File;
    coverImage: File;

}

const registerService = async (values: RegisterUserData)=>{
    try{
        const formData = new FormData();
        formData.append('username', values.username);
        formData.append('email', values.email);
        formData.append('password', values.password);
        formData.append('fullName', values.fullName);
        values.avatar?.name && formData.append('avatar', values.avatar);
        values.coverImage?.name && formData.append('coverImage', values.coverImage);

        const response = await axios.post(`${baseUrl}/users/register`, formData)
        console.log("response of registerUser is", response);
        return response.data;

    } catch(error:any){
        throw new Error("Error while registering" + error.message);
    }
}

const logoutService = async () => {
    try{
        const response = await axios.get(`${baseUrl}/users/logout`,{
            headers:{
                Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
            },
        });
        console.log("response of logout is", response);
        return response.data;
    } catch(error:any){
        throw new Error("Error while logout" + error.message);
    }
}



export {
    loginService,
    registerService,
    logoutService,
}

