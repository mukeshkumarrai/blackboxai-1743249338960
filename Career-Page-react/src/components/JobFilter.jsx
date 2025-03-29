import React from 'react';
import { Slider } from '@mui/material';

const JobFilter = ({ filters, setFilters }) => {
  const handleSalaryChange = (event, newValue) => {
    setFilters({
      ...filters,
      salaryRange: newValue
    });
  };

  return (
<div className="bg-white p-6 rounded-lg shadow-md">

      <h3 className="font-medium text-lg mb-4">Filters</h3>
      
      <div className="space-y-6">
        {/* Job Type Filter */}
        <div>
<h4 className="text-sm font-medium text-gray-800 mb-2">Job Type</h4>

          <div className="space-y-2">
            {['Full-time', 'Part-time', 'Contract', 'Internship'].map(type => (
              <div key={type} className="flex items-center">
                <input
                  id={`type-${type}`}
                  name="job-type"
                  type="radio"
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                  checked={filters.jobType === type}
                  onChange={() => setFilters({...filters, jobType: type})}
                />
                <label htmlFor={`type-${type}`} className="ml-3 text-sm text-gray-700">
                  {type}
                </label>
              </div>
            ))}
            <div className="flex items-center">
              <input
                id="type-all"
                name="job-type"
                type="radio"
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                checked={!filters.jobType}
                onChange={() => setFilters({...filters, jobType: ''})}
              />
              <label htmlFor="type-all" className="ml-3 text-sm text-gray-700">
                All Types
              </label>
            </div>
          </div>
        </div>

        {/* Salary Range Filter */}
        <div>
<h4 className="text-sm font-medium text-gray-800 mb-2">

            Salary Range (AUD)
          </h4>
          <Slider
            value={filters.salaryRange}
            onChange={handleSalaryChange}
            valueLabelDisplay="auto"
            min={0}
            max={200000}
            step={10000}
            marks={[
              { value: 0, label: '0' },
              { value: 100000, label: '100K' },
              { value: 200000, label: '200K' }
            ]}
          />
          <div className="flex justify-between text-xs text-gray-500 mt-1">
            <span>${filters.salaryRange[0].toLocaleString()}</span>
            <span>${filters.salaryRange[1].toLocaleString()}</span>
          </div>
        </div>

        {/* Experience Level Filter */}
        <div>
          <h4 className="text-sm font-medium text-gray-700 mb-2">Experience Level</h4>
          <select
            className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
            value={filters.experienceLevel}
            onChange={(e) => setFilters({...filters, experienceLevel: e.target.value})}
          >
            <option value="">All Levels</option>
            <option value="entry">Entry Level</option>
            <option value="mid">Mid Level</option>
            <option value="senior">Senior</option>
            <option value="lead">Lead/Manager</option>
          </select>
        </div>

<button
  className="w-full bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium py-2 px-4 rounded-md text-sm"

          onClick={() => setFilters({
            jobType: '',
            salaryRange: [0, 200000],
            experienceLevel: ''
          })}
        >
          Reset Filters
        </button>
      </div>
    </div>
  );
};

export default JobFilter;
