import React from "react";
import { MdSchool } from "react-icons/md";
import { LiaUniversitySolid } from "react-icons/lia";
import { FaStar } from "react-icons/fa";
import {
VerticalTimeline,
VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "./Education.css";

const Education = () => {
return (
<>
    <div className=" education" id="education">
    <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
        Education Details
    </h2>
    <hr />
    <VerticalTimeline>
        <VerticalTimelineElement
        className="vertical-timeline-element--work"
        // contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
        contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
        date="2011 - present"
        iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
        icon={<MdSchool />}
        >
        <h3 className="vertical-timeline-element-title">
            Creative Director
        </h3>
        <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
        <p>
            Creative Direction, User Experience, Visual Design, Project
            Management, Team Leading
        </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
        className="vertical-timeline-element--work"
        // contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
        contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
        date="2011 - present"
        iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
        icon={<MdSchool />}
        >
        <h3 className="vertical-timeline-element-title">
            Creative Director
        </h3>
        <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
        <p>
            Creative Direction, User Experience, Visual Design, Project
            Management, Team Leading
        </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="2008 - 2010"
        iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
        icon={<LiaUniversitySolid />}
        >
        <h3 className="vertical-timeline-element-title">Web Designer</h3>
        <h4 className="vertical-timeline-element-subtitle">
            Los Angeles, CA
        </h4>
        <p>User Experience, Visual Design</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
        iconStyle={{ background: "rgb(16, 204, 82)", color: "#fff" }}
        icon={<FaStar />}
        />
    </VerticalTimeline>
    </div>
</>
);
};

export default Education;
