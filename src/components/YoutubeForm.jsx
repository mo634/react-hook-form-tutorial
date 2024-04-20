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

      {/* no validate to enable your custom validate */}

      <form className="form" onSubmit={handleSubmit(onSubmit)} noValidate> 

        <h1 className="title">Sign up</h1>

        <div className="form-container">

          <input type="text" className="input" placeholder="Full Name"
            {...form.register("username",{
              
              // required:{
              //   value:true,
              //   message:"Please enter your name"
              // }
              // simpler way 
              required:"Please enter your name"
            })}
          />

          <input type="email" className="input" placeholder="Email" 
          {...form.register("email",{
            pattern:{
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
              message:"Invalid email address"
            }
          })}
          />

          <input type="password" className="input" placeholder="Password" 
          {...form.register("password",{
            minLength:8,
            maxLength:16
          })}
          />
        </div>

        <button>Sign up</button>
      </form>
          <DevTool control={control}/>
    </div>

  );
};

export default YoutubeForm;
