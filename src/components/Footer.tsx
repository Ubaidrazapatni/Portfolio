
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

function Footer() {
  return (

    <div>

      <footer className="bg-gray-900 text-gray-300 py-8">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="flex space-x-32 text-4xl items-center pl-[470px]">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-white">
              <FaGithub />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-white">
              <FaLinkedin />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-white">
              <FaTwitter />
            </a>

          </div>
        </div>


        <div className="border-t border-gray-700 mt-6 pt-6 text-center">
          <p className="text-base font-semibold">Email : Ubaidraza5578@gmail.com</p>
          <p className='text-base pl-2 font-semibold'>Tell : +92(543-67542-7)</p>
        </div>
      </footer>


    </div>



  )


}

export default Footer