import 'photoswipe/dist/photoswipe.css'
import 'photoswipe/dist/default-skin/default-skin.css'
import React from 'react'
import { Gallery, CustomGallery, Item, DefaultLayout, useGallery } from 'react-photoswipe-gallery'

const GalleryAnimals = () => {
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
            gridTemplateRows: '240px 240px 240px',
            gridGap: 12,
          }}
        >
          <Item
            original="/media/gallery/penguin.png"
            thumbnail="/media/gallery/penguin.png"
            width="1200"
            height="1200"
            title="Author: Karen Shen"
            id="so-first"
          >
            {({ ref, open }) => (
              <img
                style={smallItemStyles}
                src="/media/gallery/penguin.png"
                ref={ref}
                onClick={open}
              />
            )}
          </Item>
          <Item
            original="/media/gallery/goat.png"
            thumbnail="/media/gallery/goat.png"
            width="1200"
            height="1200"
            title="Author: Karen Shen"
          >
            {({ ref, open }) => (
              <img
                style={{ ...smallItemStyles, gridColumnStart: 2}}
                src="/media/gallery/goat.png"
                ref={ref}
                onClick={open}
              />
            )}
          </Item>
          <Item
            original="/media/gallery/corgi.png"
            thumbnail="/media/gallery/corgi.png"
            width="1200"
            height="1200"
            title="Author: Karen Shen"
          >
            {({ ref, open }) => (
              <img
                style={smallItemStyles}
                src="/media/gallery/corgi.png"
                ref={ref}
                onClick={open}
              />
            )}
          </Item>
          <Item
            original="/media/gallery/sloth.png"
            thumbnail="/media/gallery/sloth.png"
            width="1200"
            height="1200"
            title="Author: Karen Shen"
          >
            {({ ref, open }) => (
              <img
                style={{ ...smallItemStyles, gridColumnStart: 2 }}
                src="/media/gallery/sloth.png"
                ref={ref}
                onClick={open}
              />
            )}
          </Item>
          <Item
            original="/media/gallery/panda.png"
            thumbnail="/media/gallery/panda.png"
            width="1200"
            height="1200"
            title="Author: Karen Shen"
          >
            {({ ref, open }) => (
              <img
                style={smallItemStyles}
                src="/media/gallery/panda.png"
                ref={ref}
                onClick={open}
              />
            )}
          </Item>
        </div>
      </Gallery>
    )
  }

  export default GalleryAnimals