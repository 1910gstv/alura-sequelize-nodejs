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

    static async getTurmaById(req,res) {
        const { id } = req.params;

        try {
            const turma = await database.Turmas.findOne({
                where: {
                    id: Number(id)
                }
            });
            return res.status(200).json(turma);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async createTurma(req, res) {
        const newTurma = req.body;
        try {
            const newTurmaCreated = await database.Turmas.create(newTurma);
            return res.status(200).json(newTurmaCreated);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async updateTurma(req,res) {
        const { id } = req.params;
        const newInfo = req.body;

        try {
            await database.Turmas.update(newInfo, { where: {id: Number(id)}});
            const updatedTurma = await database.Turmas.findOne({
                where: {
                    id: Number(id)
                }
            });
            return res.status(200).json(updatedTurma);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async deleteTurma(req, res) {
        const { id } = req.params;
        try {
            await database.Turmas.destroy({
                where: {
                    id: Number(id)
                }
            })
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

}

module.exports = TurmaController