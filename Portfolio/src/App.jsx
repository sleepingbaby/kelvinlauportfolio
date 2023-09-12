import Left from "./pages/left/Left";
import { Stack } from "@mui/material";
import Right from "./pages/right/Right";
import { useRef } from "react";

function App() {
  const refs = {
    homeRef: useRef(null),
    aboutRef: useRef(null),
    skillsRef: useRef(null),
    experienceRef: useRef(null),
    projectRef: useRef(null),
    contactRef: useRef(null),
  };

  return (
    <Stack
      direction="row"
      my={6}
      mx={{ xs: 2, sm: 2, md: 3, lg: 20, xl: 20 }}
      spacing={{ xs: 0, sm: 0, md: 0, lg: 6, xl: 6 }}
      justifyContent="center"
      alignItems="center"
      sx={{
        minHeight: "100vh",
        maxWidth: { xs: "100%" },
      }}
    >
      <Left refs={refs} />
      <Right refs={refs} />
    </Stack>
  );
}

export default App;
