import React, { useState, useEffect } from 'react'
import '../App.css'
import { useDispatch, useSelector } from 'react-redux';
import { getUsers, updateUser, addUser } from "./Action/userAction";
import axios from 'axios';
import Update from './Update'
import Add from './Add'
export const Dashboard = () => {
  const [newData, setNewData] = useState([])
  const [searchValue, setSearchValue] = useState("")
  const [filterdata, setFilterData] = useState([]);
  const keys = ["name", "username", "email"]
  const users = useSelector((state: any) => state.users.users);
  const  handleSubmit=(e:any)=>{
    setSearchValue(e.target.value);
    let inputVal = e.target.value;
    let filterData = users.filter((val:any)=>{
      return val.name.toLowerCase().includes(inputVal.toLowerCase());
    })
    setFilterData(filterData)
  }
  const dispatch = useDispatch()
  const handleUpdate = (updatePayload: any) => {
    console.log(updatePayload)
    const updateData = users.find((item: any) => item.id == updatePayload.id)
    const indexOfData = users.indexOf(updateData);
    const copyOfData: any = [...users,];
    copyOfData[indexOfData].name = updatePayload.name
    copyOfData[indexOfData].username = updatePayload.username
    copyOfData[indexOfData].email = updatePayload.email
    dispatch(updateUser(copyOfData));
    setNewData(copyOfData)
  };
  const handleAdd = (addPayload: any) => {
    const copyOfData: any = [...users, addPayload];
    // copyOfData.map((item: any) => item.id = item.id+1)
    const index = copyOfData.findIndex((item: any) => item.id == 6)
    console.log("index", index)
    copyOfData.findIndex((item: any) => item.id)
    dispatch(addUser(copyOfData));
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
  useEffect(()=>{
    if(!filterdata.length){
      setFilterData(users)
    }
  },[]) 
  
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
              <div>
                <input
                  type="text"
                  className="search"
                  name="search"
                  placeholder="Search.."
                  value={searchValue}
                  onChange={handleSubmit}
                />
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
        filterdata?.map((item,index)=>{
    return (
      // @ts-ignore
      <tr key={index}>
      {/* @ts-ignore */}
      <td>{item?.id}</td> 
      {/* @ts-ignore */}
      <td>{item?.name}</td> 
      {/* @ts-ignore */}
       <td>{item?.username}</td> 
      {/* @ts-ignore */}
      <td>{item?.email}</td>
      <td> 
        <Update editOject={item} updatefunctionFromParent={handleUpdate} /> 
        {/* @ts-ignore */}
        <button className='delete' onClick={() => handleDelete(item.id)}>Delete</button>
      </td>
    </tr> 
    )
  }):(
    <h1>Search Not Data Found</h1>
  )
}  

          </tbody>
        </table >
      </div>
    </div>
  )
}
export default Dashboard;