import React, {useState, useEffect} from "react";
import axiosWithAuth from "../utils/axiosWithAuth";


const FriendsList = () => {
    const [friends, setFriends] = useState([])

    useEffect(() => {

        axiosWithAuth().get("/friends")
        .then(resp => {
            setFriends(resp.data)
        })
        .catch(err => {
            console.log(err)
        })
    }, []);
    return (
    <div>
        <h2>FriendsList</h2>
        <ul>
            {
                friends.map(friend=>{
                    return  <li>{friend.name} - {friend.age} - {friend.email}</li> 
                })
            }
            
        </ul>
    </div>
    )}

export default FriendsList;