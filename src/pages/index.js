import React from "react"
import { Helmet } from "react-helmet"
import NavBar from "../components/navbar"
import Contacts from "../components/contacts"
import '../styles/styles.sass'

const Home = () => (
  <div>
      <NavBar/>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Karen Shen</title>
      </Helmet>
      <div class="columns">
        <div class="column is-one-third"></div>

        <div class="column">
          <center>            
            <h1 class = "title" style={{'paddingBottom' : '20px'}}>Hi, I'm Karen <span role = "img">✌️ 💻 🎨 🎧</span></h1>
          </center>
          <p style={{'paddingBottom' : '20px'}}>
            I'm a software engineer at Microsoft in Azure IoT. I recently graduated from Penn with a BSE in Systems Engineering and a MSE in Data Science. My personal mission is to use tech to help tackle social problems,
            especially in urban spaces. 
          </p>

          <p style={{'paddingBottom' : '20px'}}>   
            Outside of the tech world, I make digital art. What started as a quarantine hobby has evolved into a full fledged art journey,
            in which I started my own Etsy shop where I sell stickers, prints, and digital downloads of my designs. Check out the blog and gallery tabs
            for more info.  
            </p>

          <p style={{'paddingBottom' : '20px'}}>
            Currently taking new recipe and music suggestions. I am very very passionate about my curated Spotify playlists.
          </p>

          <p align = "center"><Contacts/></p>
        <br/>
        <br/>
        </div>

        <div class="column"></div>
        
      </div>
  </div>
)
export default Home