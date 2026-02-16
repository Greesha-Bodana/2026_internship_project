import React from 'react'
import { useForm } from 'react-hook-form'

export const FormDemo4 = () => {

  const { register, handleSubmit, formState: { errors }, watch } = useForm()
  const country = watch("country")

  const validationSchema = {
    ageValidator: {
      required: {
        value: true,
        message: "Age is Required*"
      },
      min: {
        value: 18,
        message: "Min age should be 18*"
      },
      max: {
        value: 60,
        message: "Max age should be 60*"
      }
    },
    countryValidator: {
      required: {
        value: true,
        message: "Country is required*"
      }
    },
    stateValidator: {
      required: {
        value: true,
        message: "State is required*"
      }
    }
  }

  const submitHandler = (data) => {
    alert("Form submitted successfully")
    console.log(data)
  }

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Form Demo 4</h1>
      <form onSubmit={handleSubmit(submitHandler)}>
        <div>
          <label>Name: </label>
          <input type='text' {...register("name", { required: { value: true, message: "Name is required*" } })}></input>
          {errors.name && errors.name.message}
        </div>
        <div>
          <label>Age: </label>
          <input type='text' {...register("age", validationSchema.ageValidator)}></input>
          {errors.age && errors.age.message}
        </div>
      
        <div>
          <label>Country: </label>
          <select {...register("country", validationSchema.countryValidator)}>
            <option value="">-- Select Country --</option>
            <option value="India">India</option>
            <option value="USA">USA</option>
            <option value="Dubai">Dubai</option>
          </select>
          {errors.country && errors.country.message}
        </div>

        <div>
          <label>State: </label>
          <select {...register("state", validationSchema.stateValidator)}>
            <option value="">-- Select State --</option>

            {country === "India" && (
              <>
                <option value="Gujarat">Gujarat</option>
                <option value="Maharashtra">Maharashtra</option>
                <option value="Rajasthan">Rajasthan</option>
              </>
            )}

            {country === "USA" && (
              <>
                <option value="California">California</option>
                <option value="Texas">Texas</option>
                <option value="New York">New York</option>
              </>
            )}

            {country === "Dubai" && (
              <>
                <option value="Deira">Deira</option>
                <option value="Jumeirah">Jumeirah</option>
                <option value="Bur Dubai">Bur Dubai</option>
              </>
            )}
          </select>
          {errors.state && errors.state.message}
        </div>

        <div>
          <input type="submit" />
        </div>

      </form>
    </div>
  )
}
