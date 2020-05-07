import { addnewProduct, getProducts, getProductWithID } from '../controllers/controllers';

const routes = app => {
  app.route('/products/:ProductID')
    .get(getProductWithID);
  app.route('/products')
    .get(getProducts)
    .post(addnewProduct);
};

export default routes;
