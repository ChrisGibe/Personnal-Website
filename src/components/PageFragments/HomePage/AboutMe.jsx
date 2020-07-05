import React from 'react';
import { Row, Col } from 'antd';
import AboutTile from '../../AbouTile';
import { stripTags, domHtml } from '../../../utils/stripTags';
import SEO from '../../Seo';

const pageText = {
  paraOne: `Salut !! Je m'appelle GIBELLI Christophe. 
    Je suis un développeur web front end passionné par diverses technologies web. 
    J'ai obtenu mon diplôme en suivant une formation chez OpenClassrooms. 
    Consultez mon blog que je mets à jour chaque semaine pour trouver du Javascript et des notes intéressantes 
    sur les technologies Web ainsi que mon expérience de freelance.`,
  paraTwo: `Actuellement, je travaille principalement avec des technologies Javascript comme ReactJS. 
    Je suis également un fervent utilisateur de GatsbyJs. 
    J'utilise également Firebase pour la gestion de mon backend et je déploie des applications en gardant à l'esprit l'évolutivité. 
    Je suis toujours un apprenant et un programmeur autodidacte..`,
};
const AboutMe = () => {
  const description = `${pageText.paraOne} ${stripTags(pageText.paraTwo)}`;
  return (
    <>
      <div>
        <SEO
          title="Acceuil"
          description={description}
          path=""
          keywords={['Gibelli', 'Christophe', 'Nice', 'Développeur FRONT END', 'Freelance', 'Javascript', 'ReactJS', 'Gatsby']}
        />
        <h1 className="titleSeparate">À propos de moi</h1>
        <p>
          {pageText.paraOne}
        </p>
        <p dangerouslySetInnerHTML={domHtml(pageText.paraTwo)} />
      </div>
      <Row gutter={[20, 20]}>
        <Col xs={24} sm={24} md={12} lg={8}>
          <AboutTile
            img="location.png"
            height={60}
            alt="location image"
            textH4="Né à"
            textH3="Menton, FRANCE"
          />
        </Col>
        <Col xs={24} sm={24} md={12} lg={8}>
          <AboutTile
            img="café.png"
            alt="café image"
            textH4="J'adore le café"
            textH3="Café + Ordinateur = 👍"
          />
        </Col>
        <Col xs={24} sm={24} md={12} lg={8}>
          <AboutTile
            img="twitch.png"
            alt="meeting image"
            textH4="Fan de Twitch"
            textH3="Esport : Overwatch League"
          />
        </Col>
        <Col xs={24} sm={24} md={12} lg={8}>
          <AboutTile
            img="cyclisme.png"
            alt="cycliste image"
            textH4="Je fais du vélo"
            textH3="Le vélo c'est la vie"
          />
        </Col>
        <Col xs={24} sm={24} md={12} lg={8}>
          <AboutTile
            img="web.png"
            alt="web image"
            textH4="Programmeur autodidacte"
            textH3="Merci aux ressources Web"
            height={60}
            width={60}
          />
        </Col>
        <Col xs={24} sm={24} md={12} lg={8}>
          <AboutTile
            img="graduation.png"
            alt="graduation image"
            textH4="Diplôme OpenClassrooms"
            textH3="Développeur FRONT END"
            height={60}
            width={60}
          />
        </Col>
      </Row>
    </>
  );
};
export default AboutMe;
