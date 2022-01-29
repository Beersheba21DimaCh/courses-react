import { Box, Button } from "@mui/material";
import { FC, Fragment, useState } from "react";
import { Navigate } from "react-router-dom";
import { PATH_LOGIN } from "../../config/routes-config";
import { authService } from "../../config/servicesConfig";
import DialogConfirm from "../common/dialog";
import Avatar from '@mui/material/Avatar';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';




export const Logout: FC = () => {
  const [flNavigate, setFlNavigate] = useState<boolean>(false);
  const [flDialog, setFlDialog] = useState<boolean>(false);
  async function logout() {
    const res = await authService.logout();
    if (res) {
      setFlNavigate(true);
    }
    return res;
  }

  return <Fragment>
    <Box sx={{display:'flex',flexDirection:'column', alignItems:'center'}}>
      <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}> <LockOutlinedIcon /></Avatar>
      <Button variant="outlined" onClick={() => setFlDialog(true)}>Sign out</Button>
    </Box>
    <DialogConfirm visible={flDialog} title={"Sign out"} message={"Do you really want to leave?"} onClose={function (status: boolean): void {
      if (status) logout();
      setFlDialog(false);
    }} />
    {flNavigate && <Navigate to={PATH_LOGIN} />}

  </Fragment>
}