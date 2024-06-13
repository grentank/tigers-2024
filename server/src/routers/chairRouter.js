const { Router } = require('express');
const { Chair, User } = require('../../db/models');
const verifyAccessToken = require('../middlewares/verifyAccessToken');

const chairRouter = Router();

chairRouter
  .route('/')
  .get(async (req, res) => res.json(await Chair.findAll({ include: User })))
  .post(async (req, res) => {
    const newChair = await Chair.create(req.body);
    const chairWithUser = await Chair.findOne({
      where: { id: newChair.id },
      include: User,
    });
    res.status(201).json(chairWithUser);
  });

chairRouter
  .route('/:id')
  .delete(verifyAccessToken, async (req, res) => {
    const { id } = req.params;
    await Chair.destroy({ where: { id } });
    res.sendStatus(204);
  })
  .get(async (req, res) => {
    const { id } = req.params;
    const chair = await Chair.findOne({ where: { id }, include: User });
    setTimeout(() => {
      res.json(chair);
    }, 1000 * id);
    // res.json(chair);
  })
  .put(async (req, res) => {
    const { id } = req.params;
    await Chair.update({ ...req.body, User: undefined }, { where: { id } });
    const newChair = await Chair.findOne({ where: { id }, include: User });
    res.json(newChair);
  });

module.exports = chairRouter;
