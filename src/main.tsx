import './index.css'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Login } from './pages/Login/index.js'
// import { Register } from './pages/Register/index.jsx'
// import { Feed } from './pages/Feed/index.jsx'
// import { BlogPost } from './pages/BlogPost/index.jsx'

const container = document.getElementById('root');

if (container){
  createRoot(container).render(
    <StrictMode>
      <Login />
      {/* <Register /> */}
      {/* <Feed /> */}
      {/* <BlogPost /> */}
    </StrictMode>,
  )
}
