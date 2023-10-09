const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3001;

app.use(bodyParser.json());
app.use(cors());

const demandas = [];

app.get('/demandas', (req, res) => {
  res.json(demandas);
});

app.post('/demandas', (req, res) => {
  const novaDemanda = req.body;
  novaDemanda.id = Date.now().toString();
  novaDemanda.data = req.body.data;

  demandas.push(novaDemanda);
  res.status(201).json(novaDemanda);
});

app.put('/demandas/:id', (req, res) => {
  const id = req.params.id;
  const index = demandas.findIndex((demanda) => demanda.id === id);

  if (index === -1) {
    return res.status(404).json({ mensagem: 'Demanda não encontrada.' });
  }

  const demandaAtualizada = req.body;
  demandas[index] = demandaAtualizada;

  res.json(demandaAtualizada);
});

app.delete('/demandas/:id', (req, res) => {
  const id = req.params.id;
  const index = demandas.findIndex((demanda) => demanda.id === id);

  if (index === -1) {
    return res.status(404).json({ mensagem: 'Demanda não encontrada.' });
  }

  demandas.splice(index, 1);
  res.json({ mensagem: 'Demanda removida com sucesso.' });
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
