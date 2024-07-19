import './Sidebar.css';
import logo from '../../assets/logo.png';
import { UilSignOutAlt, UilBars } from '@iconscout/react-unicons';
import { sidebarData } from '../../Data/data';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
const Sidebar = () => {
  const [selected, setSelected] = useState(0);
  const [expanded, setExpanded] = useState(true);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  const sidebarVariants = {
    true: {
      left: "0%",
      transition: {
        duration: 0.1, // Adjust the duration to make the animation faster
      },
    },
    false: {
      left: "-60%",
      transition: {
        duration: 0.1, // Adjust the duration to make the animation faster
      },
    },
  }
  return (
    <>
      <div
        className='bars'
        style={expanded ? { left: "57%" } : { left: "3%" }}
        onClick={() => { setExpanded(!expanded) }}
      >
        <UilBars />
      </div>
      <motion.div
        className='sidebar'
        variants={sidebarVariants}
        // animate={window.innerWidth <= 768 ? `${expanded}` :  ``}
        animate={isMobile ? (expanded ? 'true' : 'false') : ''}
      >
        <div className="logo">
          <img src={logo} />
          <span>sh<span>o</span>ps</span>
        </div>
        <div className="menu">
          {sidebarData.map((item, index) => {
            return (
              <div
                key={index}
                className={selected == index ? "menuItems active" : "menuItems"}
                onClick={() => { setSelected(index) }}
              >
                {<item.icon />}
                <span>{item.heading}</span>
              </div>
            )
          })}
          <div className="menuItems">
            {<UilSignOutAlt />}
          </div>
        </div>
      </motion.div>
    </>
  )
}

export default Sidebar;
