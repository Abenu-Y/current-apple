import React from 'react'
import GIF from './GIF/GIF'
import Comp from './Comp/Comp'
import List from './Data/DataOne'
import Datas from './Data/DataTw0'
import CompTwo from './Comp/CompTwo'
import Slider from './Slide/Slider'


function Main() {
  return (
    <>
      <GIF/>
      {
         List.map(({classNo,title,description,additional,container},i)=>
        <Comp key={i} classNo={classNo} title={title} description={description} additional={additional} container={container}/>)
      }

      {
         Datas.map(({container, wrapper,imgOne,imgTwo,descriptionOne,descriptionTwo,titleOne,titleTwo,secondLink,secondLink2},i)=>
        <CompTwo key={i} container={container}
                wrapper={wrapper}
                imgOne={imgOne}
                imgTwo={imgTwo}
                descriptionOne={descriptionOne}
                descriptionTwo={descriptionTwo}
                titleOne={titleOne}
                titleTwo={titleTwo}
                secondLink={secondLink}
                secondLink2={secondLink2}

                 />)
      }

      <Slider />

    </>
  )
}

export default Main