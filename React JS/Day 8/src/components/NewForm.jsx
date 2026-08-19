import React, { useRef, useState } from "react";

const NewForm = () => {
  const ref = useRef({});
  const [data, setData] = useState({});

  const handelSubmit = (e) => {
    e.preventDefault();

    const obj = {
      fullName: ref.current.fullName.value,
      email: ref.current.email.value,
      password: ref.current.password.value,
      confirmPassword: ref.current.confirmPassword.value,
      age: ref.current.age.value,
      mobileNo: ref.current.mobileNo.value,
      gender: ref.current.gender.value,
      city: ref.current.city.value,
      dateOfBirth: ref.current.dateOfBirth.value,
      portfolio: ref.current.portfolio.value,
      skills: ref.current.skills.value,
      textArea: ref.current.textArea.value,
      experience: ref.current.experience.value,
      job: ref.current.job.value,

    };

    setData(obj);
  };
  console.log(data);

  return (
    <div className="min-h-screen w-full bg-linear-to-br from-slate-950 via-slate-900 to-indigo-950 p-6">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="mb-8 text-center text-white">
          <h1 className="text-4xl font-extrabold tracking-tight">
            Form Handling Practice
          </h1>

          <p className="mt-2 text-slate-400">
            Practice form handling using useRef and React Hook Form
          </p>
        </div>

        {/* Toggle Buttons */}
        <div className="mb-8 flex justify-center gap-4">
          <button
            type="button"
            className="rounded-xl border border-blue-500 bg-blue-600 px-7 py-3 font-semibold text-white transition hover:bg-blue-700"
          >
            Try useRef
          </button>

          <button
            type="button"
            className="rounded-xl border border-green-500 bg-green-600 px-7 py-3 font-semibold text-white transition hover:bg-green-700"
          >
            Try React Hook Form
          </button>
        </div>

        {/* Current Mode */}
        <div className="mb-6 text-center">
          <span className="rounded-full bg-white/10 px-5 py-2 text-sm font-semibold text-slate-300">
            Current Mode: React Hook Form
          </span>
        </div>

        {/* Main Grid */}
        <div className="grid gap-6 lg:grid-cols-3">
          {/* Form Card */}
          <div className="rounded-3xl bg-white p-7 shadow-2xl lg:col-span-2">
            {/* Form Header */}
            <div className="mb-7">
              <h2 className="text-2xl font-bold text-slate-900">
                Create Your Profile
              </h2>

              <p className="mt-1 text-sm text-slate-500">
                Enter your information below.
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handelSubmit} className="grid gap-5 md:grid-cols-2">
              {/* Full Name */}
              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  Full Name
                </label>

                <input
                  ref={(e) => (ref.current.fullName = e)}
                  required
                  type="text"
                  name="name"
                  placeholder="Enter your full name"
                  className="w-full rounded-xl border border-slate-300 bg-white p-3 text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10"
                />
              </div>

              {/* Email */}
              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  Email Address
                </label>

                <input
                  ref={(e) => (ref.current.email = e)}
                  required
                  type="email"
                  name="email"
                  placeholder="example@gmail.com"
                  className="w-full rounded-xl border border-slate-300 bg-white p-3 text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10"
                />
              </div>

              {/* Password */}
              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  Password
                </label>

                <input
                  ref={(e) => (ref.current.password = e)}
                  required
                  type="password"
                  name="password"
                  placeholder="Enter password"
                  className="w-full rounded-xl border border-slate-300 bg-white p-3 text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10"
                />
              </div>

              {/* Confirm Password */}
              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  Confirm Password
                </label>

                <input
                  ref={(e) => (ref.current.confirmPassword = e)}
                  required
                  type="password"
                  name="confirmPassword"
                  placeholder="Confirm password"
                  className="w-full rounded-xl border border-slate-300 bg-white p-3 text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10"
                />
              </div>

              {/* Age */}
              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  Age
                </label>

                <input
                  ref={(e) => (ref.current.age = e)}
                  required
                  type="number"
                  name="age"
                  placeholder="Enter your age"
                  className="w-full rounded-xl border border-slate-300 bg-white p-3 text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10"
                />
              </div>

              {/* Phone */}
              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  Phone Number
                </label>

                <input
                  ref={(e) => (ref.current.mobileNo = e)}
                  required
                  type="tel"
                  name="phone"
                  placeholder="+91 98765 43210"
                  className="w-full rounded-xl border border-slate-300 bg-white p-3 text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10"
                />
              </div>

              {/* Gender */}
              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  Gender
                </label>

                <select
                  ref={(e) => (ref.current.gender = e)}
                  required
                  name="gender"
                  className="w-full rounded-xl border border-slate-300 bg-white p-3 text-slate-700 outline-none focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10"
                >
                  <option value="">Select Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
              </div>

              {/* City */}
              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  City
                </label>

                <select
                  ref={(e) => (ref.current.city = e)}
                  required
                  name="city"
                  className="w-full rounded-xl border border-slate-300 bg-white p-3 text-slate-700 outline-none focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10"
                >
                  <option value="">Select City</option>
                  <option value="pune">Pune</option>
                  <option value="mumbai">Mumbai</option>
                  <option value="delhi">Delhi</option>
                  <option value="bangalore">Bangalore</option>
                  <option value="hyderabad">Hyderabad</option>
                </select>
              </div>

              {/* Date of Birth */}
              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  Date of Birth
                </label>

                <input
                  ref={(e) => (ref.current.dateOfBirth = e)}
                  required
                  type="date"
                  name="dob"
                  className="w-full rounded-xl border border-slate-300 bg-white p-3 text-slate-700 outline-none focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10"
                />
              </div>

              {/* Website */}
              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  Portfolio Website
                </label>

                <input
                  ref={(e) => (ref.current.portfolio = e)}
                  required
                  type="url"
                  name="website"
                  placeholder="https://example.com"
                  className="w-full rounded-xl border border-slate-300 bg-white p-3 text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10"
                />
              </div>

              {/* Skills */}
              <div className="md:col-span-2">
                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  Skills
                </label>

                <input
                  ref={(e) => (ref.current.skills = e)}
                  required
                  type="text"
                  name="skills"
                  placeholder="React, JavaScript, Tailwind CSS..."
                  className="w-full rounded-xl border border-slate-300 bg-white p-3 text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10"
                />
              </div>

              {/* Bio */}
              <div className="md:col-span-2">
                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  About Yourself
                </label>

                <textarea
                  ref={(e) => (ref.current.textArea = e)}
                  required
                  name="bio"
                  rows="4"
                  placeholder="Tell us something about yourself..."
                  className="w-full resize-none rounded-xl border border-slate-300 bg-white p-3 text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10"
                ></textarea>
              </div>

              {/* Experience */}
              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  Experience
                </label>

                <select
                  ref={(e) => (ref.current.experience = e)}
                  required
                  name="experience"
                  className="w-full rounded-xl border border-slate-300 bg-white p-3 text-slate-700 outline-none focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10"
                >
                  <option value="">Select Experience</option>
                  <option value="fresher">Fresher</option>
                  <option value="1-2">1 - 2 Years</option>
                  <option value="3-5">3 - 5 Years</option>
                  <option value="5+">5+ Years</option>
                </select>
              </div>

              {/* Job Type */}
              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  Preferred Job
                </label>

                <select
                  ref={(e) => (ref.current.job = e)}
                  required
                  name="jobType"
                  className="w-full rounded-xl border border-slate-300 bg-white p-3 text-slate-700 outline-none focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10"
                >
                  <option value="">Select Job Type</option>
                  <option value="fulltime">Full Time</option>
                  <option value="parttime">Part Time</option>
                  <option value="remote">Remote</option>
                  <option value="freelance">Freelance</option>
                </select>
              </div>

              {/* Radio Buttons */}
              <div className="md:col-span-2">
                <label className="mb-3 block text-sm font-semibold text-slate-700">
                  Preferred Contact Method
                </label>

                <div className="flex flex-wrap gap-6">
                  <label className="flex cursor-pointer items-center gap-2">
                    <input
                      required
                      type="radio"
                      name="contact"
                      value="email"
                      className="h-4 w-4 accent-indigo-600"
                    />
                    <span className="text-sm text-slate-600">Email</span>
                  </label>

                  <label className="flex cursor-pointer items-center gap-2">
                    <input
                      type="radio"
                      name="contact"
                      value="phone"
                      className="h-4 w-4 accent-indigo-600"
                    />
                    <span className="text-sm text-slate-600">Phone</span>
                  </label>

                  <label className="flex cursor-pointer items-center gap-2">
                    <input
                      type="radio"
                      name="contact"
                      value="both"
                      className="h-4 w-4 accent-indigo-600"
                    />
                    <span className="text-sm text-slate-600">Both</span>
                  </label>
                </div>
              </div>

              {/* Checkbox */}
              <div className="md:col-span-2">
                <label className="flex cursor-pointer items-center gap-3">
                  <input
                    required
                    type="checkbox"
                    name="terms"
                    className="h-5 w-5 accent-indigo-600"
                  />

                  <span className="text-sm text-slate-600">
                    I agree to the Terms & Conditions
                  </span>
                </label>
              </div>

              {/* Buttons */}
              <div className="flex gap-3 pt-2 md:col-span-2">
                <button
                  type="submit"
                  className="flex-1 rounded-xl bg-indigo-600 px-6 py-3.5 font-semibold text-white shadow-lg shadow-indigo-600/20 transition hover:bg-indigo-700"
                >
                  Submit Form
                </button>

                <button
                  type="reset"
                  className="rounded-xl border border-slate-300 bg-white px-6 py-3.5 font-semibold text-slate-700 transition hover:bg-slate-100"
                >
                  Reset
                </button>
              </div>
            </form>
          </div>

          {/* Output Card */}
          <div className="rounded-3xl bg-white p-6 shadow-2xl">
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-slate-900">Form Data</h2>

              <p className="mt-1 text-sm text-slate-500">
                Submitted information will appear here.
              </p>
            </div>

            {/* Data Display */}
            <div className="space-y-3">
              <div className="rounded-xl bg-slate-50 p-4">
                <p className="text-xs font-bold uppercase text-slate-400">
                  Name
                </p>
                <p className="mt-1 text-slate-800">{data.fullName ? data.fullName : "No data" }</p>
              </div>

              <div className="rounded-xl bg-slate-50 p-4">
                <p className="text-xs font-bold uppercase text-slate-400">
                  Email
                </p>
                <p className="mt-1 text-slate-800">{data.email ? data.email : "No data" }</p>
              </div>

              <div className="rounded-xl bg-slate-50 p-4">
                <p className="text-xs font-bold uppercase text-slate-400">
                  Age
                </p>
                <p className="mt-1 text-slate-800">{data.age ? data.age : "No data" }</p>
              </div>

              <div className="rounded-xl bg-slate-50 p-4">
                <p className="text-xs font-bold uppercase text-slate-400">
                  City
                </p>
                <p className="mt-1 text-slate-800">{data.city ? data.city : "No data" }</p>
              </div>

              <div className="rounded-xl bg-slate-50 p-4">
                <p className="text-xs font-bold uppercase text-slate-400">
                  Skills
                </p>
                <p className="mt-1 text-slate-800">{data.fullName ? data.fullName : "No data" }</p>
              </div>

              <div className="rounded-xl bg-slate-50 p-4">
                <p className="text-xs font-bold uppercase text-slate-400">
                  Experience
                </p>
                <p className="mt-1 text-slate-800">No data</p>
              </div>

              <div className="rounded-xl bg-slate-50 p-4">
                <p className="text-xs font-bold uppercase text-slate-400">
                  Job Type
                </p>
                <p className="mt-1 text-slate-800">No data</p>
              </div>
            </div>

            {/* Tip */}
            <div className="mt-6 rounded-xl border border-indigo-100 bg-indigo-50 p-4">
              <p className="text-sm font-semibold text-indigo-800">
                💡 Practice Task
              </p>

              <p className="mt-1 text-xs leading-5 text-indigo-600">
                Connect this UI with useRef first. Then try the same form using
                React Hook Form.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewForm;
