import React from "react";
import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
const YoutubeForm = () => {
  //states 

  const form = useForm({

    // need to initialize an array in form data"phoneNumber"
    defaultValues:{
      phoneNumber:["",""]
    }
  })

  const { errors } = form.formState



  const { control, handleSubmit } = form

  // functions to process the form
  const onSubmit = (data) => {
    console.log(data)
  }

  return (
    <div className="form-box">

      {/* no validate to enable your custom validate */}

      <form className="form" onSubmit={handleSubmit(onSubmit)} noValidate>

        <h1 className="title">Sign up</h1>

        <div className="form-container">

          <input type="text" className="input" placeholder="Full Name"
            {...form.register("username", {
              required: "Please enter your name",

              // add you custom validation 
              validate: {
                // not write mohamded in username field input 

                notMohamed: (value) => value !== "mohamed" || "Mohamed is not allowed",

              }
            })}
          />

          {/* render error if exist for username  */}
          {
            errors.username?.message && <p className="error">{errors.username.message}</p>
          }

          <input type="email" className="input" placeholder="Email"
            {...form.register("email", {
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                message: "Invalid email address"
              },

              // add your custom validation 

              // not write .org domain 
              validate: {
                notOrg: (value) => !value.endsWith(".org") || " org domain not allowed"
              }

            })}
          />

          {
            /* render error if exist for email  */

            errors.email?.message && <p className="error">{errors.email.message}</p>
          }

          <input type="password" className="input" placeholder="Password"
            {...form.register("password", {
              minLength: {
                value: 6,
                message: "Password must be at least 6 characters"
              }
            })}
          />

          {/* render error if exist for password */

            errors.password?.message && <p className="error">{errors.password.message}</p>

          }
        </div>

        {/* add phone number arr field  */}

        <input type="text" className="input" placeholder="phoneNumber"
            {...form.register("phoneNumber.0")}
          />

        <input type="text" className="input" placeholder="Password"
            {...form.register("phoneNumber.1")}
          />
        

        <button>Sign up</button>
      </form>

      <DevTool control={control} />

    </div>

  );
};

export default YoutubeForm;
