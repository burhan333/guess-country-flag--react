import axios from "axios"

const API_URL = 'http://localhost:4000'
const token = localStorage.getItem('token')
const headers = {
    Authorization: `Bearer ${token}`
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

    verifyOTP = (data) => {
        const response = axios.post(`${API_URL}/auth/verifyOTP`, data)
        return response
    }

    getTopScore = () => {
        const response = axios.get(`${API_URL}/score/getTopScore`)
        return response
    }

    updateUserScore = (data) => {
        const response = axios.patch(`${API_URL}/user/updateUserScore`, data, {headers})
        return response
    }

    resetUserScore = (data) => {
        const response = axios.post(`${API_URL}/user/resetUserScore`, data, {headers})
        return response
    }

    editUserProfile = (data) => {
        const response = axios.post(`${API_URL}/user/editUserProfile`, data, {headers})
        return response
    }

    getUserProfile = (data) => {
        const response = axios.post(`${API_URL}/user/getUserProfile`, data, {headers})
        return response
    }

    getUserHistory = (data) => {
        const response = axios.post(`${API_URL}/user/getUserHistory`, data, {headers})
        return response
    }
    
    clearUserHistory = (data) => {
        const response = axios.post(`${API_URL}/user/clearUserHistory`, data, {headers})
        return response
    }
}