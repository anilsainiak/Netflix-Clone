import React, { useEffect, useState } from 'react'
import './listItem.scss';
import { Add, PlayArrow, ThumbDownOutlined, ThumbUpOutlined } from '@mui/icons-material';
import axios from 'axios';
import { Link } from 'react-router-dom';

const ListItem = ({index,item}) => {
  const [isHovered,setIsHovered]=useState(false);
  const [movie,setMovie]=useState({});

  useEffect(()=>{
    const getMovie=async ()=>{
      try{
        const res=await axios.get(`movie/find/${item}`,{
          headers:{
            token:"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1OTFkNzk2Zjc0NzY2MWU0YmY0OWE4NCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTcwNjA3NDMxNSwiZXhwIjoxNzA2MjQ3MTE1fQ.LJPP1uYe3Up8pGeaaxej_irUmRFj_4LeLU_7-s6gmmk"
          }
        });
      setMovie(res.data);
      }catch(err){
        console.log(err);
      }
    }
    getMovie();
  },[item])

  return (
    <Link to="/watch" state={{movie:movie}}>
    <div 
      className='listItem' 
      style={{left:isHovered && index*225-50 +index*2.5}}
      onMouseEnter={()=>setIsHovered(true)}
      onMouseLeave={()=>setIsHovered(false)}>
        <img
          src={movie.img}
          alt=""
          />
      {isHovered && (
        <>
      <video src={movie.trailer} autoPlay={true}></video>

      <div className="itemInfo">
        <div className="icons">
          <PlayArrow className='icon' />
          <Add className='icon' />
          <ThumbUpOutlined className='icon' />
          <ThumbDownOutlined className='icon' />
        </div>
        <div className="itemInfoTop">
          <span>{movie.duration}</span>
          <span className='limit'>{movie.limit}</span>
          <span>{movie.year} </span>
        </div>
        <div className="desc">{movie.desc}</div>
      </div>
      <div className="genre">{movie.genre}</div>
      </>)}
    </div>
    
 </Link>
  );
}

export default ListItem