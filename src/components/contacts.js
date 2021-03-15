import React from 'react'
import * as Icons from "react-icons/ai"
import '../styles/styles.sass'
const Contacts = () => {
  return (
    <div>
        <a href="https://www.linkedin.com/in/karen-shen/"><Icons.AiOutlineLinkedin size={'1.5rem'} style={{'vertical-align':'middle', 'margin-right':'1rem', color : "pink"}}/></a>
        <a href="https://instagram.com/karen.tries.art"><Icons.AiOutlineInstagram size={'1.5rem'} style={{'vertical-align':'middle', 'margin-right':'1rem', color : "pink"}}/></a>
        <a href="https://open.spotify.com/user/1252428087?si=PcHMQevaQQeP5zZdC4Yfeg"><Icons.AiOutlinePlayCircle size={'1.5rem'} style={{'vertical-align':'middle', 'margin-right':'1rem', color : "pink" }}/></a>
        <a href="https://github.com/shenkaren/"><Icons.AiOutlineGithub size={'1.5rem'} style={{'vertical-align':'middle', 'margin-right':'1rem', color : "pink"}}/></a>
    </div>
  )
}

export default Contacts
