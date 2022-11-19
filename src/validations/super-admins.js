import Joi from 'joi';

export const schema = Joi.object({
  name: Joi.string()
    .min(3)
    .max(20)
    .alphanum()
    .pattern(/^([^0-9]*)$/i)
    .required()
    .messages({
      'string.empty': 'Name cannot be empty',
      'string.min': 'Name must have at least 3 characters',
      'string.max': 'Name cannot exceed 20 characters',
      'string.alphanum': 'Name cannot not have special characters',
      'string.pattern.base': 'Name can only have letters',
      'strig.required': 'Name is required'
    }),
  lastName: Joi.string()
    .min(3)
    .max(25)
    .alphanum()
    .pattern(/^([^0-9]*)$/i)
    .required()
    .messages({
      'string.empty': 'Last Name cannot be empty',
      'string.min': 'Last Name must have at least 3 characters',
      'string.max': 'Last Name cannot exceed 25 characters',
      'string.alphanum': 'Last Name cannot not have special characters',
      'string.pattern.base': 'Last Name can only have letters',
      'strig.required': 'Last Name is required'
    }),
  email: Joi.string()
    .email({ tlds: { allow: false } })
    .required()
    .messages({
      'string.empty': 'Email cannot be empty',
      'string.email': 'Email needs to be a valid address',
      'string.required': 'Email is required'
    }),
  password: Joi.string().min(8).alphanum().required().messages({
    'string.empty': 'Password cannot be empty',
    'string.min': 'Password must have at least 8 characters',
    'string.alphanum': 'Password cannot contain special characters',
    'string.required': 'Password is required'
  }),
  repeatPassword: Joi.any().valid(Joi.ref('password')).required().messages({
    'any.only': 'Passwords must match'
  })
});
