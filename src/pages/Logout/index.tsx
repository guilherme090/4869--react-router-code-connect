import { useEffect } from "react";
import { useAuth } from "../../hooks/useAuth.ts"
import { useNavigate } from "react-router";

export const Logout = () => {
    const { logout } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        logout();
        navigate('/auth/login');
    }, [logout]);

    return null;
}