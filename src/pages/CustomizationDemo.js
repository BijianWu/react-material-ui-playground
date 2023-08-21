import { Slider } from '@mui/material';
import Typography from '@mui/material/Typography';

export default function CustomizationDemo() {
    return (
        <>
            <Slider
                defaultValue={30}
                sx={{
                    width: 800,
                    color: 'success.main', // secondary.main
                }}
            />
        </>
    )
}