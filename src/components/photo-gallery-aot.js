import 'photoswipe/dist/photoswipe.css'
import 'photoswipe/dist/default-skin/default-skin.css'
import React from 'react'
import { Gallery, CustomGallery, Item, DefaultLayout, useGallery } from 'react-photoswipe-gallery'

const PhotoGalleryAot = () => {
    const smallItemStyles = {
      cursor: 'pointer',
      objectFit: 'cover',
      width: '100%',
      maxHeight: '100%',
    }
    return (
      <Gallery id="simple-gallery">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '300px 300px',
            gridTemplateRows: '200px 200px 200px 200px',
            gridGap: 12,
          }}
        >
          <Item
            original="/media/gallery/aot-ocean.jpg"
            thumbnail="/media/gallery/aot-ocean.jpg"
            width="1200"
            height="1800"
            title="Author: Karen Shen"
            id="so-first"
          >
            {({ ref, open }) => (
              <img
                style={{ cursor: 'pointer' }}
                src="/media/gallery/aot-ocean.jpg"
                ref={ref}
                onClick={open}
              />
            )}
          </Item>
          <Item
            original="/media/gallery/aot-sunrise.png"
            thumbnail="/media/gallery/aot-sunrise.png"
            width="1600"
            height="1068"
            title="Author: Karen Shen"
          >
            {({ ref, open }) => (
              <img
                style={smallItemStyles}
                src="/media/gallery/aot-sunrise.png"
                ref={ref}
                onClick={open}
              />
            )}
          </Item>
          <Item
            original="/media/gallery/aot-ymir.png"
            thumbnail="/media/gallery/aot-ymir.png"
            width="1600"
            height="1066"
            title="Author: Karen Shen"
          >
            {({ ref, open }) => (
              <img
                style={{ ...smallItemStyles, gridColumnStart: 2 }}
                src="/media/gallery/aot-ymir.png"
                ref={ref}
                onClick={open}
              />
            )}
          </Item>
          <Item
            original="/media/gallery/aot-cave.png"
            thumbnail="/media/gallery/aot-cave.png"
            width="1600"
            height="1066"
            title="Author: Karen Shen"
          >
            {({ ref, open }) => (
              <img
                style={{ ...smallItemStyles, gridColumnStart: 2 }}
                src="/media/gallery/aot-cave.png"
                ref={ref}
                onClick={open}
              />
            )}
          </Item>
        </div>
      </Gallery>
    )
  }

  export default PhotoGalleryAot