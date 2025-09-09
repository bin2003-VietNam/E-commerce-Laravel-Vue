import axios from "axios";
import router from "./router";

const axiosClient = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL, // ví dụ http://127.0.0.1:8000/api
    withCredentials: true, // để gửi cookie khi dùng Sanctum
});

// Nếu sau này có Bearer token thì đoạn này
// axiosClient.interceptors.request.use(config => {
//     config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`;
//     return config;
// });

axiosClient.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.response && error.response.status === 401) {
            router.push({ name: "login" });
        }
        return Promise.reject(error);
    }
);

export default axiosClient;
