import { Drawer, Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";

function MeuDrawer() {
    return (
        <>
            <Drawer
                variant='permanent'
                sx={{
                    width: '250px',
                    flexShrink: 0,
                    [`& .MuiDrawer-paper`]: { width: '250px', boxSizing: 'border-box' },
                }}
            >
                <Box textAlign='center' sx={{ overflow: 'auto' }}>
                    <Typography variant='h5'>
                        Menu
                    </Typography>
                    <Typography variant="subtitle1" gutterBottom>
                        Home
                    </Typography>
                    <Typography variant="subtitle1" gutterBottom component={Link} to='/contato'>
                        Contato
                    </Typography>

                </Box>
            </Drawer>
        </>
    );
}

export default MeuDrawer