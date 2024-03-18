import { useDebugValue } from "react";
import { useState } from "react";

const App = () => {
  const Onclickhandler = () => {
    console.log("Submit");
  };
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  return (
    <div className="flex justify-center items-center">
      <div className="bg-blue-400 py-10 mt-40 rounded-md w-1/4 flex justify-center items-center ">
        <form className="w-full flex flex-col items-center">
          <p className=" font-semibold text-3xl text-center">Login Form</p>
          <input
            placeholder="Enter email here"
            className="block border-2 p-4 border-gray-400 m-5 rounded-md w-5/6 "
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            placeholder="Enter password here"
            className="block border-2 p-4 border-gray-400 m-5 rounded-md w-5/6 "
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {/* <div className="flex justify-center items-center"> */}
          <button
            onClick={Onclickhandler}
            className=" text-black w-5/6 bg-white p-4 m-4 rounded-md font-semibold hover:bg-slate-600 "
            title="Submit"
            type="button"
          >
            Login
          </button>
          {/* </div> */}
        </form>
      </div>
    </div>
  );
};
export default App;
