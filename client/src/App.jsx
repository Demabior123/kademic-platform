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

      {/* Services Section */}
      <section className="mt-24 px-8 text-center">

        <h2 className="text-3xl font-bold text-gray-800">
          What We Offer
        </h2>

        <p className="text-gray-600 mt-3">
          Simple, reliable, and affordable academic support
        </p>

        <div className="grid md:grid-cols-3 gap-8 mt-12">

          {/* Assignment Help */}
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-green-600">
              Assignment Help
            </h3>
            <p className="text-gray-600 mt-3">
              Get high-quality assignments done on time.
            </p>
            <p className="mt-4 font-bold">$15 per page</p>
          </div>

          {/* Discussion Posts */}
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-green-600">
              Discussion Posts
            </h3>
            <p className="text-gray-600 mt-3">
              Complete discussion posts and replies.
            </p>
            <p className="mt-4 font-bold">$7 per post</p>
          </div>

          {/* Full Class */}
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-green-600">
              Full Class Management
            </h3>
            <p className="text-gray-600 mt-3">
              We handle your entire online course.
            </p>
            <p className="mt-4 font-bold">$250 – $400</p>
          </div>

        </div>

      </section>

      {/* How It Works Section */}
      <section className="mt-24 px-8 text-center bg-white py-16">

        <h2 className="text-3xl font-bold text-gray-800">
          How It Works
        </h2>

        <p className="text-gray-600 mt-3">
          Simple steps to get your work done quickly and professionally
        </p>

        <div className="grid md:grid-cols-4 gap-8 mt-12">

          {/* Step 1 */}
          <div>
            <div className="text-3xl font-bold text-green-600">1</div>
            <h3 className="mt-3 font-semibold text-lg">Submit Your Task</h3>
            <p className="text-gray-600 mt-2">
              Upload your assignment or class details.
            </p>
          </div>

          {/* Step 2 */}
          <div>
            <div className="text-3xl font-bold text-green-600">2</div>
            <h3 className="mt-3 font-semibold text-lg">We Assign an Expert</h3>
            <p className="text-gray-600 mt-2">
              Your work is handled by a qualified expert.
            </p>
          </div>

          {/* Step 3 */}
          <div>
            <div className="text-3xl font-bold text-green-600">3</div>
            <h3 className="mt-3 font-semibold text-lg">Track Progress</h3>
            <p className="text-gray-600 mt-2">
              Monitor your assignment in real-time.
            </p>
          </div>

          {/* Step 4 */}
          <div>
            <div className="text-3xl font-bold text-green-600">4</div>
            <h3 className="mt-3 font-semibold text-lg">Receive Your Work</h3>
            <p className="text-gray-600 mt-2">
              Get your completed work on time.
            </p>
          </div>

        </div>

      </section>
      {/* CTA Section */}
<section className="bg-green-600 text-white text-center py-20 px-6">

  <h2 className="text-4xl font-bold max-w-2xl mx-auto">
    Need Help With Your Assignment or Online Class?
  </h2>

  <p className="mt-4 text-lg text-green-100">
    Submit your task today and get professional assistance from experts.
  </p>

  <div className="mt-8">
    <button className="bg-white text-green-600 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-gray-100">
      Submit Assignment Now
    </button>
  </div>

</section>

    </div>
  )
}

export default App