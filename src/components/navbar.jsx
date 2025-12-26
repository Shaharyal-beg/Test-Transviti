import logo from '../assets/logo.png'
import avatar from '../assets/avatar.jpg'

function Navbar() {
  return (
    <nav className="bg-[#FFFFFF] p-4">
      <div className="container flex gap-5 items-center">
        <div className="w-[41px] h-[38px]">
            <img src={logo} alt="logo" /> 
        </div>
        <ul className="flex space-x-4 text-base text-[#737A91] gap-[25px]">
            <li className='text-[#0154AA] font-semibold'>Find Jobs</li>
            <li>Top Companies</li>
            <li>Job Tracker</li>
            <li>My Calendar</li>
            <li>Documents</li>
            <li>Messages</li>
            <li>Notifications</li>
        </ul>
        <div className="ml-auto flex items-center gap-4">
          {/* Search Bar */}
          <div className="relative flex items-center">
            <svg className="absolute left-3" width="17" height="18" viewBox="0 0 17 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M16.2499 16.2707L13.6565 13.6773" stroke="#737A91" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round"/>
              <path d="M12.8476 6.81944C12.8428 8.23721 12.3401 9.60824 11.4273 10.6931C10.5145 11.778 9.24967 12.5077 7.85361 12.755C6.45756 13.0022 5.01902 12.7512 3.78919 12.0458C2.55936 11.3403 1.61641 10.2253 1.12498 8.89545C0.633559 7.56556 0.624896 6.1053 1.10051 4.76967C1.57611 3.43405 2.50577 2.30794 3.72714 1.58797C4.94851 0.868 6.38397 0.599947 7.78286 0.830597C9.18175 1.06125 10.4552 1.77595 11.3808 2.84991" stroke="#737A91" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round"/>
            </svg>
            <input 
              type="text" 
              placeholder="Search" 
              className="pl-12 pr-4 py-2 bg-[#F5F7FA] rounded-lg text-[#737A91] focus:outline-none"
            />
          </div>

          {/* Resume Builder Button */}
          <button className="bg-[#0154AA] text-white px-6 py-2 rounded-lg cursor-pointer font-medium">
            Resume Builder
          </button>

          {/* User Profile Avatar */}
          <div className="w-10 h-10 rounded-full overflow-hidden">
            <img src={avatar} alt="User Avatar" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar