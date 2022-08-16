import { Outlet, Link } from "react-router-dom";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

const Layout = () => {
  return (
    <>
      <nav>
        <Box sx={{ "& button": { m: 1 } }}>
          <Grid
            container
            rowSpacing={0}
            padding="10"
            textAlign="center"
            marginLeft="right"
            columnSpacing={{ xs: 3, sm: 3, md: 3 }}
          >
            <Button
              color="primary"
              size="large"
              type="submit"
              variant="contained"
              textAlign="center"
            >
              <Link to="/">Student</Link>
            </Button>

            <Button
              color="primary"
              size="large"
              type="submit"
              variant="contained"
            >
              <Link to="/course">Course</Link>
            </Button>

            <Button
              color="primary"
              size="large"
              type="submit"
              variant="contained"
            >
              <Link to="/Staff">Staff</Link>
            </Button>
          </Grid>
        </Box>
      </nav>

      <Outlet />
    </>
  );
};

export default Layout;
