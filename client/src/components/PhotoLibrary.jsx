import React from 'react'

export default function PhotoLibrary({imageList, dbImageList}) {
    const imagesToDisplay = imageList.map((image)=>(
        <img src={image.fileName}/>
    ))

    const imageExt = '/src/assets/static'

    const DbImagesToDisplay = dbImageList.map((image)=>{
      const filename = imageExt + "/" + image["image_file_path"]
      return(
        <img src={filename}/>

      )
})
    
  return (
    <div>
        {DbImagesToDisplay}
    </div>
  )
}
