import { useState } from 'react';
import { BsFillMoonStarsFill } from 'react-icons/bs';

export default function Navbar() {
  const [isBackgroundWhite, setBackgroundWhite] = useState(false); // Update initial state to false

  const handleBackgroundToggle = () => {
    setBackgroundWhite(!isBackgroundWhite);
  };

  const handleResumeClick = () => {
    window.open('/Collins_Muhia_CV.pdf', '_blank');
  };

  const backgroundColor = isBackgroundWhite ? 'bg-white' : 'bg-gray-800';
  const textColor = isBackgroundWhite ? '' : 'text-white';
  const cursorStyle = 'cursor-pointer';

  return (
    <nav className={`fixed top-0 left-0 w-full ${backgroundColor} shadow-md px-8 md:px-20 lg:px-40 py-4 flex justify-between items-center z-50`}>
      <h1 className={`font-burtons text-lg ${textColor}`}>CHECK OUT MY PORTFOLIO. . .</h1>
      <ul className="flex items-center">
        <li className={cursorStyle} onClick={handleBackgroundToggle}>
          <BsFillMoonStarsFill color={isBackgroundWhite ? undefined : 'white'} />
        </li>
        <a
          className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-teal-500 bg-blue-300 rounded-md ml-8 text-white"
          href="#"
          onClick={handleResumeClick}
        >
          Resume
        </a>
      </ul>
    </nav>
  );
}
