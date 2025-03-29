import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import CompanyLogo from '../components/CompanyLogo';

const JobDetailPage = () => {
  const { jobId } = useParams();
  const navigate = useNavigate();
  const [job, setJob] = useState(null);

  // In a real app, this would fetch from an API
  useEffect(() => {
    const jobData = jobs.find(job => job.id === parseInt(jobId));
    setJob(jobData);
  }, [jobId]);

  const handleApply = () => {
    alert('Application submitted!');
  };

  const handleSaveJob = () => {
    alert('Job saved to your profile!');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <button 
          onClick={() => navigate('/')}
          className="flex items-center text-blue-600 hover:text-blue-800 mb-6"
        >
          <i className="fas fa-arrow-left mr-2"></i>
          Back to Jobs
        </button>

        {job && (
          <div className="bg-white shadow overflow-hidden sm:rounded-lg">
            {/* Job Header */}
            <div className="px-4 py-5 sm:px-6 border-b border-gray-200">
              <div className="flex items-start">
                <div className="mr-4">
                  <CompanyLogo 
                    logoUrl={job.company.logo} 
                    companyName={job.company.name} 
                    size="large"
                  />
                </div>
                <div>
                  <h1 className="text-2xl font-bold text-gray-900">{job.title}</h1>
                  <p className="text-lg text-gray-600">{job.company.name}</p>
                  <div className="mt-2 flex items-center text-gray-500">
                    <i className="fas fa-map-marker-alt mr-1"></i>
                    <span>
                      {job.location.city}, {job.location.state}
                      {job.location.remote && ' (Remote)'}
                      {job.location.hybrid && ' (Hybrid)'}
                    </span>
                  </div>
                  <div className="mt-2">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                      {job.type}
                    </span>
                    <span className="ml-2 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                      Posted {new Date(job.postedDate).toLocaleDateString()}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Job Details */}
            <div className="px-4 py-5 sm:p-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Main Content */}
                <div className="md:col-span-2">
                  <div className="mb-8">
                    <h2 className="text-lg font-medium text-gray-900 mb-2">Job Description</h2>
                    <p className="text-gray-700 whitespace-pre-line">{job.description}</p>
                  </div>

                  <div className="mb-8">
                    <h2 className="text-lg font-medium text-gray-900 mb-2">Requirements</h2>
                    <ul className="list-disc pl-5 space-y-1 text-gray-700">
                      <li><strong>Experience:</strong> {job.requirements.experience}</li>
                      <li><strong>Education:</strong> {job.requirements.education}</li>
                      {job.requirements.skills.map((skill, index) => (
                        <li key={index}>{skill}</li>
                      ))}
                    </ul>
                  </div>

                  {job.benefits && job.benefits.length > 0 && (
                    <div className="mb-8">
                      <h2 className="text-lg font-medium text-gray-900 mb-2">Benefits</h2>
                      <ul className="list-disc pl-5 space-y-1 text-gray-700">
                        {job.benefits.map((benefit, index) => (
                          <li key={index}>{benefit}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                {/* Sidebar */}
                <div className="space-y-4">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h3 className="font-medium text-lg mb-2">Salary</h3>
                    <p className="text-xl font-semibold text-blue-700">
                      ${job.salary.min.toLocaleString()} - ${job.salary.max.toLocaleString()} {job.salary.currency}
                    </p>
                    <p className="text-sm text-gray-500">per {job.salary.period}</p>
                  </div>

                  <div className="bg-white border border-gray-200 p-4 rounded-lg shadow-sm">
                    <button
                      onClick={handleApply}
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md mb-2"
                    >
                      <i className="fas fa-paper-plane mr-2"></i> Apply Now
                    </button>
                    <button
                      onClick={handleSaveJob}
                      className="w-full bg-white hover:bg-gray-50 text-gray-700 font-medium py-2 px-4 border border-gray-300 rounded-md"
                    >
                      <i className="far fa-bookmark mr-2"></i> Save Job
                    </button>
                  </div>

                  <div className="bg-white border border-gray-200 p-4 rounded-lg shadow-sm">
                    <h3 className="font-medium text-lg mb-2">About {job.company.name}</h3>
                    <p className="text-gray-700 mb-4">
                      {job.company.description || 'No company description available.'}
                    </p>
                    {job.company.website && (
                      <a 
                        href={job.company.website} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-800 text-sm"
                      >
                        <i className="fas fa-external-link-alt mr-1"></i> Visit Company Website
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

// Temporary mock data - in a real app this would come from an API
const jobs = [
  {
    id: 1,
    title: "Senior Angular Developer",
    company: {
      name: "Tech Innovations Inc.",
      logo: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&h=100&q=80",
      description: "Leading technology company specializing in web applications.",
      website: "https://techinnovations.example.com"
    },
    location: {
      city: "Sydney",
      state: "NSW",
      remote: true,
      hybrid: false
    },
    salary: {
      min: 120000,
      max: 150000,
      currency: "AUD",
      period: "year"
    },
    postedDate: "2023-06-15",
    description: "We're looking for an experienced Angular developer to join our team building cutting-edge web applications. You'll be responsible for developing new features, optimizing performance, and mentoring junior developers.\n\nKey responsibilities include:\n- Developing responsive user interfaces\n- Implementing state management solutions\n- Writing unit and integration tests\n- Collaborating with backend developers",
    requirements: {
      skills: ["Angular 12+", "TypeScript", "RxJS", "NgRx", "Jasmine", "Karma"],
      experience: "5+ years",
      education: "Bachelor's in Computer Science or related field"
    },
    benefits: ["Flexible hours", "Remote work", "Health insurance", "Annual bonus"],
    type: "Full-time"
  }
];

export default JobDetailPage;
