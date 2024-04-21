import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
const YoutubeForm = () => {
  //states 

  const form = useForm({
    defaultValues: {
      username: "mohsen",
      email:"mmm@gmail.com",
      password:123456
    }
  })

  const { errors } = form.formState



  const { control, handleSubmit,watch,getValues } = form

  // ***********************to watch all values ***********************
  // const formData   = watch() 

  // to watch specific field 
  // const uername = watch("username")

  // watch specific fields
  const {username,email,password} = watch()
  
  // functions to process the form
  const onSubmit = (data) => {
    console.log(data)
  }

  // functions to process the click btn 

  // get values cannot trigger change "just when click"
  const handleClick = () => {
    console.log(getValues())
    console.log(username)
  }


  // *********log changes in input field ************
  useEffect(() => {
    const subscribe = watch((data) => {
      console.log(data)
    })

    return () => subscribe.unsubscribe()
  }, [watch])

  return (
    <div className="form-box">
      {/* <h1>{username}</h1> */}


      {/* no validate to enable your custom validate */}

      <form className="form" onSubmit={handleSubmit(onSubmit)} noValidate>

        <h1 className="title">Sign up</h1>

        <div className="form-container">

          <input type="text" className="input" placeholder="Full Name"
          value={username}
            {...form.register("username", {
            value: {},
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
            
            value={email}
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
          value={password}
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


        <button>Sign up</button>

        <button onClick={handleClick}>clicke me </button>
      </form>

      <DevTool control={control} />

    </div>

  );
};

export default YoutubeForm;
