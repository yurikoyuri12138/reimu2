const STACK = ['Vite', 'React 19', 'TypeScript', 'React Router'] as const

function About() {
  return (
    <div className="container">
      <section className="page-section">
        <h1>关于本站</h1>
        <p>
          本页面用于演示路由切换与基础页面的组织方式。每个页面组件放在
          <code>src/pages</code> 目录下，与 <code>src/router</code> 中的路由一一对应。
        </p>
        <h2>技术栈</h2>
        <ul className="stack-list">
          {STACK.map((tech) => (
            <li key={tech}>{tech}</li>
          ))}
        </ul>
      </section>
    </div>
  )
}

export default About
