import axios from "axios"

const API_URL = 'http://localhost:4000'
const headers = {
    Authorization: localStorage.getItem('token')
}

export class HttpService {

    login = (data) => {
        const response = axios.post(`${API_URL}/auth/login`, data)
        return response
    }

    signup = (data) => {
        const response = axios.post(`${API_URL}/auth/signup`, data)
        return response
    }

    forgetPassword = (data) => {
        const response = axios.post(`${API_URL}/auth/forgetPassword`, data)
        return response
    }

    resetPassword = (data) => {
        const response = axios.post(`${API_URL}/auth/resetPassword`, data)
        return response
    }
}