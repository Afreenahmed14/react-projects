import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// import Card from './Card.jsx'
// import './Card.css'
import Breakfast from './Breakfast'

function App() {
  return (
    <div className='f'>
      <h1></h1>
   <Breakfast name="Breakfast" abe="Pancake" description="This meal is crucial for replenishing energy after a period of fasting. 
   It sets the tone for the day's metabolism and can significantly impact blood sugar levels.  "  
    imgeurl={"https://img.delicious.com.au/EyhPamCD/del/2023/06/easy-pancake-191698-2.jpg"}/>
   <Breakfast name="Lunch" abe="Indian Food" description="Lunch is typically eaten around midday, often between 11 am and 2 pm. It's a lighter meal compared to breakfast and dinner. Common lunch items include sandwiches" 
   imgeurl={"https://5.imimg.com/data5/SELLER/Default/2022/6/ZP/TZ/IK/144143379/lunch-food-services.jpg"}/>
   <Breakfast name="Snacks" abe="Snacks" description= "Snacks are typically small portions of food, eaten between meals, or as a quick and easy meal replacement. They can be anything from packaged foods " 
   imgeurl={"https://i.pinimg.com/474x/bb/5a/dd/bb5add9ada4055a933b6eefa461c9012.jpg"} />
   <Breakfast name="Dinner" abe="Dinner" description= "Dinner, or supper, is the evening meal and is generally the largest and most substantial meal of the day for many people. It's a time for families and friends " 
   imgeurl={"https://ministryofcurry.com/wp-content/uploads/2024/06/chicken-biryani-5.jpg"} />
   </div>
  )
}
export default App