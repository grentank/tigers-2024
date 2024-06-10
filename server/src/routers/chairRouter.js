const { Router } = require('express');
const { Chair } = require('../../db/models');

const chairRouter = Router();

chairRouter
  .route('/')
  .get(async (req, res) => res.json(await Chair.findAll()))
  .post(async (req, res) => res.status(201).json(await Chair.create(req.body)));

chairRouter.route('/:id').delete(async (req, res) => {
  const { id } = req.params;
  await Chair.destroy({ where: { id } });
  res.sendStatus(204);
});

module.exports = chairRouter;
