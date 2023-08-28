import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import FileUpload from './components/FileUpload'
import PhotoLibrary from './components/PhotoLibrary'

function App() {
  const [imageList, setImageList] = useState([])
  const [dbImageList, setDbImageList] = useState([])

  useEffect(()=>{
    fetch("http://localhost:3000/images")
    .then(response => response.json())
    .then(data => setImageList(data))
  },[])

  useEffect(()=>{
    fetch("http://localhost:5000/photos")
    .then(response => response.json())
    .then(data => setDbImageList(data))
  },[])

  

  return (
    <>
      <FileUpload />
      <PhotoLibrary imageList={imageList} dbImageList={dbImageList}/>
    </>
  )
}

export default App
