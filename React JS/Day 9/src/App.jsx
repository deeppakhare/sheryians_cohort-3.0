import React from "react";
import Navbar from "./components/Navbar";
import Usercard from "./components/Usercard";
import Form from "./components/Form";

const App = () => {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <div className="mb-2 flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-indigo-500"></span>

              <span className="text-sm font-medium text-indigo-400">
                Dashboard
              </span>
            </div>

            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
              User Management
            </h1>

            <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-500">
              Manage your users, create new profiles, and keep track of user
              information from one place.
            </p>
          </div>

          {/* User Count */}
          <div className="flex items-center gap-3 rounded-2xl border border-slate-800 bg-slate-900 px-5 py-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-500/10 text-indigo-400">
              👥
            </div>

            <div>
              <p className="text-xs text-slate-500">Total Users</p>

              <p className="text-lg font-bold text-white">0</p>
            </div>
          </div>
        </div>

        {/* Content Area */}
        <div className="rounded-3xl border border-slate-800 bg-slate-900/40 p-4 sm:p-6">
          {/* Users Section Header */}
          <div className="mb-6 flex flex-col gap-4 border-b border-slate-800 pb-5 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="text-xl font-bold text-white">All Users</h2>

              <p className="mt-1 text-sm text-slate-500">
                View and manage your registered users.
              </p>
            </div>

            {/* Search / Filter UI */}
            <div className="flex flex-col gap-3 sm:flex-row">
              <input
                type="text"
                placeholder="Search users..."
                className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-2.5 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 sm:w-64"
              />

              <select className="rounded-xl border border-slate-700 bg-slate-950 px-4 py-2.5 text-sm text-slate-400 outline-none focus:border-indigo-500">
                <option value="">All Users</option>
                <option value="active">Active</option>
                <option value="inactive">Inactive</option>
              </select>
            </div>
          </div>

          {/* User Cards */}
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            <Usercard />
         
          </div>

          {/* Empty State
              Remove this when you connect your users array.
          */}
          <div className="hidden flex-col items-center justify-center rounded-2xl border border-dashed border-slate-800 py-20 text-center">
            <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-slate-900 text-2xl">
              👥
            </div>

            <h3 className="text-lg font-semibold text-white">No users yet</h3>

            <p className="mt-2 max-w-sm text-sm leading-6 text-slate-500">
              Start by creating your first user profile. Your users will appear
              here once they are added.
            </p>

            <button
              type="button"
              className="mt-5 rounded-xl bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-indigo-500"
            >
              Create First User
            </button>
          </div>
        </div>
      </section>

      <div className="hidden">
        <Form />
      </div>
    </main>
  );
};

export default App;
