
import {AppBar, Toolbar} from '@mui/material';

const Header = () => {
    const logoP="https://dashboard.getinvoice.co/dboard/img/logo.png"
    return(
        <AppBar  position="static" color="secondary" sx={{ backgroundColor: '#ffc107' }}>
            <Toolbar>
                <img src={logoP} alt="logoP" style={{ width: 120 }}/>
            </Toolbar>

        </AppBar>
       
    )
}

export default Header;