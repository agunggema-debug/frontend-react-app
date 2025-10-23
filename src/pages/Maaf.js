import React from "react";
import {
  Box,
  Container,
  Typography,
  Paper,
  Button,
  Avatar, // Tambahkan Avatar untuk tampilan gambar yang lebih baik
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined"; // Ikon untuk konteks login
import { keyframes } from "@emotion/react"; // Untuk animasi

// Animasi kedip untuk teks atau ikon
const blink = keyframes`
  0% { opacity: 1; }
  50% { opacity: 0.5; }
  100% { opacity: 1; }
`;

function Maaf() {
  const navigate = useNavigate();

  // URL gambar lucu Anda (pastikan path ini benar!)
  const funnyErrorImage = process.env.PUBLIC_URL + "/images/detective_fail.jpg";
  // Contoh lain: 'https://media.giphy.com/media/efJ3wJifj3j6w/giphy.gif'

  return (
    <Container component="main" maxWidth="xs">
      {" "}
      {/* Ubah maxWidth menjadi xs agar lebih fokus */}
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          minHeight: "80vh", // Agar mengambil lebih banyak ruang vertikal
          justifyContent: "center", // Agar konten terpusat vertikal
          // Latar belakang gradasi untuk tampilan trendi
          background: "linear-gradient(135deg, #f0f8ff 0%, #e0e8f0 100%)",
          borderRadius: "16px", // Sudut membulat
          boxShadow: "0 8px 30px rgba(0,0,0,0.1)",
        }}
      >
        <Paper
          elevation={10} // Tingkatkan elevasi agar lebih menonjol
          sx={{
            padding: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 2, // Jarak antar elemen
            backgroundColor: "white", // Latar belakang putih solid
            borderRadius: "12px", // Sudut membulat
            boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
            width: "100%",
            maxWidth: "380px", // Maks lebar untuk konten utama
            animation: `${blink} 2s infinite`, // Animasi kedip
            animationDelay: "0.5s", // Mulai setelah sedikit jeda
          }}
        >
          {/* Gambar Lucu */}
          <Avatar
            alt="Detektif Gagal"
            src={funnyErrorImage}
            sx={{
              width: 120,
              height: 120,
              mb: 2,
              border: "3px solid #f44336", // Border merah
              animation: `${blink} 2s infinite`, // Ikon juga berkedip
              animationDelay: "0s",
            }}
            variant="rounded" // Bentuk kotak
          >
            <LockOutlinedIcon sx={{ fontSize: 60, color: "#f44336" }} /> {/* Fallback icon jika gambar tidak load */}
          </Avatar>

          <Typography component="h1" variant="h5" sx={{ mb: 1, textAlign: "center", fontWeight: "bold", color: "#d32f2f" }}>
            Aduh! Salah Pintu! 🚪
          </Typography>
          <Typography variant="body1" sx={{ mb: 3, textAlign: "center", color: "text.secondary" }}>
            Sepertinya user dan password yang kamu masukkan kurang pas. Coba cek lagi ya! 😉
          </Typography>
          <Button
            variant="contained"
            onClick={() => navigate("/")}
            color="primary" // Gunakan warna primary dari tema MUI
            size="large"
            sx={{
              mt: 2,
              py: 1.5,
              px: 4,
              borderRadius: "8px", // Sudut tombol membulat
              boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
              transition: "transform 0.2s",
              "&:hover": {
                transform: "translateY(-2px)", // Efek hover sedikit melayang
                backgroundColor: "primary.dark",
              },
            }}
          >
            Kembali ke Halaman Login
          </Button>
        </Paper>
      </Box>
    </Container>
  );
}

export default Maaf;
