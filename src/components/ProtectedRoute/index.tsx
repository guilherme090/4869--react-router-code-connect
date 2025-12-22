import { useEffect, type ReactNode } from "react";
import { useAuth } from "../../hooks/useAuth.ts";
import { Spinner } from "../Spinner/index.tsx";
import { useNavigate } from "react-router";

export function ProtectedRoute({ children }: { children: ReactNode }) {

    const { isLoading, isAuthenticated } = useAuth();
    const navigate = useNavigate();

    useEffect( () => {
        if ( !isAuthenticated && !isLoading ) {
            navigate('/auth/login');
            //redirect /auth/login
        }
    }, [isAuthenticated, isLoading]);

    if ( isLoading ) {
        return <Spinner />;
    }

    if( !isAuthenticated ) {
        return null;
    }

    return children;
}