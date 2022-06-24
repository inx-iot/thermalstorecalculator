import InfoIcon from '@mui/icons-material/Info';
import { Box, Button, Grid, Popover, Typography } from "@mui/material";
import { useState } from "react";
interface IThing {
    textA: string;
    value: number;
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

            <Grid item xs={12} sm={12} md={5}>
                <Typography>
                    {textA}
                </Typography>


            </Grid>

            <Grid item xs={12} sm={12} md={3}>
                <Typography>
                    {preValue && preValue} {value && value.toFixed(valueDecimalPlace)}
                </Typography>


            </Grid>


            <Grid item xs={12} sm={12} md={4}>
                <Typography>
                    {textB}
                </Typography>


                {description !== undefined && <> <Box
                    m={1}
                    //margin
                    display="flex"
                    justifyContent="flex-end"
                    alignItems="flex-end"

                > <Button aria-describedby={id} onClick={handleClick} variant="outlined">
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
                    </Popover>

                </Box>
                </>}
            </Grid>
        </Grid>

    </Grid>
}


export default InfoThing;