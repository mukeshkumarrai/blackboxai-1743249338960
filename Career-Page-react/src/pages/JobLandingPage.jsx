import { useState } from "react";
import JobCard from "../components/JobCard";
import JobFilter from "../components/JobFilter";

const jobs = [
  {
    id: 1,
    title: "Senior Angular Developer",
    company: {
      name: "Tech Innovations Inc.",
      logo: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&h=100&q=80"
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
    description: "We're looking for an experienced Angular developer to join our team building cutting-edge web applications.",
    requirements: {
      skills: ["Angular 12+", "TypeScript", "RxJS", "NgRx", "Jasmine", "Karma"],
      experience: "5+ years",
      education: "Bachelor's in Computer Science or related field"
    },
    benefits: ["Flexible hours", "Remote work", "Health insurance", "Annual bonus"],
    type: "Full-time"
  },
  {
    id: 2,
    title: "Frontend Developer (Angular)",
    company: {
      name: "Digital Solutions Ltd",
      logo: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&h=100&q=80"
    },
    location: {
      city: "Melbourne",
      state: "VIC", 
      remote: false,
      hybrid: true
    },
    salary: {
      min: 100000,
      max: 130000,
      currency: "AUD",
      period: "year"
    },
    postedDate: "2023-06-10",
    description: "Join our frontend team to build responsive web applications using Angular and modern web technologies.",
    requirements: {
      skills: ["Angular", "JavaScript", "HTML5", "CSS3", "REST APIs"],
      experience: "3+ years",
      education: "Degree preferred but not required"
    },
    benefits: ["Learning budget", "Team events", "Parental leave"],
    type: "Full-time"
  }
];


const JobListing = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filters, setFilters] = useState({
    jobType: '',
    salaryRange: [0, 200000],
    experienceLevel: ''
  });

  const filteredJobs = jobs.filter(job => {
    // Search term filter
    const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         job.company.name.toLowerCase().includes(searchTerm.toLowerCase());
    
    // Job type filter
    const matchesType = !filters.jobType || job.type === filters.jobType;
    
    // Salary range filter
    const matchesSalary = job.salary.min >= filters.salaryRange[0] && 
                         job.salary.max <= filters.salaryRange[1];
    
    return matchesSearch && matchesType && matchesSalary;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <h1 className="text-2xl font-bold text-gray-900 mb-4 md:mb-0">Career Opportunities</h1>
            <div className="relative w-full md:w-96">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <i className="fas fa-search text-gray-400"></i>
              </div>
              <input
                type="text"
                placeholder="Search jobs, companies, or keywords"
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Filters Sidebar */}
          <div className="w-full lg:w-1/4">
            <JobFilter filters={filters} setFilters={setFilters} />
          </div>

          {/* Job Listings */}
          <div className="w-full lg:w-3/4">
            <div className="bg-white shadow overflow-hidden sm:rounded-lg">
              <div className="px-4 py-5 sm:px-6 border-b border-gray-200">
                <h3 className="text-lg leading-6 font-medium text-gray-900">
                  {filteredJobs.length} {filteredJobs.length === 1 ? 'Job' : 'Jobs'} Found
                </h3>
              </div>
              <div className="divide-y divide-gray-200">
                {filteredJobs.length > 0 ? (
                  filteredJobs.map(job => (
                    <JobCard key={job.id} job={job} />
                  ))
                ) : (
                  <div className="p-8 text-center">
                    <i className="fas fa-search text-4xl text-gray-300 mb-4"></i>
                    <h3 className="text-lg font-medium text-gray-900">No jobs found</h3>
                    <p className="mt-1 text-sm text-gray-500">
                      Try adjusting your search or filter criteria
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default JobListing;
