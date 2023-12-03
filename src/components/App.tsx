import { Link, Outlet } from 'react-router-dom'
import Avatar from '@/assets/avatar.svg'
import formula from '@/assets/formula.jpg'
import logo from '@/assets/logo.png'
import styles from './App.module.scss'
import { useMemo } from 'react'

const TODO = (a: number) => {
  console.log(a)
}

export const App = () => {
  const platform = useMemo(() => {
    if (PLATFORM === 'desktop') {
      return <div>desktop platform</div>
    } else {
      return <div>mobile plaform</div>
    }
  }, [PLATFORM])

  return (
    <>
      {platform}
      <img src={logo} width={50} alt='' />
      <div className={styles.navigate}>
        <Link to={'/about'}>About</Link>
        <Link to={'/shop'}>Shop</Link>
      </div>
      <div className={styles.main}>App</div>
      <Avatar width={100} height={100} color={'red'} />
      <Outlet />
      <img src={formula} alt='' />
    </>
  )
}
