import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Usercard from "./components/Usercard";
import Form from "./components/Form";

const App = () => {
  const [toggle, setToggle] = useState(false);
  const [users, setUsers] = useState(() => {
      let newArr = localStorage.getItem("users");
      return newArr ? JSON.parse(newArr) : []
  });

  console.log(users.length);


  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <Navbar setToggle={setToggle} />

      {toggle ? (
        <Form setToggle={setToggle} users={users} setUsers={setUsers} />
      ) : (
        <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
          {/* Page Header */}
          <div className="mb-8 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <div className="mb-3 flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-indigo-500"></span>

                <span className="text-sm font-medium text-indigo-400">
                  Dashboard
                </span>
              </div>

              <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
                User Management
              </h1>

              <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-400">
                Create, manage, edit and remove user profiles from your
                dashboard.
              </p>
            </div>

            {/* User Count */}
            <div className="flex items-center gap-3 rounded-2xl border border-slate-800 bg-slate-900 px-5 py-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-500/10 text-xl">
                👥
              </div>

              <div>
                <p className="text-xs text-slate-500">Total Users</p>
                <p className="text-lg font-bold text-white">{users.length}</p>
              </div>
            </div>
          </div>

          {/* Users Container */}
          <div className="rounded-3xl border border-slate-800 bg-slate-900/40 p-4 sm:p-6">
            {/* Section Header */}
            <div className="mb-6 flex flex-col gap-4 border-b border-slate-800 pb-5 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h2 className="text-xl font-bold text-white">All Users</h2>

                <p className="mt-1 text-sm text-slate-500">
                  View and manage your registered users.
                </p>
              </div>
            </div>

            {users.length == 0 ? (
              <div className="mt-5 flex flex-col items-center justify-center rounded-2xl border border-dashed border-slate-800 py-20 text-center">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-slate-900 text-2xl">
                  👥
                </div>

                <h3 className="text-lg font-semibold text-white">
                  No users yet
                </h3>

                <p className="mt-2 max-w-sm text-sm leading-6 text-slate-500">
                  Start by creating your first user profile.
                </p>

                <button
                  onClick={() => {
                    setToggle(true);
                  }}
                  type="button"
                  className="mt-5 rounded-xl bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-indigo-500"
                >
                  Create First User
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                <Usercard />
              </div>
            )}
          </div>
        </section>
      )}
    </main>
  );
};

export default App;
