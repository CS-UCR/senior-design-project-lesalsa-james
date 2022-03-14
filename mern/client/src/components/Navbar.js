import { AppBar, Toolbar, Typography } from '@material-ui/core'
import Box from '@material-ui/core/Box';

const Navbar = () => {
    return (
        <Box mb={10}>
            <AppBar>
            {/* position="fixed" style={{ margin: 0 }} */}
            <Toolbar>
                <Typography variant="h5">Users</Typography>
            </Toolbar>
        </AppBar>

        </Box>
        
    );
};

export default Navbar