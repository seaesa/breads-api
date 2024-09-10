// src/server.ts
import express2 from "express";
import cors from "cors";

// src/routes/routes.ts
import express from "express";
var router = express.Router();
router.get("/api", (req, res) => {
  return res.json({
    code: 200
  });
});
var routes_default = router;

// src/server.ts
var app = express2();
app.use(cors());
app.use(routes_default);
app.listen(3e3, () => console.log(`server running on http://localhost:3000`));
var server_default = app;
export {
  server_default as default
};
