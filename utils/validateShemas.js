const yup = require('yup');

const PHONE_UPDATE_VALIDATE_SCHEMAS = yup.object({
  model: yup.string(),

  brand: yup.string(),

  yearProduction: yup
    .string()
    .matches(/^\d{4}-\d{2}-\d{2}$/, 'Введіть коректну дату у форматі YYYY-MM-DD'),

  sizeRam: yup
    .string()
    .matches(
      /^\d+\s*(GB|MB|TB)$/i,
      'Вкажіть об\'єм разом з одиницями виміру (наприклад, "8 GB")'
    ),

  cpu: yup.string(),

  screenDiagonal: yup.string(),

  isNfc: yup
    .boolean()
    .typeError('Поле isNfc має бути логічного типу (true або false)'),
});

const PHONE_CREATE_VALIDATE_SCHEMAS = yup.object({
  model: yup.string().min(2).max(64).required("Модель є обов'язковою"),
  brand: yup.string().min(2).max(64).required("Бренд є обов'язковим"),
  yearProduction: yup
    .string()
    .matches(/^\d{4}-\d{2}-\d{2}$/, 'Введіть коректну дату у форматі YYYY-MM-DD')
    .required("Дата виробництва є обов'язковою"),
  sizeRam: yup
    .string()
    .matches(
      /^\d+\s*(GB|MB|TB)$/i,
      'Вкажіть об\'єм разом з одиницями виміру (наприклад, "8 GB")'
    )
    .required("Об'єм оперативної пам'яті є обов'язковим"),
  cpu: yup.string().min(2).max(64).required("Назва процесора є обов'язковою"),

  screenDiagonal: yup.string().required("Діагональ екрану є обов'язковою"),

  isNfc: yup
    .boolean()
    .typeError('Поле isNfc має бути логічного типу (true або false)')
    .required("Наявність NFC є обов'язковою"),
});

module.exports = {
  PHONE_UPDATE_VALIDATE_SCHEMAS,
  PHONE_CREATE_VALIDATE_SCHEMAS,
};
