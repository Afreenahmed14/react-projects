import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Reuse from './Reuse'

function App() {
  const [count, setCount] = useState()

  return (
<div>
  <Reuse name="Afreen" usn="1KI21CS005" phone ="789456123"/>
  <Reuse name="Adan" usn="1KI21CS004" phone ="9876541230"/>
  <Reuse name="Sariya" usn="1KI21CS096" phone ="8975641230"/>
</div>
  )
}

export default App
