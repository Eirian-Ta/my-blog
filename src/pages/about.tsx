import React from 'react';

import { Content } from '../content/Content';
import { Hero } from '../hero/Hero';
import { Meta } from '../layout/Meta';
import { Base } from '../templates/Base';
import { Config } from '../utils/Config';

const About = () => (
  <Base
    meta={
      <Meta title={`${Config.title}`} description={Config.description} />
  }
    hero={<Hero title={Config.title} description={Config.description} />}
  >

    <Content>
      <p className="aboutPara">
        Just a place to store some of my writings.
      </p>
      <p className="aboutPara">
        Chỉ là một nơi tôi cất giữ những dòng ghi chép vụn vặt của bản thân.
      </p>
    </Content>
  </Base>
);

export default About;
