import React from 'react';
import {
  Layout, Row, Col,
} from 'antd';
import { graphql } from 'gatsby';
import Header from '../../components/PageLayout/Header';
import SEO from '../../components/Seo';
import SidebarWrapper from '../../components/PageLayout/Sidebar';
import Config from '../../../config';
import CreaCards from '../../components/CreaCard/index';

const Crea = ({ data }) => {
  const creaObject = Config.creations;
  return (
    <Layout className="outerPadding">
      <Layout className="container">
        <Header />
        <SEO
          title="Créations"
          description="Cette page se compose des diverses projets que j'ai déjà réalisé.
          Vous pouvez regarder chaque projet plus en détails en cliquant sur chacun d'entre eux"
          path="creation"
        />
        <SidebarWrapper>
          <>
            <div className="marginTopTitle">
              <h1 className="titleSeparate">#Créations</h1>
            </div>
            <Row gutter={[30, 20]}>
              {
                data.allFile.edges.map((val) => (
                  <Col xs={24} sm={24} md={12} lg={8}>
                    <CreaCards
                      name={creaObject[val.node.name].name}
                      technology={creaObject[val.node.name].technology}
                      color={creaObject[val.node.name].color}
                      url={creaObject[val.node.name].url}
                      img={val.node.childImageSharp.fluid.src}
                    />
                  </Col>
                ))
              }
            </Row>
          </>
        </SidebarWrapper>
      </Layout>
    </Layout>
  );
};

export const query = graphql`
{
  allFile(filter: {relativeDirectory: {eq: "creations"}}) {
    edges {
      node {
        name
        childImageSharp {
          fluid(maxWidth: 400) {
            src
          }
        }
      }
    }
  }
}
`;

export default Crea;
