const LocaisReciclagem = require('../models/LocaisReciclagem');

module.exports = {
  async index(req,res) {
    const locais = await LocaisReciclagem.findAll();
    return res.json(locais);
  },

  async show(req, res) {
    const { id } = req.params;
    const localDeReciclagem = await LocaisReciclagem.findByPk(id);
    if(!localDeReciclagem){
      return res.status(400).json({ error: 'Local de Reciclagem não existe' });
    }
    return res.json(localDeReciclagem);
  },

  async create(req, res) {
    const { Identificacao, Logradouro, NumeroEndereco, Bairro, Complemento, Cidade, CEP, Capacidade  } = req.body;
    const localDeReciclagem = await LocaisReciclagem.create({ Identificacao, Logradouro, NumeroEndereco, Bairro, Complemento, Cidade, CEP, Capacidade });
    return res.json(localDeReciclagem)
  },

  async update(req, res) {
    const { id } = req.params;
    const { Identificacao, Logradouro, NumeroEndereco, Bairro, Complemento, Cidade, CEP, Capacidade  } = req.body;
    if(!await LocaisReciclagem.findByPk(id)){
      return res.status(400).json({ error: 'Local de Reciclagem não existe' });
    }
    await LocaisReciclagem.update(
      { 
        Identificacao, 
        Logradouro, 
        NumeroEndereco, 
        Bairro, 
        Complemento, 
        Cidade, 
        CEP, 
        Capacidade  
      },
      {
        where: {
          LocalReciclagem_Id: id
        },
      }
    );

    return res.json(await LocaisReciclagem.findByPk(id));
  },

  async delete(req, res) {
    const { id } = req.params;
    const localDeReciclagem = await LocaisReciclagem.findByPk(id);
    if(!localDeReciclagem){
      return res.status(400).json({ error: 'Local de Reciclagem não existe' });
    }
    await LocaisReciclagem.destroy({
      where: {
        LocalReciclagem_Id: id
      }
    });
    return res.status(200).json(localDeReciclagem);
  }


}