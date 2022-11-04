import express from "express"
import payload from "payload"
import cors from "cors"
import path from "path"

require("dotenv").config()
const app = express()
const PORT = process.env.PORT
//cors
app.use(cors())
// expose assets directory as public
app.use("/assets", express.static(path.resolve(__dirname, "../assets")))

// Redirect root to Admin panel
app.get("/health-check", (_, res) => {
  res.json(`API is working fine at PORT: ${PORT}`)
})
app.get("/", (_, res) => {
  res.redirect("/admin")
})

// Initialize Payload
payload.init({
  secret: process.env.PAYLOAD_SECRET,
  mongoURL: process.env.MONGODB_URI,
  express: app,
  onInit: () => {
    payload.logger.info(`Payload Admin URL: ${payload.getAdminURL()}`)
  },
})

// Add your own express routes here
app.listen(PORT)
