function FilterSection() {
  return (
    <div className="mb-8">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-[22px] font-semibold text-[#333333]">
          Find your Dream Job, <span className="text-[#0154AA]">Albert!</span>
        </h1>
        <p className="text-[#585D6E] text-[14px] font-medium">
          Explore the latest job openings and apply for the best opportunities available today!
        </p>
      </div>

      {/* Search Filters */}
      <div className="bg-white rounded-lg p-4 mb-5 shadow-sm">
        <div className="flex gap-4 items-center">
          {/* Job Title Input */}
          <input
            type="text"
            placeholder="Job Title, Company, or Keywords"
            className="flex-1 px-4 py-3 rounded-lg text-sm text-[#333333] placeholder-[#737A91] focus:outline-none focus:ring-2 focus:ring-[#0154AA]"
          />
          <div className="w-[1.5px] bg-[#E9ECEF] h-[40px]">
          </div>
          {/* Location Dropdown */}
          <div className="relative">
            <select className="appearance-none px-4 py-3 pr-10 rounded-lg text-sm text-[#737A91] focus:outline-none focus:ring-2 focus:ring-[#0154AA] cursor-pointer min-w-[180px]">
              <option>Select Location</option>
              <option>Seattle, USA</option>
              <option>New York, USA</option>
              <option>San Francisco, USA</option>
            </select>
            <svg className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none" width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 1L6 6L11 1" stroke="#737A91" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <div className="w-[1px] bg-[#E9ECEF] h-[40px]">
          </div>
          {/* Job Type Dropdown */}
          <div className="relative">
            <select className="appearance-none px-4 py-3 pr-10 rounded-lg text-sm text-[#737A91] focus:outline-none focus:ring-2 focus:ring-[#0154AA] cursor-pointer min-w-[150px]">
              <option>Job Type</option>
              <option>Full Time</option>
              <option>Part Time</option>
              <option>Contract</option>
              <option>Remote</option>
            </select>
            <svg className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none" width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 1L6 6L11 1" stroke="#737A91" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>

          {/* Search Button */}
          <button className="bg-[#0154AA] text-white px-8 py-3 rounded-lg text-sm font-medium hover:bg-[#013d7a] transition-colors flex items-center gap-2">
            <svg width="17" height="18" viewBox="0 0 17 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M16.2499 16.2707L13.6565 13.6773" stroke="white" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round"/>
              <path d="M12.8476 6.81944C12.8428 8.23721 12.3401 9.60824 11.4273 10.6931C10.5145 11.778 9.24967 12.5077 7.85361 12.755C6.45756 13.0022 5.01902 12.7512 3.78919 12.0458C2.55936 11.3403 1.61641 10.2253 1.12498 8.89545C0.633559 7.56556 0.624896 6.1053 1.10051 4.76967C1.57611 3.43405 2.50577 2.30794 3.72714 1.58797C4.94851 0.868 6.38397 0.599947 7.78286 0.830597C9.18175 1.06125 10.4552 1.77595 11.3808 2.84991" stroke="white" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round"/>
            </svg>
            Search
          </button>
        </div>
      </div>

      {/* Similar Tags */}
      <div className="flex items-center gap-3">
        <span className="text-sm text-[#737A91]">Similar:</span>
        <div className="flex gap-2">
          <button className="px-4 py-2 text-grey border border-[grey] rounded text-sm text-[#737A91] hover:border-[#0154AA] hover:text-[#0154AA] transition-colors">
            Frontend
          </button>
          <button className="px-4 py-2 text-grey border border-[grey] rounded text-sm text-[#737A91] hover:border-[#0154AA] hover:text-[#0154AA] transition-colors">
            Backend
          </button>
          <button className="px-4 py-2 text-grey border border-[grey] rounded text-sm text-[#737A91] hover:border-[#0154AA] hover:text-[#0154AA] transition-colors">
            Graphic Designer
          </button>
        </div>
      </div>
    </div>
  )
}

export default FilterSection
