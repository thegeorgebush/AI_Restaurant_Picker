import "./styles.css";
import {
  Grid,
  Paper,
  TextField,
  Typography,
  Card,
  CardContent,
  Button,
  ButtonGroup,
  Box
} from "@mui/material";

const App = () => {
  return (
    <>
      <Grid
        container
        alignItems="baseline"
        style={{ width: "100%", height: "100vh" }}
      >
        <Grid container justifyContent="center" spacing={2}>
          <Grid item xs={5} marginTop={7}>
            <Typography variant="h2">
              Explore what's around your neighborhood.{" "}
            </Typography>
          </Grid>
          <Grid item xs={5} />
          <Grid
            item
            xs={9}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <TextField
              fullWidth
              id="outlined-basic"
              label="What would you like to eat: Sushi"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12} />
          <Grid item xs={3}>
            <Card>
              <CardContent>
                <Typography textAlign="center">
                  Pick Something For Me
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={3}>
            <Card>
              <CardContent>
                <Typography textAlign="center">
                  Explore Food I Like Around Me
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={10}>
            <Paper fullWidth style={{ padding: "150px 0px" }}>
              <Typography>
                Don't know what to eat, let AI pick for you
              </Typography>
            </Paper>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Box
            textAlign="center"
            style={{ position: "absolute", bottom: 0, width: "99%" }}
          >
            <Button>V</Button>
          </Box>
        </Grid>
      </Grid>

      <Grid container spacing={2}>
        <Grid item xs={2}>
          <Card>
            <CardContent>
              <Typography textAlign="center">Sushi</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={2}>
          <Card>
            <CardContent>
              <Typography textAlign="center">Salad</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={2}>
          <Card>
            <CardContent>
              <Typography textAlign="center">Burger</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={2}>
          <Card>
            <CardContent>
              <Typography textAlign="center">Thai</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={2}>
          <Card>
            <CardContent>
              <Typography textAlign="center">Chinese</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={2}>
          <Card>
            <CardContent>
              <Typography textAlign="center">Steak</Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      <Grid item xs={3}>
        <Card>
          <CardContent>
            <Typography variant="h5" textAlign="center">
              Steak
            </Typography>
            <Typography textAlign="center">delicous and nutritious</Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={3}>
        <Card>
          <CardContent>
            <Typography variant="h5" textAlign="center">
              Steak
            </Typography>
            <Typography textAlign="center">delicous and nutritious</Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={3}>
        <Card>
          <CardContent>
            <Typography variant="h5" textAlign="center">
              Steak
            </Typography>
            <Typography textAlign="center">delicous and nutritious</Typography>
          </CardContent>
        </Card>
      </Grid>

      <Grid
        item
        xs={12}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <Button variant="outlined">Pick for me</Button>
      </Grid>
      <Grid item>
        <ButtonGroup>
          <Button>5</Button>
          <Button>10</Button>
          <Button>15</Button>
        </ButtonGroup>
        <ButtonGroup>
          <Button>(Walk)</Button>
          <Button>(Car)</Button>
        </ButtonGroup>
      </Grid>
    </>
  );
};

export default App;
