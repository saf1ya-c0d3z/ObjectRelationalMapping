const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint
  // find all tags
  router.get('/', async (req, res) => {
    try {
      // find all library cards and perform a JOIN to include all associated Readers
      const userData = await Tag.findAll({
        include: [{ model: Product }],
      });
      res.status(200).json(userData);
    } catch (err) {
      res.status(500).json(err);
    }
  // be sure to include its associated Product data
});

router.get('/:id', async (req, res) => {
  // find a single tag by its `id`
  try {
    const userData = await Tag.findByPk(req.params.id, {
      include: [{ model: Product }],
    });

    if (!userData) {
      res.status(404).json({ message: 'No Tag found with that id!' });
      return;
    }

    res.status(200).json(userData);
  } catch (err) {
    res.status(500).json(err);
  }
  // be sure to include its associated Product data
});

router.post('/', async (req, res) => {
  try {
    const userData = await Tag.create(req.body);
    res.status(200).json(userData);
  } catch (err) {
    res.status(400).json(err);
  }
  // create a new tag
});

router.put('/:id', async (req, res) => {
   try {
    const tagData = await Tag.update(req.body, {
      where: {
       id: req.params.id,
     },
   });

    if (!tagData) {
     res.status(404).json({ message: 'No Tag found with that id!' });
     return;
   }

   res.status(200).json(tagData);
   } catch (err) {
     res.status(500).json(err);
   }
  // update a tag's name by its `id` value
});

router.delete('/:id', async (req, res) => {
  try {
    const userData = await Tag.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (!userData) {
      res.status(404).json({ message: 'No Tag found with that id!' });
      return;
    }

    res.status(200).json(userData);
  } catch (err) {
    res.status(500).json(err);
  }
  // delete on tag by its `id` value
});

module.exports = router;
