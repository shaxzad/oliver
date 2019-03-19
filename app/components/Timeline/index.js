/**
 *
 * Timeline
 *
 */

import React from 'react';
import { Carousel, Col, Row } from 'antd';
import './Timeline.css';
import img1 from '../../images/personal-page-1-88x26.png';
import img2 from '../../images/personal-page-2-39x30.png';
import img3 from '../../images/personal-page-3-71x21.png';
import img4 from '../../images/personal-page-4-34x27.png';
import img5 from '../../images/personal-page-5-34x27.png';

function Timeline() {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
  };
  return (
    <div className="timeline_edu section section-lg bg-gray-900 section-triangle center novi-background bg-cover">
      <Row>
        <Col md={{ span: 24 }}>
          <h2 className="timeline-heading">My Education & Experience</h2>
        </Col>
      </Row>
      <Row className="custom-row">
        <Carousel autoplay {...settings}>
          <Col xm={24} sm={12} md={6} lg={6}>
            <div className="timeline-classic-item">
              <div className="timeline-classic-media">
                <img
                  className="timeline-classic-image"
                  src={img1}
                  alt=""
                  width="88"
                  height="26"
                />
              </div>
              <p className="timeline-classic-time heading-4">2019</p>
              <div className="timeline-classic-divider" />
              <h4 className="timeline-classic-title">
                Freelance copywriter based in New York
              </h4>
              <p className="timeline-para">
                After 2019, I decided to pursue freelance copywriting as it
                allows me to accomplish more without limiting my free time.
              </p>
            </div>
          </Col>
          <Col xm={24} sm={12} md={6} lg={6}>
            <div className="timeline-classic-item">
              <div className="timeline-classic-media">
                <img
                  className="timeline-classic-image"
                  src={img2}
                  alt=""
                  width="39"
                  height="30"
                />
              </div>
              <p className="timeline-classic-time heading-4">2019</p>
              <div className="timeline-classic-divider" />
              <h4 className="timeline-classic-title">
                Freelance copywriter based in New York
              </h4>
              <p className="timeline-para">
                After 2019, I decided to pursue freelance copywriting as it
                allows me to accomplish more without limiting my free time.
              </p>
            </div>
          </Col>
          <Col xm={24} sm={12} md={6} lg={6}>
            <div className="timeline-classic-item">
              <div className="timeline-classic-media">
                <img
                  className="timeline-classic-image"
                  src={img3}
                  alt=""
                  width="71"
                  height="21"
                />
              </div>
              <p className="timeline-classic-time heading-4">2019</p>
              <div className="timeline-classic-divider" />
              <h4 className="timeline-classic-title">
                Freelance copywriter based in New York
              </h4>
              <p className="timeline-para">
                After 2019, I decided to pursue freelance copywriting as it
                allows me to accomplish more without limiting my free time.
              </p>
            </div>
          </Col>
          <Col xm={24} sm={12} md={6} lg={6}>
            <div className="timeline-classic-item">
              <div className="timeline-classic-media">
                <img
                  className="timeline-classic-image"
                  src={img4}
                  alt=""
                  width="34"
                  height="27"
                />
              </div>
              <p className="timeline-classic-time heading-4">2019</p>
              <div className="timeline-classic-divider" />
              <h4 className="timeline-classic-title">
                Freelance copywriter based in New York
              </h4>
              <p className="timeline-para">
                After 2019, I decided to pursue freelance copywriting as it
                allows me to accomplish more without limiting my free time.
              </p>
            </div>
          </Col>
          <Col xm={24} sm={12} md={6} lg={6}>
            <div className="timeline-classic-item">
              <div class="timeline-classic-media">
                <img
                  className="timeline-classic-image"
                  src={img5}
                  alt=""
                  width="34"
                  height="27"
                />
              </div>
              <p className="timeline-classic-time heading-4">2019</p>
              <div className="timeline-classic-divider" />
              <h4 className="timeline-classic-title">
                Freelance copywriter based in New York
              </h4>
              <p className="timeline-para">
                After 2019, I decided to pursue freelance copywriting as it
                allows me to accomplish more without limiting my free time.
              </p>
            </div>
          </Col>
        </Carousel>
      </Row>
    </div>
  );
}

Timeline.propTypes = {};

export default Timeline;
