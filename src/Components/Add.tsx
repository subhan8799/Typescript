import React, { useState,useEffect } from 'react';
// import Button from 'react-bootstrap/Button';
// import Modal from 'react-bootstrap/Modal';
// import Form from 'react-bootstrap/Form';
import Form from 'react-bootstrap/Form';
import { Button } from '@mui/material'
import { Box } from '@mui/material' 
import { Modal } from '@mui/material'
import { Typography } from '@mui/material'
import {  useSelector } from 'react-redux';
const style = {
  position: 'absolute' as 'absolute',
  top: '40%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};
const Add = (props:any) => {
    //its-ignore
  const users = useSelector((state: any) => state.users.users);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
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
    <Button onClick={handleOpen}>Add</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Add Data
          </Typography>
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
          <Button variant="outlined"  onClick={handleClose}>
            Close
          </Button>
          <Button variant="outlined" onClick={adddata}>
            Save Updates
          </Button>
        </Box>
      </Modal>



      
      {/* <Button className="add" variant="primary" onClick={handleShow}>
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
      </Modal> */}
    </>
  );
}
export default Add;