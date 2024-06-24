
import { Box, Container, Typography, Link } from '@mui/material';




export const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        py: 3,
        px: 2,
        mt: 'auto',
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: (theme) =>
          theme.palette.mode === 'light' ? theme.palette.grey[200] : theme.palette.grey[800],
      }}
    >
      <Container maxWidth="sm" >
        <Typography variant="body1" align="center">
          Hecho con amor
        </Typography>
        <Typography variant="body2" color="text.secondary" align="center">
          {'Copyright © '}
          <Link
            color="inherit"
            href="https://github.com/TrinidadLari"
            target="_blank"
            rel="noopener noreferrer"
          >
            By Trinidad Lari
          </Link>{' '}
          {new Date().getFullYear()}
          {'.'}
        </Typography>
      </Container>
    </Box>
  )
}
