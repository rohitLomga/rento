import {
  Container,
  Divider,
  Stack,
  TextField,
  Typography,
  Box,
  Button,
} from "@mui/material";
import Navbar from "../NavbarAndFooter/Navbar";
// import Footer from '../NavbarAndFooter/Footer';

import Footer from "../NavbarAndFooter/Footer";

// Props component
export const SignInAndLogInProps = ({
  heading1,
  heading2,
  headingHelper,
  fields,
  buttonText,
  rightSideBoxText,
  textUnderButton,
}) => {
  return (
    <Stack>
      {/* Navbar component */}
      <Navbar />

      <Box
        // maxWidth='sm'
        sx={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
          marginTop: "60px",
          textAlign: "center",
          width: "32%",
          margin: "auto",
          pt: "30px",
        }}
      >
        <Typography variant="h3">{heading1}</Typography>

        {/* Second heading , after the first line */}
        {/* Using ternary operator */}

        {heading2 ? (
          <>
            <Typography variant="h3">{heading2}</Typography>
          </>
        ) : (
          ""
        )}
      </Box>

      {/* Heading helper Texts */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
          marginTop: "60px",
          textAlign: "center",
          width: "20%",
          margin: "auto",
        }}
      >
        <Typography variant="body1">{headingHelper}</Typography>
      </Box>

      {/* -------------------------------------------------------------------------------------- */}

      <Container
        maxWidth="large"
        sx={{
          display: "flex",
          alignItems: "center",
          gap: "8%",
        }}
      >
        <Box
          sx={{
            width: "30%",
            ml: "13%",
            pb: "200px",
            mt: "20px",
          }}
        >
          {/* {rightSideBoxText && (
                        <Box
                        sx={{
                            mt: '-80px',
                            pb: 0
                        }}
                        />
                    )} */}

          {/* Second TextField */}
          {fields.length > 0 ? (
            fields.map((field) => (
              <TextField
                required
                variant="outlined"
                label={field.label}
                helperText={field.helperText || ""}
                type={field.type}
                fullWidth
                FormHelperTextProps={{
                  sx: {
                    textAlign: "right", // Align text to the right
                  },
                }}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderColor: "gray", // Default outline color
                    },
                    "&:hover fieldset": {
                      color: "gray",
                      borderColor: "#FF5A3C", // Outline color on hover
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "#FF5A3C", // Outline color when focused
                    },
                    "&:hover .MuiInputLabel-root": {
                      color: "gray", // Label color
                    },
                  },
                  "& .MuiInputBase-input": {
                    color: "gray", // Default text color
                  },
                  "& .MuiInputLabel-root": {
                    color: "gray", // Label color
                  },
                  "& .MuiInputLabel-root.Mui-focused": {
                    color: "#FF5A3C", // Label color when focused
                  },
                  mt: "30px",
                }}
              />
            ))
          ) : (
            <Typography variant="h5">No label</Typography>
          )}

          <Button
            variant="contained"
            sx={{
              backgroundColor: "#FF5A3C",
              padding: "10px 30px",
              mt: "20px",
              mb: "20px",
            }}
          >
            {buttonText}
          </Button>

          {/* Text Under Button */}
          {textUnderButton ? (
            <Typography variant="body2">{textUnderButton}</Typography>
          ) : (
            ""
          )}
        </Box>
        {/* -------------------------------------------------------------------------------------- */}

        {/* Divider in the middle */}
        <Divider
          orientation="vertical"
          variant="middle"
          sx={{ mt: "50px" }}
          flexItem
        />

        {/* Right side box */}
        {rightSideBoxText ? (
          <>
            <Box
              sx={{
                display: "flex",
                width: "35%",
                flexDirection: "column",
                alignItems: "center",
                mt: "-40px",
                ml: "-80px",
              }}
            >
              <Typography variant="h5">DON'T HAVE AN ACCOUNT?</Typography>

              <Typography variant="body2" sx={{ pt: "20px" }}>
                Add items to your wishlistget personalised recommendations
              </Typography>

              <Typography variant="body2">
                check out quickly track your orders register
              </Typography>

              <Button
                variant="contained"
                sx={{
                  backgroundColor: "#FF5A3C",
                  padding: "10px 30px",
                  mt: "20px",
                  mb: "200px",
                }}
              >
                CREATE
              </Button>
            </Box>
          </>
        ) : (
          ""
        )}
      </Container>

      <Footer />
    </Stack>
  );
};
