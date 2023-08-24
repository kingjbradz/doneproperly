import { Box } from "@mui/material";
import Contact from "./Contact/Contact";
import Impressum from "./Contact/Impressum";

const ContactContainer = ({ themeMode }) => {
  return (
  <Box>
    <Contact themeMode={themeMode} />
    <Impressum themeMode={themeMode} />
  </Box>
  );
};

export default ContactContainer;