function JobCard({ job }) {
  return (
    <div className="bg-white rounded-lg px-5 py-[10px] shadow-sm hover:shadow-md transition-shadow">
      {/* Promoted Badge */}
      {job.promoted && (
        <div className="mb-1">
          <span className="text-xs font-medium text-[#737A91]">Promoted</span>
        </div>
      )}

      {/* Job Header */}
      <div className="flex items-start gap-3 mb-1">
        {/* Teams Icon */}
        <div className="flex-shrink-0 bg-[#FAFAFA] p-2 rounded-lg">
          <svg width="23" height="22" viewBox="0 0 23 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16.0431 8.02393H21.984C22.5454 8.02393 23.0003 8.47898 23.0003 9.04024V14.4516C23.0003 16.5144 21.3281 18.1868 19.2653 18.1868H19.2476C17.1848 18.187 15.5122 16.5151 15.512 14.4522V8.55517C15.5119 8.4854 15.5256 8.41632 15.5523 8.35185C15.579 8.28739 15.6181 8.22881 15.6674 8.17948C15.7168 8.13014 15.7753 8.09101 15.8398 8.06432C15.9043 8.03763 15.9734 8.0239 16.0431 8.02393Z" fill="#5A62C3"/>
            <path d="M20.0584 6.95399C21.3877 6.95399 22.4654 5.87634 22.4654 4.54699C22.4654 3.21764 21.3877 2.13998 20.0584 2.13998C18.729 2.13998 17.6514 3.21764 17.6514 4.54699C17.6514 5.87634 18.729 6.95399 20.0584 6.95399Z" fill="#5A62C3"/>
            <path d="M12.5697 6.95354C14.4898 6.95354 16.0464 5.39694 16.0464 3.47677C16.0464 1.5566 14.4898 0 12.5697 0C10.6495 0 9.0929 1.5566 9.0929 3.47677C9.0929 5.39694 10.6495 6.95354 12.5697 6.95354Z" fill="#7B83EB"/>
            <path d="M17.2056 8.02393H7.39909C6.84449 8.03767 6.40578 8.49794 6.41863 9.05255V15.2245C6.34118 18.5527 8.97423 21.3146 12.3023 21.3961C15.6304 21.3146 18.2634 18.5527 18.1861 15.2245V9.05255C18.1989 8.49794 17.7602 8.03767 17.2056 8.02393Z" fill="#7B83EB"/>
            <path opacity="0.1" d="M12.8372 8.02393V16.673C12.8359 16.867 12.7773 17.0563 12.6689 17.2171C12.5604 17.3779 12.4068 17.5031 12.2274 17.577C12.1106 17.6264 11.9851 17.6518 11.8583 17.6518H6.88918C6.81964 17.4753 6.75549 17.2988 6.70195 17.117C6.5147 16.5032 6.41919 15.8652 6.41849 15.2235V9.05093C6.40564 8.49722 6.84363 8.03767 7.39734 8.02402L12.8372 8.02393Z" fill="#01274E"/>
            <path opacity="0.2" d="M12.3025 8.02393V17.2079C12.3025 17.3347 12.2771 17.4602 12.2277 17.577C12.1538 17.7564 12.0286 17.91 11.8678 18.0184C11.7069 18.1269 11.5177 18.1855 11.3237 18.1868H7.14099C7.05007 18.0102 6.96445 17.8337 6.88961 17.6518C6.8177 17.477 6.7552 17.2985 6.70237 17.117C6.51513 16.5032 6.41961 15.8652 6.41892 15.2235V9.05093C6.40607 8.49722 6.84406 8.03767 7.39776 8.02402L12.3025 8.02393Z" fill="#01274E"/>
            <path opacity="0.2" d="M12.3026 8.02393V16.1382C12.2986 16.677 11.8627 17.113 11.3238 17.117H6.70237C6.51513 16.5032 6.41961 15.8652 6.41892 15.2235V9.05093C6.40607 8.49722 6.84406 8.03767 7.39776 8.02402L12.3026 8.02393Z" fill="#01274E"/>
            <path opacity="0.2" d="M11.7678 8.02393V16.1382C11.7636 16.677 11.3278 17.113 10.7889 17.117H6.70237C6.51513 16.5032 6.41961 15.8652 6.41892 15.2235V9.05093C6.40607 8.49722 6.84406 8.03767 7.39776 8.02402L11.7678 8.02393Z" fill="#01274E"/>
            <path opacity="0.1" d="M12.8373 5.25824V6.94307C12.7463 6.94847 12.6607 6.95386 12.5698 6.95386C12.4789 6.95386 12.3932 6.94847 12.3023 6.94307C12.1218 6.93109 11.9428 6.90246 11.7675 6.85754C11.2335 6.73108 10.737 6.48002 10.3187 6.12489C9.90034 5.76977 9.57199 5.32067 9.36048 4.81432C9.28663 4.64183 9.22933 4.46271 9.18933 4.27939H11.8584C12.3981 4.28145 12.8352 4.71845 12.8373 5.25824Z" fill="#01274E"/>
            <path opacity="0.2" d="M12.3025 5.79269V6.94269C12.122 6.93071 11.9429 6.90208 11.7677 6.85716C11.2337 6.73068 10.7373 6.47961 10.3189 6.12449C9.90059 5.76937 9.57225 5.32028 9.36075 4.81393H11.3237C11.8634 4.81591 12.3004 5.253 12.3025 5.79269Z" fill="#01274E"/>
            <path opacity="0.2" d="M12.3025 5.79269V6.94269C12.122 6.93071 11.9429 6.90208 11.7677 6.85716C11.2337 6.73068 10.7373 6.47961 10.3189 6.12449C9.90059 5.76937 9.57225 5.32028 9.36075 4.81393H11.3237C11.8634 4.81591 12.3004 5.253 12.3025 5.79269Z" fill="#01274E"/>
            <path opacity="0.2" d="M11.7678 5.79278V6.85725C11.2338 6.73077 10.7373 6.4797 10.3189 6.12456C9.90059 5.76942 9.57224 5.3203 9.36075 4.81393H10.7889C11.3287 4.816 11.7657 5.25309 11.7678 5.79278Z" fill="#01274E"/>
            <path d="M0.980464 4.81402H10.7869C11.3285 4.81402 11.7675 5.253 11.7675 5.79449V15.601C11.7675 16.1425 11.3285 16.5815 10.787 16.5815H0.980464C0.438976 16.5815 0 16.1425 0 15.601V5.79458C0 5.25291 0.438976 4.81402 0.980464 4.81402Z" fill="url(#paint0_linear_1_195)"/>
            <path d="M8.46439 8.54668H6.50401V13.8848H5.25509V8.54668H3.30386V7.51114H8.46439V8.54668Z" fill="white"/>
            <defs>
              <linearGradient id="paint0_linear_1_195" x1="204.424" y1="-71.7928" x2="972.33" y2="1258.17" gradientUnits="userSpaceOnUse">
                <stop stopColor="#5A62C3"/>
                <stop offset="0.5" stopColor="#4D55BD"/>
                <stop offset="1" stopColor="#3940AB"/>
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* Job Title & Company */}
        <div className="flex-1">
          <h3 className="text-base font-semibold text-[#333333]">{job.title}</h3>
          <p className="text-sm text-[#333333]">{job.company}</p>
        </div>

      </div>

      {/* Job Details */}
      <div className="space-y-1 mb-4">
        {/* Location */}
        <div className="flex items-center gap-2 text-sm text-[#737A91]">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8 8.5C9.10457 8.5 10 7.60457 10 6.5C10 5.39543 9.10457 4.5 8 4.5C6.89543 4.5 6 5.39543 6 6.5C6 7.60457 6.89543 8.5 8 8.5Z" stroke="#737A91" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M8 14.5C10 12.5 13 10.0899 13 6.5C13 3.73858 10.7614 1.5 8 1.5C5.23858 1.5 3 3.73858 3 6.5C3 10.0899 6 12.5 8 14.5Z" stroke="#737A91" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <span className="text-sm">{job.location}</span>
        </div>

        {/* Time & Applicants */}
        <div className="flex items-center gap-2 text-sm text-[#737A91]">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="8" cy="8" r="6.5" stroke="#737A91" strokeWidth="1.5"/>
            <path d="M8 4.5V8L10.5 10.5" stroke="#737A91" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
          <span className="text-sm">{job.postedTime}</span>
          <span className="text-sm">|</span>
          <span className="text-[#0154AA] text-sm font-medium">{job.applicants} applicants</span>
        </div>
      </div>

      {/* Apply Button */}
      <div className="flex gap-2">
      <button className="w-full bg-[#0154AA] text-white py-2.5 rounded-lg text-sm font-medium hover:bg-[#013d7a] transition-colors">
        Apply Now
      </button>
      {/* Bookmark Icon */}
        <button className="flex-shrink-0 p-1 hover:bg-gray-50 rounded">
          <svg width="20" height="30" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M14.5 2.5H5.5C4.67157 2.5 4 3.17157 4 4V17.5L10 14.5L16 17.5V4C16 3.17157 15.3284 2.5 14.5 2.5Z" stroke="#737A91" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>
    </div>
  )
}

export default JobCard
