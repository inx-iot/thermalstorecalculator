import { Grid, InputAdornment, TextField } from "@mui/material";
import { Box } from "@mui/system";
import { Field } from "react-final-form";





interface IField {
    name: string;
    label: string;
    helpText: string;
    longText: string;
    xs?: number;
    sm?: number;
    md?: number;
    max?: number;
    type: 'int' | 'float';
    children?: React.ReactNode
}


const NumberField = ({ name, label, helpText, children, type, max, xs = 12, sm = 6, md = 6 }: IField) => {



    const inputProps: any = {
        min: 1
    }
    if (max) {
        inputProps.max = max;
    }
    return <Grid item xs={xs} sm={sm} md={md}>
        <Field name={`${name}`}
            parse={(value, name) => {
                //console.log("parse", value, name)
                if (!isNaN(value) && value !== null)
                    return parseInt(value);
                else return ''
            }}
            format={(value, name) => {
                // console.log("format", value, name)
                if (!isNaN(value) && value !== null)
                    return parseInt(value);
                else return ''
            }}>

            {({ input, meta }) => (<Box>
                <TextField
                    {...input}
                    type="number"
                    label={label}
                    fullWidth
                    required
                    InputProps={{ inputProps, endAdornment: (children && <InputAdornment position="end">{children}</InputAdornment>), }}
                    variant="standard"
                    error={meta.error && meta.touched}
                    helperText={meta.error && meta.touched ? meta.error : helpText}

                >
                </TextField>


            </Box>)}
        </Field>
    </Grid>

}




export default NumberField;