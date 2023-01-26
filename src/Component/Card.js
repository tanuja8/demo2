import React,{useState,useEffect} from 'react'

export default function Card() {
  const[user,setUser]=useState([])

  const fetchData=(()=>{
    fetch("https://randomuser.me/api/?nat=us&results=9&page=1")
    .then((response)=>{
      return response.json();
    }).then((data)=>{
      // console.log(data)
      let userdata= data.results
      // console.log(userdata);
      setUser(userdata)
    })
  })

  
  useEffect(()=>{
    fetchData();
  },[])
  return (
    <div>
      
    </div>
  )
}
