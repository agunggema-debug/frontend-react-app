import React from "react";
import { Box, Container, Typography, Paper, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

function Welcome() {
  const navigate = useNavigate();

  return (
    <Container component="main" maxWidth="sm">
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Paper
          elevation={3}
          sx={{
            padding: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            backgroundColor: "rgba(255, 255, 255, 0.9)",
          }}
        >
          <Typography component="h1" variant="h4" sx={{ mb: 3 }}>
            Selamat Datang!
          </Typography>
          <Typography variant="h6" sx={{ mb: 4, textAlign: "center" }}>
            Anda telah berhasil login ke dalam sistem
          </Typography>
          <Button
            variant="contained"
            onClick={() => navigate("/")}
            sx={{
              mt: 2,
              py: 1.5,
              px: 4,
              backgroundColor: "primary.main",
              "&:hover": {
                backgroundColor: "primary.dark",
              },
            }}
          >
            Kembali ke Login
          </Button>
        </Paper>
      </Box>
    </Container>
  );
}

export default Welcome;
