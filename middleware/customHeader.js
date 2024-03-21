const customHeader = (req, res, next) => {
    try {
        const apiKey = req.headers['api_key'];
        if (apiKey === "rous-02") {
            next
        } else {
            res.status(403);
            res.send({ error: "API_KEY_INVALIDA" });
        }
    } catch (error) {
        res.status(403);
        res.send({ error: "ALGO-OCURRIO_EN_EL_PROCESO" });
    }
}
module.exports = { customHeader }