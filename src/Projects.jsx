import React from "react";
import ProjectCard from "./ProjectCard";
import project1Img from "../src/assets/Screenshot (22).png"; 
import project2Img from "../src/assets/Screenshot (26).png"; 
import project3Img from "../src/assets/Screenshot (25).png"; 


const Projects = () => {
  return (
    <div id="Projects" className="p-10 md:p-24 text-white ">
      <h1 className="text-2xl md:text-4xl text-white font-bold">Projects</h1>
      <div className="py-12 px-8 flex flex-wrap gap-5">
        <ProjectCard
          title="Al-Mango"
          main="A robust and responsive website for Choosing And Ordering items from a large menu Using REACT components"
          projectImg={project1Img} 
           demoLink="https://almango.netlify.app/"
        />
        <ProjectCard
          title="Go Miles "
          main="A website created for taking surway  of clients and booking their preferred travel packages "
          projectImg={project2Img} 
           demoLink="https://gomilesbooking.netlify.app/"
        />
        <ProjectCard
          title="Pre-Plan"
          main="A responsive Webpage for updating  and displaying scheduled classes using react 
          and node.js for server side rendering"
          projectImg={project3Img} 
        />
      </div>
    </div>
  );
};

export default Projects;