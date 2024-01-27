import websitelogo from '../../Images/websitelogo.jpg'
import '../navbar/navbar.css'
import { List } from 'phosphor-react'
import { X } from 'phosphor-react'

import { Link } from 'react-router-dom'


function Navbar(){
    return(
    <>
    <header>
 <nav className='laptopnavbar bg-black'>
    <div className='container'>
     <div className='laptopnavbarcontent flex justify-between items-center p-5'>
        <div className='websitelogo'>
            <img src={websitelogo} className='w-10'/>

        </div>

        <div className='laptopnavbarcontent'>
            <ol className='laptopnavbarlist flex gap-8'>
                <li><Link to ='/' className='text-white'>Home</Link></li>
                <li><Link to ='about' className='text-white'>About Us</Link></li>
                <li><Link to ='contactus' className='text-white'>Contact Us</Link></li>
              
             
                <li className=' laptopnavbar-item lastchild'><Link to ='booking' className='text-black bg-white pt-3 px-5 pb-3 ps-5 lastchildlink'>Book Now</Link></li>

            </ol>

        </div>

     </div>
    </div>

 </nav>

 </header>

 <nav className='mobilenavbar bg-black'>
    <div className='container'>
     <div className='mobilenavbarcontent flex justify-between items-center p-5'>
        <div className='websitelogo'>
            <img src={websitelogo} className='w-10'/>

        </div>

        <div className='mobilenavbarcontentlist fixed w-full h-full top-0  bg-black' id="mobile-navbar">
            <ol className='mobilenavbarlist flex flex-col justify-center items-center gap-8'>
                <li><a href="#" className='text-white'>Home</a></li>
                <li><a href="#" className='text-white'>Home</a></li>
                <li><a href="#" className='text-white'>Home</a></li>
                <li><a href="#" className='text-white'>Home</a></li>
                <li className='mobilenavbar-item lastchild'><a href="#" className='text-black bg-white pt-3 px-5 pb-3 ps-5 mobilelastchildlink'>Book Now</a></li>

            </ol>
  <X size={32} className='absolute top-0 right-0' color='white' onClick={()=>{
            var showmenu = document.getElementById("mobile-navbar")
            showmenu.classList.remove("showmenu")
  }}/>
        </div>

        <div className='bars'>
            <List size={32} color='white' onClick={()=>{
                var showmenu = document.getElementById("mobile-navbar")
                 showmenu.classList.add("showmenu")
            }}/>

        </div>

     </div>
    </div>

 </nav>


    </>)
}


export default Navbar