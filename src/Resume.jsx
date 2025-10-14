import React from 'react'
import './Resume.css'

function Header({ name, title }) {
  return (
    <header className="resume-header">
      <h1>{name}</h1>
      <p className="title">{title}</p>
    </header>
  )
}

function Contact({ email, phone, website }) {
  return (
    <section className="section contact">
      <h2>Contact</h2>
      <ul>
        {email && (
          <li>
            Email: <a href={`mailto:${email}`}>{email}</a>
          </li>
        )}
        {phone && <li>Phone: {phone}</li>}
        {website && (
          <li>
            Website: <a href={website} target="_blank" rel="noreferrer">{website}</a>
          </li>
        )}
      </ul>
    </section>
  )
}

function Experience({ items = [] }) {
  return (
    <section className="section">
      <h2>Experience</h2>
      {items.map((it, idx) => (
        <div key={idx} className="item">
          <h3>{it.role} — <span className="company">{it.company}</span></h3>
          <p className="duration">{it.duration}</p>
          <p>{it.description}</p>
        </div>
      ))}
    </section>
  )
}

function Education({ items = [] }) {
  return (
    <section className="section">
      <h2>Education</h2>
      {items.map((it, idx) => (
        <div key={idx} className="item">
          <h3>{it.degree}</h3>
          <p className="company">{it.institution} — {it.year}</p>
        </div>
      ))}
    </section>
  )
}

function Skills({ skills = [] }) {
  return (
    <section className="section">
      <h2>Skills</h2>
      <ul className="skills">
        {skills.map((s, i) => (
          <li key={i}>{s}</li>
        ))}
      </ul>
    </section>
  )
}

export default function Resume() {
  const data = {
    name: 'Your Name',
    title: 'Frontend Engineer',
    contact: {
      email: 'you@example.com',
      phone: '+1 (555) 555-5555',
      website: 'https://your-site.example'
    },
    experience: [
      {
        role: 'Frontend Developer',
        company: 'Acme Co.',
        duration: '2022 — Present',
        description: 'Built components, improved performance and accessibility.'
      },
    ],
    education: [
      { degree: 'B.Sc. Computer Science', institution: 'University X', year: '2021' }
    ],
    skills: ['React', 'JavaScript', 'TypeScript', 'HTML', 'CSS']
  }

  return (
    <main className="resume-root" id="resume-root">
      <div className="resume-card">
        <Header name={data.name} title={data.title} />

        <div className="two-col">
          <div>
            <Contact {...data.contact} />
            <Skills skills={data.skills} />
          </div>
          <div>
            <Experience items={data.experience} />
            <Education items={data.education} />
          </div>
        </div>

        <div className="actions">
          <button onClick={() => window.print()}>Print / Save as PDF</button>
          <a className="download-link" href="/src/assets/resume.pdf" download>Download PDF</a>
        </div>
      </div>
    </main>
  )
}
