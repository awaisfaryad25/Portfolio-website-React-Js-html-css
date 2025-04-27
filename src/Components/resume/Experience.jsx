
const Experience = () => {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-2">Professional Experience</h2>
        <hr className='mb-3'/>
        <div className="mb-4">
          <div className="flex items-center justify-between gap-8">
            <h3 className='text-xl font-semibold mb-1'>Associate Software Developer</h3>
            <p>Sep-2024 – present</p>
          </div>
          <div className="flex items-center justify-between gap-8">
            <h3 className=' font-medium mb-2'>CodeMiners IT & Consultancy</h3>
            <p>Lahore, Pakistan</p>
          </div>
          <h3 className="text-xl font-semibold"></h3>
          <ul className="list-disc list-inside">
            <li>Work independently and in team to handle client side logic.</li>
            <li>Develop responsive and dynamic web applications across devices.</li>
          </ul>
        </div>
        <div>
          <div className="flex items-center justify-between gap-8">
            <h3 className='text-xl font-semibold mb-1'>Frontend Developer Intern</h3>
            <p>11/2023 - 04/2024</p>
          </div>
          <div className="flex items-center justify-between gap-8">
            <h3 className=' font-medium mb-2'>Alpha Rages</h3>
            <p>Lahore, Pakistan</p>
          </div>
          <ul className="list-disc list-inside">
            <li>Develop dynamic and interactive templates with HTML, CSS, JavaScript.</li>
            <li>Collaborated with design and marketing teams.</li>
          </ul>
        </div>
    </div>
  )
}

export default Experience