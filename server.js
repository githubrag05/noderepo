const express = require("express")
const app = express()

app.get("/", (req, res) => res.send({"message": "Success"}))

app.listen(3003, () => console.log("App listening PORT 3003"))