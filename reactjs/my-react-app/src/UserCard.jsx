import React from 'react'

const UserCard = ({name,age,location}) => {
  return (
    <div style={{
      border: "1px solid #ccc",
      padding: "15px",
      margin: "10px",
      borderRadius: "10px",
      width: "250px"
    }}>
        <h2>UserCard</h2>
        <p><strong>Name:</strong> {name}</p>
        <p><strong>Age:</strong> {age}</p>
        <p><strong>Location:</strong> {location}</p>
    </div>
  )
}
export default UserCard;
