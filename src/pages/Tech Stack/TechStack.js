import React from "react";
import "./TechStack.css";
import { TechstackList } from "../../utils/TechStackList";
const Techstack = () => {
return (
    <>
    <div className="container techstack" id="techstack">
        <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
            Technology Stack
        </h2>
        <hr />
        <p className="pb-3 text-center">
            👉 including programming Languages, frameworks, databses, front-end
            and back-end tools, and APIs
        </p>
        <div className="row">
        {TechstackList.map((tech) => (
            <div key={tech._id} className="tech-card">
                <div className="card m-2">
                <div className="card-content">
                    <div className="card-body">
                    <div className="media d-flex justify-content-center">
                        <div className="alig-self-center">
                        <tech.icon className="tech-icon" />
                        </div>
                        <div className="media-body">
                        <h5>{tech.name}</h5>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        ))}
        </div>
    </div>
    </>
);
};

export default Techstack;
