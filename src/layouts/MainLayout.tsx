import { Outlet } from 'react-router-dom'
import Navbar from '@/components/Navbar'

function MainLayout() {
  return (
    <div className="site">
      <Navbar />
      <main className="site-main">
        <Outlet />
      </main>
      <footer className="site-footer">
        <div className="container">
          <p>© {new Date().getFullYear()} 前端静态页面 · Powered by React + Vite</p>
        </div>
      </footer>
    </div>
  )
}

export default MainLayout
