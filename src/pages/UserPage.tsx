import React, { FC, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { API, Item, ItemByIdRequest } from '../api/api';
import bannerStyles from '../components/banner/banner.module.css'
import '../assets/styles/userPage.css'


const UserPage: FC = () => {
  const [isFetching, setIsFetching] = useState(false)
  const [data, setData] = useState<Item | null>(null)
  const { id } = useParams()

  async function loadData() {
    if (isFetching) return
    setIsFetching(true)
    if (!id || id === '' || isNaN(+id)) return
    try {
      setData(await API.get<ItemByIdRequest, Item>(new ItemByIdRequest(+id)));
    } finally {
      setIsFetching(false)
    }
  }

  useEffect(() => {
    console.log(id)
    loadData()
  }, [])

  //TODO сделать нормальный UI-компонент Loader
  if (isFetching) return <span className='loader-placeholder'>Loading ...</span>
  if (!data) return <span className='loader-placeholder'>Something went wrong</span>
  return (
    <>
      <div className='user-card-container'>
        <h2>Personal Data</h2>
        <h3>Name</h3>
        <strong>{data.username}</strong>
        <h3>Email</h3>
        <strong>{data.email}</strong>
        <h3>Address</h3>
        <strong>{data.address}</strong>
      </div>
      <div className='shifted-plant-container'>
        <div className={bannerStyles.orbit}></div>
      </div>
    </>
  )
}

export default UserPage
