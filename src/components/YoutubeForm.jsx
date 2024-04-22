import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
// define schema for validation 

const schema = yup.object({
  // define fields and its validation 
  username: yup.string().required("username is required"),
  email: yup.string().email().required("email is required"),
  password: yup.number().min(6).required("password is required")
}
)
const YoutubeForm = () => {
  //states 

  const form = useForm({
    defaultValues: {
      username: "",
      email: "mmm@gmail.com",
      password: 123456
    },

    // link the schema to the form 
    resolver: yupResolver(schema),

  })


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





  const onError = (errors) => {
    console.log(errors)
  }


  return (
    <div className="form-box">

      {/* handleSubmit : accept two funcs , "logic func  and Error func" */}
      <form className="form" onSubmit={handleSubmit(onSubmit, onError)} noValidate>

        <h1 className="title">Sign up</h1>

        <div className="form-container">

          <input type="text" className="input" placeholder="Full Name"
            value={username}
            {...form.register("username")}
          />

          {/* render error if exist for username  */}
          {
            errors.username?.message && <p className="error">{errors.username.message}</p>
          }

          <input type="email" className="input" placeholder="Email"
            value={email}
            {...form.register("email")}
          />

          {
            /* render error if exist for email  */

            errors.email?.message && <p className="error">{errors.email.message}</p>
          }

          <input type="password" className="input" placeholder="Password"
            value={password}
            {...form.register("password")}
          />

          {/* render error if exist for password */

            errors.password?.message && <p className="error">{errors.password.message}</p>

          }
        </div>


        <button>Sign up</button>
      </form>

      <DevTool control={control} />

    </div>

  );
};

export default YoutubeForm;
