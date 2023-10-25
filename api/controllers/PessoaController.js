const database = require('../models');

class PessoaController {
    static async getAllPessoas(req, res) {
        try {
            const allPessoas = await database.Pessoas.findAll();
            return res.status(200).json(allPessoas);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async getPessoaById(req, res){
        const { id } = req.params

        try {
            const pessoa = await database.Pessoas.findOne( {
                where: { 
                    id: Number(id)
                }
            });
            return res.status(200).json(pessoa);
        } catch(error) {
            return res.status(500).json(error.message);
        }
    }

    static async createPessoa (req, res) {
        const newPessoa = req.body;
        try {
            const newPessoaCreated = await database.Pessoas.create(newPessoa)
            return res.status(200).json(newPessoaCreated)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async updatePessoa(req, res){
        const { id } = req.params;
        const newInfo = req.body;
        
        try {
            await database.Pessoas.update(newInfo, { where: {id: Number(id) }});
            const updatedPessoa = await database.Pessoas.findOne( {
                where: { 
                    id: Number(id)
                }
            });
            return res.status(200).json(updatedPessoa);
        } catch (error) {
            return res.status(500).json(error.message);
        }

    }

    static async deletePessoa(req, res) {
        const { id } = req.params;
        try {
            await database.Pessoas.destroy({
                where: { 
                    id: Number(id)
                }
            });
            return res.status(200).json({ mensagem: `id ${id} deletado!` })
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async getMatriculaById(req, res){
        const { estudanteId, matriculaId } = req.params

        try {
            const matricula = await database.Matriculas.findOne( {
                where: { 
                    id: Number(matriculaId),
                    estudante_id: Number(estudanteId)
                }
            });
            return res.status(200).json(matricula);
        } catch(error) {
            return res.status(500).json(error.message);
        }
    }

    static async createMatricula (req, res) {
        const { estudanteId } = req.params;
        const newMatricula = { ...req.body, estudante_id: Number(estudanteId)};
        try {
            const newMatriculaCreated = await database.Matriculas.create(newMatricula)
            return res.status(200).json(newMatriculaCreated)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    
    static async updateMatricula(req, res){
        const { estudanteId, matriculaId } = req.params;
        const newInfo = req.body;
        
        try {
            await database.Matriculas.update(newInfo, { 
                where: {
                    id: Number(matriculaId),
                    estudante_id: Number(estudanteId) 
                }
            });
            const updatedMatricula = await database.Matriculas.findOne( {
                where: { 
                    id: Number(matriculaId)
                }
            });
            return res.status(200).json(updatedMatricula);
        } catch (error) {
            return res.status(500).json(error.message);
        }

    }

    static async deleteMatricula(req, res) {
        const { estudanteId, matriculaId } = req.params;
        try {
            await database.Matriculas.destroy({
                where: { 
                    id: Number(matriculaId)
                }
            });
            return res.status(200).json({ mensagem: `id ${matriculaId} deletado!` })
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

}

module.exports = PessoaController;