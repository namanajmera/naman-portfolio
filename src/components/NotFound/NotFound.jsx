import React from 'react'
import styles from './notFound.module.less'

const NotFound = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>404 - Page Not Found</h1>
      <p className={styles.paragraph}>Oops! The page you are looking for does not exist.</p>
    </div>
  )
}

export default NotFound
