import React from "react"
import {
  Card,
  CardTitle,
  CardText,
  CardSubtitle,
  CardBody,
} from 'reactstrap'
import { Link } from 'gatsby'

import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql } from 'gatsby'

const BlogPage = ({ data }) => (
  <Layout>
    <SEO title="Blogs" />
    {data.allMarkdownRemark.edges.map(post => (
      <div key={post.node.id}>
         <Card>
    <CardBody>
      <CardTitle>
      <Link
        to={post.node.frontmatter.path}>
        {post.node.frontmatter.title}
      </Link>
      </CardTitle>
      <CardSubtitle>
        <span className="text-info">{post.node.frontmatter.date}</span> by{' '}
        <span className="text-info">{post.node.frontmatter.author}</span>
      </CardSubtitle>
      <CardText>{post.node.excerpt}</CardText>
      <Link
        to={post.node.frontmatter.path}
        className="btn btn-outline-primary float-right text-uppercase"
      >
        Read more
      </Link>
    </CardBody>
  </Card>
  </div>

    ))}

  </Layout>
)

export const indexQuery = graphql`
  query indexQuery {
    allMarkdownRemark(sort: {fields: [frontmatter___title],order:DESC}) {
      edges {
        node {
          id
          frontmatter {
            title
            date
            author
            path
          }
          excerpt
        }
      }  
    }
  }    
`


export default BlogPage