import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import NoPage from "./pages/no-page/NoPage";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./themes/Theme";
import QuickLinks from "./components/quick-links/QuickLinks";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <ThemeProvider theme={theme}>
          <QuickLinks />
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<NoPage />} />
          </Routes>
          <Footer />
        </ThemeProvider>
      </div>
    </BrowserRouter>
  );
}

export default App;
