function App() {
  return (
    <div className="bg-gray-50 min-h-screen">

      {/* Navbar */}
      <nav className="flex justify-between items-center px-8 py-4 bg-white shadow">
        <h1 className="text-2xl font-bold text-green-600">Kademic</h1>

        <div className="space-x-6">
          <button className="text-gray-700 hover:text-green-600">Services</button>
          <button className="text-gray-700 hover:text-green-600">Pricing</button>
          <button className="text-gray-700 hover:text-green-600">Login</button>
          <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700">
            Get Started
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center mt-20 px-6">

        <h1 className="text-5xl font-bold text-gray-800 max-w-3xl">
          Get Help With Your Online Classes, Assignments & Exams
        </h1>

        <p className="text-gray-600 mt-6 max-w-xl">
          We help students manage their coursework, complete assignments,
          and pass online classes with ease.
        </p>

        <div className="mt-8 space-x-4">
          <button className="bg-green-600 text-white px-6 py-3 rounded-lg text-lg hover:bg-green-700">
            Submit Assignment
          </button>

          <button className="border border-gray-400 px-6 py-3 rounded-lg text-lg hover:bg-gray-100">
            View Pricing
          </button>
        </div>

      </section>

    </div>
  )
}

export default App