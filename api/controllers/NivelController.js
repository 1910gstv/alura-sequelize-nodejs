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

    static async getNivelById(req, res){
      const { id } = req.params

      try {
          const nivel = await database.Niveis.findOne( {
              where: { 
                  id: Number(id)
              }
          });
          return res.status(200).json(nivel);
      } catch(error) {
          return res.status(500).json(error.message);
      }
  }

  static async createNivel (req, res) {
    const newNivel = req.body;
    try {
        const newNivelCreated = await database.Niveis.create(newNivel)
        return res.status(200).json(newNivelCreated)
    } catch (error) {
        return res.status(500).json(error.message)
    }
  }

  static async updateNivel(req, res){
    const { id } = req.params;
    const newInfo = req.body;
    
    try {
        await database.Niveis.update(newInfo, { where: {id: Number(id) }});
        const updatedNivel = await database.Niveis.findOne( {
            where: { 
                id: Number(id)
            }
        });
        return res.status(200).json(updatedNivel);
    } catch (error) {
        return res.status(500).json(error.message);
    }

  }

  static async deleteNivel(req, res) {
    const { id } = req.params;
    try {
        await database.Niveis.destroy({
            where: { 
                id: Number(id)
            }
        });
        return res.status(200).json({ mensagem: `id ${id} deletado!` })
    } catch (error) {
        return res.status(500).json(error.message);
    }
  }


}

module.exports = NivelController