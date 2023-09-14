import { IconButton, Stack } from "@mui/material";
import { useTheme } from "../../contexts/themeContext";
import { lightTheme } from "../../themeOptions";
import { Brightness4, Brightness7 } from "@mui/icons-material";

const Navbar = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <Stack
      height="50px"
      width="100%"
      justifyContent="space-between"
      alignItems="center"
      direction="row"
    >
      <Stack direction="row">
        <a
          href={"https://www.linkedin.com/in/kelvin-lau846/"}
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: "none" }}
        >
          <IconButton sx={{ width: "60px", height: "60px" }}>
            <img
              alt="linkedin"
              src="assets/linkedin.png"
              style={{ height: "100%" }}
            />
          </IconButton>
        </a>

        <a
          href={"https://github.com/sleepingbaby"}
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: "none" }}
        >
          <IconButton sx={{ width: "60px", height: "60px" }}>
            <img
              alt="github"
              src="assets/github.png"
              style={{ height: "100%" }}
            />
          </IconButton>
        </a>

        <a
          href={"https://www.instagram.com/toolausy/"}
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: "none" }}
        >
          <IconButton sx={{ width: "60px", height: "60px" }}>
            <img
              alt="instagram"
              src="assets/instagram.png"
              style={{ height: "100%" }}
            />
          </IconButton>
        </a>
      </Stack>
      <IconButton onClick={toggleTheme} sx={{ marginRight: "24px" }}>
        {isDarkMode ? (
          <Brightness7 sx={{ color: lightTheme.palette.secondary.main }} />
        ) : (
          <Brightness4 sx={{ color: "black" }} />
        )}
      </IconButton>
    </Stack>
  );
};

export default Navbar;
