const FEATURES = [
  {
    title: 'React 19',
    desc: '基于最新版本 React 构建，支持函数组件、Hooks 与并发特性。',
  },
  {
    title: 'TypeScript',
    desc: '全程类型约束，提升代码可读性与可维护性，减少运行时错误。',
  },
  {
    title: 'React Router',
    desc: '声明式路由配置，页面按路由自动懒加载，便于后续扩展。',
  },
] as const

function Home() {
  return (
    <div className="container">
      <section className="hero">
        <h1>欢迎来到前端静态页面</h1>
        <p>
          这是一个基于 Vite + React + TypeScript 搭建的静态站点骨架，
          已内置规范化的目录结构与路由配置，可直接在此之上继续开发。
        </p>
      </section>

      <section className="card-grid">
        {FEATURES.map((item) => (
          <article className="card" key={item.title}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
          </article>
        ))}
      </section>
    </div>
  )
}

export default Home
