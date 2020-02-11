const Context = require("./../models/contextModel");

module.exports = class ContextController {
    static async addNewContext(req, res) {
        try {
            const context = await Context.create(req.body);
            return res.status("201").json({ context });
        } catch (e) {
            return res.status(500).json({ e });
        }
    }

    static async listOfContexts(req, res) {
        try {
            const context = await Context.find().populate("words");
            return res.status(200).json(context);
        } catch (e) {
            return res.status("500").json({ e });
        }
    }
};
