import React, { useEffect } from "react";
import { useForm } from "react-hook-form";

const Form = ({ addUser, users, editUser, setToggle }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    mode: "onchange",
    defaultValues: editUser,
  });

  const getNextId = () => {
    if (users.length === 0) {
      return 1;
    }
    return Math.max(...users.map((user) => user.id)) + 1;
  };

  const onSubmit = (data) => {
    const newUser = {
      id: getNextId(),
      ...data,
    };
    addUser((prev) => [...prev, newUser]);
    reset();
    setToggle(false)
  };

  useEffect(() => {
  if(editUser) {
    reset(editUser);
  }
  }, [editUser, reset])

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
                  {...register("name", {
                    required: "Enter full name",
                    pattern: {
                      value: /^\S.*$/,
                      message: "Blank space is not required",
                    },
                  })}
                  type="text"
                  placeholder="Enter full name"
                  className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10"
                />
                {errors.name && (
                  <p className="text-red-500 ml-2">{errors.name.message}</p>
                )}
              </div>

              {/* Email */}
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-300">
                  Email Address
                </label>

                <input
                  {...register("email", {
                    required: "Enter valid email id",
                    pattern: {
                      value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                      message: "Please enter a valid email address",
                    },
                  })}
                  type="email"
                  placeholder="example@gmail.com"
                  className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10"
                />
                {errors.email && (
                  <p className="text-red-500 ml-2">{errors.email.message}</p>
                )}
              </div>

              {/* Mobile */}
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-300">
                  Mobile Number
                </label>

                <input
                  {...register("number", {
                    required: "Enter correct mobile no",
                    pattern: {
                      value: /^[6-9]\d{9}$/,
                      message: "Enter a valid 10-digit mobile number",
                    },
                  })}
                  type="tel"
                  placeholder="+91 98765 43210"
                  className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10"
                />
                {errors.number && (
                  <p className="text-red-500 ml-2">{errors.number.message}</p>
                )}
              </div>

              {/* Date of Birth */}
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-300">
                  Date of Birth
                </label>

                <input
                  {...register("dob", {
                    required: "Enter your vaild DOB",
                  })}
                  type="date"
                  className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-sm text-slate-300 outline-none transition focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10"
                />
                {errors.dob && (
                  <p className="text-red-500 ml-2">{errors.dob.message}</p>
                )}
              </div>

              {/* Gender */}
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-300">
                  Gender
                </label>

                <select
                  {...register("gender", {
                    required: "Select your gender",
                  })}
                  className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-sm text-slate-300 outline-none transition focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10"
                >
                  <option value="">Select gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
                {errors.gender && (
                  <p className="text-red-500 ml-2">{errors.gender.message}</p>
                )}
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
                  {...register("url", {
                    required: "Enter valid url",
                    pattern: {
                      value:
                        /^(https?:\/\/)?([\w-]+\.)+[\w-]+(\/[\w\-._~:/?#[\]@!$&'()*+,;=%]*)?$/,
                      message: "Please enter a valid URL",
                    },
                  })}
                  type="url"
                  placeholder="https://example.com/avatar.jpg"
                  className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10"
                />
                {errors.url && (
                  <p className="text-red-500 ml-2">{errors.url.message}</p>
                )}
              </div>

              {/* City */}
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-300">
                  City
                </label>

                <select
                  {...register("city", {
                    required: "Enter your city",
                  })}
                  className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-sm text-slate-300 outline-none transition focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10"
                >
                  <option value="">Select city</option>
                  <option value="pune">Pune</option>
                  <option value="mumbai">Mumbai</option>
                  <option value="delhi">Delhi</option>
                  <option value="bangalore">Bangalore</option>
                  <option value="hyderabad">Hyderabad</option>
                </select>
                {errors.city && (
                  <p className="text-red-500 ml-2">{errors.city.message}</p>
                )}
              </div>

              {/* Occupation */}
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-300">
                  Occupation
                </label>

                <input
                  {...register("occupation", {
                    required: "Enter your occupation",
                  })}
                  type="text"
                  placeholder="e.g. Software Developer"
                  className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10"
                />
                {errors.occupation && (
                  <p className="text-red-500 ml-2">
                    {errors.occupation.message}
                  </p>
                )}
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
