import './App.css'
import Navbar from './components/navbar'
import FilterSection from './components/FilterSection'
import JobCard from './components/JobCard'
import { featuredJobs, latestJobs, recommendedJobs } from './data/jobsData'
import pp from './assets/pp.png'
import bg from './assets/bg.jpg'

function App() {

  return (
    <>
      <Navbar />
      
      <div className="flex min-h-screen bg-[#F4F4F4] px-4">
        {/* Section 1 - 30% width */}
        <section className="w-[25%] p-4">
          <div className="rounded-lg overflow-hidden">
            {/* Background Image */}
            <div className="relative h-24">
              <img src={bg} alt="Background" className="w-full h-full object-cover" />
              {/* Profile Picture - overlapping */}
              <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2">
                <div className="w-24 h-24 rounded-full border-4 border-white overflow-hidden">
                  <img src={pp} alt="Profile" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>

            {/* Profile Info */}
            <div className="bg-white pt-14 p-5 text-center mb-2 rounded-[10px]">
              <h2 className="text-[#333333] font-semibold text-lg">Albert Flores</h2>
              <p className="text-sm text-[#333333] mt-1">
                Senior Product Designer | UI/UX Designer | Graphic Designer | WebDeveloper
              </p>
              <p className="text-xs text-[#585D6E] mt-2">Clinton, Maryland</p>
            </div>

            {/* Stats */}
            <div className="bg-white p-5 space-y-3 mb-2 rounded-[10px]">
              <div className="flex justify-between items-center pb-2 border-b border-solid border-[#E9ECEF]">
                <span className="text-sm text-[#333333]">Profile Visitors</span>
                <span className="text-sm font-semibold text-[#0154AA]">140</span>
              </div>
              <div className="flex justify-between items-center pb-2  border-b border-solid border-[#E9ECEF]">
                <span className="text-sm text-[#333333]">Resume Viewers</span>
                <span className="text-sm font-semibold text-[#0154AA]">20</span>
              </div>
              <div className="flex justify-between items-center ">
                <span className="text-sm text-[#333333]">My Jobs</span>
                <span className="text-sm font-semibold text-[#0154AA]">88</span>
              </div>
            </div>

            {/* My Calendar Section */}
            <div className="bg-white p-5 rounded-[10px]">
                <div className="flex justify-between items-center cursor-pointer">
                  <div>
                    <h3 className="text-sm font-semibold text-[#333333]">My calendar</h3>
                    <p className="text-xs text-gray-500">Upcoming interviews</p>
                  </div>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4 6L8 10L12 6" stroke="#737A91" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
            </div>
          </div>
        </section>

        {/* Section 2 - 70% width */}
        <section className="w-[75%] p-4">
          <FilterSection />

          {/* Featured Jobs */}
          <div className="mb-8">
            <div className="flex gap-3 items-center mb-5">
              <h2 className="text-xl font-semibold text-[#333333]">Featured Jobs</h2>
              <a href="#" className="text-[14px] font-medium text-[#0154AA] underline">See Featured Jobs</a>
            </div>
            <div className="grid grid-cols-5 gap-4">
              {featuredJobs.map((job) => (
                <JobCard key={job.id} job={job} />
              ))}
            </div>
          </div>

          {/* Recommended Jobs */}
          <div>
            <div className="flex gap-2 items-center mb-5 ">
              <h2 className="text-xl font-semibold text-[#333333]">Recommended Jobs</h2>
              <a href="#" className="text-[14px] font-medium text-[#0154AA] underline">See Recommended Jobs</a>
            </div>
            <div className="grid grid-cols-5 gap-4">
              {recommendedJobs.map((job) => (
                <JobCard key={job.id} job={job} />
              ))}
            </div>
          </div>

          {/* Latest Jobs */}
          <div>
            <div className="flex gap-2 items-center mb-5 ">
              <h2 className="text-xl font-semibold text-[#333333]">Latest Jobs</h2>
              <a href="#" className="text-[14px] font-medium text-[#0154AA] underline">See Recommended Jobs</a>
            </div>
            <div className="grid grid-cols-5 gap-4">
              {latestJobs.map((job) => (
                <JobCard key={job.id} job={job} />
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default App
