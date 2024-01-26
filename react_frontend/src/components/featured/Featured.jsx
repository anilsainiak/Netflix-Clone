import React, { useEffect,useState } from 'react'
import './featured.scss';
import { InfoOutlined, PlayArrow } from '@mui/icons-material';
import axios from 'axios';

const Featured = ({type}) => {
  const [content,setContent]=useState({});

  useEffect(()=>{
    const getRandomContent=async ()=>{
      try{
        const res=await axios.get(`movie/random?type=${type}`,
        {
          headers:{
            token:process.env.REACT_APP_TOKEN
          }
        });
        setContent(res.data[0]);
      }catch(err){
        console.log(err);
      }
    }
    
    getRandomContent();
  },[type]);

  return (
    <div className='featured'>
      {type && (
        <div className="category">
          
          <span>{type === "movies" ? 'Movies' : 'Series'}</span>
          <select name="genre" id="genre">
            <option value="Genre">Genre</option>
            <option value="Action">Action</option>
            <option value="Adventure">Adventure</option>
            <option value="Comedy">Comedy</option>
            <option value="Crime">Crime</option>
            <option value="Drama">Drama</option>
            <option value="Fantasy">Fantasy</option>
            <option value="Horror">Horror</option>
            <option value="Romance">Romance</option>
            <option value="Thriller">Thriller</option>
          </select>
        </div>
      )}
      
        <img
            width="100%"
            src={content.img}
            alt=""
          />
        <div className="info">
        {/* <img
          src={content.imgTitle}
          alt=""
        /> */}
        <span className='desc'>
        {content.desc}
        </span>
        <div className="buttons">
          <button className='play'>
            <PlayArrow/>
            <span>Play</span>
          </button>
          <button className='more'>
            <InfoOutlined/>
            <span>Info</span>
          </button>
        </div>
        </div>
    </div>
  );
}

export default Featured