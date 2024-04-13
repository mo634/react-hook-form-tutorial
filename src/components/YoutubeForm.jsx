import React from "react";
import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
const YoutubeForm = () => {
  //states 

  const form = useForm()

  // const { name, onChange, onBlur, ref } = form.register()

  const { control ,handleSubmit} =form

  // functions to process the form
  const onSubmit = (data) => {
    console.log("data of form " , data)
    console.log("username " , data.username)
    console.log("email " , data.email)
    console.log("password " , data.password)
  }

  return (
    <div className="form-box">

      <form className="form" onSubmit={handleSubmit(onSubmit)}>
        <h1 className="title">Sign up</h1>

        <div className="form-container">

          {/* <input type="text" className="input" placeholder="Full Name" 
          name={name}
          onChange={onChange}
          onBlur={onBlur}
          ref={ref}
          /> */}
          {/* simpler way to do it */}
          <input type="text" className="input" placeholder="Full Name"
            {...form.register("username")}
          />
          <input type="email" className="input" placeholder="Email" 
          {...form.register("email")}
          />

          <input type="password" className="input" placeholder="Password" 
          {...form.register("password")}
          />
        </div>

        <button>Sign up</button>
      </form>
          <DevTool control={control}/>
    </div>

  );
};

export default YoutubeForm;
