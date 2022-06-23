import { Grid, TextField } from "@mui/material";
import { Field } from "react-final-form";
import { formParseFloat, formParseInt } from "../util/formParse";





interface IField {
    name: string;
    label: string;
    helpText: string;
    longText: string;
    type: 'int' | 'float';
}


const NumberField = ({ name, label, helpText, type }: IField) => {


    if (type === 'float') {
        return <Grid item xs={12} sm={6} md={6}>
            <Field name={name}
                parse={formParseFloat}
                format={formParseFloat}>

                {({ input, meta }) => (
                    <TextField
                        {...input}
                        type="number"
                        label={label}
                        fullWidth
                        required
                        InputProps={{ inputProps: { min: 0 } }}
                        variant="outlined"
                        error={meta.error && meta.touched}
                        helperText={meta.error && meta.touched ? meta.error : helpText}
                    >
                    </TextField>
                )}
            </Field>
        </Grid>

    } else {
        return <Grid item xs={12} sm={6} md={6}>
            <Field name={name}
                parse={formParseInt}
                format={formParseInt}>

                {({ input, meta }) => (
                    <TextField
                        {...input}
                        type="number"
                        label={label}
                        fullWidth
                        required
                        InputProps={{ inputProps: { min: 0 } }}
                        variant="outlined"
                        error={meta.error && meta.touched}
                        helperText={meta.error && meta.touched ? meta.error : helpText}
                    >
                    </TextField>
                )}
            </Field>
        </Grid>
    }
}




export default NumberField;