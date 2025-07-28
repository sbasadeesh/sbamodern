function Apply(){

    return(
        <>
        <br /><br /><br />
        <section className="py-16">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-12">
      <h2 className="text-3xl font-bold text-gray-100 sm:text-4xl mb-4">
        Apply for a Position
      </h2>
      <p className="text-lg text-gray-100">
        We are excited to hear from you! Fill out the form below to apply for the position you're interested in.
      </p>
    </div>

    <div className="max-w-3xl mx-auto p-8 rounded-lg shadow-lg bg-[#1F1D1A]">
      <form action="#" method="POST">
        <div className="space-y-6">
          {/* Full Name */}
          <div className="flex flex-col">
            <label className="text-lg font-semibold text-gray-100 mb-2">Full Name</label>
            <input
              type="text"
              name="fullName"
              id="fullName"
              placeholder="John Doe"
              className="p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-blue-600"
              required
            />
          </div>

          {/* Email Address */}
          <div className="flex flex-col">
            <label className="text-lg font-semibold text-gray-100 mb-2">Email Address</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="john.doe@example.com"
              className="p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-blue-600"
              required
            />
          </div>

          {/* Phone Number */}
          <div className="flex flex-col">
            <label className="text-lg font-semibold text-gray-100 mb-2">Phone Number</label>
            <input
              type="tel"
              name="phone"
              id="phone"
              placeholder="+1 234 567 890"
              className="p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-blue-600"
              required
            />
          </div>

          {/* Upload Resume */}
          {/* <div className="flex flex-col">
            <label className="text-lg font-semibold text-gray-100 mb-2">Upload Resume</label>
            <input
              type="file"
              name="resume"
              id="resume"
              className="p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-blue-600"
              required
            />
          </div> */}

          {/* Cover Letter */}
          <div className="flex flex-col">
            <label className="text-lg font-semibold text-gray-100 mb-2">Cover Letter</label>
            <textarea
              name="coverLetter"
              id="coverLetter"
              placeholder="Tell us why you're the perfect fit for the role..."
              className="p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-blue-600"
              rows="6"
              required
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="flex justify-center">
            <a href="#" type="button" class="relative inline-block px-6 py-3 font-medium group overflow-hidden border border-white text-white rounded">
                <span class="absolute inset-0 w-0 bg-gray-200 transition-all duration-500 ease-out group-hover:w-full"></span>
                <span class="relative z-10 group-hover:text-black">Request a Demo</span>
            </a>
          </div>
        </div>
      </form>
    </div>
  </div>
</section>

        </>
    )
}


export default Apply
