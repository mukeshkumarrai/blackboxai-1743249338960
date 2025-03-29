import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark, faStar, faMapMarkerAlt, faClock } from '@fortawesome/free-solid-svg-icons';

const JobCard = ({ job }) => {
  const navigate = useNavigate();
  const [isSaved, setIsSaved] = useState(job.saved || false);

  const toggleSave = (e) => {
    e.stopPropagation();
    setIsSaved(!isSaved);
  };

  const isNewJob = () => {
    const postedDate = new Date(job.postedDate);
    const now = new Date();
    return (now - postedDate) < (7 * 24 * 60 * 60 * 1000); // Within 7 days
  };

  return (
    <div 
      className="bg-white rounded-lg shadow-md p-6 mb-4 hover:shadow-lg transition-shadow cursor-pointer border-l-4 border-blue-500"
      onClick={() => navigate(`/job/${job.id}`)}
    >
      <div className="flex items-start gap-4">
        {/* Company Logo */}
        <div className="flex-shrink-0">
          <img 
            src={job.company.logo || '/default-company-logo.svg'} 
            alt={`${job.company.name} logo`}
            className="w-20 h-20 object-contain rounded-lg border border-gray-200"
          />
        </div>

        {/* Job Details */}
        <div className="flex-1">
          <div className="flex justify-between items-start">
            <div>
<h3 className="text-xl font-bold text-gray-800">{job.title}</h3>

              <div className="flex items-center gap-2 mt-1">
                <p className="text-gray-700 font-medium">{job.company.name}</p>
                {job.company.rating && (
                  <span className="flex items-center text-yellow-500 text-sm">
                    <FontAwesomeIcon icon={faStar} className="mr-1" />
                    {job.company.rating}
                  </span>
                )}
              </div>
            </div>
            <div className="flex gap-2">
              {isNewJob() && (
                <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                  New
                </span>
              )}
              <button 
                onClick={toggleSave}
                className={`p-2 rounded-full ${isSaved ? 'text-blue-600' : 'text-gray-400'}`}
              >
                <FontAwesomeIcon icon={faBookmark} size="lg" />
              </button>
            </div>
          </div>

          <div className="mt-3 flex flex-wrap gap-2">
            <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
              {job.type}
            </span>
            {job.workType && (
              <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">
                {job.workType}
              </span>
            )}
          </div>

          <div className="mt-3">
            <div className="flex items-center text-gray-700">
              <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2 text-gray-500" />
              <span>
                {job.location.city}, {job.location.state}
                {job.location.remote && ' • Remote'}
                {job.location.hybrid && ' • Hybrid'}
              </span>
            </div>
            <div className="mt-2">
<p className="text-lg font-bold text-blue-700">

                ${job.salary.min.toLocaleString()} - ${job.salary.max.toLocaleString()} {job.salary.currency}
                <span className="text-gray-600 text-sm ml-1">/ {job.salary.period}</span>
              </p>
            </div>
          </div>

          {job.highlights && job.highlights.length > 0 && (
            <div className="mt-3">
              <ul className="list-disc list-inside text-gray-700 text-sm">
                {job.highlights.slice(0, 2).map((highlight, index) => (
                  <li key={index}>{highlight}</li>
                ))}
              </ul>
            </div>
          )}

          <div className="mt-4 flex flex-wrap gap-3">
            {job.requirements.skills.slice(0, 4).map((skill, index) => (
              <span key={index} className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm">
                {skill}
              </span>
            ))}
            {job.requirements.skills.length > 4 && (
              <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm">
                +{job.requirements.skills.length - 4} more
              </span>
            )}
          </div>

          <div className="mt-4 flex justify-between items-center">
            <div className="flex items-center text-gray-500 text-sm">
              <FontAwesomeIcon icon={faClock} className="mr-1" />
              <span>Posted {new Date(job.postedDate).toLocaleDateString()}</span>
            </div>
            <div className="flex gap-2">
<button 
  className="bg-blue-700 hover:bg-blue-800 text-white px-4 py-2 rounded-lg text-sm font-medium"

                onClick={(e) => {
                  e.stopPropagation();
                  // Quick apply functionality
                }}
              >
                Quick Apply
              </button>
<button 
  className="border border-blue-700 text-blue-700 hover:bg-blue-100 px-4 py-2 rounded-lg text-sm font-medium"

                onClick={(e) => {
                  e.stopPropagation();
                  navigate(`/job/${job.id}`);
                }}
              >
                View Details
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobCard;
