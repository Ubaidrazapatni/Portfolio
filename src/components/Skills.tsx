// import React from 'react';

function Skills() {
    const skillsData = [
      { name: 'JavaScript', level: 'Advanced' },
      { name: 'React', level: 'Intermediate' },
      { name: 'Next.js', level: 'Advanced' },
      { name: 'Tailwind CSS', level: 'Intermediate' },
      { name: 'Node.js', level: 'Intermediate' },
      // Aap aur skills bhi add kar sakte hain
    ];
    
    
      return (
        <div className="min-h-screen bg-gray-100 flex flex-col items-center py-10">
          <h1 className="text-4xl font-bold mb-8 text-gray-800">My Skills</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-6">
            {skillsData.map((skill, index) => (
              <div
                key={index}
                className="p-6 max-w-sm w-full bg-white rounded-lg shadow-lg transform transition duration-500 hover:scale-105 hover:shadow-2xl"
              >
                <h2 className="text-2xl font-semibold text-blue-600 mb-2">
                  {skill.name}
                </h2>
                <p className="text-gray-700">Level: {skill.level}</p>
                <div className="mt-4 bg-blue-100 h-2 w-full rounded-full">
                  <div
                    className={`h-full rounded-full ${
                      skill.level === 'Advanced' ? 'bg-blue-500 w-3/4' :
                      skill.level === 'Intermediate' ? 'bg-blue-400 w-1/2' :
                      'bg-blue-300 w-1/4'
                    }`}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>



)
    }




export default Skills

    

  // return (

  //     <div>

  //        <section id="skilla" className="py-20 bg-gray-100 text-gray-800">
  //        <div className="container mx-auto text-center">

  //         <h2 className="text-4xl font-bold mb-6">Skills</h2>

  //         <h2 className="text-3xl font-bold mt-6 ">Technologies I work with</h2>
  //         <p className="text-lg mt-2 text-gray-700 ">

  //           I have a solid foundation in web development, specializing in HTML , CSS, <br/>
  //           and JavaScript, My experiance extands tousing framworks like React and Next.js <br />
  //           to create dynamic and user frindly applications.I am proficinet in Tailwind CSS <br />
  //           for efficient styling and design.

  //         </p>

  //         </div>


  //       <div className="flex flex-row justify-center gap-4 mt-12">

  //       <span className="px-2 py-2 bg-blue-100 text-blue-700 rounded-md">HTML</span>
  //       <span className="px-2 py-2 bg-blue-100 text-blue-700 rounded-md">CSS</span>
  //       <span className="px-2 py-2 bg-blue-100 text-blue-700 rounded-md">JavaScript</span>
  //       <span className="px-2 py-2 bg-blue-100 text-blue-700 rounded-md">Typescript</span>
  //       <span className="px-2 py-2 bg-blue-100 text-blue-700 rounded-md">Next.JS</span>

      

  //      </div>

  //      </section>


  //      </div>


      

 
   




   



  // )

       