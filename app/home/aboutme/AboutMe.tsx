import { Row, Col } from "react-bootstrap";
import {
  faCode,
  faCodeBranch,
  faGraduationCap,
  faGamepad,
  faHiking,
  faWalking,
} from "@fortawesome/free-solid-svg-icons";
import {
  FontAwesomeIcon,
  type FontAwesomeIconProps,
} from "@fortawesome/react-fontawesome";

type SkillInput = {
  name: string;
  desc: string;
  fontAwesomeIconProps: FontAwesomeIconProps;
};

const Skill = (props: SkillInput) => {
  const updatedFAProps = {
    ...props.fontAwesomeIconProps,
    className:
      props.fontAwesomeIconProps.className +
      " animate__animated animate__pulse animate__infinite",
  };
  return (
    <Row className="row about-me-item">
      <Col xs={1} className="mr-3">
        <FontAwesomeIcon {...updatedFAProps} />
      </Col>
      <Col xs={10}>
        <h5>{props.name}</h5>
        <p className="grey-text">{props.desc}</p>
      </Col>
    </Row>
  );
};

export function AboutMe() {
  return (
    <section id="about">
      <h3 className="h3 text-center mb-5">About Me</h3>
      <Row className="row">
        <Col lg="6" md="12" className="px-4">
          <Skill
            name="Engineer"
            desc="Engineering new and interesting projects is my jam. It's satisfying turning an idea into a design."
            fontAwesomeIconProps={{
              icon: faCode,
              size: "2x",
              className: "fa-purple-icon",
            }}
          />
          <Skill
            name="Developer"
            desc="Developing code to fit project specifications is delightful. I love implementing new and interesting designs."
            fontAwesomeIconProps={{
              icon: faCodeBranch,
              size: "2x",
              className: "fa-blue-icon",
            }}
          />
          <Skill
            name="Problem Solver"
            desc="Problems exist to be solved. My goal is to help that process along."
            fontAwesomeIconProps={{
              icon: faGraduationCap,
              size: "2x",
              className: "fa-teal-icon",
            }}
          />
        </Col>
        <Col lg="6" md="12">
          <Skill
            name="Gamer"
            desc="Destiny, League of Legends, Minecraft, etc. Have played, and love them all."
            fontAwesomeIconProps={{
              icon: faGamepad,
              size: "2x",
              className: "fa-purple-icon",
            }}
          />
          <Skill
            name="Hiker"
            desc="Mountains, valleys, deserts, fields. Hiking is my preferred method to experience it all."
            fontAwesomeIconProps={{
              icon: faHiking,
              size: "2x",
              className: "fa-blue-icon",
            }}
          />
          <Skill
            name="Walker"
            desc="Turn on some music, chillax, and take a few mile walk. That's the life I like to live."
            fontAwesomeIconProps={{
              icon: faWalking,
              size: "2x",
              className: "fa-teal-icon",
            }}
          />
        </Col>
      </Row>
    </section>
  );
}
