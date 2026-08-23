import React from "react";
import { useForm } from "react-hook-form";

const Form = ({ addUser }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    mode: "onchange",
  });

  const onSubmit = (data) => {
    addUser((prev) => [...prev, data]);
  };

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
            Add a new user by providing their personal information, contact
            details, and profile information.
          </p>
        </div>

        {/* Form Card */}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="rounded-2xl border border-slate-800 bg-slate-900 p-5 shadow-2xl sm:p-8"
        >
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
                  {...register("name")}
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
                {...register("email")}
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
                {...register("number")}
                  type="tel"
                  placeholder="+91 98765 43210"
                  className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10"
                />
              </div>

              {/* Date of Birth */}
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-300">
                  Date of Birth
                </label>

                <input
                {...register("dob")}
                  type="date"
                  className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-sm text-slate-300 outline-none transition focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10"
                />
              </div>

              {/* Gender */}
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-300">
                  Gender
                </label>

                <select {...register("gender")} className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-sm text-slate-300 outline-none transition focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10">
                  <option value="">Select gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
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
                {...register("url")}
                  type="url"
                  placeholder="https://example.com/avatar.jpg"
                  className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10"
                />
              </div>

              {/* City */}
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-300">
                  City
                </label>

                <select {...register("city")} className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-sm text-slate-300 outline-none transition focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10">
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
                {...register("occupation")}
                  type="text"
                  placeholder="e.g. Software Developer"
                  className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10"
                />
              </div>
            </div>
          </div>

          {/* Terms */}
          <div className="mb-6 border-t border-slate-800 pt-6">
            <label className="flex cursor-pointer items-start gap-3 text-sm text-slate-400">
              <input type="checkbox" className="mt-1" />

              <span>
                I agree to the{" "}
                <span className="text-indigo-400">Terms & Conditions</span> and
                confirm that the information provided is correct.
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
