import { Grid, Typography } from "@mui/material";

interface IThing {
    textA: string;
    value: number;
    textB: string;
    valueDecimalPlace?: number
    preValue?: string;
}

const InfoThing = ({ textA, value, textB, preValue, valueDecimalPlace = 2 }: IThing) => {



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


            </Grid>
        </Grid>

    </Grid>
}


export default InfoThing;