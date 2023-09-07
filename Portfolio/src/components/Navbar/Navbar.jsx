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
      justifyContent="center"
      alignItems="flex-end"
    >
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
