import {useState} from 'react'

import { 
  Modal, 
  FormControl, 
  InputLabel, 
  Input,
  FormHelperText, 
  Button 
} from '@material-ui/core';

import './LoginModal.scss';

function LoginModal({show, handleClose, handleSubmit}) {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const submit = (e) => {
    e.preventDefault()
    setError('')

    if (!username || !password) {
      setError('Username and Password are required!')
      return
    }
    handleSubmit({username, password})
  }

  const renderInput = (title, value, onChange, type = "text") => {
    const change = (event) => {
      setError('')
      onChange(event.target.value)     
    }

    return (
      <FormControl>
        <InputLabel htmlFor={title}>Enter your {title}</InputLabel>
        <Input id={title} type={type} value={value} onChange={change} aria-describedby="my-helper-text" />
      </FormControl>
    )
  }

  const loginModalContent = (
    <div className="login-modal">
      <h2>Login</h2>
      <form>
        <div className="form-content">
          {renderInput('username', username, setUsername)}
          {renderInput('password', password, setPassword, 'password')}
          <FormControl>
            <FormHelperText>{error}</FormHelperText>
          </FormControl>
        </div>
        
        <div className="form-actions-container">
          <Button color="primary" variant="contained" onClick={submit}>Login</Button>
        </div>
      </form>
    </div>
  )

  return (
    <Modal
      open={show}
      onClose={handleClose}
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
    >
      {loginModalContent}
    </Modal>
  );
}

export default LoginModal;
