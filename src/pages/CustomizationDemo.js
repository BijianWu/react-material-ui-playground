import { Button, Slider } from '@mui/material';
import Typography from '@mui/material/Typography';
import "../assets/css/styles.css";
import { alpha, styled } from '@mui/material/styles';

const SuccessSlider = styled(Slider)(({ theme }) => ({
    width: 300,
    color: theme.palette.success.main,
    '& .MuiSlider-thumb': {
      '&:hover, &.Mui-focusVisible': {
        boxShadow: `0px 0px 0px 8px ${alpha(theme.palette.success.main, 0.16)}`,
      },
      '&.Mui-active': {
        boxShadow: `0px 0px 0px 14px ${alpha(theme.palette.success.main, 0.16)}`,
      },
    },
  }));

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

            <SuccessSlider defaultValue={30} />

        </>
    )
}