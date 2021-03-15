import 'photoswipe/dist/photoswipe.css'
import 'photoswipe/dist/default-skin/default-skin.css'
import React from 'react'
import { Gallery, CustomGallery, Item, DefaultLayout, useGallery } from 'react-photoswipe-gallery'

const PhotoGalleryNaruto = () => {
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
            gridTemplateColumns: '200px 200x',
            gridTemplateRows: '400px 400px 400px',
            gridGap: 12,
          }}
        >
          <Item
            original="/media/gallery/itachi.jpg"
            thumbnail="/media/gallery/itachi.jpg"
            width="1620"
            height="2160"
            title="Author: Karen Shen"
            id="so-first"
          >
            {({ ref, open }) => (
              <img
                style={smallItemStyles}
                src="/media/gallery/itachi.jpg"
                ref={ref}
                onClick={open}
              />
            )}
          </Item>
          <Item
            original="/media/gallery/brothers.jpg"
            thumbnail="/media/gallery/brothers.jpg"
            width="1620"
            height="2160"
            title="Author: Karen Shen"
          >
            {({ ref, open }) => (
              <img
                style={{ ...smallItemStyles, gridColumnStart: 2}}
                src="/media/gallery/brothers.jpg"
                ref={ref}
                onClick={open}
              />
            )}
          </Item>
          <Item
            original="/media/gallery/sasuke.jpg"
            thumbnail="/media/gallery/sasuke.jpg"
            width="1620"
            height="2160"
            title="Author: Karen Shen"
          >
            {({ ref, open }) => (
              <img
                style={smallItemStyles}
                src="/media/gallery/sasuke.jpg"
                ref={ref}
                onClick={open}
              />
            )}
          </Item>
          <Item
            original="/media/gallery/sensei.PNG"
            thumbnail="/media/gallery/sensei.PNG"
            width="1620"
            height="2160"
            title="Author: Karen Shen"
          >
            {({ ref, open }) => (
              <img
                style={{ ...smallItemStyles, gridColumnStart: 2 }}
                src="/media/gallery/sensei.PNG"
                ref={ref}
                onClick={open}
              />
            )}
          </Item>
          <Item
            original="/media/gallery/akatsuki.jpg"
            thumbnail="/media/gallery/akatsuki.jpg"
            width="2160"
            height="1620"
            title="Author: Karen Shen"
          >
            {({ ref, open }) => (
              <img
                style={smallItemStyles}
                src="/media/gallery/akatsuki.jpg"
                ref={ref}
                onClick={open}
              />
            )}
          </Item>
        </div>
      </Gallery>
    )
  }

  export default PhotoGalleryNaruto