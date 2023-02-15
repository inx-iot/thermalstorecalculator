
import { Grid } from "@mui/material";
import { useState } from "react";
import { Field } from "react-final-form";

interface iTextInput {
    name: string;
    title: string;
}

const RadioInputField = ({ name, title }: iTextInput) => {

    const [showInputfield, setShowInputfield] = useState(false);

    return <Grid item xs={12}>
        <input
            type="radio"
            onChange={(e) => {
                setShowInputfield(!showInputfield)
            }}
        />

        {showInputfield && <Field
            name="numberField"
            type="text"
            component="input"
            title={title}
        >
            {props => (
                <div>
                    <input {...props.input} />
                </div>
            )}

        </Field>}
    </Grid>
}


export default RadioInputField;
