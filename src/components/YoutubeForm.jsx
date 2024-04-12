import React from "react";
import { useForm } from "react-hook-form";
const YoutubeForm = () => {
  //states 

  const form = useForm()

  const { name, onChange, onBlur, ref } = form.register()
  return (
    <div className="form-box">

      <form className="form">
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

    </div>

  );
};

export default YoutubeForm;
