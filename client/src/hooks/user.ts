import { getUserDetails } from "@app/api"
import { useQuery } from "react-query"

export const useGetUserDetailsQuery = () => {
    return useQuery({
        queryKey: ['useGetUserDetailsQuery'], // queryKey is used for caching
        queryFn: getUserDetails
    })
}