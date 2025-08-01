import { useRef, useState } from "react";
import { validateAuthForm } from "../utility/authFormValidate";
import { auth } from "../utility/firebase";
import { signInWithEmailAndPassword,createUserWithEmailAndPassword } from "firebase/auth";
import { addUser } from "../utility/userSlice";
import { useDispatch } from "react-redux";
export const Login = () => {
  const dispatch=useDispatch()
  const [isLogInForm, setIsLogInForm] = useState(false);
  const [errMessage, setErrMessage] = useState(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const nameRef = useRef(null);
  const handleFormSubmit = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    const name = nameRef.current ? nameRef.current.value : null;
    const message = validateAuthForm(email, password);
    setErrMessage(message);
    if (isLogInForm) {
      // Handle login logic
      console.log("Logging in with:", { email, password });
       signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          const { uid,accessToken,email,displayName}=user;
          console.log(user);
           dispatch(addUser({
            uid,accessToken,email,displayName
           }));
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          setErrMessage(error.message);
        });
    } else {
      // Handle sign-up logic
      console.log("Signing up with:", { name, email, password });
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
            const { uid,accessToken,email,displayName}=user;
          dispatch(addUser({
            uid,accessToken,email,displayName
           }));
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          setErrMessage(error.message);
        });
    }
  };
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form className="bg-white p-8 rounded shadow-md w-full max-w-sm">
        <h2 className="text-2xl font-bold mb-6 text-center">
          {isLogInForm ? "Login" : "Sign Up"}
        </h2>
        {!isLogInForm ? (
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              ref={nameRef}
              className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your name"
              required
            />
          </div>
        ) : (
          ""
        )}
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            ref={emailRef}
            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your email"
            required
          />
        </div>
        <div className="mb-6">
          <label htmlFor="password" className="block text-gray-700 mb-2">
            Password
          </label>
          <input
            type="password"
            id="password"
            ref={passwordRef}
            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your password"
            required
          />
        </div>
        {errMessage && (
          <div className="mb-4 text-red-500 text-sm">{errMessage}</div>
        )}
        <button
          type="submit"
          onClick={(e) => handleFormSubmit(e)}
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition-colors"
        >
          {isLogInForm ? "Log In" : "Sign Up"}
        </button>
        <p
          className="mt-4 text-center text-gray-600 cursor-pointer"
          onClick={() => {
            setIsLogInForm(!isLogInForm);
            setErrMessage(null);
          }}
        >
          {isLogInForm ? "Don't have an account?" : "Already have an account?"}
        </p>
      </form>
    </div>
  );
};
