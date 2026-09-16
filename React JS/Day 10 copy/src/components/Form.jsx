import React from "react";
import { useForm } from "react-hook-form";

const Form = ({ setUsers, users, setToggle, updatedData }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: updatedData,
  });

  let userId = () => {
    if (users.length === 0) {
      return 1;
    } else {
      return Math.max(...users.map((elem) => elem.id)) + 1;
    }
  };

  const formSubmit = (data) => {
    if (updatedData) {
      const updatedUser = users.map((val) => {
        return val.id === updatedData.id ? { ...data } : val;
      });

      setUsers(updatedUser);
      localStorage.setItem("users", JSON.stringify(updatedUser));
    } else {
      let arr = [...users, { ...data, id: userId() }];
      setUsers(arr);
      localStorage.setItem("users", JSON.stringify(arr));
    }

    reset();
    setToggle((prev) => !prev);
  };

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
    
    </div>
  );
};

export default Form;
