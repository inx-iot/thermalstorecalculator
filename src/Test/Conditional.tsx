import React from 'react'
import { render } from 'react-dom'
import { Form, Field } from 'react-final-form'


interface condition {
    when: any;
    is: any;
    children: any;
}

const Condition: React.FC<condition> = ({ when, is, children }) => (
    <Field name={when} subscription={{ value: true }}>
        {({ input: { value } }) => (value === is ? children : null)}
    </Field>
)

const Conditional = () => (
    <Form
        onSubmit={(values: any) => {
            console.log("onSubmit", values)
            //   if (!response.data) return response;
        }}
        initialValues={{ employed: true, stooge: 'larry' }}
    >
        {({ handleSubmit, form, submitting, pristine, values }) => (
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Transport</label>
                    <div>
                        <label>
                            <Field
                                name="reception"
                                component="input"
                                type="radio"
                                value="delivery"
                            />{' '}
                            Delivery
                        </label>
                        <label>
                            <Field
                                name="reception"
                                component="input"
                                type="radio"
                                value="pickup"
                            />{' '}
                            Pickup
                        </label>
                    </div>
                </div>
                <Condition when="reception" is="delivery">
                    <div>
                        <label>Street</label>
                        <Field
                            name="street"
                            component="input"
                            type="text"
                            placeholder="Street Address"
                        />
                    </div>
                </Condition>
                <Condition when="reception" is="pickup">
                    <div>
                        <label>Pickup Time</label>
                        <Field name="pickupTime" component="select">


                        </Field>
                    </div>
                </Condition>
                <pre>{JSON.stringify(values)}</pre>
            </form>
        )}
    </Form>
)

export default Conditional;
