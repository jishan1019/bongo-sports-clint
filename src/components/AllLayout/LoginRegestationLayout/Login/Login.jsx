import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaEye } from "react-icons/fa";
import { AuthContext } from "../../../SecurityLayout/AuthProvider/AuthProvider";
import Swal from "sweetalert2";
import Loader from "../../ShareLayout/Loader/Loader";

const Login = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isLoading, setisLoading] = useState(false);
  const { signIn, googleSignIn } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const form = location?.state?.from?.pathname || "/";

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    reset();
    setisLoading(true);
    const email = data?.email;
    const password = data?.password;
    signIn(email, password)
      .then((result) => {
        const user = result.user;
        setisLoading(false);
        Swal.fire("Login Success!", "Go Back", "success");
        navigate(form, { replace: true });
      })
      .catch((err) => {
        console.log(err);
        setisLoading(false);
      });
  };

  const handelGoogleSignin = () => {
    setisLoading(true);
    googleSignIn().then((result) => {
      const user = result.user;
      const saveUser = {
        name: user?.displayName,
        email: user?.email,
        role: "student",
        image: user?.photoURL,
      };

      fetch("https://bongo-sports-acadamy-server.vercel.app/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(saveUser),
      })
        .then((res) => res.json())
        .then((result) => {
          console.log(result);
          setisLoading(false);
        })
        .catch((error) => {
          console.error("Error:", error);
          setisLoading(false);
        });

      if (user) {
        Swal.fire("Registration Success!", "Go Back", "success");
        navigate("/");
        setisLoading(false);
      }
    });
  };

  if (isLoading) {
    return <Loader />;
  }

  return (
    <section className="mb-16 w-full flex justify-center items-center md:flex-row flex-col-reverse space-x-4 space-y-4 p-4">
      <div className="w-full h-full md:w-1/2 border-[1px] pl-6 pr-6 pt-10 mt-8 pb-16 shadow-sm ">
        <h3 className="p-2  bg_secondary w-40 text-white rounded-md">
          ALRADY A MEMBER
        </h3>
        <h3 className="mt-4 font-semibold text-xl">Log In</h3>

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

            {errors.exampleRequired && <span>This field is required</span>}

            <p>
              Didn't have account{" "}
              <Link to="/regestation">
                <span className="underline">Create now!</span>
              </Link>
            </p>

            <input className="bg_secondary w-full p-3 mt-6" type="submit" />
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

      <div className="w-full md:w-1/2 ">
        <img
          src="https://img.freepik.com/premium-vector/online-registration-sign-up-with-man-sitting-near-smartphone_268404-95.jpg"
          alt=""
        />
      </div>
    </section>
  );
};

export default Login;
