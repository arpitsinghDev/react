import { useEffect } from "react";
import { auth } from "../utility/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useDispatch, useSelector, useStore } from "react-redux";
import { useNavigate, Link } from "react-router";
import { addUser, removeUser } from "../utility/store/userSlice";
const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userStore = useSelector((state) => state.user);
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, accessToken, email, displayName } = user;
        dispatch(
          addUser({
            uid,
            accessToken,
            email,
            displayName,
          })
        );
        navigate("/");
      } else {
        navigate("/login");
      }
    });

    ///this onAuthStateChanged return unsubscribe we use to unmount
    return () => unsubscribe();
  }, []);
  function handleSignOut() {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        dispatch(removeUser());
      })
      .catch((error) => {
        // An error happened.
      });
  }
  return (
    <header className="bg-white shadow-md py-4 px-6 flex items-center justify-between">
      <nav className="flex items-center gap-6">
        <span className="text-xl font-bold text-blue-600">MyApp</span>
        <Link to="/browser" className="text-gray-700 hover:text-blue-500">
          Browser
        </Link>
      </nav>
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 transition-colors flex items-center gap-2"
        onClick={handleSignOut}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-5 h-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.5 20.25a7.5 7.5 0 1115 0v.75A2.25 2.25 0 0117.75 23H6.25A2.25 2.25 0 014 20.25v-.75z"
          />
        </svg>
        {userStore ? (
          <span>Sign out / Profile</span>
        ) : (
          <Link to="/login">Login</Link>
        )}
      </button>
    </header>
  );
};

export default Header;
