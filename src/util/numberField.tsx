import BuildIcon from '@mui/icons-material/Build';
import InfoIcon from '@mui/icons-material/Info';
import { Button, Grid, InputAdornment, Popover, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { Field } from "react-final-form";




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
    return <Grid item xs={xs} sm={sm} md={md} data-testid="input_container" className='killPadding'>

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

                <TextField
                    {...input}
                    type="number"
                    label={label}
                    fullWidth
                    required
                    size='small'
                    variant="filled"
                    className="textFieldHolderOverride"
                    InputProps={{
                        className: 'textFieldOverride',
                        inputProps, endAdornment: <InputAdornment className="InputAdornment" position="end">

                            {unitChar && unitChar}

                            {children && <Button sx={{ minHeight: 0, minWidth: 0, padding: 0 }} aria-describedby={id} onClick={handleOverrideClick}>
                                <BuildIcon />
                            </Button>}

                            {longText !== undefined && <Button sx={{ minHeight: 0, minWidth: 0, padding: 0 }} aria-describedby={id} onClick={handleClick}>
                                <InfoIcon />
                            </Button>}
                        </InputAdornment>,
                    }}
                    error={meta.error && meta.touched}
                    helperText={meta.error && meta.touched ? meta.error : helpText}
                >
                </TextField>
            )
            }
        </Field>
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
        </Popover>




    </Grid>

}




export default NumberField;