import React, { useState, useEffect } from 'react'
import './Card.css';

export default function Card() {
  const [user, setUser] = useState([])

  const fetchData = (() => {
    fetch("https://randomuser.me/api/?nat=us&results=50&page=1")
      .then((response) => {
        return response.json();
      }).then((data) => {
        // console.log(data)
        let userdata = data.results
        console.log(userdata);
        setUser(userdata)
      })
  })
  useEffect(() => {
    fetchData();
  }, [])
  return (
    <div>
      {user.map(person => {
        return (
          <div className='user_details'>
            <div className="card">
              <img src={person.picture.large} className="card-img-top" alt="..." />
              <div >
                <h3>{person.name.first} {person.name.last}</h3>
                <p className="card-text">{person.email}</p>
                <p className="card-text">{person.location.city}</p>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

