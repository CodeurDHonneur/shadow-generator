import React from 'react'
import ShadowList from './ShadowList'
import styles from "../styles/ShadowContent.module.css"
export default function ShadowContent() {
  return (
    <div className={styles.container}>
      <ShadowList />
    </div>
  )
}
