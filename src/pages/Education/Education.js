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
        <div className="education" id="education">
            <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
            Education Details
            </h2>
            <hr />
            <VerticalTimeline>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
                    date="2021 - present"
                    iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
                    icon={<MdSchool />}
                >
                    <h3 className="vertical-timeline-element-title">
                        ABES Engineering College
                    </h3>

                    <h5 className="vertical-timeline-element-subtitle">
                        Ghaziabad, Uttar Pradesh
                    </h5>
                        <p>
                            Computer Science and Engineering Student 
                            Grade - 8.15 CGPA
                        </p>
                </VerticalTimelineElement>
                
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
                    date="2020 - 2021"
                    iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
                    icon={<MdSchool />}
                >
                    <h3 className="vertical-timeline-element-title">
                        DAV Centenary Public School
                    </h3>
                    <h5 className="vertical-timeline-element-subtitle">
                        Ghaziabad, Uttar Pradesh
                    </h5>
                    <p>
                        Senior Secondary School Student <br/>
                        Grade - 95.5%
                    </p>
                </VerticalTimelineElement>

                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="2018 - 2019"
                    iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
                    icon={<LiaUniversitySolid />}
                >
                    <h3 className="vertical-timeline-element-title">
                        DAV Centenary Public School
                    </h3>
                    <h5 className="vertical-timeline-element-subtitle">
                        Ghaziabad, Uttar Pradesh
                    </h5>
                    <p>
                        Secondary School Student <br />
                        Grade - 93.8%
                    </p>
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
