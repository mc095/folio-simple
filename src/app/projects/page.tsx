import Link from 'next/link';

export default function Projects() {
  const projectList = [
    {
      title: '🍃 Distress Support Chatbot',
      description: 'Phi-3 powered LLM chatbot',
      link: 'https://ashhealth07.netlify.app/'
    },
    {
      title: '💼 Job Portal Manager',
      description: 'A recruiter POV job portal manager',
      link: 'https://mern-app-job-portal.vercel.app/'
    },
    {
      title: '🛒 Ecommerce',
      description: 'A simple ecommerce clone using Next.js',
      link: 'https://bloom-store-sooty.vercel.app/'
    },
    {
      title: '📹 YouTube Summarizer',
      description: 'Summarize YouTube videos using GROK',
      link: 'https://github.com/mc095/Youtube_tr_Summariser'
    },
    {
      title: '📊 Student Statistics Analyzer',
      description: 'LLM powered chatbot analyzer',
      link: 'https://github.com/mc095/Excel_Answering_Chatbot'
    },
  ];

  return (
    <main className="flex flex-col items-center justify-center py-24 px-4">
      <div>
        <h1 className="text-4xl font-bold text-white">Projects</h1>
        <p className="mt-6 text-lg text-gray-400">
          Head over to my <Link href="https://github.com/mc095"><u>GitHub</u></Link> to see all my projects.
        </p>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projectList.map((project, index) => (
            <div
              key={index}
              className="bg-black bg-opacity-50 shadow-md rounded-lg p-6"
            >
              <h2 className="text-xl font-semibold text-white mb-2">{project.title}</h2>
              <p className="text-gray-300 mb-4">{project.description}</p>
              <Link href={project.link} className="text-blue-500 underline">
                View
              </Link>
            </div>
          ))}
        </div>

        <div className="mt-8">
          <Link href="/" className="text-blue-500 underline">
            Go back to Home
          </Link>
        </div>
      </div>
    </main>
  );
}
