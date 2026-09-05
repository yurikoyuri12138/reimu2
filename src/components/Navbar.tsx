import { NavLink } from 'react-router-dom'

const NAV_ITEMS = [
  { to: '/', label: '首页', end: true },
  { to: '/about', label: '关于', end: false },
] as const

function Navbar() {
  return (
    <header className="site-header">
      <div className="container site-header-inner">
        <span className="site-brand">前端静态页面</span>
        <nav className="site-nav">
          {NAV_ITEMS.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.end}
              className={({ isActive }) =>
                isActive ? 'nav-link nav-link-active' : 'nav-link'
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  )
}

export default Navbar
