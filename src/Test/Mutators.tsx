import React, { useState } from "react";
import { Field, Form, FormSpy } from "react-final-form";

type MutatorProps = {
    values: any;
}

const onSubmit = (values: any) => {
    console.log("On submit");
    console.log(values);
};
const BasicForm: React.FunctionComponent<MutatorProps> = ({ values }) => {

    const [showInputfield, setShowInputfield] = useState(false);

    return (
        <>
            <FormSpy
                subscription={{
                    values: true,
                    dirtySinceLastSubmit: true,
                    submitting: true,
                }}
            >
                {({ values, form }) => <>

                    <>
                        <Field
                            name="firstName"
                            component="input"
                            type="radio"
                        >
                            {({ input, meta, name }) => {
                                return (
                                    <input
                                        {...input}
                                        onChange={(e) => {
                                            setShowInputfield(!showInputfield)

                                        }}
                                    />
                                );
                            }}
                        </Field>
                        <label>Please enter value here: </label>
                    </>
                    <>
                        {showInputfield && <Field
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
                        </Field>}
                    </><br />
                </>}
            </FormSpy>

        </>
    );
};

const Mutators = () => {
    return (
        <Form
            onSubmit={onSubmit}
            mutators={{
                setFormAttribute: (args, state, { changeValue }) => {
                    // args[0] is the key and args[1] is value in state
                    changeValue(state, args[0], () => args[1]);
                    console.log("form", args, state)
                    //changeValue(state, args[0], () => args[1]);
                }
            }}
            render={({ form, handleSubmit, values }) => {
                return (
                    <form onSubmit={handleSubmit}>
                        <BasicForm values={values} />
                        <BasicForm values={values} />
                        <BasicForm values={values} />

                    </form>
                );
            }}
        />
    );
};

export default Mutators;
