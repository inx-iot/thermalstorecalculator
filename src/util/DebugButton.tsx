import CloseIcon from '@mui/icons-material/Close';
import { AppBar, Button, Dialog, IconButton, Slide, Toolbar, Typography } from "@mui/material";
import { TransitionProps } from "@mui/material/transitions";
import React, { useState } from "react";
const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement;
  },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

interface IDebugButon {
  data: any;
  alwaysDisplay?: boolean
}
const DebugButton = ({ data, alwaysDisplay }: IDebugButon) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development' || alwaysDisplay === true) {
    return (<>

      <Button type="button" onClick={(ev: React.MouseEvent) => {
        ev.preventDefault();
        setShow(!show);
      }} className="btn btn-success">Data</Button>
      <Dialog
        fullScreen
        open={show}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar sx={{ position: 'relative' }}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
              Data Debug
            </Typography>

          </Toolbar>
        </AppBar>
        {JSON.stringify(data)}
      </Dialog>

    </>);
  } else {
    return <></>
  }

}

export default DebugButton;