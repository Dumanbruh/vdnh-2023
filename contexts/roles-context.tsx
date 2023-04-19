import { createContext, useContext, useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import useSWR from "swr";
import { fetcher } from "../fetchers/fetcher";

const RolesContext = createContext({
    role: "loading",
});

export function useRoles() {
    return useContext(RolesContext);
}

export function RolesProvider(props: any) {
    const { data: admins } = useSWR("/api/roles/admins", fetcher);
    const { data: staff } = useSWR("/api/roles/staff", fetcher);
    const { data: session } = useSession();
    const [role, setRole] = useState("loading");

    useEffect(() => {
        if (admins && session && staff) {
            //@ts-ignore
            if (admins.includes(session.user.id)) {
                setRole("admin");
                //@ts-ignore
            } else if (staff.includes(session.user.id)) {
                setRole("staff");
            } else {
                setRole("user");
            }
        }
    }, [admins, staff, session]);

    const context = {
        role,
    };

    return (
        <RolesContext.Provider value={context}>
            {props.children}
        </RolesContext.Provider>
    );
}