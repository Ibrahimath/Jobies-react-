import { useLoaderData, useParams } from 'react-router-dom'

export default function CareerDetails() {
  const { id } = useParams()
  const careers = useLoaderData()
  const jobs = careers.jobs
  const idToNumber = parseInt(id)
  const career = jobs.find(job => job.id === idToNumber)
  if (!career){
    throw Error ("Career not found")
  }

  return (
    <div className="career-details">
      <h2>Career Details for {career.title}</h2>
      <p>Salary: {career.salary || "N/A"}</p>
      <p>Candidate's required location: {career.candidate_required_location}</p>
      <p>Company Name: {career.company_name}</p>
      <p>Job Type: {career.job_type}</p>
      <a href = {career.url}> Comprehensive info</a>
      <div className="details">
      </div>
    </div>
  )
}

// data loader
export const careerDetailsLoader = async ({ params }) => {
  const { id } = params

  const res = await fetch('https://remotive.com/api/remote-jobs')
  // https://remotive.com/api/remote-jobs
  if (!res.ok) {
    throw Error('Could not find that career.')
  }

  return res.json()
}