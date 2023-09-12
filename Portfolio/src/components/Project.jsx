import { Button, Stack, Typography } from "@mui/material";

const Project = () => {
  return (
    <Stack
      width="100%"
      alignItems="center"
      justifyContent="center"
      m={3}
      spacing={3}
    >
      <Stack
        width="95%"
        sx={{
          backgroundColor: "secondary.main",
          borderRadius: "8px",
        }}
      >
        <Stack
          alignItems="center"
          justifyContent="center"
          width="100%"
          height="100%"
        >
          <img
            src="src/assets/whizlist.png"
            style={{
              height: "100%",
              width: "103%",
              borderRadius: "8px",
              boxShadow:
                "rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px",
            }}
          />
        </Stack>

        <Stack
          width="100%"
          alignItems="flex-start"
          justifyContent="center"
          spacing={3}
          p={3}
          mt={2}
        >
          <Typography variant="h5" fontWeight="bold" sx={{ color: "black" }}>
            WhizList
          </Typography>
          <Typography sx={{ color: "black" }}>
            An app that lets users find nearby bathrooms, leave comments and
            navigate.
          </Typography>
          <Typography sx={{ color: "black" }}>
            Technologies used were React, Django, Amazon EC2, NGINX, Netlify,
            Material UI and Framer Motion.{" "}
          </Typography>
          <Stack
            direction={{ xs: "column", sm: "column", md: "row" }}
            width="100%"
            spacing={3}
            alignItems="center"
            justifyContent="center"
          >
            <a
              href={"https://whizlist.biz/"}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="contained"
                color="primary"
                disableRipple
                sx={{ width: "200px" }}
              >
                Live Site
              </Button>
            </a>
            <a
              href={"https://github.com/sleepingbaby/whizlist"}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="outlined"
                color="primary"
                sx={{ width: "200px" }}
              >
                Code
              </Button>
            </a>
          </Stack>
        </Stack>
      </Stack>
      <Stack
        width="97%"
        sx={{
          backgroundColor: "secondary.main",
          borderRadius: "8px",
        }}
      >
        <Stack
          alignItems="center"
          justifyContent="center"
          width="100%"
          height="100%"
        >
          <img
            src="src/assets/wastenot.png"
            style={{
              height: "100%",
              width: "103%",
              borderRadius: "8px",
              boxShadow:
                "rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px",
            }}
          />
        </Stack>

        <Stack
          width="100%"
          alignItems="flex-start"
          justifyContent="center"
          spacing={3}
          mt={2}
          p={3}
        >
          <Typography variant="h5" fontWeight="bold" sx={{ color: "black" }}>
            WasteNot
          </Typography>
          <Typography sx={{ color: "black" }}>
            Gives users a list of meals they can make with leftover ingredients.
            Strict mode utilizes OpenAI to create recipes that only use selected
            ingredients.
          </Typography>
          <Typography sx={{ color: "black" }}>
            Technologies used were React, Material UI, and react-spring.{" "}
          </Typography>
          <Stack
            direction={{ xs: "column", sm: "column", md: "row" }}
            width="100%"
            spacing={3}
            alignItems="center"
            justifyContent="center"
          >
            <a
              href={"https://streamable.com/8m7jms"}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="contained"
                color="primary"
                disableRipple
                sx={{ width: "200px" }}
              >
                Preview
              </Button>
            </a>

            <a
              href={"https://github.com/sleepingbaby/WasteNot"}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="outlined"
                color="primary"
                sx={{ width: "200px" }}
              >
                Code
              </Button>
            </a>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Project;
