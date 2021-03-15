import React from "react"
import NavBar from "../components/navbar"
import '../styles/styles.sass'
import Contacts from "../components/contacts"
import PhotoGalleryAot from "../components/photo-gallery-aot"
import PhotoGalleryNaruto from "../components/photo-gallery-naruto"
import PhotoGalleryAnimals from "../components/gallery-animals"


const Gallery = () => (
    <div>
        <NavBar/>
        <div class="columns is-centered"> 
        <div class="column is-half">
        <div class="column">
            <p align = "center" style={{'paddingBottom' : '20px'}}> <strong className="has-text-grey">Attack on Titan</strong> </p>
            <PhotoGalleryAot/>
            <p align = "center" style={{'paddingBottom' : '20px'}}> <strong className="has-text-grey">Naruto</strong> </p>
            <PhotoGalleryNaruto/>
            <p align = "center" style={{'paddingBottom' : '20px'}}> <strong className="has-text-grey">Animal Friends</strong> </p>
            <PhotoGalleryAnimals/>
            <p align = "center" style={{'paddingTop' : '20px'}}><Contacts/></p>
        </div>
        </div>    
        </div>
    </div>
        
)
export default Gallery