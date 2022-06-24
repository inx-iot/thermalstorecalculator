import InfoIcon from '@mui/icons-material/Info';
import { Button, Grid, Popover, Typography } from "@mui/material";
import { useState } from "react";
interface IThing {
    textA: string;
    value: number | undefined;
    textB: string;
    valueDecimalPlace?: number
    preValue?: string;
    description?: string;
}

const InfoThing = ({ textA, value, textB, preValue, description, valueDecimalPlace = 2 }: IThing) => {
    const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };




    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;



    return <Grid item xs={12} sm={6} md={6}>

        <Grid
            container
            spacing={2}

        >

            <Grid item xs={6} sm={6} md={6}>
                <Typography>
                    {textA}
                </Typography>


            </Grid>

            <Grid item xs={3} sm={3} md={2}>
                <Typography textAlign="right">
                    {preValue && preValue} {value && value.toFixed && value.toFixed(valueDecimalPlace)}
                </Typography>


            </Grid>


            <Grid item xs={3} sm={3} md={4}>

                <Typography textAlign="right">
                    {textB} {description !== undefined && <><Button sx={{ minHeight: 0, minWidth: 0, padding: 0 }} aria-describedby={id} onClick={handleClick}>
                        <InfoIcon />
                    </Button>


                        <Popover
                            id={id}
                            open={open}
                            anchorEl={anchorEl}
                            onClose={handleClose}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                        >
                            <Typography sx={{ p: 2 }}>{description}</Typography>
                        </Popover></>}
                </Typography>


            </Grid>
        </Grid>

    </Grid >
}


export default InfoThing;