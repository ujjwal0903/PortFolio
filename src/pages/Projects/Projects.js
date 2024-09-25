import React from "react";
import "./Projects.css";

const Projects = () => {
    return (
        <>
        <div className="container project" id="projects">
            <h1 className="col-12 mt-3 mb-1 text-center text-uppercase">
            TOP RECENT PROJECTS
            </h1>
            <hr />
            <p className="pb-3 text-center">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia a
            odit ab, eligendi cupiditate, minima quasi excepturi modi et quo
            delectus, iusto dolor atque aliquam aspernatur eveniet! Ipsam eum
            nobis omnis id voluptatibus quas eos maxime ipsum face
            </p>
            <div className="row" id="ads">
                <div className="col-md-3 custom-col">
                <div className="card rounded">
                    <div className="card-image">
                    <span className="card-notify-badge">Full stack</span>
                    <img
                        src="https://unctad.org/sites/default/files/2021-03/2021-03-15_eCommerceCOVID19report-1-1220x675px.jpg"
                        alt="project1"
                    />
                    </div>
                    <div className="card-image-overly m-auto mt-3">
                    <span className="card-detail-badge">JavaScript</span>
                    <span className="card-detail-badge">React</span>
                    </div>
                    <div className="card-body text-center">
                    <div className="ad-title m-auto">
                        <h6 className="text-uppercase">
                        EStreet
                        </h6>
                    </div>
                    <a
                        className="ad-btn"
                        href="##"
                    >
                        View
                    </a>
                    </div>
                </div>
                </div>
                <div className="col-md-3 custom-col">
                <div className="card rounded">
                    <div className="card-image">
                    <span className="card-notify-badge">Full Stack</span>
                    <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR356D-1YtSagN4-_ZdjZ5H9o6PKUO4h12dvw&usqp=CAU"
                        alt="project2"
                    />
                    </div>
                    <div className="card-image-overly m-auto mt-3">
                    <span className="card-detail-badge">React</span>
                    <span className="card-detail-badge">Redux</span>
                    <span className="card-detail-badge">Firebase</span>
                    </div>
                    <div className="card-body text-center">
                    <div className="ad-title m-auto">
                        <h5 className="text-uppercase">Netflix Clone</h5>
                    </div>
                    <a
                        className="ad-btn"
                        href="https://github.com/ujjwal0903/Netflix-GPT"
                    >
                        View
                    </a>
                    </div>
                </div>
                </div>
                <div className="col-md-3 custom-col">
                <div className="card rounded">
                    <div className="card-image">
                    <span className="card-notify-badge">Full Stack</span>
                    <img
                        src="https://www.nextwebi.com/assets/img/img-source/mobile-top-banner-28.png"
                        alt="project3"
                    />
                    </div>
                    <div className="card-image-overly m-auto mt-3">
                    <span className="card-detail-badge">Node</span>
                    <span className="card-detail-badge">Express</span>
                    <span className="card-detail-badge">AppWrite</span>
                    </div>
                    <div className="card-body text-center">
                    <div className="ad-title m-auto">
                        <h5 className="text-uppercase">Blogging Website</h5>
                    </div>
                    <a 
                        className="ad-btn" 
                        href="https://github.com/ujjwal0903/ReactJS/tree/main/Blogs4You"
                    >
                        View
                    </a>
                    </div>
                </div>
                </div>
            </div>
        </div>
        </>
    );
};

export default Projects;
