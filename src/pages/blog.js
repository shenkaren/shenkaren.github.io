import React from "react"
import NavBar from "../components/navbar"
import { graphql, Link } from 'gatsby';
import Tag from '../components/Tag';
import '../styles/styles.sass'
import Contacts from "../components/contacts"


const Blog = ({data}) => {
    const { edges } = data.allMarkdownRemark;

    return(
    <div>
        <NavBar/>
        <div class="columns is-centered"> 
        <div class="column is-one-third">
        <div class="column">
        <p style={{marginBottom: "0.5rem"}}><strong className="has-text-grey">All Posts</strong></p>

        {edges.map(edge => {
                const {frontmatter} = edge.node;
                return (
                  <div className="box" key={frontmatter.path} style={{color: "grey", marginBottom: "1rem"}}>
                    <span style={{fontSize: "0.75rem"}}>{frontmatter.date} </span> <br />
                    <Link to={frontmatter.path}>
                    <p>{frontmatter.title}</p>
                    </Link>
                    <p style={{fontSize: "0.85rem", marginBottom: "0.5rem", marginTop: "0.1rem"}}>{frontmatter.excerpt}</p>
                    {frontmatter.tags.map(tag => <Tag name={tag} />)} 
                  </div>
                )
              })}
              <br/>
              <p align = "center"><Contacts/></p>
        </div>
        </div>
        </div>

    </div>
    )
};

export const query = graphql`
  query BlogQuery {
    allMarkdownRemark (
      sort: {order: DESC, fields: [frontmatter___date]}
    ) {
      edges {
        node {
          frontmatter {
            title
            path
            date
            excerpt
            tags
          }
        }
      }
    }
  }
`

export default Blog