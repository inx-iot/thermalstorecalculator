import { Grid, Typography } from "@mui/material";

interface IThing {
    title: string;


    children?: React.ReactNode

}

const ContainerThing = ({ title, children }: IThing) => {



    return <div>

        <Typography variant="h5" pt={1} pb={1}>{title}   </Typography>
        <Grid
            container
            spacing={3}
            justifyContent="left"
            style={{ marginTop: "0px" }}
        >
            {children}
        </Grid>
    </div>

}

export default ContainerThing;