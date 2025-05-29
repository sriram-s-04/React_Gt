import React, { useState } from 'react'
import * as yup from "yup"
import {Formik, ErrorMessage} from "formik"


function FormValidation() {
    const [data, setData] = useState({
        userName:"",
        mail:"",
        age:""
    })

    const schema = yup.object().shape({
        userName: yup.string().max(10).required(),
        mail:yup.string().email().required(),
        age: yup.number().integer()
    })

    function handleFrom(d){
        console.log(d);
        

    }

  return (
    <div>FormValidation
        <Formik
        initialValues={data}
        validationSchema={schema}
        enableReinitialize
        onSubmit={(values) => handleFrom(values)}


        >
            {({handleChange, handleSubmit, values}) => (
        <form onSubmit={handleSubmit}>
            <input type='text' name='userName' onChange={handleChange} />
            <ErrorMessage name='userName' />
            <input type='email' name='mail' onChange={handleChange} />
            <ErrorMessage name='mail' />
            <input type='text' name='age' onChange={handleChange} />
            <ErrorMessage name='age' />
            <button >submit</button>
        </form>
        )}
        </Formik>
    </div>
  )
}

export default FormValidation
//npm i formik
//npm i yup