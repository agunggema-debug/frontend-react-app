import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Welcome from "./pages/Welcome";
import "./App.css";

// Create a custom theme
const theme = createTheme({
  palette: {
    primary: {
      main: "#1976d2",
      dark: "#115293",
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router basename="simplecrud-react-app">
        <div className="App">
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/welcome" element={<Welcome />} />
          </Routes>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
