const database = require('../models');

class TurmaController {

    static async getAllTurmas(req, res) {
        try {
            const allTurmas = await database.Turmas.findAll();
            return res.status(200).json(allTurmas);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

}

module.exports = TurmaController