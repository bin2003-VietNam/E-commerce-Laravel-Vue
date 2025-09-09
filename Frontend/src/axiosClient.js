import axios from "axios";

// Laravel backend chạy ở http://localhost:8000
const axiosClient = axios.create({
  baseURL: "http://localhost:8000", // ⚠️ dùng localhost, không dùng 127.0.0.1
  withCredentials: true,            // cho phép gửi cookie kèm request
});

// Trước khi gọi API POST/PUT/DELETE cần CSRF token
export async function getCsrfCookie() {
  await axiosClient.get("/sanctum/csrf-cookie");
}

axiosClient.interceptors.response.use(
  (response) => response,
  (error) => {
    // Nếu backend trả về lỗi 401 thì redirect login
    if (error.response && error.response.status === 401) {
      console.error("Unauthorized! Redirecting to login...");
      // ví dụ: router.push({ name: "login" })
    }
    return Promise.reject(error);
  }
);

export default axiosClient;
