import axios from "axios";


export const api = axios.create({
      baseURL: `${import.meta.env.VITE_BACK_END_URL}/api`,
      withCredentials : true
}
    );


// api.interceptors.request.use(
//       (config) => {
//             const auth = JSON.parse(localStorage.getItem("auth"));
//             const token = auth?.jwtToken;

//             if (token) {
//                   config.headers.Authorization = `Bearer ${token}`;
//             }

//             return config;
//       },
//       (error) => Promise.reject(error)
// );    