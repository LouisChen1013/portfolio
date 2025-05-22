const Experience = () => {
  return (
    <section className="s3">
      <div className="main-container">
        <h3 style={{ textAlign: "center" }}>Selected Working Experience</h3>
        <div className="work">
          <h5>Backend Developer</h5>
          <h6>Bat Mobile Data Technology Co., Ltd.</h6>
          <h6>OCTOBER 2021 - PRESENT</h6>
          <ul>
            <li>
              Processed and optimized large-scale data (250,000–300,000
              entries/month) in collaboration with the data team, ensuring data
              quality and performance.
            </li>
            <li>
              Introduced and configured a load balancer to handle high traffic
              for a platform with 70,000+ registered users and 5,000+ monthly
              active users, improving system stability and performance.
            </li>
            <li>
              Built CI/CD pipelines with rolling updates, enabling zero-downtime
              deployments and accelerating release cycles.
            </li>
            <li>
              Implemented real-time error monitoring with GCP Error Reporting
              and Sentry, reducing incident response time from hours to minutes.
            </li>
            <li>
              Designed and launched full project infrastructure on GCP from
              scratch, including system architecture, database schema, backend
              services, and cloud provisioning.
            </li>
          </ul>
        </div>
        <div className="work">
          <h5>Full Stack Developer</h5>
          <h6>Contract @ BCIT School of Computing and Academic Studies</h6>
          <h6>SEPTEMBER 2020 - DECEMBER 2020</h6>
          <ul>
            <li>
              Developed a management dashboard (CMS) that allowed faculty
              members/instructors to monitor and manage ISSP projects
            </li>
            <li>
              Collaborated closely with other team members to analyze feature
              requirements, strategize implementation solutions, and deliver a
              written program based on clients' specifications
            </li>
            <li>
              Researched and transformed clients' ideas and vision into a fully
              functional MVP
            </li>
            <li>
              Applied Agile development to gather user feedback and respond
              constructively
            </li>
            <li>
              Successfully optimized employees' workflow efficiency and further
              reduced the workload of our clients
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Experience;
