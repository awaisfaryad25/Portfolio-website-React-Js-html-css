const Experience = () => {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-2">Professional Experience</h2>
      <hr className="mb-3" />
      <ol className="relative border-s border-gray-200 dark:border-gray-700">

        {/* Job 1 - Associate Software Developer */}
        <li className="mb-10 ms-6">
          <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
            <svg className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300" fill="currentColor" viewBox="0 0 20 20">
              <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
            </svg>
          </span>
          <h3 className="mb-1 text-lg font-semibold text-gray-900 dark:text-white">
            Associate Software Developer
          </h3>
          <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            Sep 2024 – Present · CodeMiners IT & Consultancy · Lahore, Pakistan
          </time>
          <ul className="list-disc list-inside text-base font-normal text-gray-500 dark:text-gray-400">
            <li>Work independently and in team to handle client-side logic.</li>
            <li>Develop responsive and dynamic web applications across devices.</li>
          </ul>
        </li>

        {/* Job 2 - Intern */}
        <li className="mb-10 ms-6">
          <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
            <svg className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300" fill="currentColor" viewBox="0 0 20 20">
              <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
            </svg>
          </span>
          <h3 className="mb-1 text-lg font-semibold text-gray-900 dark:text-white">
            Frontend Developer Intern
          </h3>
          <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            Nov 2023 – Apr 2024 · Alpha Rages · Lahore, Pakistan
          </time>
          <ul className="list-disc list-inside text-base font-normal text-gray-500 dark:text-gray-400">
            <li>Develop dynamic and interactive templates with HTML, CSS, JavaScript.</li>
            <li>Collaborated with design and marketing teams.</li>
          </ul>
        </li>

      </ol>
    </div>
  );
};

export default Experience;
