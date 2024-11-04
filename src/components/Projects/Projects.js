import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          최근 <strong className="purple">작품 </strong>
        </h1>
        <p style={{ color: "white" }}>
          최근에 했던 작업들을 소개합니다.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="BDIA"
              description="BDIA Devton 2024"
              ghLink="https://github.com/secgyu/BDIA-Devton"
              demoLink="https://smartadmin.aictlab.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="울산정보산업진흥원"
              description="2024 AI테크데이 해커톤 경진대회"
              ghLink="https://github.com/secgyu/Ulsan_AI"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="선문대학교"
              description="2024 마이크로소프트 클라우드를 활용한 인공지능 서비스 개발 경진대회"
              ghLink="https://github.com/secgyu/Microsoft-x-cloud"            
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="JobScrapper"
              description="원격으로 일할 수 있는 직업을 검색해주는 웹 애플리케이션입니다. Flask를 이용하여 개발되었으며, RemoteOK와 WeWorkRemotely에서 채용 정보를 스크래핑합니다."
              ghLink="https://github.com/secgyu/Nomad"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Weather App"
              description="리액트를 활용하여 실제 API를 호출하여 실시간으로 날씨를 볼 수 있는 앱 구현"
              ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
              demoLink="http://weatherapp-khaki-psi.vercel.app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="rock scissors paper"
              description="리액트를 활용하여 실제 API를 호출하여 실시간으로 날씨를 볼 수 있는 앱 구현"
              ghLink="https://github.com/secgyu/rcp"
              demoLink="http://rcp-chi.vercel.app"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
