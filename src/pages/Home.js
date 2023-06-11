import { useState } from "react"

export default function Home() {
  const [name, setName] = useState("")

  // const HandleChange = (e) =>{
  //   setName(value)
  // }
  return (
    <div className="home">
      <h2>Welcome {name}!</h2>
      <input style = {{color: "black"}}
       type="text"
        value = {name}
        placeholder="Please enter a name"
         onChange={(e) => setName(e.target.value)} />
       <p>Hi!, This is to inform you that this simple react website is only a showcase of some functionalities of react.</p>
        <p> Kindly note that your information is neither required nor stored.</p>
        <p> The website updates its info itself by fectching data from "remotive.com" and so the careers are real, functional and up-to-date according to what it fetches from the mentioned website. </p>
      <p>To know about the developer, kindly visit the "about page".</p>
    </div>
  )
}
//