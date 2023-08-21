import { Button, Slider } from '@mui/material';
import Typography from '@mui/material/Typography';
import "../assets/css/styles.css";

export default function CustomizationDemo() {
    return (
        <>
            {/* <Slider
                defaultValue={30}
                sx={{
                    width: 800,
                    color: 'success.main', // secondary.main
                    '& .MuiSlider-thumb': { // [hash]-Mui[Component name]-[name of the slot] select the thumb slot inside the Slider component
                        borderRadius: '1px',
                    },
                }}
            /> */}

            {/* // Button */}
            <div className="custom">
            <Button disabled className="custom Button">MYBTN</Button>
            </div>

        </>
    )
}