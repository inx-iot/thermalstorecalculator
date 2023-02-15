import createDecorator from "final-form-calculate";
import React from "react";
import { Form, Field } from "react-final-form";

type nameProps = {
    values: any;
}

const onSubmit = (values: any) => {
    console.log("On submit");
    console.log(values);
};
const BasicForm: React.FunctionComponent<nameProps> = ({ values }) => {


    return (
        <>
            <div>
                <label>First Name</label>
                <Field
                    name="firstName"
                    component="input"
                    type="text"
                    placeholder="First Name"
                >
                    {({ input, meta }) => {
                        return (
                            <input
                                {...input}
                            />
                        );
                    }}
                </Field>
            </div>
            <div>
                <label>Last Name</label>
                <Field
                    name="lastName"
                    component="input"
                    type="text"
                    placeholder="Last Name"
                >
                    {({ input, meta }) => {
                        return (
                            <input
                                {...input}
                            />
                        );
                    }}
                </Field>
            </div>
            <div>
                <label>Full Name</label>
                <Field
                    name="fullName"
                    type="text"
                    placeholder="Full Name"
                >
                    {({ input, meta }) => {
                        return (
                            <input
                                {...input}
                            />
                        );
                    }}
                </Field>
            </div>
        </>
    );
};

const Fullname = () => {
    return (
        <Form
            onSubmit={values => {
                console.log("onSubmit", values)
            }}
            decorators={[
                createDecorator(
                    {
                        field: /(.*?)/,  // when the value of foo changes...

                        updates: (value, firstName, lastName, allValues: any) => {

                            value.fullname = (firstName + lastName)
                            // value.fullname = (value.firstName + " " + value.lastName)
                            console.log(value.fullname)
                            return {

                                // "fullName": value.fullname

                            }


                        }
                    })
            ]}
            render={({ form, handleSubmit, values }) => {
                return (
                    <form onSubmit={handleSubmit}>
                        <BasicForm
                            values={values}
                        />
                    </form>
                );
            }}

        />
    );
};

export default Fullname;
