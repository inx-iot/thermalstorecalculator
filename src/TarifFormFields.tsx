import { Divider, Grid, TextField, Typography } from "@mui/material";
import { Field, FormSpy } from "react-final-form";
import { IThermalForm } from "./interfaces/thermal";
import { formParseFloat, formParseInt } from "./util/formParse";




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



const TariffFormFields = () => {
    return <FormSpy <IThermalForm>
        subscription={{
            values: true,
            dirtySinceLastSubmit: true,
            submitting: true,
        }}
    >
        {({ values, dirtySinceLastSubmit, submitting }) => (<div>
            <Grid container spacing={3} justifyContent="center">
                <Grid item xs={12}>
                    <Typography component="h2" variant="h5">
                        Tariff Costs
                    </Typography>
                    <Divider />
                </Grid>
            </Grid>

            <Grid
                container
                spacing={3}
                justifyContent="left"
                style={{ marginTop: "15px" }}
            >
                <NumberField name="standardRateEnergyCost" label="Standard Rate Energy cost" longText="" helpText='"(penc/hWh)"' type="int" />
                <Grid item xs={12} sm={6} md={6}>
                    <Field name="standardRateEnergyCost"
                        parse={formParseInt}
                        format={formParseInt}>

                        {({ input, meta }) => (
                            <TextField
                                {...input}
                                type="number"
                                label="Standard Rate Energy cost"
                                fullWidth
                                required
                                InputProps={{ inputProps: { min: 0 } }}
                                variant="outlined"
                                error={meta.error && meta.touched}
                                helperText={meta.error && meta.touched ? meta.error : "(penc/hWh)"}
                            >
                            </TextField>
                        )}
                    </Field>

                </Grid>





                <Grid item xs={12} sm={6} md={6}>
                    <Field name="lowRateEnergyCost"
                        parse={formParseInt}
                        format={formParseInt}>

                        {({ input, meta }) => (
                            <TextField
                                {...input}
                                type="number"
                                label="ToU Low rate cost (pence)"
                                fullWidth
                                required
                                InputProps={{ inputProps: { min: 0 } }}
                                variant="outlined"
                                error={meta.error && meta.touched}
                                helperText={meta.error && meta.touched ? meta.error : "(penc/hWh)"}
                            >
                            </TextField>
                        )}
                    </Field>
                </Grid>



                <Grid item xs={12} sm={6} md={6}>
                    <Field name="highRateEnergyCost"
                        parse={formParseInt}
                        format={formParseInt}>

                        {({ input, meta }) => (
                            <TextField
                                {...input}
                                type="number"
                                label="ToU High rate cost (pence)"
                                fullWidth
                                required
                                InputProps={{ inputProps: { min: 0 } }}
                                variant="outlined"
                                error={meta.error && meta.touched}
                                helperText={meta.error && meta.touched ? meta.error : "(penc/hWh)"}
                            >
                            </TextField>
                        )}
                    </Field>
                </Grid>



            </Grid>
        </div>)
        }
    </FormSpy >
}


export default TariffFormFields;