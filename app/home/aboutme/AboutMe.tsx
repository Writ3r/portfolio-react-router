import { Row, Col } from "react-bootstrap";
import {
  faCode,
  faCodeBranch,
  faGraduationCap,
  faGamepad,
  faHiking,
  faHammer,
} from "@fortawesome/free-solid-svg-icons";
import {
  FontAwesomeIcon,
  type FontAwesomeIconProps,
} from "@fortawesome/react-fontawesome";
import { SectionTitle } from "~/components/ui/Section";

const Skill = (props: {
  name: string;
  desc: string;
  fontAwesomeIconProps: FontAwesomeIconProps;
}) => {
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
      <SectionTitle text="About Me" />
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
            desc="Problems exist to be solved. I intend to facilitate that process to its logical conclusion."
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
            desc="Gaming is a great social experience. Some games I play - Destiny 2, HellDivers 2, and OSRS."
            fontAwesomeIconProps={{
              icon: faGamepad,
              size: "2x",
              className: "fa-purple-icon",
            }}
          />
          <Skill
            name="Hiker"
            desc="Hiking is my preferred method to experience world. It's both calming and great exercise."
            fontAwesomeIconProps={{
              icon: faHiking,
              size: "2x",
              className: "fa-blue-icon",
            }}
          />
          <Skill
            name="Home Improver"
            desc="I've rewired my house to modern electrical code and ran ethernet to every room. It's satisfying to solve physical problems."
            fontAwesomeIconProps={{
              icon: faHammer,
              size: "2x",
              className: "fa-teal-icon",
            }}
          />
        </Col>
      </Row>
    </section>
  );
}
