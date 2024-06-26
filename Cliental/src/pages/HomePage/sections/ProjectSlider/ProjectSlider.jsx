import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "./ProjectSlider.css";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import ProjectCard from "../../../../components/ProjectCard/ProjectCard";
import { PROJECTS } from "../../../../common/constants";
import { NavLink } from "react-router-dom";

const ProjectSlider = () => {
  const chunkProjects = (projects, size) => {
    const chunks = [];
    for (let i = 0; i < projects.length; i += size) {
      chunks.push(projects.slice(i, i + size));
    }
    return chunks;
  };

  const projectChunks = chunkProjects(PROJECTS, 4);
  const projectChunksMobile = chunkProjects(PROJECTS, 1);
  const [itemId, setItemId] = useState(1);
  return (
    <div className="slider-wrapper">
      <div id="portfolio"></div>
      <div className="text">НАШИТЕ ПРОЕКТИ</div>

      {/* Non-mobile Swiper */}
      <Swiper
        pagination={{ dynamicBullets: true }}
        modules={[Pagination]}
        className="mySwiper non-mobile-swiper"
      >
        {projectChunks.map((chunk, index) => {

          return (
            <SwiperSlide key={index}>
              {chunk.map((project, i) => {
                const uniqueKey = itemId + i;
                return (
                  <NavLink
                    key={uniqueKey}
                    style={{ textDecoration: "none" }}
                    target="_blank"
                    to={project.url}
                  >
                    <div className="item">
                      <ProjectCard project={project} />
                    </div>
                  </NavLink>
                );
              })}
            </SwiperSlide>
          );
        })}
      </Swiper>

      {/* Mobile Swiper */}
      <Swiper
        pagination={{ dynamicBullets: true }}
        modules={[Pagination]}
        className="mySwiper mobile-swiper"
      >
        {projectChunksMobile.map((chunk, index) => (
          <SwiperSlide key={index}>
            {chunk.map((project, i) => (
              <NavLink
                key={project.id} // Add a unique key here
                style={{ textDecoration: "none" }}
                target="_blank"
                to={project.url}
              >
                <div key={i} className="item">
                  <ProjectCard project={project} />
                </div>
              </NavLink>
            ))}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ProjectSlider;
