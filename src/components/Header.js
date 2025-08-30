import React from 'react';

const App = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col font-['Inter']">
      <style js>{`
        .fade-in {
          animation: fadeIn 1s ease-out;
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .pulsate {
          animation: pulsate 1.5s infinite ease-in-out;
        }

        @keyframes pulsate {
          0% { transform: scale(1); }
          50% { transform: scale(1.03); }
          100% { transform: scale(1); }
        }

        .zoom-in {
          animation: zoomIn 0.5s ease-out forwards;
        }

        @keyframes zoomIn {
          from { transform: scale(0.95); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }
      `}</style>
      
      {/* Navigation Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <nav className="container mx-auto px-4 py-4 flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center justify-between w-full md:w-auto">
            <a href="#" className="text-2xl font-bold text-[#004d40]">RideSphere</a>
          </div>
          <div className="mt-4 md:mt-0 flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4">
            <a href="#find-ride-section" className="text-[#004d40] hover:text-[#00897b] font-semibold transition-colors duration-300">Find a Ride</a>
            <a href="#offer-ride-section" className="text-[#004d40] hover:text-[#00897b] font-semibold transition-colors duration-300">Offer a Ride</a>
            <a href="#about-section" className="text-[#004d40] hover:text-[#00897b] font-semibold transition-colors duration-300">About Us</a>
          </div>
          <div className="mt-4 md:mt-0 space-x-2">
            <a href="#" className="inline-block px-6 py-2 border-2 border-[#004d40] text-[#004d40] rounded-full font-semibold transition-colors duration-300 hover:bg-[#004d40] hover:text-white">Log In</a>
            <a href="#" className="inline-block px-6 py-2 bg-[#ff9800] text-white rounded-full font-semibold transition-colors duration-300 hover:bg-orange-600 pulsate">Sign Up</a>
          </div>
        </nav>
      </header>

      <main className="flex-grow">
        {/* Hero Section */}
        <section id="hero" className="bg-gradient-to-br from-[#004d40] to-[#00897b] text-white text-center py-20 md:py-32 rounded-b-3xl shadow-lg fade-in">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-6xl font-extrabold mb-4">Your Journey, Shared.</h1>
            <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8">Connect with people heading your way and split the cost. It's affordable, eco-friendly, and simple.</p>
            <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
              <a href="#find-ride-section" className="w-full sm:w-auto px-8 py-3 bg-[#ff9800] text-white rounded-full font-semibold shadow-lg hover:bg-orange-600 transition-colors duration-300">Find a Ride</a>
              <a href="#offer-ride-section" className="w-full sm:w-auto px-8 py-3 bg-white text-[#004d40] rounded-full font-semibold shadow-lg hover:bg-gray-200 transition-colors duration-300">Offer a Ride</a>
            </div>
          </div>
        </section>

        {/* Find a Ride Section */}
        <section id="find-ride-section" className="container mx-auto px-4 py-16">
          <h2 className="text-3xl font-bold text-center mb-12 text-[#004d40]">Find Your Perfect Ride</h2>
          <form className="bg-white p-6 md:p-10 rounded-xl shadow-lg mb-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <input type="text" placeholder="From: City or Address" className="w-full p-4 rounded-lg border-2 border-gray-200 focus:border-[#00897b] focus:ring-1 focus:ring-[#00897b] transition-colors duration-300 outline-none" />
              <input type="text" placeholder="To: City or Address" className="w-full p-4 rounded-lg border-2 border-gray-200 focus:border-[#00897b] focus:ring-1 focus:ring-[#00897b] transition-colors duration-300 outline-none" />
            </div>
            <button type="submit" className="w-full px-6 py-4 bg-[#00897b] text-white rounded-lg font-semibold shadow-md hover:bg-[#004d40] transition-colors duration-300">Search Rides</button>
          </form>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Example Ride Card (dynamic content would go here) */}
            <div className="bg-white p-6 rounded-xl shadow-md zoom-in">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-[#004d40]">Mumbai to Pune</h3>
                <span className="bg-[#ff9800] text-white px-4 py-2 rounded-full font-bold text-sm">₹ 500</span>
              </div>
              <p className="text-gray-600 mb-2"><strong>Driver:</strong> Anjali S.</p>
              <p className="text-gray-600 mb-4"><strong>Departure:</strong> 12:30 PM, Today</p>
              <p className="text-gray-600 mb-4"><strong>Seats Available:</strong> 2</p>
              <button className="w-full px-6 py-3 bg-[#00897b] text-white rounded-full font-semibold hover:bg-[#004d40] transition-colors duration-300">View Details</button>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md zoom-in">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-[#004d40]">Delhi to Jaipur</h3>
                <span className="bg-[#ff9800] text-white px-4 py-2 rounded-full font-bold text-sm">₹ 950</span>
              </div>
              <p className="text-gray-600 mb-2"><strong>Driver:</strong> Rahul V.</p>
              <p className="text-gray-600 mb-4"><strong>Departure:</strong> 06:00 AM, Tomorrow</p>
              <p className="text-gray-600 mb-4"><strong>Seats Available:</strong> 3</p>
              <button className="w-full px-6 py-3 bg-[#00897b] text-white rounded-full font-semibold hover:bg-[#004d40] transition-colors duration-300">View Details</button>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md zoom-in">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-[#004d40]">Bangalore to Mysore</h3>
                <span className="bg-[#ff9800] text-white px-4 py-2 rounded-full font-bold text-sm">₹ 400</span>
              </div>
              <p className="text-gray-600 mb-2"><strong>Driver:</strong> Priya K.</p>
              <p className="text-gray-600 mb-4"><strong>Departure:</strong> 09:00 AM, Today</p>
              <p className="text-gray-600 mb-4"><strong>Seats Available:</strong> 1</p>
              <button className="w-full px-6 py-3 bg-[#00897b] text-white rounded-full font-semibold hover:bg-[#004d40] transition-colors duration-300">View Details</button>
            </div>
          </div>
        </section>

        {/* Offer a Ride Section */}
        <section id="offer-ride-section" className="bg-white py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-[#004d40]">Offer a Ride</h2>
            <form className="p-6 md:p-10 rounded-xl shadow-lg max-w-2xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <input type="text" placeholder="From: City or Address" className="w-full p-4 rounded-lg border-2 border-gray-200 focus:border-[#00897b] focus:ring-1 focus:ring-[#00897b] transition-colors duration-300 outline-none" />
                <input type="text" placeholder="To: City or Address" className="w-full p-4 rounded-lg border-2 border-gray-200 focus:border-[#00897b] focus:ring-1 focus:ring-[#00897b] transition-colors duration-300 outline-none" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                <input type="date" placeholder="Date" className="w-full p-4 rounded-lg border-2 border-gray-200 focus:border-[#00897b] focus:ring-1 focus:ring-[#00897b] transition-colors duration-300 outline-none" />
                <input type="time" placeholder="Time" className="w-full p-4 rounded-lg border-2 border-gray-200 focus:border-[#00897b] focus:ring-1 focus:ring-[#00897b] transition-colors duration-300 outline-none" />
                <input type="number" placeholder="Seats" className="w-full p-4 rounded-lg border-2 border-gray-200 focus:border-[#00897b] focus:ring-1 focus:ring-[#00897b] transition-colors duration-300 outline-none" />
              </div>
              <button type="submit" className="w-full px-6 py-4 bg-[#ff9800] text-white rounded-lg font-semibold shadow-md hover:bg-orange-600 transition-colors duration-300">Post Your Ride</button>
            </form>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-[#004d40] text-white py-8 mt-auto">
        <div className="container mx-auto text-center px-4">
          <p>&copy; 2025 RideSphere. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;
