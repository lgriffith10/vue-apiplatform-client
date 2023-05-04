import axios, { AxiosResponse } from 'axios';

import { router } from '@/router';

import { Agent } from '@/entities/hero/types';

export const useGetHeroes = async (): Promise<Agent[] | void> => {
    const headers = {
        Authorization: `Bearer ${window.localStorage.getItem('token')}`
    }

    return await axios.get(
        `${import.meta.env.VITE_API_URL}/api/heroes`,
        {
            headers,
        }
    )
        .then((response: AxiosResponse) => {
            return response.data
        })
        .then((data: Agent[]) => (
            data
        ))
        .catch(() => {
            window.localStorage.removeItem('token');
            router.push('/login');
        })
        
}
