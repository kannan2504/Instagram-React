import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import StoryView from './StoryView';
function Stories() {

const navigate=useNavigate();
  const [Stories,setStories]=useState([])


  let tot=0;
  useEffect(()=>{
    fetch('http://localhost:3000/story').
    then((data)=>data.json()).
    then(data=>setStories(data)).
    catch(err=>console.log(err))
  },[])


  
  return (
    <div className="story d-flex mx-1" >
      
      <div className='d-none'>{tot=Stories.length}</div>
      {Stories.length>0?(
        Stories.map((story)=>(

          <div key={story.id} onClick={()=>{navigate(`/story/${story.id}/${tot}`)}}>
            <div className="gradient-border">
              <img src={story.profilePic} alt="" className='story-dp rounded-circle'/>
          </div>
          <p className='text-truncate' style={{width:"50px"}}>{story.username}</p>
    </div>
        ))

      )

      :(
        <p>loading</p>
      )
      }
    
    
    </div>
  )
}

export default Stories