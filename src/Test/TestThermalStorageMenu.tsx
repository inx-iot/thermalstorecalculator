import { useState } from 'react'
import { Field, FormSpy } from 'react-final-form'
import BasicContainerThing from '../util/basicContainer';

const TestThermalStorageMenu = () => {

    const [radioValue, setRadioValue] = useState(0);

    const onChange = (e: any) => {
        setRadioValue(e.target.value);
    };

    const toggle: any = (radioValue)

    const input1 = (toggle === "3")
    const input2 = (toggle === "4")
    const input3 = (toggle === "2")

    return (

        <FormSpy
            subscription={{
                values: true,
            }}
        >
            {({ values }) => (<BasicContainerThing title="Thermal store parameters:">

                <form >
                    <label>
                        <Field
                            type="radio"
                            component="input"
                            value="1000"
                            name="radioBtn"
                            onChange={onChange}
                        />{" "}
                        Water cylinder based high temperature Thermal Storage (size calculated for you)
                    </label><br />
                    <label>
                        <input
                            type="radio"
                            value="2000"
                            name="radioBtn"
                            onChange={onChange}
                        />{" "}
                        Water cylinder - standard maximum temperature limiter (size is calculated for you)
                    </label><br />



                    <div>
                        <input
                            name="radioBtn"
                            type="radio"
                            value={3}
                            onChange={onChange}

                        />
                        <label>{" "}Please enter the size of your water cylinder (litres) </label>{" "}
                        <>
                            {input1 && <>

                                <Field
                                    name="numberValueInputtedOne"
                                    component="input"
                                    type="text"
                                />
                            </>}
                        </>
                    </div>



                    <div>
                        <input
                            name="radioBtn"
                            type="radio"
                            value={4}
                            onChange={onChange}
                        />
                        <label>{" "}Please enter your thermal storage capacity (kWh)</label>{" "}

                        {input2 && <>

                            <Field
                                name="numberValueInputtedTwo"
                                component="input"
                                type="text"
                            />
                        </>}
                    </div>
                    <pre>{JSON.stringify(values.numberValueInputtedOne)}</pre>
                </form>

            </BasicContainerThing>)
            }
        </FormSpy >)
};


export default TestThermalStorageMenu;