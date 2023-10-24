const database = require('../models');

class NivelController {

    static async getAllNiveis(req, res) {
      try {
        const allNiveis = await database.Niveis.findAll()
        return res.status(200).json(allNiveis)
      } catch (error) {
        return res.status(500).json(error.message);
      }
    }
}

module.exports = NivelController