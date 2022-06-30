import BuildIcon from '@mui/icons-material/Build';
import InfoIcon from '@mui/icons-material/Info';
import { Button, Grid, Popover, Typography } from "@mui/material";
import { useState } from "react";
interface IThing {
    textA: string;
    value: number | null | undefined;
    textB?: string;
    valueDecimalPlace?: number
    preValue?: string;
    description?: string;
    resetFunction?: (event: React.MouseEvent<HTMLButtonElement>) => void;
    children?: React.ReactNode
    xs?: number;
    sm?: number;
    md?: number;
}

const InfoThing = ({ textA, value, textB, preValue, description, children, resetFunction, valueDecimalPlace = 2, xs = 8, sm = 5, md = 5 }: IThing) => {
    const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };


    const handleOverrideClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        overrideVisible === true && resetFunction && resetFunction(event)
        setOverrideVisible(!overrideVisible);
    };



    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;


    const [overrideVisible, setOverrideVisible] = useState(false)


    return <><Grid item container xs={xs} sm={sm} md={md} pt={0} pb={0} mt={0} mb={0} data-testid="item_container" className='killPadding'>



        <Grid item xs={6} sm={6} md={6}>
            <Typography>
                {textA}
            </Typography>



        </Grid>

        <Grid item xs={2} sm={2} md={3}>
            <Typography textAlign="right">
                {preValue && preValue} {value && value.toFixed && value.toFixed(valueDecimalPlace)}
            </Typography>
        </Grid>

        <Grid item xs={1} sm={1} md={2}>
            <Typography textAlign="left" >
                {textB && textB}
            </Typography>
        </Grid>
        <Grid item xs={1} sm={1} md={1}>
            <Typography textAlign="right">
                {children && <Button sx={{ minHeight: 0, minWidth: 0, padding: 0 }} aria-describedby={id} onClick={handleOverrideClick}>
                    <BuildIcon />
                </Button>}
                {description !== undefined && <><Button sx={{ minHeight: 0, minWidth: 0, padding: 0 }} aria-describedby={id} onClick={handleClick}>
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
                        <Typography sx={{ p: 2 }}>{description}</Typography>
                    </Popover></>}
            </Typography>


        </Grid>



        {overrideVisible === true && <>{children}</>}

    </Grid>

    </>
}


export default InfoThing;