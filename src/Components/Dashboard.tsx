import React, { useState, useEffect } from 'react'
import '../App.css'
import axios from "axios";
import { allUsers } from './features/usersReducer';
import { useDispatch, useSelector } from 'react-redux';
import { deleteUsers } from "../Components/features/usersReducer";
import Update from './Update'


export const Dashboard = () => {
  const [newData, setNewData] = useState([])
  let users = useSelector((state: any) => state.users.users)
  const dispatch = useDispatch() 
  const handleUpdate = (payload:any) =>{
  let data =users;
  console.log(data)
  data.map((item : any) => {
      if(item.id === payload.id){
        item['name'] = payload.name;
        item['username'] = payload.username;
        item['email'] = payload.email
      }
    })
    dispatch(allUsers(data))
  }
  useEffect(() => {
    fetchData();

  }, []);

  const fetchData = async () => {
      const result = await axios(
        'https://jsonplaceholder.typicode.com/users',
      );
      dispatch(allUsers(result.data))
    // else{
    //   setNewData(users.users)
    // }
      
  };

  console.log("Newdata",newData)
  const handleDelete = (id: any) => {
    const data = users.find((item: any) => item.id == id)
    const indexofDeletedData = users.indexOf(data)
    const copyData = [...users]
    copyData.splice(indexofDeletedData, 1)
    dispatch(deleteUsers(copyData));
  }
  return (
    <div>
      <table>
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>UserName</th>
          <th>Email</th>

        </tr>
        <tbody>
          {newData.length  && newData?.map((item: any) => (
            <tr>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.username}</td>
              <td>{item.email}</td>
              <td>
                <Update editOject={item} updatefunctionFromParent={handleUpdate} />
                <button className='delete' onClick={() => handleDelete(item.id)}>Delete</button>
              </td>

            </tr>
          ))}

        </tbody>
      </table>
    </div>
  )
}
export default Dashboard;