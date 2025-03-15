import classNames from 'classnames/bind'

import styles from './App.module.scss'

import Heading from '@components/sections/Heading'
import Video from '@components/sections/Video'
import FullScreenMessage from '@shared/FullScreenMessage'
import ImageGallery from './components/sections/ImageGallery'
import IntroMessage from './components/sections/IntroMessage'
import Invitation from './components/sections/Invitation'
import Calendar from './components/sections/Calendar'
import Map from './components/sections/Map'
import Contact from './components/sections/Contact'
import Share from './components/sections/Share'
import AttendCountModal from './components/AttendCountModal.tsx'
import useWedding from './hooks/useWedding.ts'

const cx = classNames.bind(styles)

function App() {
  const { wedding, loading, error } = useWedding()

  if (loading) {
    return <FullScreenMessage type={'loading'} />
  }

  if (error) {
    return <FullScreenMessage type={'error'} />
  }

  if (wedding === null) return null

  const {
    date,
    galleryImages,
    groom,
    bride,
    location,
    message: { intro, invitation },
  } = wedding

  return (
    <div className={cx('container')}>
      <Heading date={date} />

      <Video />

      <IntroMessage
        groomName={groom.name}
        brideName={bride.name}
        locationName={location.name}
        date={date}
        message={intro}
      />

      <Invitation invitationMessage={invitation} />

      <ImageGallery images={galleryImages} />

      <Calendar date={date} />

      <Map location={location} />

      <Contact groom={groom} bride={bride} />

      <Share groomName={groom.name} brideName={bride.name} weddingDate={date} />

      <AttendCountModal wedding={wedding} />
    </div>
  )
}

export default App
