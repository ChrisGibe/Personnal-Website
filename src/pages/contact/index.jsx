import React from 'react';
import { Layout, Row, Col } from 'antd';
import Header from '../../components/PageLayout/Header';
import SidebarWrapper from '../../components/PageLayout/Sidebar';
import ContactForm from '../../components/PageFragments/ContactForm';
import SEO from '../../components/Seo';

const Contact = () => (
  <Layout className="outerPadding">
    <Layout className="container">
      <SEO
        title="Contact"
        description="Bonjour à tous. Je m'appelle GIBELLI Christophe, vous pouvez me contacter via le formulaire de contact
        sur cette page. Ne soyez pas timide et n'hésitez pas à vos poser vos questions."
        path="/contact"
        keywords={['GIBELLI', 'Christophe', 'NICE', 'Développeur FRONT END', 'Javascript', 'ReactJS', 'NodeJS', 'Gatsby', 'Wordpress']}
      />
      <Header />
      <SidebarWrapper>
        <div className="marginTopTitle">
          <h1 className="titleSeparate">Contact</h1>
        </div>
        <Row gutter={[40, 20]}>
          <Col sm={24} md={24} lg={12}>
            <img
              src="../../contact.png"
              alt="contact"
              className="widthFull contactImgBorder"
            />
          </Col>
          <ContactForm />
        </Row>
      </SidebarWrapper>
    </Layout>
  </Layout>
);

export default Contact;
