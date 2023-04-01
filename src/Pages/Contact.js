import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import {
  Typography,
  TextField,
  Button,
  useMediaQuery,
} from "@mui/material";
import { Container } from "../Components/Elements";

const Contact = () => {
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
      <Typography variant={is600 ? "h3" : "h4"} sx={{ marginBottom: 3 }}>
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
        <TextField
          id="name"
          type="name"
          name="name"
          label={<label htmlFor="name">Name</label>}
        />
        <ValidationError prefix="Name" field="name" errors={state.errors} />
        <br/>
        <TextField
          id="email"
          type="email"
          name="email"
          label={<label htmlFor="email">Email Address</label>}
        />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
        <br/>
        <TextField
          multiline={true}
          minRows={5}
          id="message"
          name="message"
          label={<label htmlFor="message">Message</label>}
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
