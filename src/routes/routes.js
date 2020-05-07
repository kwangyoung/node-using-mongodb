import { addnewProduct, getProducts, getProductWithID, updateProduct, deleteProduct } from '../controllers/controllers';

const routes = app => {
  app.route('/products/:ProductID')
    .get(getProductWithID)
    .put(updateProduct)
    .delete(deleteProduct);
  app.route('/products')
    .get(getProducts)
    .post(addnewProduct);
};

export default routes;
