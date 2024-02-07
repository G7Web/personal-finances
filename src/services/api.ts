import axios, { AxiosError } from "axios"
import { useAuth } from "../hooks/auth"

type Props = {
    endpoint: string,
    method?: 'GET' | 'POST' | 'PUT' | 'DELETE',
    data?: object,
    withAuth?: boolean
}

export const api = async <TypeResponse>({
    endpoint,
    method = 'GET',
    data,
    withAuth = true
}: Props) => {
    const { getToken } = useAuth()

    const instance = axios.create({
        baseURL: import.meta.env.VITE_API_BASE_URL
    })

    if (withAuth) {
        instance.defaults.headers.common['Authorization'] = getToken();
    }

    try {
        const request = await instance<TypeResponse>(endpoint, {
            method,
            params: method == 'GET' && data,
            data: method != 'GET' && data
        })

        return {
            data: request.data
        }
    } catch (error) {
        const e = error as AxiosError<{ message: string }>

        return {
            error: e.response?.data.message ?? e.message
        }
    }
} 