import { Box, Grid, Icon, Paper, Stack, Typography } from "@mui/material";

const Item = ({ skill, imgUrl }) => {
  return (
    <Paper
      sx={{
        padding: "12px",
        height: "100%",
        width: "100%",
      }}
    >
      <Stack height="100%" alignItems="center" justifyContent="center">
        <Icon
          sx={{
            height: { xs: "30px", sm: "50px" },
            width: { xs: "30px", sm: "50px" },
            transition: "transform 0.3s ease",
            "&:hover": { transform: "Scale(1.1)" },
          }}
        >
          <img style={{ width: "100%" }} src={imgUrl} />
        </Icon>
        <Typography
          mt={2}
          fontSize={{ xs: ".7rem", sm: "1rem" }}
          fontWeight="bold"
        >
          {skill}
        </Typography>
      </Stack>
    </Paper>
  );
};

const Skills = () => {
  return (
    <Box mt={3} sx={{ flexGrow: 1 }}>
      <Grid alignItems="center" justifyContent="center" container spacing={2}>
        <Grid item xs={4}>
          <Item skill={"Python"} imgUrl={"src/assets/python.png"} />
        </Grid>
        <Grid item xs={4}>
          <Item skill={"Javascript"} imgUrl={"src/assets/javascript.png"} />
        </Grid>
        <Grid item xs={4}>
          <Item skill={"React"} imgUrl={"src/assets/react.png"} />
        </Grid>
        <Grid item xs={4}>
          <Item skill={"Material UI"} imgUrl={"src/assets/mui.png"} />
        </Grid>
        <Grid item xs={4}>
          <Item skill={"PostgreSQL"} imgUrl={"src/assets/postgresql.png"} />
        </Grid>
        <Grid item xs={4}>
          <Item skill={"Django"} imgUrl={"src/assets/django.png"} />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Skills;
