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



      <main className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          <div className="w-full lg:w-1/3">
            <div className="bg-white shadow-md rounded-lg overflow-hidden">

              <div className="px-6 py-4 border-b border-gray-200">

                <h3 className="text-lg leading-6 font-medium text-gray-800">
                  {filteredJobs.length} {filteredJobs.length === 1 ? 'Job Found' : 'Jobs Found'}
                </h3>

              </div>
              
              <div className="divide-y divide-gray-200">
                {filteredJobs.length > 0 ? (
                  filteredJobs.map(job => (
                    <JobCard key={job.id} job={job} />
                  ))
                ) : (
                  <div className="p-6 text-center">

                    <i className="fas fa-exclamation-circle text-4xl text-gray-400 mb-4"></i>

                    <h3 className="text-lg font-medium text-gray-900">No jobs found</h3>
                    <p className="mt-1 text-sm text-gray-500">
                      Try adjusting your search or filter criteria
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="w-full w-2/3 p-4 border-r border-gray-200">
          nghghghghghghghgh
          </div>
        </div>
      </main>
    </div>
  );
};

export default JobListing;
