import './index.css'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Login } from './pages/Login/index.tsx'
import { Register } from './pages/Register/index.tsx'
import { Feed } from './pages/Feed/index.tsx'
import { BlogPost } from './pages/BlogPost/index.tsx'

const container = document.getElementById('root');

if (container){
  createRoot(container).render(
    <StrictMode>
      <Login />
      <Register />
      <Feed />
      <BlogPost />
    </StrictMode>,
  )
}
