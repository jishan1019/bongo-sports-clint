import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const Regestation = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    reset();
  };

  return (
    <section className="mb-16 w-full flex justify-center items-center md:flex-row flex-col-reverse space-x-4 space-y-4 p-4">
      <div className="w-full md:w-1/2 ">
        <img
          src="https://img.freepik.com/premium-vector/online-registration-sign-up-with-man-sitting-near-smartphone_268404-95.jpg"
          alt=""
        />
      </div>

      <div className="w-full h-full md:w-1/2 border-[1px] pl-6 pr-6 pt-10 pb-6 shadow-sm ">
        <h3 className="p-2  bg-green-500 text-center w-40 text-white rounded-md">
          DIDN'T ACCOUNT
        </h3>
        <h3 className="mt-4 font-semibold text-xl">Regestation</h3>

        <div className="mt-8">
          <form onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor="">
              Useremail <br />
              <input
                className="bg-[#f9f9f9b6] w-full p-3 mt-1 mb-4"
                placeholder="Enter Your email"
                {...register("email", { required: true })}
              />
            </label>

            <label htmlFor="">
              Password <br />
              <input
                className="bg-[#F9F9F9] w-full p-3 mt-1 mb-4"
                placeholder="Enter Your Password"
                {...register("password", { required: true })}
              />
            </label>

            <label htmlFor="">
              Confirm Password <br />
              <input
                className="bg-[#F9F9F9] w-full p-3 mt-1 mb-4"
                placeholder="Enter Your Confirm Password"
                {...register("password2", { required: true })}
              />
            </label>

            <label htmlFor="">
              Photo Url <br />
              <input
                className="bg-[#F9F9F9] w-full p-3 mt-1 mb-4"
                placeholder="Enter Your Photo Url"
                {...register("photo_url", { required: true })}
              />
            </label>

            {errors.exampleRequired && <span>This field is required</span>}

            <p>
              Alrady have account
              <Link to="/login">
                <span className="underline"> Login now!</span>
              </Link>
            </p>

            <input
              className="bg-green-500 w-full p-3 mt-6"
              type="submit"
              value="Regestation"
            />
          </form>

          <div className="divider">OR</div>

          <button className="btn btn-outline btn-success w-full">
            Sign in with
            <img
              className="h-6"
              src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-google-logos-vector-eps-cdr-svg-download-10.png"
              alt=""
            />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Regestation;
