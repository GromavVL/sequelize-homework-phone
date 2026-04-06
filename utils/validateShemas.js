const yup = require('yup');

const PHONE_UPDATE_VALIDATE_SCHEMAS = yup.object({
  model: yup.string(),

  brand: yup.string(),

  year_production: yup
    .string()
    .matches(/^\d{4}-\d{2}-\d{2}$/, 'Введіть коректну дату у форматі YYYY-MM-DD'),

  size_ram: yup
    .string()
    .matches(
      /^\d+\s*(GB|MB|TB)$/i,
      'Вкажіть об\'єм разом з одиницями виміру (наприклад, "8 GB")'
    ),

  cpu: yup.string(),

  screen_diagonal: yup.string(),

  is_nfc: yup
    .boolean()
    .typeError('Поле is_nfc має бути логічного типу (true або false)'),
});

const PHONE_CREATE_VALIDATE_SCHEMAS = yup.object({
  model: yup.string().min(2).max(64).required("Модель є обов'язковою"),
  brand: yup.string().min(2).max(64).required("Бренд є обов'язковим"),
  year_production: yup
    .string()
    .matches(/^\d{4}-\d{2}-\d{2}$/, 'Введіть коректну дату у форматі YYYY-MM-DD')
    .required("Дата виробництва є обов'язковою"),
  size_ram: yup
    .string()
    .matches(
      /^\d+\s*(GB|MB|TB)$/i,
      'Вкажіть об\'єм разом з одиницями виміру (наприклад, "8 GB")'
    )
    .required("Об'єм оперативної пам'яті є обов'язковим"),
  cpu: yup.string().min(2).max(64).required("Назва процесора є обов'язковою"),

  screen_diagonal: yup.string().required("Діагональ екрану є обов'язковою"),

  is_nfc: yup
    .boolean()
    .typeError('Поле is_nfc має бути логічного типу (true або false)')
    .required("Наявність NFC є обов'язковою"),
});

module.exports = {
  PHONE_UPDATE_VALIDATE_SCHEMAS,
  PHONE_CREATE_VALIDATE_SCHEMAS,
};
