import BuildIcon from '@mui/icons-material/Build';
import InfoIcon from '@mui/icons-material/Info';
import { Grid, InputAdornment, TextField, Typography, Button,Popover } from "@mui/material";
import { Box } from "@mui/system";
import { Field } from "react-final-form";
import { useState } from "react";




interface IField {
    name: string;
    label: string;
    helpText?: string;
    longText: string;
    unitChar?: string;
    xs?: number;
    sm?: number;
    md?: number;
    max?: number;
    min?: number;
    type: 'int' | 'float';
    children?: React.ReactNode
}



const NumberField = ({ name, label, helpText, children, unitChar, type, longText, max, min, xs = 6, sm = 4, md = 5 }: IField) => {
    const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };


    const handleOverrideClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setOverrideVisible(!overrideVisible);
    };



    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;


    const [overrideVisible, setOverrideVisible] = useState(false)


    const inputProps: any = {
        min: 0
    }
    if (min) {
        inputProps.min = min;
    }
    if (max) {
        inputProps.max = max;
    }
    return <Grid item xs={xs} sm={sm} md={md}> 
         <Grid item xs={8} sm={8} md={8}>
         
        <Field name={`${name}`}
            parse={(value, name) => {
                //console.log("parse", value, name)
                if (!isNaN(value) && value !== null)
                    return parseInt(value);
                else return 0
            }}
            format={(value, name) => {
                // console.log("format", value, name)
                if (!isNaN(value) && value !== null)
                    return parseInt(value);
                else return 0
            }}>

            {({ input, meta }) => (
            <Box>
                <TextField
                    {...input}
                    type="number"
                    label={label}
                    fullWidth
                    required
                    size="small"
                    variant="filled"
                    InputProps={{ inputProps, endAdornment: (unitChar && <InputAdornment position="end">{unitChar}</InputAdornment>), }}
                    error={meta.error && meta.touched}
                    helperText={meta.error && meta.touched ? meta.error : helpText}
                >
                </TextField>
            </Box>)}
        </Field>

        </Grid>
        <Grid item xs={1} sm={1} md={1}>
                <Typography textAlign="right">
                    {children && <Button sx={{ minHeight: 0, minWidth: 0, padding: 0 }} aria-describedby={id} onClick={handleOverrideClick}>
                        <BuildIcon />
                    </Button>}
                    {longText !== undefined && <><Button sx={{ minHeight: 0, minWidth: 0, padding: 0 }} aria-describedby={id} onClick={handleClick}>
                        <InfoIcon />
                    </Button>


                        <Popover
                            id={id}
                            open={open}
                            anchorEl={anchorEl}
                            onClose={handleClose}
                            anchorOrigin={{
                                vertical: 'center',
                                horizontal: 'left',
                            }}
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                        >
                            <Typography sx={{ p: 2 }}>{longText}</Typography>
                        </Popover></>}
                </Typography>


            </Grid>
    </Grid>

}




export default NumberField;