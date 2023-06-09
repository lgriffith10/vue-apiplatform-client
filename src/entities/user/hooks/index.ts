import axios, { AxiosResponse, HttpStatusCode } from 'axios';

const API_URL = import.meta.env.VITE_API_URL;

export const useGetToken = async (email: string, password: string): Promise<HttpStatusCode> => {
    return await axios.post(`${API_URL}/auth`, {
        email,
        password
    })
    .then((response: AxiosResponse) => {
        window.localStorage.setItem('token', response.data.token);
        return response.status;
    })

}
