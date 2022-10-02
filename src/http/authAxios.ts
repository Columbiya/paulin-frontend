import axios from "axios";
import env from "react-dotenv";

export const authAxios = axios.create({
    baseURL: env.BACKEND_URL,
    headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
    }
})