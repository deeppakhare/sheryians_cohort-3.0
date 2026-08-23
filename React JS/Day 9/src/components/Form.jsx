import React from "react";

const Form = () => {
  return (
    <div className="min-h-screen w-full bg-slate-950 px-4 py-10 text-white">
      <div className="mx-auto max-w-3xl">
        {/* Header */}
        <div className="mb-8">
          <div className="mb-3 inline-flex rounded-full border border-indigo-500/30 bg-indigo-500/10 px-3 py-1 text-xs font-medium text-indigo-300">
            User Management
          </div>

          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Create New User
          </h1>

          <p className="mt-2 max-w-xl text-sm leading-6 text-slate-400">
            Add a new user by providing their personal information,
            contact details, and profile information.
          </p>
        </div>

        {/* Form Card */}
        <form className="rounded-2xl border border-slate-800 bg-slate-900 p-5 shadow-2xl sm:p-8">
          {/* Personal Information */}
          <div className="mb-8">
            <div className="mb-5">
              <h2 className="text-lg font-semibold text-white">
                Personal Information
              </h2>
              <p className="mt-1 text-sm text-slate-500">
                Basic information about the user.
              </p>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              {/* Name */}
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-300">
                  Full Name
                </label>

                <input
                  type="text"
                  placeholder="Enter full name"
                  className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10"
                />
              </div>

              {/* Email */}
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-300">
                  Email Address
                </label>

                <input
                  type="email"
                  placeholder="example@gmail.com"
                  className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10"
                />
              </div>

              {/* Mobile */}
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-300">
                  Mobile Number
                </label>

                <input
                  type="tel"
                  placeholder="+91 98765 43210"
                  className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10"
                />
              </div>

              {/* Age */}
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-300">
                  Age
                </label>

                <input
                  type="number"
                  placeholder="Enter age"
                  className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10"
                />
              </div>

              {/* Date of Birth */}
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-300">
                  Date of Birth
                </label>

                <input
                  type="date"
                  className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-sm text-slate-300 outline-none transition focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10"
                />
              </div>

              {/* Gender */}
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-300">
                  Gender
                </label>

                <select className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-sm text-slate-300 outline-none transition focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10">
                  <option value="">Select gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>
          </div>

          {/* Account Information */}
          <div className="mb-8 border-t border-slate-800 pt-8">
            <div className="mb-5">
              <h2 className="text-lg font-semibold text-white">
                Account Information
              </h2>

              <p className="mt-1 text-sm text-slate-500">
                Configure the user's account credentials.
              </p>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              {/* Username */}
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-300">
                  Username
                </label>

                <input
                  type="text"
                  placeholder="Enter username"
                  className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10"
                />
              </div>

              {/* Password */}
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-300">
                  Password
                </label>

                <input
                  type="password"
                  placeholder="Create password"
                  className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10"
                />
              </div>

              {/* Confirm Password */}
              <div className="sm:col-span-2">
                <label className="mb-2 block text-sm font-medium text-slate-300">
                  Confirm Password
                </label>

                <input
                  type="password"
                  placeholder="Confirm password"
                  className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10"
                />
              </div>
            </div>
          </div>

          {/* Profile Information */}
          <div className="mb-8 border-t border-slate-800 pt-8">
            <div className="mb-5">
              <h2 className="text-lg font-semibold text-white">
                Profile Information
              </h2>

              <p className="mt-1 text-sm text-slate-500">
                Add information that will be displayed on the user's profile.
              </p>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              {/* Profile Image */}
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-300">
                  Profile Image URL
                </label>

                <input
                  type="url"
                  placeholder="https://example.com/avatar.jpg"
                  className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10"
                />
              </div>

              {/* Website */}
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-300">
                  Portfolio Website
                </label>

                <input
                  type="url"
                  placeholder="https://yourwebsite.com"
                  className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10"
                />
              </div>

              {/* City */}
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-300">
                  City
                </label>

                <select className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-sm text-slate-300 outline-none transition focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10">
                  <option value="">Select city</option>
                  <option value="pune">Pune</option>
                  <option value="mumbai">Mumbai</option>
                  <option value="delhi">Delhi</option>
                  <option value="bangalore">Bangalore</option>
                  <option value="hyderabad">Hyderabad</option>
                </select>
              </div>

              {/* Occupation */}
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-300">
                  Occupation
                </label>

                <input
                  type="text"
                  placeholder="e.g. Software Developer"
                  className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10"
                />
              </div>

              {/* Bio */}
              <div className="sm:col-span-2">
                <label className="mb-2 block text-sm font-medium text-slate-300">
                  About
                </label>

                <textarea
                  rows="4"
                  placeholder="Write a short introduction about the user..."
                  className="w-full resize-none rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10"
                ></textarea>
              </div>
            </div>
          </div>

          {/* Preferences */}
          <div className="mb-8 border-t border-slate-800 pt-8">
            <div className="mb-5">
              <h2 className="text-lg font-semibold text-white">
                Preferences
              </h2>

              <p className="mt-1 text-sm text-slate-500">
                Configure communication preferences.
              </p>
            </div>

            {/* Contact Method */}
            <div className="mb-6">
              <label className="mb-3 block text-sm font-medium text-slate-300">
                Preferred Contact Method
              </label>

              <div className="flex flex-wrap gap-3">
                <label className="flex cursor-pointer items-center gap-2 rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-sm text-slate-300">
                  <input type="radio" value="email" />
                  Email
                </label>

                <label className="flex cursor-pointer items-center gap-2 rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-sm text-slate-300">
                  <input type="radio" value="phone" />
                  Phone
                </label>

                <label className="flex cursor-pointer items-center gap-2 rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-sm text-slate-300">
                  <input type="radio" value="both" />
                  Both
                </label>
              </div>
            </div>

            {/* Notifications */}
            <div>
              <label className="mb-3 block text-sm font-medium text-slate-300">
                Notifications
              </label>

              <div className="space-y-3">
                <label className="flex cursor-pointer items-center gap-3 text-sm text-slate-400">
                  <input type="checkbox" />
                  Receive email notifications
                </label>

                <label className="flex cursor-pointer items-center gap-3 text-sm text-slate-400">
                  <input type="checkbox" />
                  Receive product updates
                </label>

                <label className="flex cursor-pointer items-center gap-3 text-sm text-slate-400">
                  <input type="checkbox" />
                  Receive promotional emails
                </label>
              </div>
            </div>
          </div>

          {/* Terms */}
          <div className="mb-6 border-t border-slate-800 pt-6">
            <label className="flex cursor-pointer items-start gap-3 text-sm text-slate-400">
              <input type="checkbox" className="mt-1" />

              <span>
                I agree to the{" "}
                <span className="text-indigo-400">Terms & Conditions</span>{" "}
                and confirm that the information provided is correct.
              </span>
            </label>
          </div>

          {/* Actions */}
          <div className="flex flex-col-reverse gap-3 border-t border-slate-800 pt-6 sm:flex-row sm:justify-end">
            <button
              type="reset"
              className="rounded-xl border border-slate-700 px-6 py-3 text-sm font-semibold text-slate-300 transition hover:bg-slate-800"
            >
              Clear Form
            </button>

            <button
              type="submit"
              className="rounded-xl bg-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-600/20 transition hover:bg-indigo-500"
            >
              Create User
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;