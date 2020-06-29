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

const creaObject = Config.creations;

const Crea = ({ data }) => {
  const { allFile: { edges } } = data;
  const rawTags = data.allFile.edges;
  // eslint-disable-next-line no-console
  console.log(edges);
  // eslint-disable-next-line no-console
  console.log(rawTags);
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
              <h1 className="titleSeparate">#Création</h1>
            </div>
            <Row gutter={[30, 20]}>
              <Col xs={24} sm={24} md={12} lg={8}>
                <CreaCards
                  name={data.name}
                  technology={creaObject.chalets.technology}
                  color={creaObject.chalets.color}
                  url={creaObject.chalets.url}
                />
              </Col>
            </Row>
          </>
        </SidebarWrapper>
      </Layout>
    </Layout>
  );
};

export const query = graphql`
  {
    allFile(filter: { relativeDirectory: { eq: "creations" } }) {
      edges {
        node {
          name
          childImageSharp {
            fluid(maxWidth: 400) {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
      }
    }
  }
`;

export default Crea;
