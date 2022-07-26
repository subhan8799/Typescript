import React, { useState, useEffect } from 'react'
import '../App.css'
import { useDispatch, useSelector } from 'react-redux';
import { getUsers, updateUser } from "./Action/userAction";
import axios from 'axios';
import Update from './Update'
export const Dashboard = () => {
  const [newData, setNewData] = useState([])
  const users = useSelector((state: any) => state.users.listOfUsers)
  const dispatch = useDispatch()
  const handleUpdate = (updatePayload: any) => {
    const updateData = users.find((item: any) => item.id == updatePayload.id)
    const indexOfData = users.indexOf(updateData);
    const copyOfData: any = [...users];
    copyOfData[indexOfData].name = updatePayload.name
    copyOfData[indexOfData].username = updatePayload.username
    copyOfData[indexOfData].email = updatePayload.email
    dispatch(updateUser(copyOfData));
    setNewData(copyOfData)
  };
  useEffect(() => {
    if (!users.length) {
      fetchData();
    }
    else {
      setNewData(users)
    }
  }, []);
  const fetchData = async () => {
    const result = await axios(
      'https://jsonplaceholder.typicode.com/users',
    );
    dispatch(getUsers(result.data))
    setNewData(result.data)
  };
  const handleDelete = (id: any) => {
    const deleteData = users.filter((item: any) => item.id !== id)
    dispatch(getUsers(deleteData));
    setNewData(deleteData)
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
          {newData.length && newData?.map((item: any, index: any) => (
            <tr key={index}>
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