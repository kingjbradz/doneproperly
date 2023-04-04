import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import {
  Typography,
  TextField,
  Button,
  useMediaQuery,
  useTheme
} from "@mui/material";
import { Container } from "../Components/Elements";
import { styled } from "@mui/system"

const StyledTextField = styled(TextField)( ({ theme }) => ({
  borderRadius: "8px",
  backgroundColor: "#FFFEFE",
}))

const Contact = () => {
  const theme = useTheme()
  const is600 = useMediaQuery("( min-width: 600px )");
  const [state, handleSubmit] = useForm("xgebnzey");
  if (state.succeeded) {
    return (
      <Typography sx={{ textAlign: "center" }}>
        Thanks for getting in touch! We'll respond shortly!
      </Typography>
    );
  }
  return (
    <Container sx={{ flexDirection: "column" }}>
      <Typography variant={is600 ? "h3" : "h4"} sx={{ marginBottom: 3, color: "brand.secondary" }}>
        Get in Touch!
      </Typography>
      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          textAlign: "center",
          minWidth: is600 ? "450px" : "auto",
        }}
      >
        <StyledTextField
          id="name"
          type="name"
          name="name"
          color="outline"
          label={<label htmlFor="name" style={{ backgroundColor: "#FFFEFE", borderRadius: "4px", padding: "0 2px" }}>Name</label>}
          />
        <ValidationError prefix="Name" field="name" errors={state.errors} />
        <br/>
        <StyledTextField
          id="email"
          type="email"
          name="email"
          color="outline"
          label={<label htmlFor="email" style={{ backgroundColor: "#FFFEFE", borderRadius: "4px", padding: "0 2px" }}>Email Address</label>}
        />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
        <br/>
        <StyledTextField
          multiline={true}
          minRows={5}
          id="message"
          name="message"
          color="outline"
          label={<label htmlFor="message" style={{ backgroundColor: "#FFFEFE", borderRadius: "4px", padding: "0 2px" }}>Message</label>}
        />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />
        <br/>
          <Button
            fullWidth={false}
            type="submit"
            disabled={state.submitting}
            sx={{
              paddingRight: 2,
              paddingLeft: 2,
              bgcolor: "brand.secondary",
              color: "brand.blorange",
              "&:hover": {
                bgcolor: "brand.secondary",
                color: "brand.blorange",
              },
            }}
          >
            Submit
          </Button>
      </form>
    </Container>
  );
};

export default Contact;
