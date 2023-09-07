import { Scale } from "@mui/icons-material";
import { Box, Grid, Icon, Paper, Stack, Typography } from "@mui/material";

const Item = ({ skill, imgUrl }) => {
  return (
    <Paper sx={{ height: "150px", width: "200px", padding: "24px" }}>
      <Stack height="100%" alignItems="center" justifyContent="center">
        <Icon
          sx={{
            height: "50px",
            width: "50px",
            transition: "transform 0.3s ease",
            "&:hover": { transform: "Scale(1.1)" },
          }}
        >
          <img style={{ width: "100%" }} src={imgUrl} />
        </Icon>
        <Typography mt={2} fontWeight="bold">
          {skill}
        </Typography>
      </Stack>
    </Paper>
  );
};

const Skills = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid justifyContent="center" container spacing={2}>
        <Grid item xs={3} s={3} m={3}>
          <Item skill={"Python"} imgUrl={"src/assets/python.png"} />
        </Grid>
        <Grid item xs={3} s={3} m={3}>
          <Item skill={"Javascript"} imgUrl={"src/assets/javascript.png"} />
        </Grid>
        <Grid item xs={3} s={3} m={3}>
          <Item skill={"React"} imgUrl={"src/assets/react.png"} />
        </Grid>
        <Grid item xs={3} s={3} m={3}>
          <Item skill={"Material UI"} imgUrl={"src/assets/mui.png"} />
        </Grid>
        <Grid item xs={3} s={3} m={3}>
          <Item skill={"PostgreSQL"} imgUrl={"src/assets/postgresql.png"} />
        </Grid>
        <Grid item xs={3} s={3} m={3}>
          <Item skill={"Django"} imgUrl={"src/assets/django.png"} />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Skills;
