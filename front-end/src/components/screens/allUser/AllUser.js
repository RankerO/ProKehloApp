import axios from 'axios';
import React, { useEffect, useState } from 'react'
function AllUser() {
  const [userData, setUserData] = useState([]);
  const fetchUsers = async () => {
    const { data } = await axios.get("/api/users/alluser")
   
    console.log(data);
    if (data)
    {
      setUserData(data.data);
      }
    else
    {
      console.log("no data found");
      }
  }
  useEffect(() => { console.log("hello");
    fetchUsers();
  }, []);
  return (
    <div className='loginContainer'>
      <table style={{ width: 800 }}>
        <h3>data of  all users</h3>
        <tr>
          <th>Name</th>
          <th>Email</th>
        </tr>
        {
          userData.map(i =>
          {
            return (
              <tr>
                <td>{i.name}</td>
                <td>{i.email}</td>
              </tr>
            );
            })
        }
      </table>
    </div>
  )
}

export default AllUser

