import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
const YoutubeForm = () => {
  //states 

  // ************modes ******************
  //1. onChange => validate the fields  while typing 
  //2. onBlur => validate the fields  when field is blured 
  //3. onSubmit => validate the fields  when form is submitted "Default"
  //4. onTouched => validate the fields  when field is touched 
  //5. all => validate input field on both "change and bluer"
  const form = useForm({
    defaultValues: {
      username: "",
      email: "mmm@gmail.com",
      password: 123456
    },
    mode: "onChange"
  })

  // dirty : field is modified 
  // touched : field is touched

  const { errors } = form.formState




  const { control, handleSubmit, watch, setValue } = form

  // ***********************to watch all values ***********************
  // const formData   = watch() 

  // to watch specific field 
  // const uername = watch("username")

  // watch specific fields
  const { username, email, password } = watch()

  // functions to process the form
  const onSubmit = (data) => {
    console.log(data)
  }



  const handleReset = () => {
    // reset all only one value

    // setValue("username","" ,{
    //   // to reflect with  dev tool
    //   shouldDirty: true,
    //   shouldTouch: true,
    //   shouldValidate: true
    // })


    // another way to reset "better to user "

    // reset  value 
    // form.reset({username: "",})

    // reset all values 
    form.reset()

  }

  const onError = (errors) => {
    console.log(errors)
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

      {/* handleSubmit : accept two funcs , "logic func  and Error func" */}
      <form className="form" onSubmit={handleSubmit(onSubmit, onError)} noValidate>

        <h1 className="title">Sign up</h1>

        <div className="form-container">

          <input type="text" className="input" placeholder="Full Name"
            value={username}
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

            value={email}
            {...form.register("email", {
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

        <button
          onClick={handleReset}
        >Reset</button>
      </form>

      <DevTool control={control} />

    </div>

  );
};

export default YoutubeForm;
