import axios from 'axios';

export const axiosWithAuth = () => {
    const token = localStorage.getItem('token');

    return axios.create({
        baseURL: 'https://afrikan-market.herokuapp.com/api/auth',
        headers: {
            Authorization: token
        }
    });
};