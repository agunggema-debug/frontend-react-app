import React from "react";
import {
  Box,
  Container,
  Typography,
  Paper,
  Button,
  Grid, // Ditambahkan untuk layout responsif
  Divider, // Ditambahkan untuk garis pemisah
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { DataObject, PeopleAlt, AddCircle, BarChart } from "@mui/icons-material"; // Ikon Dashboard

function Dashboard() {
  const navigate = useNavigate();

  // Data Dummy Statistik untuk Card (Ganti dengan data nyata dari API)
  const stats = [
    {
      title: "Total Entri Data",
      value: 120,
      color: "#1976d2", // Warna biru primer
      icon: <DataObject sx={{ fontSize: 40 }} />,
      route: "/data",
    },
    {
      title: "Pengguna Sistem",
      value: 5,
      color: "#4caf50", // Warna hijau sukses
      icon: <PeopleAlt sx={{ fontSize: 40 }} />,
      route: "/users",
    },
    {
      title: "Perubahan Terakhir",
      value: "2 Hari Lalu",
      color: "#fbc02d", // Warna kuning
      icon: <BarChart sx={{ fontSize: 40 }} />,
      route: "/reports",
    },
  ];

  // Fungsi untuk navigasi (kita ubah default navigasi ke halaman CRUD utama)
  const handleNavigate = (route) => {
    navigate(route);
  };

  return (
    // Menggunakan maxWidth="lg" agar dashboard lebih luas
    <Container component="main" maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      {/* HEADER UTAMA */}
      <Box sx={{ my: 4 }}>
        <Typography variant="h3" component="h1" gutterBottom color="primary">
          Simple CRUD System Dashboard
        </Typography>
        <Typography variant="h6" color="text.secondary">
          Selamat datang kembali! Ringkasan cepat dan navigasi utama sistem.
        </Typography>
        <Divider sx={{ my: 2 }} />
      </Box>

      {/* SECTION RINGKASAN DATA (STAT CARD - menggunakan GRID) */}
      <Grid container spacing={4} sx={{ mt: 3, mb: 5 }}>
        {stats.map((stat, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Paper
              elevation={6} // Meningkatkan bayangan agar lebih menonjol
              sx={{
                p: 3,
                backgroundColor: stat.color,
                color: "white",
                cursor: "pointer",
                transition: "transform 0.3s",
                "&:hover": {
                  transform: "translateY(-5px) scale(1.02)", // Efek hover melayang
                  boxShadow: "0 8px 15px rgba(0,0,0,0.2)",
                },
                borderRadius: "12px", // Sudut membulat
              }}
              onClick={() => handleNavigate(stat.route)}
            >
              <Box display="flex" justifyContent="space-between" alignItems="center">
                {stat.icon}
                <Typography variant="h3" component="span" sx={{ fontWeight: 600 }}>
                  {stat.value}
                </Typography>
              </Box>
              <Typography variant="h6" component="p" sx={{ mt: 1 }}>
                {stat.title}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>

      {/* SECTION AKSI CEPAT DAN LOGIN (Jika masih dibutuhkan) */}
      <Paper elevation={4} sx={{ p: 4, mt: 6, textAlign: "center", borderRadius: "12px" }}>
        <Typography variant="h5" gutterBottom color="text.primary">
          Aksi Utama
        </Typography>

        <Box sx={{ display: "flex", gap: 3, justifyContent: "center", mt: 3 }}>
          {/* Tombol Aksi Utama: Kelola Data */}
          <Button variant="contained" color="success" size="large" onClick={() => handleNavigate("/data")} startIcon={<AddCircle />} sx={{ py: 1.5, px: 4 }}>
            Kelola Data CRUD
          </Button>

          {/* Tombol Kembali (disesuaikan dengan skenario) */}
          <Button
            variant="contained"
            color="warning"
            size="large"
            onClick={() => handleNavigate("/")} // Arahkan ke root/login
            sx={{ py: 1.5, px: 4 }}
          >
            Kembali ke login
          </Button>
        </Box>
      </Paper>
    </Container>
  );
}

export default Dashboard;
