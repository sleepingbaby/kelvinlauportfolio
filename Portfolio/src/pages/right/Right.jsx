import {
  Stack,
  Typography,
  Box,
  Button,
  Avatar,
  FormControl,
  TextField,
} from "@mui/material";
import Reveal from "../../utils/Reveal";
import { useEffect } from "react";
import emailjs from "@emailjs/browser";
import TimelineComponent from "../../components/Navbar/Timeline";
import Skills from "../../components/Navbar/Skills";
import Project from "../../components/Project";

const Right = ({ refs }) => {
  const scrollToProject = () => {
    refs.projectRef.current.scrollIntoView({
      behavior: "smooth",
    });
  };

  const scrollToContact = () => {
    refs.contactRef.current.scrollIntoView({
      behavior: "smooth",
    });
  };

  useEffect(() => {
    emailjs.init("3_OEDQF2xdTH6sGY4");
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;

    emailjs.sendForm("service_d6vyuqr", "template_lxzewra", form).then(
      function (response) {
        console.log("SUCCESS!", response);
        form.reset();
      },
      function (error) {
        console.log("FAILED...", error);
      }
    );
  };

  return (
    <Stack ref={refs.homeRef} gap={6} width="100%">
      <Reveal>
        <Stack
          direction="column"
          alignItems="center"
          justifyContent="center"
          sx={{
            minHeight: { xs: "500px", sm: "620px" },
            borderRadius: "16px",
            backgroundColor: "primary.main",
            boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
          }}
        >
          <Typography
            variant="h2"
            sx={{ fontSize: "3rem", fontWeight: "bold" }}
          >
            I&apos;m Kelvin Lau
          </Typography>
          <Typography sx={{ fontSize: "1rem", textAlign: "center" }}>
            A full stack software developer that enjoys making fun apps people
            actually use.
          </Typography>
          <Stack direction={{ xs: "column", sm: "row" }} m={4} gap={4}>
            <Button
              variant="contained"
              color="secondary"
              onClick={scrollToProject}
              disableRipple
              sx={{ height: "50px", width: "200px", borderRadius: "16px" }}
            >
              <Typography fontWeight="bold">View Portfolio</Typography>
            </Button>
            <Button
              variant="outlined"
              color="secondary"
              onClick={scrollToContact}
              disableRipple
              sx={{ height: "50px", width: "200px", borderRadius: "16px" }}
            >
              <Typography fontWeight="bold">Hire Me</Typography>
            </Button>
          </Stack>
        </Stack>
      </Reveal>

      <Reveal>
        <Stack
          ref={refs.aboutRef}
          sx={{
            minHeight: "400px",
            padding: "32px",
            borderRadius: "16px",
            backgroundColor: "background.paper",
            boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
          }}
        >
          <Typography
            variant="h5"
            component="h1"
            sx={{
              fontWeight: "bold",
              color: "text.primary",
            }}
          >
            About Me
          </Typography>

          <Box
            height="5px"
            width="20px"
            ml={1}
            sx={{ backgroundColor: "black" }}
          ></Box>
          <Box m={{ xs: "0", sm: "5" }}>
            <Stack
              alignItems="center"
              justifyContent="center"
              direction={{ xs: "column", sm: "column", md: "row" }}
              gap={3}
            >
              <Avatar
                alt="Kelvin Lau"
                src="src/assets/kelvinlau.jpg"
                sx={{
                  height: { xs: "75px", sm: "150px" },
                  width: { xs: "75px", sm: "150px" },
                  marginBottom: "14px",
                }}
              />
              <Stack gap={3}>
                <Typography fontWeight="500" sx={{ fontSize: "1rem" }}>
                  I&apos;m a Air Force veteran who&apos;s passionate about
                  coding, rock climbing, and hockey. With 8 years of experience
                  collaborating in international, multi-dimensional teams,
                  I&apos;m ready to contribute to your next project.
                </Typography>
                <Stack direction="row" gap={3}>
                  <Stack>
                    <Stack direction={{ xs: "column", sm: "row" }}>
                      <Typography fontWeight="bold" mr={1}>
                        Name:
                      </Typography>
                      <Typography> Kelvin Lau</Typography>
                    </Stack>
                    <Stack direction={{ xs: "column", sm: "row" }}>
                      <Typography fontWeight="bold" mr={1}>
                        Birthday:
                      </Typography>
                      <Typography>12 April, 1995</Typography>
                    </Stack>
                  </Stack>
                  <Stack>
                    <Stack direction={{ xs: "column", sm: "row" }}>
                      <Typography fontWeight="bold" mr={1}>
                        Location:
                      </Typography>
                      <Typography>Sunnyvale, CA</Typography>
                    </Stack>
                    <Stack direction={{ xs: "column", sm: "row" }}>
                      <Typography fontWeight="bold" mr={1}>
                        Email:
                      </Typography>
                      <Typography>crosby2987@gmail.com</Typography>
                    </Stack>
                  </Stack>
                </Stack>
                <Stack
                  direction={{ xs: "column", sm: "column", md: "row" }}
                  gap={3}
                  mr={7}
                  alignItems="center"
                  justifyContent="center"
                >
                  <Button
                    color="primary"
                    variant="contained"
                    sx={{ width: "200px" }}
                  >
                    Resume
                  </Button>
                  <Button
                    color="primary"
                    variant="outlined"
                    sx={{ width: "200px" }}
                  >
                    Contact
                  </Button>
                </Stack>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Reveal>
      <Reveal>
        <Stack
          ref={refs.skillsRef}
          sx={{
            minHeight: "250px",
            padding: "32px",
            borderRadius: "16px",
            backgroundColor: "primary.main",
            boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
          }}
        >
          <Typography
            variant="h5"
            component="h1"
            sx={{
              fontWeight: "bold",
              color: "text.primary",
            }}
          >
            Skills
          </Typography>
          <Box
            height="5px"
            width="20px"
            ml={1}
            sx={{ backgroundColor: "secondary.main" }}
          ></Box>
          <Skills />
        </Stack>
      </Reveal>
      <Reveal>
        <Stack
          ref={refs.experienceRef}
          sx={{
            minHeight: "500px",
            padding: "32px",
            borderRadius: "16px",
            backgroundColor: "background.paper",
            boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
          }}
        >
          <Typography
            variant="h5"
            component="h1"
            sx={{
              fontWeight: "bold",
              color: "text.primary",
            }}
          >
            Experience
          </Typography>

          <Box
            height="5px"
            width="20px"
            ml={1}
            sx={{ backgroundColor: "black" }}
          ></Box>
          <TimelineComponent />
        </Stack>
      </Reveal>
      <Reveal>
        <Stack
          ref={refs.projectRef}
          sx={{
            minHeight: "500px",
            padding: "32px",
            borderRadius: "16px",
            backgroundColor: "primary.main",
            boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
          }}
        >
          <Typography
            variant="h5"
            component="h1"
            sx={{
              fontWeight: "bold",
              color: "text.primary",
            }}
          >
            Projects
          </Typography>
          <Box
            height="5px"
            width="20px"
            ml={1}
            sx={{ backgroundColor: "secondary.main" }}
          ></Box>
          <Stack alignItems="center" justifyContent="center">
            <Project />
          </Stack>
        </Stack>
      </Reveal>
      <Reveal>
        <Stack
          ref={refs.contactRef}
          sx={{
            minHeight: "500px",
            padding: "32px",
            borderRadius: "16px",
            backgroundColor: "background.paper",
            boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
          }}
        >
          <Typography
            variant="h5"
            component="h1"
            sx={{
              fontWeight: "bold",
              color: "text.primary",
            }}
          >
            Contact
          </Typography>

          <Box
            height="5px"
            width="20px"
            ml={1}
            sx={{ backgroundColor: "black" }}
          ></Box>
          <form id="contact-form" onSubmit={handleSubmit}>
            <FormControl
              fullWidth
              sx={{
                marginTop: "2rem",
                "& .MuiInputLabel-root": { color: "primary.main" },
              }}
            >
              <TextField type="text" name="user_name" label="Name" fullWidth />
            </FormControl>
            <FormControl
              fullWidth
              sx={{
                marginTop: "2rem",
                "& .MuiInputLabel-root": { color: "primary.main" },
              }}
            >
              <TextField
                type="email"
                name="user_email"
                label="Email"
                fullWidth
              />
            </FormControl>
            <FormControl
              fullWidth
              sx={{
                marginTop: "2rem",
                "& .MuiInputLabel-root": { color: "primary.main" },
              }}
            >
              <TextField label="Message" name="message" multiline rows={4} />
            </FormControl>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              sx={{ marginTop: "2rem", width: "100%" }}
            >
              Send
            </Button>
          </form>
        </Stack>
      </Reveal>
    </Stack>
  );
};

export default Right;
