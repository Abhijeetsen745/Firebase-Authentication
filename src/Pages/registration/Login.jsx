import React, { useState } from "react";
import { Link } from "react-router-dom";
import { auth } from "../../firebase/FirebaseConfig";
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const signin = async () => {
      if(email===''||password===''){
        return alert('Please fill all fields!!');
      }
      
    try {
        const users = await signInWithEmailAndPassword(auth,email,password);
        const user = localStorage.setItem('user',JSON.stringify(users))
        alert("Login successful");
        navigate('/')
        setEmail("");
        setPassword("");
    } catch (error) {
        console.log(error);
        alert('email and password wrong')
    }
  }

  return (
    <div className="main flex h-screen items-center justify-center">
      <div className="bg-gray-800 px-10 py-10 rounded-xl">
        <div className="text-center text-white font-bold text-xl mb-4">
          <h1>Login</h1>
        </div>
        <div className="">
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            className="bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none"
          />
        </div>
        <div>
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            className="bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none"
          />
        </div>
        <div className="flex justify-center mb-3">
          <button
            type="submit"
            onClick={signin}
            className="bg-yellow-500 w-full text-black font-bold  px-2 py-2 rounded-lg"
          >
            Login
          </button>
        </div>
        <div className="text-white">
          Don't have an account{" "}
          <Link to={"/signup"} className="text-yellow-500 font-bold">
            Signup
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
