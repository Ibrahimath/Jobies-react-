
import { Navigate, useSearchParams } from "react-router-dom"

export default function About() {
  
  const [searchParams] = useSearchParams()
  
  const name = searchParams.get('name')
  
  // if (!user) {
  //   return <Navigate to="/" replace={true} />
  // }

  return (
    <div className="about">
      {name && <p>Hi, {name}!</p>}

      <h2>About the developer</h2>
      <p>Ibrahim is a determined javascript Fullstack(BE heavy) developer with good problem solving skills and fast learning.</p>
      <p>Nationality: Nigeria</p>
      <p>Stack: MERN</p>
      <p>Skills: Html,Css, Javascript,Node,Express, MongoDb, React, Sql </p>
      <p>Git        : https://github.com/Ibrahimath </p>
      <p>contact    : Please send a message to sadiq.ibrahim108@gmail.com for more contact info and enquiries</p>
      

      
    </div>
  )
}
