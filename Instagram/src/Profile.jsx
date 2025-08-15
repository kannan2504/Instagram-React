import React, { useEffect, useState } from 'react'
import axios from 'axios'
function Profile() {

    const [profile,setProfile]=useState(null);
    const [followers,setFollowers]=useState([]);
    const [unfollowed,setUnfollowed]=useState(0);

    useEffect(()=>{
        axios.get('http://localhost:3000/profile').
        then((data)=>setProfile(data.data)).
        catch((err)=>(console.log(err)))


        axios.get('http://localhost:3000/followers').then((data=>setFollowers(data.data))).
        catch((err)=>console.log(err))
    },[unfollowed])


    function HandleOnChange(e){
        setProfile(prev=>({
            ...prev,[e.target.name]:e.target.value
        }))
    }


     const handleUnfollow=async (id)=>{
        axios.delete(`http://localhost:3000/followers/${id}`).
        then(alert("Unfollowed")).
        then(setUnfollowed(!unfollowed)).
        catch(err=>console.log(err))

     }


    const HandleUpdate= async()=>{
        axios.put('http://localhost:3000/profile',profile).
        then(console.log("updated")).
        catch((err)=>console.log(err))
    }

  return (
    <div className='m-5'>
        
        {profile?(
            <div>
                 <img src={profile.profilePic} alt="" className='rounded-circle profile'/>
           
                <h5>{profile.username}</h5>

                <input type="text" value={profile.username} name="username" onChange={HandleOnChange} className='form-control my-4' />


                <input type="text" name='profilePic' value={profile.profilePic} onChange={HandleOnChange} className='form-control my-4' />

                <button  className='btn btn-primary' onClick={HandleUpdate}>Update</button>
                </div>

        ):
    
    (
        <div>
        profile loading
        </div>
    )
    }

    {
        followers.length>0?(
            followers.map(follower=>(
            <div key={follower.id} className='d-flex my-2'>
                {follower.username}
                  
                  <button className='btn btn-primary ms-auto' onClick={()=>handleUnfollow(follower.id)}>unfollow</button>
            </div>
            ))
        ):
        (
            <div>Followers loading</div>
        )
    }
    
    
    
    </div>


  )
}

export default Profile