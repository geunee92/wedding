import styles from './ImageViewer.module.scss'
import classNames from 'classnames/bind'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/swiper.min.css'
import './swiper.css'
import Dimmed from '../shared/Dimmed'

const cx = classNames.bind(styles)

function ImageViewer({
  images,
  open,
  selectedIndex,
  onClose,
}: {
  images: string[]
  open: boolean
  selectedIndex: number
  onClose: () => void
}) {
  if (!open) return null

  return (
    <Dimmed>
      <CloseButton className={cx('icon-close')} onClose={onClose} />

      <Swiper
        spaceBetween={20}
        slidesPerView={1}
        loop={true}
        initialSlide={selectedIndex}
      >
        {images.map((src, idx) => {
          return (
            <SwiperSlide key={idx}>
              <img src={src} alt="이미지 뷰어" />
            </SwiperSlide>
          )
        })}
      </Swiper>
    </Dimmed>
  )

  function CloseButton({
    onClose,
    className,
  }: {
    onClose: () => void
    className: string
  }) {
    return (
      <svg
        className={className}
        id="close"
        viewBox="0 0 128 128"
        xmlns="http://www.w3.org/2000/svg"
        onClick={onClose}
      >
        <title />
        <path d="M64,0a64,64,0,1,0,64,64A64.07,64.07,0,0,0,64,0Zm0,122a58,58,0,1,1,58-58A58.07,58.07,0,0,1,64,122Z" />
        <path d="M92.12,35.79a3,3,0,0,0-4.24,0L64,59.75l-23.87-24A3,3,0,0,0,35.88,40L59.76,64,35.88,88a3,3,0,0,0,4.25,4.24L64,68.25l23.88,24A3,3,0,0,0,92.13,88L68.24,64,92.13,40A3,3,0,0,0,92.12,35.79Z" />
      </svg>
    )
  }
}

export default ImageViewer
