import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

const PROFILE_PICTURE_QUERY = graphql`
  query {
    placeholderImage: file(relativePath: { eq: "mykal.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 64) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

const ProfilePicture = () => (
  <StaticQuery
    query={PROFILE_PICTURE_QUERY}
    render={data => <Img fluid={data.placeholderImage.childImageSharp.fluid} />}
  />
);
export default ProfilePicture;
