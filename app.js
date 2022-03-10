const app = require("express")();

app.get("/", (req, res) => {
    res.json({
        message: true
    });
});

app.get("/test", (req, res) => {
    res.json({
        message: 'Build SUCCESS'
    });
})

app.listen(4000, () => {
    console.log("Server started");
});
