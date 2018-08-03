import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import favicon from "assets/favicon.ico";
import Nav from "components/nav/nav";
import Footer from "components/footer/footer";
import "styles/global.scss";

const Layout = ({ children, data }) => (
  <div>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        {
          name: "description",
          content: "Frontend Web Developer | Danny Huang"
        },
        { name: "keywords", content: "React, Vue, Javascript, CSS" }
      ]}
      link={[
        { rel: "shortcut icon", type: "image/x-icon", href: `${favicon}` }
      ]}
    />
    <Nav />
    {children()}
    <Footer />
  </div>
);

Layout.propTypes = {
  children: PropTypes.func
};

export default Layout;

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
