import React from "react";
import { useForm } from "react-hook-form";
import useUserRole from "../../../../CustomHook/useUserRole";
import Swal from "sweetalert2";

const AddClass = () => {
  const userRole = useUserRole();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    reset();

    fetch("http://localhost:4000/classes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        Swal.fire("Class Add Success!", "Go Back", "success");
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <section className="w-[95%] md:w-[80%] border-2 p-2 md:p-8 mx-auto mt-16 mb-16">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <label htmlFor="">
            Class name <br />
            <input
              type="text"
              className="bg-[#f9f9f9b6] w-full p-3 mt-1 mb-4"
              placeholder="Enter Your Classname"
              {...register("name", { required: true })}
            />
          </label>

          <label htmlFor="">
            Class Image <br />
            <input
              className="bg-[#f9f9f9b6] w-full p-3 mt-1 mb-4"
              placeholder="Enter Class image Url"
              {...register("image", { required: true })}
            />
          </label>

          <label htmlFor="">
            Instructor name <br />
            <input
              defaultValue={userRole?.data?.name}
              className="bg-[#f9f9f9b6] w-full p-3 mt-1 mb-4"
              placeholder="Enter Instractor name"
              {...register("instructorName", { required: true })}
              readOnly
            />
          </label>

          <label htmlFor="">
            Instructor email <br />
            <input
              defaultValue={userRole?.data?.email}
              className="bg-[#f9f9f9b6] w-full p-3 mt-1 mb-4"
              placeholder="Enter Instractor email"
              {...register("email", { required: true })}
              readOnly
            />
          </label>

          <label htmlFor="">
            Available seats <br />
            <input
              type="number"
              className="bg-[#f9f9f9b6] w-full p-3 mt-1 mb-4"
              placeholder="Enter Abalable Seat"
              {...register("availableSeats", { required: true })}
            />
          </label>

          <label htmlFor="">
            Price <br />
            <input
              type="number"
              className="bg-[#f9f9f9b6] w-full p-3 mt-1 mb-4"
              placeholder="Enter Class Prise"
              {...register("price", { required: true })}
            />
          </label>

          <label htmlFor="">
            Enroll Student <br />
            <input
              type="number"
              defaultValue="0"
              className="bg-[#f9f9f9b6] w-full p-3 mt-1 mb-4"
              placeholder="Enter Enroll Student"
              {...register("enrollStudents", { required: true })}
            />
          </label>

          <label className="hidden" htmlFor="">
            Status <br />
            <input
              defaultValue="pending"
              className="bg-[#f9f9f9b6] w-full p-3 mt-1 mb-4"
              placeholder="Enter Status"
              {...register("status", { required: true })}
            />
          </label>
        </div>

        {errors.exampleRequired && <span>This field is required</span>}

        <input className="bg_secondary w-full p-3 mt-6" type="submit" />
      </form>
    </section>
  );
};

export default AddClass;
