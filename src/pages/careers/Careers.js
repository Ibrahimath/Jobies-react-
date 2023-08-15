import { Link, useLoaderData } from "react-router-dom"

export default function Careers() {
  const careers = useLoaderData()
  const jobs = careers.jobs

  const random = Math.ceil(Math.random()*1000)
  
  const Jobs20 = jobs.slice(random,(random+20))
  
  return (
    <div className="careers">
      <h2>Careers</h2>
      <p>Refreshing the page gives different list</p>
      {Jobs20.map(career => (
        <Link to={career.id.toString()} key={career.id}>
          <p>{career.title}</p>
          <p>Based in {career.candidate_required_location}</p>
        </Link>
      ))}
    </div>
  )
}

// data loader
export const careersLoader = async () => {
  const res = await fetch('https://remotive.com/api/remote-jobs')

  if (!res.ok) {
    throw Error('Could not fetch the list of careers')
  }

  return res.json()
}