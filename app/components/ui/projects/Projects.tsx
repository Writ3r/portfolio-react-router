import React, { useState } from "react";
import {
  Nav,
  Row,
  Col,
  TabContainer,
  NavItem,
  NavLink,
  TabContent,
  TabPane,
} from "react-bootstrap";

export function Projects() {
  // react-bootstrap's active key appears broken with SSR, so need to manage it myself..
  const [key, setKey] = useState("dc");
  return (
    <section id="projects" className="pageAnchor">
      <h2 className="my-5 h3 text-center">Projects</h2>
      <TabContainer id="left-tabs-example" defaultActiveKey="first">
        <Row>
          <Col sm={3}>
            <Nav
              variant="pills"
              className="flex-column lucas-pills projects-pills"
              defaultActiveKey="dc"
            >
              <NavItem>
                <NavLink active={key === "dc"} onClick={() => setKey("dc")} eventKey="dc">
                  Digital Command
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink active={key === "mp"} onClick={() => setKey("mp")} eventKey="mp">Master Plan</NavLink>
              </NavItem>
              <NavItem>
                <NavLink active={key === "km"} onClick={() => setKey("km")} eventKey="km">KSSPE Management</NavLink>
              </NavItem>
              <NavItem>
                <NavLink active={key === "cc"} onClick={() => setKey("cc")} eventKey="cc">Clothes Closet</NavLink>
              </NavItem>
              <NavItem>
                <NavLink active={key === "hm"} onClick={() => setKey("hm")} eventKey="hm">Honorable Mentions</NavLink>
              </NavItem>
            </Nav>
          </Col>
          <Col sm={9}>
            <TabContent>
              <TabPane active={key === "dc"} eventKey="dc">
                First tab content
              </TabPane>
              <TabPane active={key === "mp"} eventKey="mp">Second tab content</TabPane>
              <TabPane active={key === "km"} eventKey="km">Second tab content</TabPane>
              <TabPane active={key === "cc"} eventKey="cc">Second tab content</TabPane>
              <TabPane active={key === "hm"} eventKey="hm">Second tab content</TabPane>
            </TabContent>
          </Col>
        </Row>
      </TabContainer>
    </section>
  );
}
