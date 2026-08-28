import React from "react";

const Form = () => {
  return (
    <div className="mx-auto max-w-2xl">
      {/* Header */}
      <div className="mb-8">
        <div className="mb-3 inline-flex rounded-full border border-indigo-500/30 bg-indigo-500/10 px-3 py-1 text-xs font-medium text-indigo-300">
          User Management
        </div>

        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Create New User
        </h1>

        <p className="mt-2 text-sm leading-6 text-slate-400">
          Add a new user profile by providing the required information.
        </p>
      </div>

      {/* Form */}
      <form className="rounded-3xl border border-slate-800 bg-slate-900 p-6 shadow-2xl sm:p-8">
        {/* Name */}
        <div className="mb-6">
          <label className="mb-2 block text-sm font-medium text-slate-300">
            Full Name
          </label>

          <input
            type="text"
            placeholder="Enter full name"
            className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10"
          />
        </div>

        {/* Mobile */}
        <div className="mb-6">
          <label className="mb-2 block text-sm font-medium text-slate-300">
            Mobile Number
          </label>

          <input
            type="tel"
            placeholder="Enter 10-digit mobile number"
            className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10"
          />
        </div>

        {/* Profile Image URL */}
        <div className="mb-6">
          <label className="mb-2 block text-sm font-medium text-slate-300">
            Profile Image URL
          </label>

          <input
            type="url"
            placeholder="https://example.com/profile.jpg"
            className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10"
          />
        </div>

        {/* Gender */}
        <div className="mb-8">
          <label className="mb-2 block text-sm font-medium text-slate-300">
            Gender
          </label>

          <select className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-sm text-slate-400 outline-none transition focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10">
            <option value="">Select gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>

        {/* Actions */}
        <div className="flex flex-col-reverse gap-3 border-t border-slate-800 pt-6 sm:flex-row sm:justify-end">
          <button
            type="reset"
            className="rounded-xl border border-slate-700 px-6 py-3 text-sm font-semibold text-slate-300 transition hover:bg-slate-800"
          >
            Clear
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
  );
};

export default Form;