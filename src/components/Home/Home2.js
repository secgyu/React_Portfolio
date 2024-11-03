import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/icon.png";
import Tilt from "react-parallax-tilt";
import { SiNaver } from "react-icons/si";
import { SiGmail } from "react-icons/si";
import {
  AiFillGithub,
  AiFillInstagram,
} from "react-icons/ai";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
         <h1 style={{ fontSize: "2.6em", color:"white"}}>
            LET ME <span className="purple"> INTRODUCE </span> MYSELF
          </h1>
        <Row>
          <Col md={8} className="home-about-description">
            <p className="home-about-body" style={{textAlign:"center"}}>
              저는 프론트엔드 개발자이고, 주어진 역할에 열심히 하는 편 입니다. 🤷‍♂️
              <br />
              <br />저는 이러한 언어를 다룰줄 압니다.➡️
              <i>
                <b className="purple"> C, Java, and Python. </b>
              </i>
              <br />
              <br />
              제 관심분야는 &nbsp;
              <i>
                <b className="purple">웹기술로 페이지 만드는것 </b> 과
                {" "}
                <b className="purple">
                  AI분야 입니다.
                </b>
              </i>
              <br />
              <br />
              저는 시간이 날 때 마다 <b className="purple">React</b> 와
              <i>
                <b className="purple">
                  {" "}
                  Python
                </b>
              </i>
              &nbsp; 으로 개발 공부합니다.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" style={{width:"60%"}}/>
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/secgyu"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/jjangg_gu/?next=%2F"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="mailto:rbals1915@naver.com"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <SiNaver />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="mailto:abc2232002@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <SiGmail />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
