import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import MeuDrawer from './MeuDrawer';

function PaginaInicial() {
    return (
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <MeuDrawer />
            <Typography variant="h4" component="div">
                Seja bem-vindo.
            </Typography>
        </Box>
    );
}

export default PaginaInicial