module.exports = {
    async getMensagem(req, res) {
        const { message } = req.body;
        console.log(message);
        return res.status(200);
    }
}