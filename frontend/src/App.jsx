// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
      
//     </>
//   )
// }

// export default App

import config from './config/dev_config.json';
import { useState , useEffect } from 'react'

function App() {
   const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("http://127.0.0.1:5000/api/hello") // Call Flask API
      .then((res) => res.json())
      .then((data) => setMessage(data.message))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="p-6 text-center">
      <h1 className="text-2xl font-bold">Hello {config.APP_NAME}</h1>
       {console.log(config.LOGO)}
      <img src={config.LOGO} alt="logo" className="mx-auto mt-4 w-32" />
       <p>{message}</p>
    </div>
  );
}

export default App;

