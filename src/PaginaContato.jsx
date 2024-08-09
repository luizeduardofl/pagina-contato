import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

function PaginaContato() {
    return (
        <form>
            <Container maxWidth="sm">
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <h1 className='title'> Contate-nos </h1>
                    </Grid>

                    <Grid item xs={6}>
                        <TextField required label={'Nome'} variant="outlined" sx={{ width: '100%' }} />
                    </Grid>

                    <Grid item xs={6}>
                        <TextField required label={'Sobrenome'} variant="outlined" sx={{ width: '100%' }} />
                    </Grid>

                    <Grid item xs={12} md={12}>
                        <TextField required label={'E-mail'} variant="outlined" sx={{ width: '100%' }} />
                    </Grid>

                    <Grid item xs={12} md={12}>
                        <TextField required label={'Telefone'} variant="outlined" sx={{ width: '100%' }} />
                    </Grid>

                    <Grid item xs={12} md={12}>
                        <TextField multiline rows={5} required label={'Mensagem'} variant="outlined" sx={{ width: '100%' }} />
                    </Grid>

                    <Grid item xs={12} md={12}>
                        <Button variant="contained" sx={{ width: '100%' }}>Enviar</Button>
                    </Grid>

                    <Grid item xs={12} md={12}>
                        <Button variant="outlined" sx={{ width: '100%' }} component={Link} to="/">Página Inicial</Button>
                    </Grid>

                    <Grid item xs={12} md={12}>
                        <h3 className='message'> Nossa equipe responderá em até 24 horas!</h3>
                    </Grid>
                </Grid>
            </Container>
        </form>
    );
}

export default PaginaContato