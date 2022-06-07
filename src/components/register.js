import { useState } from "react";

const Register=()=>{
    const [email, setEmail]= useState('');
    const [password, setPassword]= useState('');
    const [address, setAddress]=useState('');
    const [Phone, setPhone]=useState('');
    const [Gender, setGender]=useState('');
    const [Comment, setComment]=useState('');

    

    return(
        <form class="row g-3 m-10">
  <div class="col-md-6">
    <label for="inputEmail4" class="form-label">Email</label>
    <input type="email" class="form-control" id="inputEmail4" onChange={(e)=> setEmail(e.target.value)}/>
  </div>
  <div class="col-md-6">
    <label for="inputPassword4" class="form-label">Password</label>
    <input type="password" class="form-control" id="inputPassword4" onChange={(e)=> setPassword(e.target.value)}/>
  </div>
  <div class="col-12">
    <label for="inputAddress" class="form-label">Address</label>
    <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St" onChange={(e)=> setAddress(e.target.value)}/>
  </div>
  <div class="col-12">
    <label for="inputAddress2" class="form-label">Phone Number</label>
    <input type="text" class="form-control" id="inputAddress2" onChange={(e)=> setPhone(e.target.value)}/>
  </div>
  <div class="col-md-6">
    <label for="inputCity" class="form-label">City</label>
    <input type="text" class="form-control" id="inputCity"/>
  </div>
  <div class="col-md-4">
    <label for="inputState" class="form-label">Gender</label>
    <select id="inputState" class="form-select" onChange={(e)=> setGender(e.target.value)}>
      <option >Male</option>
      <option>Female</option>
      <option>Others</option>
      
    </select>
  </div>
  <div class="col-md-2">
    <label for="inputZip" class="form-label">Zip</label>
    <input type="text" class="form-control" id="inputZip"/>
  </div>
  <div class="col-md-12">
      <label class="comment">Comment:</label> <br/>
      <textarea class="w-50" onChange={(e)=> setComment(e.target.value)}  ></textarea>
      
  </div>
  <div class="col-12">
    <div class="form-check">
      <input class="form-check-input" type="checkbox" id="gridCheck"/>
      <label class="form-check-label" for="gridCheck">
        Check me out
      </label>
    </div>
  </div>
  
  <div class="col-12">
    <button type="submit" class="btn btn-primary">Register</button>
    <p>{email}</p>
    <p>{password}</p>
    <p>{address}</p>
    <p>{Phone}</p>
    <p>{Gender}</p>
    <p>{Comment}</p>
  </div>
</form>
    )
}
export default Register;