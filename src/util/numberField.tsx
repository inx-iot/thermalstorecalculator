import { Grid, TextField } from "@mui/material";
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
    type: 'int' | 'float';
    children?: React.ReactNode
}


const NumberField = ({ name, label, helpText, children, type, xs = 12, sm = 6, md = 6 }: IField) => {


    return <Grid item xs={xs} sm={sm} md={md}>
        <Field name={name}
            parse={(value, name) => {
                //  console.log("parse", value, name)
                if (!isNaN(value))
                    return parseInt(value);
            }}
            format={(value, name) => {
                //  console.log("format", value, name)
                if (!isNaN(value))
                    return parseInt(value);
            }}>

            {({ input, meta }) => (<>
                <TextField
                    {...input}
                    type="number"
                    label={label}
                    fullWidth
                    required
                    InputProps={{ inputProps: { min: 0 } }}
                    variant="standard"
                    error={meta.error && meta.touched}
                    helperText={meta.error && meta.touched ? meta.error : helpText}
                >
                </TextField>
                {children && <Box
                    m={1}
                    //margin
                    display="flex"
                    justifyContent="flex-end"
                    alignItems="flex-end"

                >
                    {children}
                </Box>}

            </>)}
        </Field>
    </Grid>

}




export default NumberField;