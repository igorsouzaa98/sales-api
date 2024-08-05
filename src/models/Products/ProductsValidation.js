import { Joi, celebrate } from "celebrate";

const productsValidation = celebrate({
  body: Joi.object().keys({
    name: Joi.string().required(),
    price: Joi.number().required(),
    brand: Joi.string().required(),
    amount: Joi.number().required(),
  }),
});

export default productsValidation;
