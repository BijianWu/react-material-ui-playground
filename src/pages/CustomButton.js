import { Button } from '@mui/material';
import Typography from '@mui/material/Typography';
import { deepOrange } from '@mui/material/colors';

export default function CustomButton() {
    return (
        <Button
            variant='contained'
            disableRipple
            disableElevation
            sx={{
                bgcolor: deepOrange[800],
                textTransform: "none",
                fontSize: "1rem",
                borderRadius: "8px",
                "&:hover": { bgcolor: deepOrange[600]}
            }}
        >
            Click Me
        </Button>
    )
}