import express from "express";
const app = express();

app.use(express.json());
app.use(express.static("public"));

const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD;

app.post("/login", (req, res) => {
  const { password } = req.body;

  if (!ADMIN_PASSWORD) {
    console.error("ADMIN_PASSWORD not set");
    return res.status(500).json({ success: false });
  }

  if (password === ADMIN_PASSWORD) {
    res.json({ success: true });
  } else {
    res.json({ success: false });
  }
});

app.listen(process.env.PORT || 3000);
