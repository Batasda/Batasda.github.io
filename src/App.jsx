import React from 'react'

function Section({title, children}) {
  return (
    <section className="section">
      <h3>{title}</h3>
      <div>{children}</div>
    </section>
  )
}

export default function App() {
  return (
    <div className="container">
      <header className="header">
        <h1>Batgerel</h1>
        <p className="subtitle">Frontend Developer — React</p>
        <div className="meta">
          <span>Email: batgerel@example.com</span>
          <span>Phone: +123 456 7890</span>
          <a href="#" className="link">Portfolio</a>
          <a href="#" className="link">GitHub</a>
        </div>
      </header>

      <main>
        <Section title="Summary">
          <p>Passionate frontend developer with experience building user-focused React applications. Comfortable with component design, state management, and responsive UI.</p>
        </Section>

        <Section title="Skills">
          <ul className="skills">
            <li>React / React Hooks</li>
            <li>JavaScript (ES6+)</li>
            <li>HTML & CSS / Responsive design</li>
            <li>Vite / Build tools</li>
          </ul>
        </Section>

        <Section title="Experience">
          <div className="job">
            <strong>Frontend Developer</strong> — Example Company
            <div className="job-meta">2022 – Present</div>
            <p>Built and maintained React components, implemented responsive layouts, and improved performance.</p>
          </div>
        </Section>

        <Section title="Education">
          <div>Bachelor's Degree in Computer Science</div>
        </Section>

        <Section title="Projects">
          <ul>
            <li>Personal portfolio — React + Vite</li>
            <li>Task manager app — localStorage + React</li>
          </ul>
        </Section>
      </main>
    </div>
  )
}