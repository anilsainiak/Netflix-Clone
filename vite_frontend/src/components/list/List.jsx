import React, { useRef, useState } from 'react'
import './list.scss';
import { ArrowBackIos, ArrowBackIosOutlined, ArrowForwardIosOutlined } from '@mui/icons-material';
import ListItem from '../listItem/ListItem';

const List = () => {
    const [slideNumber,setSlideNumber]=useState(0);
    const [isMoved,setIsMoved]=useState(false);
    const listRef=useRef()

    const handleClick=(direction)=>{
        let distance=listRef.current.getBoundingClientRect().x - 50
        if (direction==='left' && slideNumber>0){
            setSlideNumber(slideNumber-1)
            listRef.current.style.transform=`translateX(${230+distance}px)`;
            console.log(slideNumber);
            if(slideNumber===1){
                setIsMoved(false);
            }
        }
        else if(direction==='right' && slideNumber<5){
            setIsMoved(true);
            setSlideNumber(slideNumber+1)
            listRef.current.style.transform=`translateX(${-230+distance}px)`;
        }
    }
  return (
    <div className='list'>
        <span className="listTitle">Continue to watch</span>
        <div className="wrapper">
            <ArrowBackIosOutlined className='sliderArrow left' onClick={()=>handleClick("left")} style={{display: !isMoved && "none"}} />
            <div className="container" ref={listRef} >
                <ListItem index={0}/>
                <ListItem index={1}/>
                <ListItem index={2}/>
                <ListItem index={3}/>
                <ListItem index={4}/>
                <ListItem index={5}/>
                <ListItem index={6}/>
                <ListItem index={7}/>
                <ListItem index={8}/>
                <ListItem index={9}/>
                <ListItem index={10}/>
            </div>
            <ArrowForwardIosOutlined className='sliderArrow right' onClick={()=>handleClick("right")}/>
        </div>
    </div>
  )
}

export default List