import { Button, Stack } from '@mui/material';
import { logout } from '../../auth/AuthService';
import { Logout } from '@mui/icons-material';

export const NavbarComponent = () => {
  return (
      <div style={{ width: '500px', float: 'right'}}>
          <Stack direction="row" spacing={1}>
              <span style={{width: '250px'}}>{localStorage.getItem('username')}</span>
              <Button onClick={async () => logout()} variant="contained" endIcon={<Logout />} color="error">
                  Cerrar Sesion
              </Button>
          </Stack>
      </div>
  )
}
