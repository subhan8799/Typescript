import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { getUsers, updateUser, addUser, stateUsers, setIsLoginUser } from "../Action/userAction";
import { Button } from '@mui/material'
import axios from 'axios';
import Update from '../Update/Update'
import Add from '../Add/Add'
import {AiOutlineUser} from 'react-icons/ai'
export const Dashboard = () => {
  interface initialStateProps {
    id?: number,
    name?: string,
    username?: string,
    email?: string
  }
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleMoving = () => {
    navigate("/signIn");
    dispatch(setIsLoginUser(false));
};
  const [newData, setNewData] = useState({})
  const [searchValue, setSearchValue] = useState("")
  const [filterdata, setFilterData] = useState<any>([]);
  const keys = ["name", "username", "email"];
  const users: initialStateProps[] = useSelector((state: any) => state.users.users);
  const handleSubmit = (e: any) => {
    setSearchValue(e.target.value);
    let inputVal = e.target.value;
    let filterData: any = users.filter((val: any) => {
      return val.name.toLowerCase().includes(inputVal.toLowerCase());
    })
    setFilterData(filterData)
  }
  const handleUpdate = (updatePayload: any) => {
    const updateData: any = users.find((item: any) => item.id == updatePayload.id)
    const indexOfData = users.indexOf(updateData);
    const copyOfData: any = [...users,];
    copyOfData[indexOfData].name = updatePayload.name
    copyOfData[indexOfData].username = updatePayload.username
    copyOfData[indexOfData].email = updatePayload.email
    dispatch(updateUser(copyOfData));
    setNewData(copyOfData)
  };
  const handleAdd = (addPayload: "string") => {
    const copyOfData: any = [...users, addPayload];
    const index = copyOfData.findIndex((item: any) => item.id == 6)
    console.log("index", index)
    copyOfData.findIndex((item: any) => item.id)
    dispatch(addUser(copyOfData)); 
    setNewData(copyOfData)
    setFilterData(copyOfData)
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
  const handleDelete = (id: "string") => {
    const deleteData: any = users.filter((item: any) => item.id !== id)
    dispatch(getUsers(deleteData));
    setNewData(deleteData)
    setFilterData(deleteData)
  }
  useEffect(() => {
    if (!filterdata.length) {
      setFilterData(users)
    }
  }, [])
  return (
    <div>
      <div className="Dashboard">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <Add addfunctionFromParent={handleAdd} />
            </div>
            <div className="col-lg-4">
              <h1>Dashboard</h1>
            </div>
            <div className="col-lg-4">
              <div className='posistion'>
                <input
                  type="text"
                  className="search"
                  name="search"
                  placeholder="Search......"
                  value={searchValue}
                  onChange={handleSubmit}
                />
                {/* <input 
                className='userbox'
                value="subhan@77"
                />
              <AiOutlineUser className="icon"/> */}
              <button className='Logout' onClick={handleMoving} >Logout</button>
              </div>
            </div>
          </div>
        </div>
        <table>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>UserName</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
          <tbody>
            {filterdata?.length > 0 ?
              filterdata?.map((item: any, index: number) => {
                return (
                  <tr key={index}>
                    <td>{item?.id}</td>
                    <td>{item?.name}</td>
                    <td>{item?.username}</td>
                    <td>{item?.email}</td>
                    <td>
                      <Update editOject={item} updatefunctionFromParent={handleUpdate} />
                      <Button className='delete' onClick={() => handleDelete(item.id)}>Delete</Button>
                    </td>
                  </tr>
                )
              }) : (
                <h1>Search Data Not Found</h1>
              )
            }
          </tbody>
        </table >
      </div>
    </div>
  )
}
export default Dashboard;