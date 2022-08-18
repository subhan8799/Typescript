import React, { useState, useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import { Button } from '@mui/material'
import { Box } from '@mui/material'
import { Modal } from '@mui/material'
import { Typography } from '@mui/material'
import { Signbtn } from '../Buttons/Buttons';
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
const Update = (props: any) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [name, setName] = useState("");
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  useEffect(() => {
    if (props.editOject != null) {
      setName(props.editOject.name);
      setUserName(props.editOject.username);
      setEmail(props.editOject.email);
    }
  }, [])
  const updatedata = () => {
    const payload = {
      id: props.editOject.id,
      name,
      username,
      email,
    }
    props.updatefunctionFromParent(payload)
    handleClose()
  }
  return (
    <>
      <Button onClick={handleOpen}>Edit</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Update
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
          <Signbtn onClick={handleClose} text="Close"/>
          <Signbtn onClick={updatedata} text="Save"/>
        </Box>
      </Modal>
    </>
  );
}
export default Update;