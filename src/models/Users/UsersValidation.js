import { Joi, celebrate } from "celebrate";

const usersValidation = celebrate({
  body: Joi.object().keys({
    email: Joi.string().required(),
    password: Joi.string().required(),
  }),
});

export default usersValidation;
