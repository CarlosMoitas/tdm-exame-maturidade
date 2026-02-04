import express from "express";
import cors from "cors";
import { router } from "./routers";

const app = express();

app.use(cors());
app.use(express.json());

// rotas
app.use("/api", router);

// healthcheck (Render gosta disso)
app.get("/", (_req, res) => {
  res.send("API TDM rodando 🚀");
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
