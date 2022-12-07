import React from "react";
import toast from "react-hot-toast";

const Secret = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    toast.success("Congratulation !! Submitted Successfully");
  };

  return (
    <div className="card w-full bg-base-100 shadow-xl px-10 py-5 my-10">
      <h2 className="text-3xl text-center">Please Fill Up Below Form</h2>
      <form onSubmit={handleSubmit} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Course Title</span>
          </label>
          <input
            name="title"
            type="text"
            placeholder=""
            className="input input-bordered"
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Full Name</span>
          </label>
          <input
            name="name"
            type="text"
            placeholder=""
            className="input input-bordered"
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Address</span>
          </label>
          <input
            name="address"
            type="text"
            placeholder=""
            className="input input-bordered"
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Education</span>
          </label>
          <input
            name="education"
            type="text"
            placeholder=""
            className="input input-bordered"
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Date of Birth</span>
          </label>
          <input
            name="birth"
            type="text"
            placeholder=""
            className="input input-bordered"
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Nationality</span>
          </label>
          <input
            name="nation"
            type="text"
            placeholder=""
            className="input input-bordered"
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Religious</span>
          </label>
          <input
            name="religious"
            type="text"
            placeholder=""
            className="input input-bordered"
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Contact</span>
          </label>
          <input
            name="contact"
            type="text"
            placeholder=""
            className="input input-bordered"
          />
        </div>

        <div className="form-control mt-6 w-80">
          <button className="btn btn-primary">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default Secret;
