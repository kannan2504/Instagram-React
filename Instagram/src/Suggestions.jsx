import React, { useEffect, useState } from 'react'
import axios from 'axios'
function Suggestions() {
  const [suggestions,setSuggest]=useState([])
  const [profile,setProfile]=useState(null)

  useEffect(()=>{
    fetch('http://localhost:3000/profile').
    then((data)=>data.json()).
    then((data)=>setProfile(data)).
    catch((error)=>console.log(error))


     fetch('http://localhost:3000/suggestions').
    then((data)=>data.json()).
    then((data)=>setSuggest(data)).
    catch((error)=>console.log(error))

  },[])

  const handleFollow=async (id,username)=>{
    axios.post('http://localhost:3000/followers',{
      "id":id,"username":username
    }).then(alert("followed")).
    catch(err=>console.log(err))

  }

  return (
    <div className='suggest'>
      <div className="suggestions  m-4">
        {profile?
          <div className="d-flex">
              <img  className="dp rounded-circle"src={profile.profilePic} alt="" />
              <h6>{profile.username}</h6>
              <small className="ms-auto text-primary">switch</small>
          </div>
          :<p>Loading</p>
        }
      </div>

      <div className="d-flex">

        <p>suggested for you</p>

        <b className="ms-auto">See all</b>
     </div>


      {suggestions.length>0 ?(
        <div>
          
          {suggestions.map((suggestion)=>(
            <div className="" key={suggestion.id}>
              
              <div className="d-flex">
                <img  className="dp rounded-circle"src={suggestion.profilePic} alt="" />
                <h6>{suggestion.username}</h6>

                <a onClick={()=>handleFollow(suggestion.id,suggestion.username)} className='ms-auto text-primary'>Follow</a>
              </div>
             

            </div>))}
        
        </div>
      ):
      
      (
      <div>loading </div>
    )

      }

      
    </div>
  )
}

export default Suggestions