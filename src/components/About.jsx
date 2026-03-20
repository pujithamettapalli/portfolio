import React from "react";

function About() {
  return (
    <section id="about">
      <h2>About Me</h2>
      <h4>Student Developer</h4>

      <p>
        I am a Computer Science student with strong interest in web development
        and modern technologies. I enjoy creating responsive and user-friendly
        web applications using HTML, CSS, JavaScript and React.
      </p>
      <h3>Education</h3>
<table className="education-table">
  <thead>
    <tr>
      <th>Qualification</th>
      <th>Institution</th>
      <th>Year</th>
      <th>Score</th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>B.Tech – Computer Science and Engineering</td>
      <td>Sri Vasavi Engineering College</td>
      <td>2024 – 2028</td>
      <td> 9.35 (till now)</td>
    </tr>

    <tr>
      <td>Intermediate (12th)</td>
      <td>Sasi Junior College</td>
      <td>2022 – 2024</td>
      <td>94% </td>
    </tr>

    <tr>
      <td>SSC (10th)</td>
      <td>Sasi English Medium School</td>
      <td>2021 – 2022</td>
      <td>566 / 600</td>
    </tr>
  </tbody>
</table>
      <h3>Technical skills</h3>
      <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>python</li>
        <li>SQL</li>
      </ul>

    </section>
  );
}

export default About;