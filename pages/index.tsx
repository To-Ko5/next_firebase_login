import loading from '../styles/loading.module.css'

const Home = () => {
  const loginButtonClick = () => {
    console.log('login')
  }
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div>
        <div
          className={`${loading.loader} ease-linear rounded-full border-4 border-t-4 border-gray-200 h-12 w-12 mx-auto mb-4`}
        ></div>
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
