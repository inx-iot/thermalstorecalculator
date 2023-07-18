import { Grid, Typography } from "@mui/material";

interface IThing {
    title: string;


    children?: React.ReactNode  

}

const ContainerThing = ({ title, children }: IThing) => {



    return <div className="backColour" >

        <Typography variant="h5" pt={3} pb={1} style={{ marginTop: "-25px"}} >{title}   </Typography>
        <Grid
            container
            spacing={6}
            justifyContent="left"
            style={{ marginTop: "3px" }}
        >
            {children}
        </Grid>
    </div>

}

export default ContainerThing;