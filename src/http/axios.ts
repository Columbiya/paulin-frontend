import axios from "axios";
import env from "react-dotenv";

console.log(env.BACKEND_URL)

export const myAxios = axios.create({
    baseURL: env.BACKEND_URL,
})