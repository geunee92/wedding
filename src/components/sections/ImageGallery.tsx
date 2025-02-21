import Section from '@shared/Section'
import styles from './ImageGallery.module.scss'
import classNames from 'classnames/bind'
import ImageViewer from '../ImageViewer'
import { useState } from 'react'

const cx = classNames.bind(styles)

function ImageGallery({ images }: { images: string[] }) {
  const [selectedIndex, setSelectedIndex] = useState(-1)

  const open = selectedIndex > -1

  const handleSelectedImage = (idx: number) => {
    setSelectedIndex(idx)
  }

  const handleClose = () => {
    setSelectedIndex(-1)
  }

  return (
    <>
      <Section title="사진첩">
        <ul className={cx('wrap-images')}>
          {images.map((src, idx) => {
            return (
              <li
                key={idx}
                className={cx('wrap-image')}
                onClick={() => handleSelectedImage(idx)}
              >
                <picture>
                  <source srcSet={`${src}.webp`} type="image/webp" />
                  <img src={`${src}.jpg`} alt="사진첩 이미지" />
                </picture>
              </li>
            )
          })}
        </ul>
      </Section>

      <ImageViewer
        images={images}
        open={open}
        selectedIndex={selectedIndex}
        onClose={handleClose}
      />
    </>
  )
}

export default ImageGallery
