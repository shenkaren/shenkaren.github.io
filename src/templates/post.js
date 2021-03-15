import React from "react"
import { graphql } from "gatsby"
import NavBar from "../components/navbar"
import Contacts from "../components/contacts"
import '../styles/styles.sass'
import SpotifyPlayer from "../components/SpotifyPlayer"

export default function Post({ data }) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html,  timeToRead} = markdownRemark
  return (
    <div className="blog-post-container">
      <div className="blog-post">
      <NavBar/>
       <div class="columns is-centered">
         <div class="column is-half">
           <div class="column">
         <h1 class="title" >{frontmatter.title}</h1>
         <br/>
        <h2 class="subtitle">{frontmatter.date} - {timeToRead} min</h2>
        {frontmatter.spotify &&
        <SpotifyPlayer
            uri={frontmatter.spotify}
            size="large"
            theme="black"
            view="list"
        />
        }
        <div
          class="content is-normal"
          className="generated"
          dangerouslySetInnerHTML={{ __html: html }}
        />
        <br></br>
        <p align = "center"><Contacts/></p>
        </div>
        </div>
        </div>
      </div>
    </div>
  )
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      timeToRead
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
        tags
        spotify
      }
    }
  }
`