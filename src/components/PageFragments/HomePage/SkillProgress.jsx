import React from 'react';
import { Row, Col } from 'antd';
import ProgressBar from '../../Progress';

const SkillsProgress = () => (
  <div>
    <h2>Mes compètences</h2>
    <Row gutter={[20, 20]}>
      <Col xs={24} sm={24} md={12}>

        <ProgressBar
          percent={70}
          text="Javascript"
        />
        <ProgressBar
          percent={50}
          text="ReactJS"
        />
        <ProgressBar
          percent={50}
          text="Gatsby"
        />
        <ProgressBar
          percent={60}
          text="jQuery"
        />
      </Col>
      <Col xs={24} sm={24} md={12}>
        <ProgressBar
          percent={70}
          text="CSS"
        />
        <ProgressBar
          percent={50}
          text="Firebase"
        />
        <ProgressBar
          percent={50}
          text="Netlify"
        />
        <ProgressBar
          percent={70}
          text="Wordpress"
        />
      </Col>
    </Row>
  </div>
);

export default SkillsProgress;
