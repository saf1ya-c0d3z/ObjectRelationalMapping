// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
Category.hasOne(Product, {
  foreignKey: 'category_id',
  // TODO: Add a comment describing the functionality of this property
  onDelete: 'CASCADE',
});

Product.belongsTo(Category, {
  foreignKey: 'category_id',
});
// Categories have many Products

// Products belongToMany Tags (through ProductTag)
Product.belongsTo(Tag, {
  foreignKey: 'category_id',
  // TODO: Add a comment describing the functionality of this property
  onDelete: 'CASCADE',
});

Tag.belongsTo(Product, {
  foreignKey: 'category_id',
});
// Tags belongToMany Products (through ProductTag)

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
