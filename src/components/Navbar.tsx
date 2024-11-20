
import Link from "next/link"
function Navbar(){
    return(

        <div>
    

<header className="bg-gray-700 text-white p-4 shadow-lg fixed w-full z-50">
      <nav className="container mx-auto flex justify-between">
        <div className="text-2xl font-bold">
          <Link href="/">My Portfolio</Link>
        </div>
        <div className="space-x-4">
        <Link className="justify-between pl-8" href="#home">Home</Link>
          <Link className="justify-between pl-8" href="#about">About</Link>
          <Link className="justify-between pl-8" href="#projects">Projects</Link>
          <Link className="justify-between pl-8" href="#skills">Skills</Link>
          <Link className="justify-between pl-8" href="#contact">Contact</Link>
        </div>
      </nav>
    </header>
        
        </div>

 

    )




}

export default Navbar ; 