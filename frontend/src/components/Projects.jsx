import { useEffect, useState } from "react";
import API from "../services/api";

function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    API.get("/projects").then((res) => {
      setProjects(res.data);
    });
  }, []);

  return (
    <div className="grid grid-cols-3 gap-6 p-10">
      {projects.map((p) => (
        <div className="shadow-lg p-4 rounded">
          <h2 className="text-xl font-bold">{p.title}</h2>
          <p>{p.description}</p>
          <a href={p.github} className="text-blue-500">
            Github
          </a>
        </div>
      ))}
    </div>
  );
}

export default Projects;
