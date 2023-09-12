import Left from "./pages/left/Left";
import { Stack } from "@mui/material";
import Right from "./pages/right/Right";
import { useRef, useState, useEffect } from "react";

function App() {
  const [isSmallScreen, setIsSmallScreen] = useState(false);
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
      mx={{ xs: 2, sm: 20 }}
      spacing={6}
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
