import React from "react"
import {
  Card,
  CardTitle,
  CardText,
  CardSubtitle,
  CardBody,
} from 'reactstrap'
import { Link } from 'gatsby'
import Img from 'gatsby-image'
import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql } from 'gatsby'
import {Row, Col} from 'reactstrap'

const BlogPage = ({ data }) => (
  <Layout>
    <SEO title="Blogs" />
    <Row>
    
    {data.allMarkdownRemark.edges.map(post => (
      <div key={post.node.id}>
           
      <Col md="12">
      <Card>
      <Link
to={post.node.frontmatter.path}>
<Img className="card-image-top" fluid={post.node.frontmatter.image.childImageSharp.fluid}/>
</Link>
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
</Col>
    
         
  </div>
  

    ))}
   </Row>
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
            image{
              childImageSharp{
                fluid(maxWidth: 800){
                ...GatsbyImageSharpFluid
                }
              }
            }
          }
          excerpt
        }
      }  
    }
  }    
`


export default BlogPage