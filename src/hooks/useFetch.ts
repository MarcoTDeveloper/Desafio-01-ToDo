import useSWR from "swr";

import { api } from "../services/api";

export function useFetch<Data = any, Error = any>(url: string, refreshInterval: number = 0) {
    const { data, error, mutate, isLoading, isValidating } = useSWR<Data, Error>(url , async url => {
        const response = await api.get(url);
        return response.data;
    }, { refreshInterval: refreshInterval });

    return { data, error, mutate, isLoading, isValidating };
}