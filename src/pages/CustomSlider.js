import { Slider } from '@mui/material';
import Typography from '@mui/material/Typography';

export default function CustomSlider() {
    return (
        <>
            <Slider
                defaultValue={20}
                sx={{
                    m:10,
                    ".MuiSlider-thumb": {bgcolor: "red"},
                    ".MuiSlider-track": {bgcolor: "secondary.main"},
                    ".MuiSlider-rail": {bgcolor: "warning.main"},
                    ".MuiSlider-thumb.Mui-active": {
                        bgcolor: "black",
                    },
                    ".MuiSlider-thumb.Mui-focusVisible": {
                        border: "2px solid orange",
                    }
                }}
            />

        </>

    )
}