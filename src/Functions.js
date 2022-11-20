import { createUserWithEmailAndPassword, sendPasswordResetEmail, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { toast } from "react-toastify";
import { auth, database } from "./Database"
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { ref, set } from "firebase/database";

function FuncToast(text = "") {
  toast(text, {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  });
}

const register = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      set(ref(database, `/${userCredential.user.uid}`), {
        Name: "",
        Surname: "",
        Email: userCredential.user.email,
        Tel: "",
        Location: "",
      })
      FuncToast("Successful Register")
    })
    .catch((error) => {
      FuncToast(error.message)
    });
}

const login = (email, password) => {
  signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    localStorage.setItem('authUser', JSON.stringify(userCredential.user))
    console.log(userCredential.user)
    setTimeout(() => {
      FuncToast("Successful Login")
      setTimeout(() => {
        window.location.replace(window.location.origin);
      }, 400);
    }, 100);
  })
  .catch((error) => {
    FuncToast(error.message)
  });
}

const logout = () => {
  signOut(auth)
  .then(() => {
    localStorage.removeItem('authUser')
    setTimeout(() => {
      FuncToast("Success Logout")
      setTimeout(() => {
        window.location.replace(window.location.origin);
      }, 400);
    }, 100);
  })
  .catch((error) => {
    FuncToast(error.message)
  });
}

const reset = (email) => {
  sendPasswordResetEmail(auth, email)
  .then(() => {
    setTimeout(() => {
      FuncToast("Successful Send Reset Password Link")
      setTimeout(() => {
        window.location.replace(window.location.origin);
      }, 400);
    }, 100);
  })
  .catch((error) => {
    FuncToast(error.message)
  });
}

function Container() {
  return (
    <>
    <ToastContainer
      position="top-center"
      autoClose={1000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="light"
    />
    </>
  )
}

export default Container

export {register, login, logout, reset}