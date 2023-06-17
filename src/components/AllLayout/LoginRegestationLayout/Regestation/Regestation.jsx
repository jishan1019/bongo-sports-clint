import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { FaEye } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../SecurityLayout/AuthProvider/AuthProvider";
import { useContext } from "react";
import Swal from "sweetalert2";

const Regestation = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [passError, setPassError] = useState("");
  const { createUser, updateUserProfile, googleSignIn } =
    useContext(AuthContext);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);

    if (data?.password !== data.password2) {
      return setPassError("Password Error! Password are not same.");
    }

    createUser(data?.email, data?.password)
      .then((result) => {
        const user = result.user;

        const saveUser = {
          name: data?.name,
          email: data?.email,
          role: data?.role,
          image: data?.photoURL,
        };

        fetch("http://localhost:4000/users", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(saveUser),
        })
          .then((res) => res.json())
          .then((result) => {
            console.log(result);
          })
          .catch((error) => {
            console.error("Error:", error);
          });

        updateUserProfile(data.name, data.photoURL)
          .then(() => {
            reset();
            Swal.fire("Regestation Success!", "Go Back", "success");
            navigate("/");
          })
          .catch((error) => console.log(error));
      })
      .catch((error) => {
        Swal.fire("Regestation Fail!", `${error}`, "info");
      });
  };

  const handelGoogleSignin = () => {
    googleSignIn().then((result) => {
      const user = result.user;

      const saveUser = {
        name: user?.displayName,
        email: user?.email,
        role: "student",
        image: user?.photoURL,
      };

      fetch("http://localhost:4000/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(saveUser),
      })
        .then((res) => res.json())
        .then((result) => {})
        .catch((error) => {
          console.error("Error:", error);
        });

      if (user) {
        Swal.fire("Registration Success!", "Go Back", "success");
        navigate("/");
      }
    });
  };

  return (
    <section className="mb-16 w-full flex justify-center items-center md:flex-row flex-col space-x-4 space-y-4 p-4">
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
              Username <br />
              <input
                className="bg-[#f9f9f9b6] w-full p-3 mt-1 mb-4"
                placeholder="Enter Your name"
                {...register("name", { required: true })}
              />
            </label>
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
              <div className="flex justify-center items-center relative ">
                <input
                  type={isVisible ? "text" : "password"}
                  className="bg-[#F9F9F9] w-full p-3 mt-1 mb-4"
                  placeholder="Enter Your Password"
                  {...register("password", {
                    required: true,
                    minLength: {
                      value: 6,
                      message: "Password must be at least 6 characters long",
                    },
                    pattern: {
                      value: /^(?=.*[A-Z])(?=.*[!@#$%^&*])/,
                      message:
                        "Password must contain at least one uppercase letter and one special character",
                    },
                  })}
                />
                <FaEye
                  onClick={() => setIsVisible(!isVisible)}
                  className="absolute right-0 mb-2 mr-4 text-xl"
                />
              </div>
              {errors.password && <span>{errors.password.message}</span>}
            </label>
            <label htmlFor="">
              Confirm Password <br />
              <div className="flex justify-center items-center relative ">
                <input
                  type={isVisible ? "text" : "password"}
                  className="bg-[#F9F9F9] w-full p-3 mt-1 mb-4"
                  placeholder="Enter Your confirm Password"
                  {...register("password2", {
                    required: true,
                    minLength: {
                      value: 6,
                      message: "Password must be at least 6 characters long",
                    },
                    pattern: {
                      value: /^(?=.*[A-Z])(?=.*[!@#$%^&*])/,
                      message:
                        "Password must contain at least one uppercase letter and one special character",
                    },
                  })}
                />
                <FaEye
                  onClick={() => setIsVisible(!isVisible)}
                  className="absolute right-0 mb-2 mr-4 text-xl"
                />
              </div>
              {errors.password2 && <span>{errors.password2.message}</span>}
            </label>
            {passError && (
              <span className="text-red-600 underline">
                {passError} <br /> <br />
              </span>
            )}
            <label htmlFor="">
              Photo Url <br />
              <input
                className="bg-[#F9F9F9] w-full p-3 mt-1 mb-4"
                placeholder="Enter Your Photo Url"
                {...register("photoURL", { required: true })}
              />
            </label>

            <label className="hidden" htmlFor="">
              Photo Url <br />
              <input
                className="bg-[#F9F9F9] w-full p-3 mt-1 mb-4"
                placeholder="Role"
                defaultValue="student"
                {...register("role", { required: true })}
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

          <button
            onClick={handelGoogleSignin}
            className="btn btn-outline btn-success w-full"
          >
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
