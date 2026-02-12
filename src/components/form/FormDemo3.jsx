import React from 'react'
import { useForm } from 'react-hook-form'

export const FormDemo3 = () => {
    const { register, handleSubmit, formState: { errors } } = useForm()

    console.log("errors...", errors)

    const validationSchema = {

        ageValidator: {
            required: {
                value: true,
                message: "Age is Required*"
            },
            min: {
                value: 18,
                message: "min age should be 18*"
            },
            max: {
                value: 60,
                message: "max age should be 60*"
            }
        },

        addressValidator: {
            required: {
                value: true,
                message: "address is required*"
            },
            minLength: {
                value: 5,
                message: "min 5 char is required"
            },
            maxLength: {
                value: 20,
                message: "max 20 char is accepted****"
            }
        },

        emailValidator: {
            required: {
                value: true,
                message: "Email is required*"
            },
            pattern: {
                message: "Enter valid email address*"
            }
        },

        passwordValidator: {
            required: {
                value: true,
                message: "Password is required*"
            },
            minLength: {
                value: 6,
                message: "Minimum 6 characters required*"
            },
            maxLength: {
                value: 12,
                message: "Maximum 12 characters allowed*"
            }
        }
    }

    const submitHandler = (data) => {
        alert("form submitted...")
        console.log(data)
    }

    return (
        <div style={{ textAlign: "center" }}>
            <h1>FormDemo3</h1>

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
                    <label>Address: </label>
                    <input type='text' {...register("add", validationSchema.addressValidator)}></input>
                    {errors.add?.message}
                </div>

                <div>
                    <label>Email: </label>
                    <input type='email'{...register("email", validationSchema.emailValidator)} />
                    {errors.email?.message}
                </div>

                <div>
                    <label>Password: </label>
                    <input type='password' {...register("password", validationSchema.passwordValidator)} />
                    {errors.password?.message}
                </div>

                <div>
                    <input type='submit' />
                </div>

            </form>
        </div>
    )
}
