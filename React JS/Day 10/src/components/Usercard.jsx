import React from "react";

const Usercard = ({ users }) => {
  return (
    <article className="group overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 shadow-xl transition duration-300 hover:-translate-y-1 hover:border-slate-700">
      {/* Cover */}
      <div className="relative h-28 bg-linear-to-br from-indigo-600 via-purple-600 to-slate-900">
        <div className="absolute inset-0 bg-black/10"></div>

        {/* Status */}
        <div className="absolute right-4 top-4 flex items-center gap-2 rounded-full border border-white/10 bg-black/30 px-3 py-1.5 text-xs font-medium text-white backdrop-blur">
          <span className="h-2 w-2 rounded-full bg-emerald-400"></span>
          Active
        </div>

        {/* Gender */}
        <div className="absolute left-4 top-4 rounded-full border border-white/10 bg-black/30 px-3 py-1.5 text-xs font-medium capitalize text-white backdrop-blur">
          {users.gender}
        </div>
      </div>

      {/* Profile */}
      <div className="relative px-5 pb-5">
        {/* Avatar */}
        <div className="-mt-12 mb-4 h-24 w-24 overflow-hidden rounded-2xl border-4 border-slate-900 bg-slate-800 shadow-xl">
          <img
            src={users.url}
            alt="User profile"
            className="h-full w-full object-cover"
          />
        </div>

        {/* User Information */}
        <div className="mb-5">
          <h2 className="text-xl font-bold text-white">{users.fullName}</h2>

          <p className="mt-1 text-sm text-slate-400">+91 {users.mobileNo}</p>
        </div>

        {/* Details */}
        <div className="mb-5">
          <div className="rounded-xl border border-slate-800 bg-slate-950 p-3">
            <p className="text-xs text-slate-500">Profile</p>

            <p className="mt-1 truncate text-sm font-medium text-slate-300">
              {users.url}
            </p>
          </div>
        </div>

        {/* Actions */}
        <div className="flex gap-3">
          <button
            type="button"
            className="flex-1 rounded-xl bg-indigo-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-indigo-500"
          >
            Edit User
          </button>

          <button
            type="button"
            className="rounded-xl border border-red-500/20 bg-red-500/10 px-4 py-2.5 text-sm font-semibold text-red-400 transition hover:bg-red-500/20"
          >
            Delete
          </button>
        </div>
      </div>
    </article>
  );
};

export default Usercard;
