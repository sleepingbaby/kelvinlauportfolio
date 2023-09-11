import {
  Stack,
  Avatar,
  Typography,
  List,
  Box,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  IconButton,
} from "@mui/material";
import {
  Book,
  Home,
  Lightbulb,
  MenuBook,
  Person,
  Phone,
} from "@mui/icons-material";

const Left = ({ refs }) => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Add smooth scrolling
    });
  };
  const scrollToAbout = () => {
    refs.aboutRef.current.scrollIntoView({
      behavior: "smooth",
    });
  };
  const scrollToSkills = () => {
    refs.skillsRef.current.scrollIntoView({
      behavior: "smooth",
    });
  };
  const scrollToExperience = () => {
    refs.experienceRef.current.scrollIntoView({
      behavior: "smooth",
    });
  };
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
  return (
    <Stack width="350px" display={{ xs: "none", lg: "flex" }}>
      <Stack height="100%" width="350px"></Stack>
      <Stack
        height="620px"
        px={4}
        py={2}
        justifyContent="space-around"
        alignItems="flext-start"
        sx={{
          backgroundColor: "primary.main",
          borderRadius: "16px",
          width: "350px",
          position: "fixed",
          top: 98,
          boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
        }}
      >
        <Stack height="30%" alignItems="flex-start">
          <Avatar
            alt="Kelvin Lau"
            src="src/assets/kelvinlau.jpg"
            sx={{
              height: "100px",
              width: "100px",
              marginBottom: "14px",
            }}
          />
          <Typography
            variant="h3"
            sx={{ fontWeight: "bold", color: "text.primary" }}
          >
            Kelvin Lau
          </Typography>
          <Typography sx={{ color: "text.primary" }}>
            Full Stack Software Developer
          </Typography>
        </Stack>
        <Box width="75%">
          <List>
            <ListItem disablePadding>
              <ListItemButton onClick={scrollToTop}>
                <ListItemIcon>
                  <Home color="secondary" />
                </ListItemIcon>
                <ListItemText primary="Home" sx={{ color: "text.primary" }} />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton onClick={scrollToAbout}>
                <ListItemIcon>
                  <Person color="secondary" />
                </ListItemIcon>
                <ListItemText primary="About" sx={{ color: "text.primary" }} />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton onClick={scrollToSkills}>
                <ListItemIcon>
                  <Lightbulb color="secondary" />
                </ListItemIcon>
                <ListItemText primary="Skills" sx={{ color: "text.primary" }} />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton onClick={scrollToExperience}>
                <ListItemIcon>
                  <Book color="secondary" />
                </ListItemIcon>
                <ListItemText
                  primary="Experience"
                  sx={{ color: "text.primary" }}
                />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton onClick={scrollToProject}>
                <ListItemIcon>
                  <MenuBook color="secondary" />
                </ListItemIcon>
                <ListItemText
                  primary="Projects"
                  sx={{ color: "text.primary" }}
                />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton onClick={scrollToContact}>
                <ListItemIcon>
                  <Phone color="secondary" />
                </ListItemIcon>
                <ListItemText
                  primary="Contact"
                  sx={{ color: "text.primary" }}
                />
              </ListItemButton>
            </ListItem>
          </List>
        </Box>
        <Stack direction="row">
          <a
            href={"https://www.linkedin.com/in/kelvin-lau846/"}
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconButton sx={{ width: "60px", height: "60px" }}>
              <img
                alt="linkedin"
                src="src/assets/linkedin.png"
                style={{ height: "100%" }}
              />
            </IconButton>
          </a>

          <a
            href={"https://github.com/sleepingbaby"}
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconButton sx={{ width: "60px", height: "60px" }}>
              <img
                alt="github"
                src="src/assets/github.png"
                style={{ height: "100%" }}
              />
            </IconButton>
          </a>

          <a
            href={"https://www.instagram.com/toolausy/"}
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconButton sx={{ width: "60px", height: "60px" }}>
              <img
                alt="instagram"
                src="src/assets/instagram.png"
                style={{ height: "100%" }}
              />
            </IconButton>
          </a>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Left;
