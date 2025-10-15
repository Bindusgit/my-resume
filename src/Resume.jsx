import React from 'react';
import './Resume.css';

function Header({ name, title, profilePic }) {
  return (
    <header className="resume-header">
      <div className="profile-pic-container">
        <img src={profilePic} alt="Profile" className="profile-pic" />
      </div>
      <h1>{name}</h1>
      <p className="title">{title}</p>
    </header>
  );
}

function Contact({ email, phone, address }) {
  return (
    <section className="contact-section">
      <h2>Contact</h2>
      <p>Email: <a href={`mailto:${email}`}>{email}</a></p>
      <p>Phone: {phone}</p>
      <p>Address: {address}</p>
    </section>
  );
}

function Skills({ skills = [] }) {
  return (
    <section className="skills-section">
      <h2>Skills</h2>
      <ul className="skills-list">
        {skills.map((skill, i) => <li key={i}>{skill}</li>)}
      </ul>
    </section>
  );
}

function Languages({ languages = [] }) {
  return (
    <section className="languages-section">
      <h2>Languages</h2>
      <ul className="languages-list">
        {languages.map((language, i) => <li key={i}>{language}</li>)}
      </ul>
    </section>
  );
}

function Hobbies({ hobbies = [] }) {
  return (
    <section className="hobbies-section">
      <h2>Hobbies</h2>
      <ul className="hobbies-list">
        {hobbies.map((hobby, i) => <li key={i}>{hobby}</li>)}
      </ul>
    </section>
  );
}

function Profile({ text }) {
  return (
    <section className="profile-section">
      <h2>Profile</h2>
      <p>{text}</p>
    </section>
  );
}

function Experience({ items = [] }) {
  return (
    <section className="experience-section">
      <h2>Work Experience</h2>
      {items.map(({ role, company, duration, description }, idx) => (
        <div key={idx} className="experience-item">
          <h3>{role} <span className="company">@ {company}</span></h3>
          <p className="duration">{duration}</p>
          <p>{description}</p>
        </div>
      ))}
    </section>
  );
}

function Education({ items = [] }) {
  return (
    <section className="education-section">
      <h2>Education</h2>
      {items.map(({ degree, institution, year }, idx) => (
        <div key={idx} className="education-item">
          <h3>{degree}</h3>
          <p>{institution} — {year}</p>
        </div>
      ))}
    </section>
  );
}

export default function Resume() {
  const data = {
    name: 'Bindu',
    title: 'Software Engineer',
    profilePic: '/src/assets/profilepic.avif',  // Replace with the actual image path

    contact: {
      email: 'bindu@gmail.vcom',
      phone: '99087886768',
      address: '#1 Road, City/State-pin code'
    },
    skills: ['HTML', 'CSS', 'Python', 'JavaScript', 'React', 'SQL'],
    languages: ['English: Proficient', 'Hindi: Proficient'],
    hobbies: ['Playing', 'Cricket', 'Music'],
    profileText: 'I am a software engineer with experience in a variety of programming languages and a track record of delivering high-quality code. I am skilled in problem-solving and have a strong background in computer science.',

    experience: [
      {
        role: 'Senior Software Developer',
        company: 'CGS',
        duration: 'Oct 2023 — Sep 2023',
        description: 'Developed and maintained software using Java, Python, and C++. Led cross-functional teams to deliver successful software projects.'
      },
      {
        role: 'Web Developer',
        company: 'Adroit',
        duration: 'Jan 2021 — Dec 2021',
        description: 'Developed and maintained various web applications using HTML, CSS, JavaScript, and PHP. Worked with cross-functional teams to gather requirements and design user interfaces.'
      }
    ],
    education: [
      { degree: 'Computer Science and Engineering', institution: 'Chintalapudi Engineering College, Ponnur', year: 'Jan 2019 — Dec 2020' },
    ]
  };

  return (
    <main className="resume-container">
      <div className="resume-sidebar">
        <Header name={data.name} title={data.title} profilePic={data.profilePic} />
        <Contact {...data.contact} />
        <Skills skills={data.skills} />
        <Languages languages={data.languages} />
        <Hobbies hobbies={data.hobbies} />
      </div>

      <div className="resume-main">
        <Profile text={data.profileText} />
        <Experience items={data.experience} />
        <Education items={data.education} />
      </div>
    </main>
  );
}
