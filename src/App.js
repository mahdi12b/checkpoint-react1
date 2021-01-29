import logo from './logo.svg';
import './App.css';
import Button from 'react-bootstrap/Button';
import { Form } from 'react-bootstrap';

function App() {
  return (
    <div className="App" id='root'>
     <Form>
     <h3>Register</h3>

<div className="form-group">
    <label htmlFor='inputFName'>First name</label> 
    <input id='inputFName' type="text" className="form-control" placeholder="First name" />
</div>

<div className="form-group">
    <label htmlFor='inputLName'>Last name</label>
    <input id='inputLName' type="text" className="form-control" placeholder="Last name" />
</div>

<div className="form-group">
    <label htmlFor='inputEmail'>Email</label>
    <input id='inputEmail' type="email" className="form-control" placeholder="Enter email" />
</div>

<div className="form-group">
    <label htmlFor='inputPassword'>Password</label>
    <input id='inputPassword' type="password" className="form-control" placeholder="Enter password" />
</div>

<Button type="submit" className="button btn  btn-lg btn-block">Register</Button>
<p className="forgot-password text-right">
    Already registered <a href="#">log in?</a>
</p>
</Form>
    </div>
  );
}

export default App;
