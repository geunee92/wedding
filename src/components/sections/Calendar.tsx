import Section from '@shared/Section'
import styles from './Calendar.module.scss'
import classNames from 'classnames/bind'
import { parseISO, format } from 'date-fns'
import { ko } from 'date-fns/locale'
import 'react-day-picker/style.css'
import { DayPicker } from 'react-day-picker'

const cx = classNames.bind(styles)

const css = `
    .rdp-nav {
        display: none;
    }   

    .rdp-day {
        cursor: pointer;
    }

    .rdp-today:not(.rdp-outside) {
        color: var(--red)
    }
`

function Calendar({ date }: { date: string }) {
  const weddingDate = parseISO(date)

  return (
    <Section
      title={
        <div className={cx('wrap-header')}>
          <span className={cx('txt-date')}>
            {format(weddingDate, 'yyyy.MM.dd')}
          </span>

          <span className={cx('txt-time')}>
            {format(weddingDate, 'aaa h시 eeee', { locale: ko })}
          </span>
        </div>
      }
    >
      <div className={cx('wrap-calendar')}>
        <style>{css}</style>

        <DayPicker
          locale={ko}
          month={weddingDate}
          today={weddingDate}
          formatters={{ formatCaption: () => '' }}
        />
      </div>
    </Section>
  )
}

export default Calendar
