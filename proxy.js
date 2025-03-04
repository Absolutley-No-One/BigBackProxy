const express = require("express");
const http = require("http");
const { createProxyMiddleware } = require("http-proxy-middleware");
const app = express();

// Serve static files like HTML, JS, CSS
app.use(express.static("public"));

// Handle the proxy route, which will redirect to the user inputted URL
app.use("/proxy", (req, res) => {
  const targetUrl = req.query.url;
  if (!targetUrl) {
    return res.status(400).send("URL is required");
  }

  // Create a proxy to the target URL provided
  createProxyMiddleware({
    target: targetUrl,
    changeOrigin: true,
    secure: false,
    logLevel: 'debug',
  })(req, res);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
