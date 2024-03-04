import React from 'react'
import "./Register.css"
function Register() {
  return (
<div class="login-page">
  <div class="form">
    <form class="register-form">
      <input type="text" placeholder="name"/>
      <input type="password" placeholder="password"/>
      <input type="text" placeholder="email address"/>
      <button>create</button>
      <p class="message">Already registered? <a href="#">Sign In</a></p>
    </form>
    <form class="login-form">
      <input type="text" placeholder="username"/>
      <input type="password" placeholder="password"/>
      <button>Register</button>
      <p class="message">Already have an account? <a href="#">Login</a></p>
    </form>
  </div>
</div>
  )
}

export default Register