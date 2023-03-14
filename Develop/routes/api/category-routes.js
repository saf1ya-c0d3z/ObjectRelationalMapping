const router = require('express').Router();
const { Category, Product } = require('../../models');


// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  try {
    const userData = await Category.findAll({
      // Add Book as a second model to JOIN with
      include: [{ model: Product }],
    });
    res.status(200).json(userData);
  } catch (err) {
    res.status(500).json(err);
  }
});

//find one category by its ID value
router.get('/:id', async (req, res) => {
    try {
      const userData = await Category.findByPk(req.params.id, {
        // Add Book as a second model to JOIN with
        include: [{ model: Product }],
      });
  
      if (!userData) {
        res.status(404).json({ message: 'No Category found with that id!' });
        return;
      }
  
      res.status(200).json(userData);
    } catch (err) {
      res.status(500).json(err);
    }
  });

router.post('/', async (req, res) => {
  // create a new category
  try {
    const userData = await Category.create(req.body);
    res.status(200).json(userData);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.put('/:id', async (req, res) => {
  try {
    const userData = await Category.update(
      {
        // All the fields you can update and the data attached to the request body.
        category_names: req.body.category_names,
        
      },
      {
      where: {
        id: req.params.id,
      },
    });

    if (!userData) {
      res.status(404).json({ message: 'No Category found with that id!' });
      return;
    }

    res.status(200).json(userData);
  } catch (err) {
    res.status(500).json(err);
  }
  // update a category by its `id` value
});

router.delete('/:id', async (req, res) => {
  try {
    const userData = await Category.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (!userData) {
      res.status(404).json({ message: 'No Category found with that id!' });
      return;
    }

    res.status(200).json(userData);
  } catch (err) {
    res.status(500).json(err);
  }
  // delete a category by its `id` value
});

module.exports = router;
