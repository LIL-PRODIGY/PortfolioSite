import React from "react"
import Grocery from "../assets/Grocery.jpg"
import Real from "../assets/Real.jpg"
import Fitness from "../assets/Fitness.jpg"
import Hotel from "../assets/Hotel.jpg"
import Fashion from "../assets/Fashion.jpg"
import Dealer from "../assets/Dealer.jpg"



const projects = () => {

  const Projects = [
    {
      id: 1,
      src: Grocery,
    },
    {
      id: 2,
      src: Real,
    },
    {
      id: 3,
      src: Fitness,
    },
    {
      id: 4,
      src: Hotel,
    },
    {
      id: 5,
      src: Fashion,
    },
    {
      id: 6,
      src: Dealer,
    },
  ];

  
  return (
    <div name="projects" className="justify-center flex items-center bg-gradient-to-b from-black via-black to-cyan-900 w-full text-white md:h-screen py-30">

      <div className="max-w-screen-lg pt-10 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="py-1 text-4xl font-bold border-b-4 border-yellow-100 text-center justify-center flex">Projects</p>
          <p className="py-3 flex text-center justify-center">Check out my projects here</p>
        </div>
        
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
              {
                Projects.map(({id, src}) => (
                   <div key={id}className="shadow-md shadow-gray-600 rounded-lg">
            <img src={src} alt="bestpic" className="rounded-md duration-200 hover:scale-105" />
          </div>

                ))
              }
         </div>
      </div>
    </div>
  )
}
export default projects