import React from 'react'
import styles from './Dimmed.module.scss'
import classNames from 'classnames/bind'

const cx = classNames.bind(styles)

function Dimmed({ children }: { children: React.ReactNode }) {
  return <div className={cx('dimmed')}>{children}</div>
}

export default Dimmed
