const Home = () => {
  const loginButtonClick = () => {
    console.log('login')
  }
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div>
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
