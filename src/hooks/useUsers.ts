import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getUsers } from "../actions/user-action";

export function useUsers() {
    const queryClient = useQueryClient();
    const { isPending, isError, data: users, error } = useQuery({
        queryKey: ["users"],
        queryFn: getUsers,
        staleTime: 1000 * 60 * 5,
        gcTime: 1000 * 60 * 10,     
        refetchOnWindowFocus: false, 
        refetchOnReconnect: true,    
        refetchOnMount: false,
    });


    function refreshUsers() {
        queryClient.invalidateQueries({ queryKey: ["users"] });
    }

    return { users, isPending, isError, error, refreshUsers };
}