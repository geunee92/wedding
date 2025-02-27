import classNames from 'classnames/bind'

import styles from './App.module.scss'
import { useEffect, useState } from 'react'

import Heading from '@components/sections/Heading'
import Video from '@components/sections/Video'
import FullScreenMessage from '@shared/FullScreenMessage'
import { Wedding } from './types/wedding'
import ImageGallery from './components/sections/ImageGallery'
import IntroMessage from './components/sections/IntroMessage'
import Invitation from './components/sections/Invitation'
import Calendar from './components/sections/Calendar'
import Map from './components/sections/Map'
import Contact from './components/sections/Contact'
import Share from './components/sections/Share'
import AttendCountModal from './components/AttendCountModal.tsx'

const cx = classNames.bind(styles)

function App() {
  const [wedding, setWedding] = useState<Wedding | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)

  useEffect(() => {
    setLoading(true)

    fetch('http://localhost:8888/wedding')
      .then((res) => {
        if (!res.ok) {
          throw new Error('청첩장 정보를 불러오지 못했습니다.')
        }
        return res.json()
      })
      .then((data) => {
        setWedding(data)
      })
      .catch((e) => {
        console.log('에러발생', e)
        setError(true)
      })
      .finally(() => {
        setLoading(false)
      })
  }, [])

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
