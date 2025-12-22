import { BrowserRouter, Route, Routes } from "react-router";
import { Register } from "../pages/Register/index.tsx";
import { Login } from "../pages/Login/index.tsx";
import { Logout } from "../pages/Logout/index.tsx";
import { ProtectedRoute } from "../components/ProtectedRoute/index.tsx";
import { BlogPost } from "../pages/BlogPost/index.tsx";
import { Feed } from "../pages/Feed/index.tsx";
import { AuthLayout } from "../layouts/Auth/index.tsx";
import { AppLayout } from "../layouts/App/index.tsx";

export function AppRouter() {
    return(
        <BrowserRouter>
        <Routes>
            <Route path='/auth' element={<AuthLayout />}>
                <Route path='register' element={<Register />} />
                <Route path='login' element={<Login />} />
                <Route path='logout' element={<Logout />} />
            </Route>
          <Route path='/' element={<AppLayout />}>
              <Route path='' element={
                <ProtectedRoute>
                  <Feed />
                </ProtectedRoute>
              } />
            <Route path='blog-post/:slug' element={
              <ProtectedRoute>
                <BlogPost />
              </ProtectedRoute>
            } />
          </Route>
        </Routes>
      </BrowserRouter>
    );
}