function Contect(){
return(

  <div className="flex items-center justify-center min-h-screen bg-gray-300 p-6">
  <div className="w-full max-w-lg bg-white rounded-lg shadow-lg p-8">
    <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Contact Us</h2>
    <form action="#" method="POST" className="space-y-4">
      <div>
        <label className="block text-gray-700 font-semibold mb-2" htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring focus:ring-indigo-300"
          placeholder="Enter your name"
        />
      </div>
      <div>
        <label className="block text-gray-700 font-semibold mb-2" htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring focus:ring-indigo-300"
          placeholder="Enter your email"
        />
      </div>
      <div>
        <label className="block text-gray-700 font-semibold mb-2" htmlFor="message">Message</label>
        <textarea
          id="message"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring focus:ring-indigo-300"
          placeholder="Write your message here..."
          
        ></textarea>
      </div>
      <button
        type="submit"
        className="w-full bg-indigo-600 text-white font-semibold py-2 rounded-lg hover:bg-indigo-700 transition-colors"
      >
        Send Message
      </button>
    </form>

   
  </div>
</div>










    

)

}

export default Contect




