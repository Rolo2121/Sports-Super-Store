const router = require('express').Router();
// const { where } = require('sequelize/types');
// const { UPSERT } = require('sequelize/types/query-types');
const { Category, Product } = require('../../models');
const { sequelize } = require('../../models/Product');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  // find all categories
  // be sure to include its associated Products
  const allCategories = Category.findAll( {}, 
    {
      include: {
        model: Product, Category, 
        attributes: ['id', 'category_name', 'product_name']
      }
    }
    )
    .then(dbCategoryData => res.json(dbCategoryData))
    .catch(err => {
      console.log(err);
      res.status(400).json(err);
    });
    
});

router.get('/:id', (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
const categories = Category.findOne( {},
  {
    include: {
      model: Product,
      attributes: ['id', 'category_name', 'product_name'
      ]
    }
  })
  .then(dbPostData => {
    if (!dbPostData) {
      res.status(404).json({ message: 'No post found with this id' });
      return;
    }
    res.json(dbPostData);
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

router.post('/', (req, res) => {
  // create a new category
  const errors = inputCheck(
    body,
    'id',
    'category_name'
  );
  if (errors) {
    res.status(400).json({ error: errors });
    return;
  }
  db.query(sql, params, (err, result) => {
    if (err) {
      res.status(400).json({ error: err.message });
      return;
    }
    res.json({
      message: 'success',
      data: body,
      changes: result.affectedRows
    });
  });
});


router.put('/:id', (req, res) => {
  // update a category by its `id` value
  const errors = inputCheck(req.body, 'party_id');
  if (errors) {
    res.status(400).json({ error: errors });
    return;
  }

  const sql = `UPDATE categories SET category_id = ? 
               WHERE id = ?`;
  const params = [req.body.category_id, req.params.id];
  db.query(sql, params, (err, result) => {
    if (err) {
      res.status(400).json({ error: err.message });
      // check if a record was found
    } else if (!result.affectedRows) {
      res.json({
        message: 'Category not found'
      });
    } else {
      res.json({
        message: 'success',
        data: req.body,
        changes: result.affectedRows
      });
    }
  });
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
  const sql = `DELETE FROM candidates WHERE id = ?`;
  const params = [req.params.id];

  db.query(sql, params, (err, result) => {
    if (err) {
      res.statusMessage(400).json({ error: res.message });
    } else if (!result.affectedRows) {
      res.json({
        message: 'Candidate not found'
      });
    } else {
      res.json({
        message: 'deleted',
        changes: result.affectedRows,
        id: req.params.id
      });
    }
  });
});

module.exports = router;
