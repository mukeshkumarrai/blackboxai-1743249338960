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
    
    <div className="bg-white rounded-lg shadow-md p-6 mb-4 hover:shadow-lg transition-shadow cursor-pointer border-l-4 border-blue-500"
    onClick={() => navigate(`/job/${job.id}`)}>
    <div class="flex items-center mb-2">
     <span class="bg-pink-200 text-pink-600 text-xs font-bold px-2 py-1 rounded-md">
      Featured
     </span>
    </div>
    <div class="flex items-center mb-2">
      {/* Company Logo */}
      <div className="flex-shrink-0">
          <img 
            src='https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&h=100&q=80' 
            alt={`${job.name} logo`}
            className="w-20 h-20 object-contain rounded-lg border border-gray-200"
          />
        </div>
        {/* Job Details */}
     <div>
      <div class="text-lg font-bold">
      {job.title} 
      </div>
      <div class="text-gray-600">
      {job.company.name}
      </div>
     </div>
    </div>
    <div class="text-gray-600 mb-2">
    {job.location.city}, {job.location.state}
                {job.location.remote && ' • Remote'}
                {job.location.hybrid && ' • Hybrid'}
    </div>
    <div class="text-gray-600 mb-2">
    ${job.salary.min.toLocaleString()} - ${job.salary.max.toLocaleString()} {job.salary.currency}
    </div>
    <div class="text-gray-600 mb-2">
     Government - Federal (Government &amp; Defence)
    </div>
    <ul class="list-disc list-inside text-gray-600 mb-2">
     <li>
     {job.requirements.skills.slice(0, 4).map((skill, index) => (
              <span key={index} className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm">
                {skill}
              </span>
            ))}
     </li>
     <li>
     {job.location.city}, {job.location.state}
     </li>
     <li>
     {new Date(job.postedDate).toLocaleDateString()}, $95,714 + Super
     </li>
    </ul>
    <button class="bg-blue-600 text-white p-2 rounded-md mt-2">
     Save this search
    </button>
   </div>
  );
};

export default JobCard;
