import { useEffect } from 'react'
import { useUser } from '../context/userContext'
import firebase from 'firebase/app'
import loading from '../styles/loading.module.css'

const Home = () => {
  const { user, loadingUser } = useUser()

  const loginButtonClick = () => {
    firebase.auth().signInWithPopup(new firebase.auth.GoogleAuthProvider())
  }

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div>
        {loadingUser && (
          <div
            className={`${loading.loader} ease-linear rounded-full border-4 border-t-4 border-gray-200 h-12 w-12 mx-auto mb-4`}
          ></div>
        )}

        {user && <p>{user.displayName}</p>}
        <button
          onClick={loginButtonClick}
          className="px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
        >
          ログイン
        </button>
      </div>
    </div>
  )
}

export default Home
