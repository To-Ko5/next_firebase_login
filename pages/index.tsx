import { useEffect, useState } from 'react'
import { useUser } from '../context/userContext'
import firebase from 'firebase/app'
import loading from '../styles/loading.module.css'

const Home = () => {
  const { user, loadingUser } = useUser()
  const [nickname, setNickname] = useState([])

  const loginButtonClick = () => {
    firebase.auth().signInWithPopup(new firebase.auth.GoogleAuthProvider())
  }

  const setUserNickname = () => {
    const id = firebase.firestore().collection('_').doc().id
    firebase.firestore().doc(`nickname/${id}`).set({
      id,
      name: 'tom'
    })
  }

  const getUserNickname = () => {
    firebase
      .firestore()
      .collection('nickname')
      .get()
      .then((e) => {
        setNickname(e.docs.map((doc) => doc.data()))
      })
  }

  useEffect(() => {
    getUserNickname()
  }, [])

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

        <button
          onClick={setUserNickname}
          className="px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
        >
          ユーザーを追加
        </button>

        {nickname?.map((e) => (
          <p key={e.id}>{e.name}</p>
        ))}
      </div>
    </div>
  )
}

export default Home
