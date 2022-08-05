import React, { useState,useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import {  useSelector } from 'react-redux';
const Add = (props:any) => {
    //its-ignore
  const users = useSelector((state: any) => state.users.users);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
   const [name, setName] = useState("");
   const [username, setUserName] = useState("");
  const [email, setEmail] = useState(""); 
  const adddata = () => {
    const payload = {
      id:users && users.length+1,
      name,
      username,
      email,
    } 
    props.addfunctionFromParent(payload)
    handleClose()
    setTimeout(()=>{
        setName('')
        setUserName('')
        setEmail('')
    },1000)
  }
  
  return (
    <>
      <Button className="add" variant="primary" onClick={handleShow}>
        Add
      </Button>
      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Add Data</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="Enter Name" value={name} onChange={(e) => setName(e.target.value)} />
              <Form.Text className="text-muted">
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>UserName</Form.Label>
              <Form.Control type="text" placeholder="UserName" value={username} onChange={(e) => setUserName(e.target.value)} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={adddata} >
            Save Add Data
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
export default Add;