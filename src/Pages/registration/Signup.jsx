import { Link, useNavigate } from "react-router-dom";
import {createUserWithEmailAndPassword} from 'firebase/auth'
import { useState } from "react";
import { auth } from '../../firebase/FirebaseConfig';


function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const signup = async () => {
    if(email===''|| password===''){
        return alert("Please fill all fields")
    }
    try {
        const user = await createUserWithEmailAndPassword(auth,email,password);
        alert("Signup Successful")
        navigate('/login')
        setEmail("");
        setPassword("");
    } catch (error) {
        console.log(error);
        alert('email already in use and make 6 digits password')
    }
  }

  return (
    <div className=" flex justify-center items-center h-screen">
      <div className=" bg-gray-800 px-10 py-10 rounded-xl ">
        <div className="">
          <h1 className="text-center text-white text-xl mb-4 font-bold">
            Signup
          </h1>
        </div>
        <div>
          <input
            type="email"
            name="email"
            className=" bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none"
            placeholder="Email"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
          />
        </div>
        <div>
          <input
            type="password"
            className=" bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none"
            placeholder="Password"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
          />
        </div>
        <div className=" flex justify-center mb-3">
          <button className=" bg-red-500 w-full text-white font-bold  px-2 py-2 rounded-lg" onClick={signup}>
            Signup
          </button>
        </div>
        <div>
          <h2 className="text-white">
            Don't have an account{" "}
            <Link className=" text-red-500 font-bold" to={"/login"}>
              Login
            </Link>
          </h2>
        </div>
      </div>
    </div>
  );
}

export default Signup;
