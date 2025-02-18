import Section from '@shared/Section'
import styles from './Video.module.scss'
import classNames from 'classnames/bind'

const cx = classNames.bind(styles)

function Video() {
  return (
    <Section className={cx('container')}>
      <video
        // autoPlay={true}
        muted={true}
        loop={true}
        // poster="/assets/poster.jpg"
        controls={true}
      >
        <source src="/assets/medium.mp4" type="video/mp4" />
      </video>
    </Section>
  )
}

export default Video
