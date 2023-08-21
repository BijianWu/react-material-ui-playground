import { Box, Tab, Tabs } from '@mui/material';
import Typography from '@mui/material/Typography';
import { useState } from 'react';
import { alpha, styled } from '@mui/material/styles';

  
  const AntTabs = styled(Tabs)({
  borderBottom: "1px solid #dee2e6",
  
  overflow: "visible!important",
  "& div.MuiTabs-scroller": {
  overflow: "visible!important"
  },
  "&.Mui-selected": {
  color: "#495057",
  backgroundColor: "red",
  borderColor: `#dee2e6 #dee2e6 #fff`
  },
  "& .MuiTabs-indicator": {
  display: "flex",
  justifyContent: "center",
  backgroundColor: "transparent"
  }
  });
  
  const StyledTab = styled((props) => (
    <Tab disableRipple {...props} />
    ))(({ theme }) => ({
    textTransform: "none",
    fontWeight: theme.typography.fontWeightRegular,
    fontSize: theme.typography.pxToRem(15),
    marginRight: theme.spacing(1),
    color: "#0d6efd",
    background: "0 0",
    border: "1px solid transparent",
    borderTopLeftRadius: "0.25rem",
    borderTopRightRadius: "0.25rem",
    padding: ".5rem 1rem",
    textDecoration: "none",
    transition: `color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out`,
    "&.Mui-selected": {
    color: "#495057",
    backgroundColor: "#fff",
    borderColor: "#dee2e6 #dee2e6 #fff",
    marginBottom: "-2px"
    },
    "&.Mui-focusVisible": {
    backgroundColor: "rgba(100, 95, 228, 0.32)"
    }
}));
  
export default function CustomTabsDemo() {

    const [value, setValue] = useState(0);
      
    const handleChange = (event, newValue) => {
    setValue(newValue);
    };
    
    const CustomizedTabs =()=>{
        return (
            <Box sx={{ width: "100%" }}>
            <Box>
                <AntTabs
                value={value}
                onChange={handleChange}
                aria-label="styled tabs example"
                sx={{ overflow: "overlay" }}
                >
                <StyledTab label="Workflows" />
                <StyledTab label="Datasets" />
                <StyledTab label="Connections" disabled />
                </AntTabs>
            </Box>
            </Box>
        );     
    }

    return (
        <>
            <CustomizedTabs />
        </>
    )
}