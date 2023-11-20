import React from 'react'
import ButtonComponent from '../Components/Buttons/Button';
import { Formik, Form, Field } from 'formik';

export default function Contact() {
    // const [formData, setFromData] = React.useState({
    //     firstName: "",
    //     lastName: "",
    //     dob: "",
    //     gender: "",
    //     ratings: 0
    // });

    // function handleInputchange(e) {
    //     let formDataCopy = {
    //         ...formData
    //     };
    //     if(e.target.type === "radio"){
    //         formDataCopy[e.target.name] = e.target.id;
    //     }else{
    //         formDataCopy[e.target.id] = e.target.value;
    //     }
    //     setFromData(formDataCopy);

    // }

    // function submit() {
    // //    console.log(formData);
    // }

    return (
        <div>
            <Formik initialValues={{
                        firstName: "",
                        lastName: "",
                        dob: "",
                        gender: "",
                        ratings: 0
            }}
            validate={values => {
                const errors = {};
                if (!values.firstName) {
                  errors.firstName = 'Required';
                } 
                else if (!values.lastName) {
                    errors.lastName = 'Required';
                }
                else if (!values.dob) {
                    errors.dob = 'Required';
                }
                else if (!values.gender) {
                    errors.gender = 'Required';
                }
                else if (!values.ratings) {
                    errors.ratings = 'Required';
                }
                return errors;
            }}
                onSubmit={(values, { setSubmitting }) => {
                    alert(JSON.stringify(values, null, 2));
                    setSubmitting(false);
                  }}
            >
                {({ onSubmitting, values, handleChange, handleBlur, errors, isSubmitting }) => (

                
                                <Form>
                                <div>
                                    <input id="firstName"
                                        name="firstName"
                                        placeholder='Enter your First Name'
                                        value={values.firstName}
                                        onBlur={handleBlur}
                                        onChange={handleChange} />
                                </div>
                                <p>{errors.firstName}</p>
                                <div>
                                    <input id="lastName"
                                        name="lastName"
                                        placeholder='Enter your Last Name'
                                        value={values.lastName}
                                        onBlur={handleBlur}
                                        onChange={handleChange} />
                                </div>
                                <p>{errors.lastName}</p>
                                <div>
                                    <input id="dob"
                                        name="dob"
                                        type='date'
                                        value={values.dob}
                                        onBlur={handleBlur}
                                        onChange={handleChange} />
                                </div>
                                <p>{errors.dob}</p>
                                <div role="group" aria-labelledby="my-radio-group">
                                    <label>
                                        <Field type="radio" name="gender" value="male" />
                                        Male
                                    </label>
                                    <label>
                                        <Field type="radio" name="gender" value="female" />
                                        Female
                                    </label>
                                    <div>Picked: {values.gender}</div>
                                </div>
                                <p>{errors.gender}</p>
                                <div>
                                    <input type="range" name='ratings' min={1} max={5} onChange={handleChange} onBlur={handleBlur}/>
                                    <p>The selected range is:{values.ratings}</p>
                                </div>
                                <p>{errors.ratings}</p>
                                <ButtonComponent label="submit" disabled={isSubmitting}/>
                                {/* <button type='submit' disabled={isSubmitting}>
                                    Submit
                                </button> */}
                            </Form>)}

            </Formik>

        </div>
  
    )
}