import {
  Box,
  Container,
  Typography,
  Button,
  Grid,
  Paper,
  AppBar,
  Toolbar,
} from "@mui/material";
import { useRouter } from "next/navigation";
// import Image from "next/image";
import { useRef } from "react";

const LandingPage = () => {
  const router = useRouter();
  const featuresRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Box sx={{ minHeight: "100vh", bgcolor: "#ffffff" }}>
      <AppBar position="sticky" sx={{ bgcolor: "#ffffff" }} elevation={1}>
        <Toolbar sx={{ justifyContent: "space-between" }}>
          {/* <Image
            src="/logo.png"
            alt="HyperAI Logo"
            width={80}
            height={80}
            priority
          /> */}
          <Typography
            id="LogoTitle"
            variant="h6"
            component="h1"
            gutterBottom
            sx={{
              color: "#000000",
              fontFamily: "Faustina",
              fontWeight: "bold",
            }}
          >
            Riset AI
          </Typography>

          <Box sx={{ display: "flex", gap: 2 }}>
            <Button
              sx={{ color: "#000000" }}
              onClick={() => scrollToSection(featuresRef)}
            >
              Fitur
            </Button>
            {/* <Button color="inherit" onClick={() => scrollToSection(ctaRef)}>
              Get Started
            </Button> */}
            <Button variant="contained" onClick={() => router.push("/login")}>
              Login/Signup (Coming Soon)
            </Button>
          </Box>
        </Toolbar>
      </AppBar>

      <Container maxWidth="lg">
        {/* Hero Section */}
        <Grid container spacing={4} alignItems="center" sx={{ py: 8 }}>
          <Grid item xs={12} md={12}>
            <Typography
              variant="h2"
              component="h1"
              gutterBottom
              sx={{ color: "#000000" }}
            >
              Asisten Riset Berkualitas
            </Typography>
            <Typography variant="h5" color="#000" paragraph>
              Asisten AI yang sempurna untuk mahasiswa dalam mengerjakan
              skripsi. Didukung oleh sumber ilmiah terpercaya, kami membantu
              Anda meneliti dengan lebih mudah dan efektif.
            </Typography>
            <Button
              variant="contained"
              size="large"
              onClick={() => router.push("/login")}
              sx={{ mt: 2 }}
            >
              Mulai (Coming Soon)
            </Button>
          </Grid>
        </Grid>

        {/* Features Section */}
        <Box ref={featuresRef}>
          <Grid container spacing={4} sx={{ py: 8 }}>
            <Grid item xs={12}>
              <Typography
                variant="h3"
                component="h2"
                textAlign="center"
                gutterBottom
                sx={{ color: "#000000" }}
              >
                Fitur Utama
              </Typography>
            </Grid>
            {features.map((feature, index) => (
              <Grid item xs={12} md={4} key={index}>
                <Paper
                  elevation={2}
                  sx={{ p: 3, height: "100%", bgcolor: "#ffffff" }}
                >
                  <Typography
                    variant="h5"
                    component="h3"
                    gutterBottom
                    sx={{ color: "#000000" }}
                  >
                    {feature.title}
                  </Typography>
                  <Typography color="#000">{feature.description}</Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Call to Action */}
        <Box ref={ctaRef} sx={{ py: 8, textAlign: "center" }}>
          <Typography
            variant="h4"
            component="h2"
            gutterBottom
            sx={{ color: "#000000" }}
          >
            Siap Memulai Riset Anda?
          </Typography>
          <Typography variant="h6" color="#000" paragraph>
            Jadilah peneliti pertama yang merasakan kemudahan riset dengan
            asisten AI terdepan.
          </Typography>
          <Button
            variant="contained"
            size="large"
            onClick={() => router.push("/login")}
            sx={{ mt: 2 }}
          >
            Mulai (Coming Soon)
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

const features = [
  {
    title: "Workflow Interaktif",
    description:
      "Dengan workflow Riset AI yang interaktif, kamu dipandu untuk membuat riset berkualitas",
  },
  {
    title: "Sumber Ilmiah",
    description:
      "Tidak seperti ChatGPT, data yang kami sajikan berdasarkan paper ilmiah",
  },
  {
    title: "Hasil Berintegritas",
    description:
      "Semua karyamu yang ditulis melalui Riset AI dipastikan bebas plagiarisme dan lolos AI-checker.",
  },
];

export default LandingPage;
