import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Tabs from '@mui/material/Tabs';
import AntTab from './customThemes/AntTab';
import AntTabDrawer from './customThemes/AntTabDrawer';
import { Outlet, useNavigate } from 'react-router-dom';
import { Container } from '@mui/material';


function Nav(props) {
  const navigate = useNavigate();
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [value, setValue] = React.useState(false);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    if(newValue === false) {
      navigate("/");
    }
    if(newValue === 'one') {
      navigate("/");
    }
    if(newValue === 'two') {
      navigate("/about");
    }
    if(newValue === 'three') {
      navigate("/contact");
    }
  };

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  
  const drawer = (
    <>
      <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>

      <Divider />

        <Tabs
          orientation='vertical'
          value={value}
          onChange={handleChange}
          textColor="primary"
          aria-label="secondary tabs example"
        >
          <AntTabDrawer value="one" label="Home"/>
          <AntTabDrawer value="two" label="About" />
          <AntTabDrawer value="three" label="Contact" />
          <AntTabDrawer value="four" label="Games" />
          <AntTabDrawer value="five" label="Apps" />
          <AntTabDrawer value="six" label="Musics" />
          <AntTabDrawer value="seven" label="Films" />
          <AntTabDrawer value="eight" label="Login" />
          <AntTabDrawer value="nine" label="Register" />
        </Tabs>
    </Box>
    </>

  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar component="nav" >
        <Toolbar>
        <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { md: 'block' } }}
            onClick={(e) =>handleChange(e, false)}
          >
            MUI
          </Typography>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { md: 'none' } }}
          >
            <MenuIcon />
          </IconButton>

          <Box sx={{ display: { xs: 'none', md: 'block'  } }}>
            <Tabs
              value={value}
              onChange={handleChange}
              textColor="inherit"
              // indicatorColor="secondary"
              TabIndicatorProps={{ style: { background: "#fff" } }}
              aria-label="secondary tabs example"
            >
            <AntTab value="one" label="Home" />
            <AntTab value="two" label="About" />
            <AntTab value="three" label="Contact" />
            <AntTab value="four" label="Games" />
            <AntTab value="five" label="Apps" />
            <AntTab value="six" label="Musicssssssss" />
            <AntTab value="seven" label="Films" />
            <AntTab value="eight" label="Login" />
            <AntTab value="nine" label="Register" />
          </Tabs>
          </Box>

        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          anchor={'right'}
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          // disableScrollLock={true}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', md: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: "40%" },
          }}
        >
          {drawer}
          
        </Drawer>

      </Box>
      <Box  sx={{ px: 1 }}>
        <Toolbar/>
        {/* <Typography>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique unde
          fugit veniam eius, perspiciatis sunt? Corporis qui ducimus quibusdam,
          aliquam dolore excepturi quae. Distinctio enim at eligendi perferendis in
          cum quibusdam sed quae, accusantium et aperiam? Quod itaque exercitationem,
          at ab sequi qui modi delectus quia corrupti alias distinctio nostrum.
          Minima ex dolor modi inventore sapiente necessitatibus aliquam fuga et. Sed
          numquam quibusdam at officia sapiente porro maxime corrupti perspiciatis
          asperiores, exercitationem eius nostrum consequuntur iure aliquam itaque,
          assumenda et! Quibusdam temporibus beatae doloremque voluptatum doloribus
          soluta accusamus porro reprehenderit eos inventore facere, fugit, molestiae
          ab officiis illo voluptates recusandae. Vel dolor nobis eius, ratione atque
          soluta, aliquam fugit qui iste architecto perspiciatis. Nobis, voluptatem!
          Cumque, eligendi unde aliquid minus quis sit debitis obcaecati error,
          delectus quo eius exercitationem tempore. Delectus sapiente, provident
          corporis dolorum quibusdam aut beatae repellendus est labore quisquam
          praesentium repudiandae non vel laboriosam quo ab perferendis velit ipsa
          deleniti modi! Ipsam, illo quod. Nesciunt commodi nihil corrupti cum non
          fugiat praesentium doloremque architecto laborum aliquid. Quae, maxime
          recusandae? Eveniet dolore molestiae dicta blanditiis est expedita eius
          debitis cupiditate porro sed aspernatur quidem, repellat nihil quasi
          praesentium quia eos, quibusdam provident. Incidunt tempore vel placeat
          voluptate iure labore, repellendus beatae quia unde est aliquid dolor
          molestias libero. Reiciendis similique exercitationem consequatur, nobis
          placeat illo laudantium! Enim perferendis nulla soluta magni error,
          provident repellat similique cupiditate ipsam, et tempore cumque quod! Qui,
          iure suscipit tempora unde rerum autem saepe nisi vel cupiditate iusto.
          Illum, corrupti? Fugiat quidem accusantium nulla. Aliquid inventore commodi
          reprehenderit rerum reiciendis! Quidem alias repudiandae eaque eveniet
          cumque nihil aliquam in expedita, impedit quas ipsum nesciunt ipsa ullam
          consequuntur dignissimos numquam at nisi porro a, quaerat rem repellendus.
          Voluptates perspiciatis, in pariatur impedit, nam facilis libero dolorem
          dolores sunt inventore perferendis, aut sapiente modi nesciunt.
        </Typography> */}
        <Container>
          <Outlet />
        </Container>

      </Box>
    </Box>
  );
}

Nav.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Nav;