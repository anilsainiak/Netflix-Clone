import React, { useRef, useState } from 'react'
import './list.scss';
import { ArrowBackIos, ArrowBackIosOutlined, ArrowForwardIosOutlined } from '@mui/icons-material';
import ListItem from '../listItem/ListItem';

const List = ({list}) => {
    const [slideNumber,setSlideNumber]=useState(0);
    const [isMoved,setIsMoved]=useState(false);
    const listRef=useRef()

    const handleClick=(direction)=>{
        let distance=listRef.current.getBoundingClientRect().x - 50
        if (direction==='left' && slideNumber>0){
            setSlideNumber(slideNumber-1)
            listRef.current.style.transform=`translateX(${160+distance}px)`;
            console.log(slideNumber);
            if(slideNumber===1){
                setIsMoved(false);
            }
        }
        else if(direction==='right' && slideNumber<5){
            setIsMoved(true);
            setSlideNumber(slideNumber+1)
            listRef.current.style.transform=`translateX(${-160+distance}px)`;
        }
    }
  return (
    <div className='list'>
        <span className="listTitle">{list.title}</span>
        <div className="wrapper">
            <ArrowBackIosOutlined className='sliderArrow left' onClick={()=>handleClick("left")} style={{display: !isMoved && "none"}} />
            <div className="container" ref={listRef} >
                {list.content.map((item,i)=>(
                    <ListItem key={i} index={i} item={item}/>
                ))}
            </div>
            <ArrowForwardIosOutlined className='sliderArrow right' onClick={()=>handleClick("right")}/>
        </div>
    </div>
  )
}

export default List