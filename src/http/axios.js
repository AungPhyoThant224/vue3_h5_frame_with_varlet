import axios from "axios";

const http = axios.create({
    baseURL: import.meta.env.VITE_API_HOST,
})

http.interceptors.request.use(
    // If header require
    // (config) => {
    //     if(usertoken){
    //         config.headers["Authorization"] = 'token'
    //     }
    //     config.headers["accept-language"] = 'en'
    // },
    // (error) => {
    //     return Promise.reject(error);
    // }
)

http.interceptors.response.use(
    (res) => {
        // If you need to do SOMETHING
        if(res.data.err_code != 0 && res.data.err_code !== 200){
            if(res.data.err_code == 403){

            }
            return res;
        }else{
            return res;
        }
    },
    (error) => {
        if(error.response.status === 403){

        }
        return Promise.reject(error);
    }
)

export default http;