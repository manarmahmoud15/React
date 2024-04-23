import axios from "axios"
export const axiosInstance =axios.create ({
    baseURL : 'https://api.themoviedb.org'
})
axiosInstance.interceptors.request.use(function (config) {
    // Do something before request is sent
    if(localStorage.getItem('5e36935a2d1be939492fae039e2bf7b0')){
        config.headers['Authorization'] = '5e36935a2d1be939492fae039e2bf7b0'
    }
    return config;
  }, function (error) {
    // Do something with request error
    return Promise.reject(error);
  });

// Add a response interceptor
axiosInstance.interceptors.response.use(function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  }, function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  });