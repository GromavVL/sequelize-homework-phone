const { sequelize, Phone } = require('./models');
const { Op } = require('sequelize');

// const limit =

(async function () {
  //------додавання нового телефону
  const createPhone = {
    model: '17 Pro',
    brand: 'IPhone',
    year_production: '2025-01-01',
    size_ram: '11 GB',
    cpu: 'M5',
    screen_diagonal: '6.11"',
    is_nfc: true,
  };
  //   const createdPhone = await Phone.create(createPhone);

  //------отримання списку телефонів
  // (* 3-я сторінка при перегляді по 4 телефони на сторінці, упорядкованих за роком виробництва),
  const foundPhoneAll = await Phone.findAll({
    raw: true,
    limit: 4,
    offset: 3,
    order: [['year_production', 'ASC']],
  });
  //   console.log('foundPhoneAll :>> ', foundPhoneAll);

  //-----*отримання списку телефонів поточного року видання,
  const getPhoneByDateCurrentOnly = await Phone.findAll({
    raw: true,
    where: {
      year_production: {
        [Op.eq]: '2026',
      },
    },
  });
  //   console.log('getPhoneByDateOnly :>> ', getPhoneByDateOnly);

  //------*отримання списку телефонів старше 2023 року випуску,
  const getPhoneByDate = await Phone.findAll({
    raw: true,
    where: {
      year_production: {
        [Op.gt]: '2023-12-31',
      },
    },
  });
  console.log('getPhoneByDate :>> ', getPhoneByDate);

  //------оновлення: змінити розмір оперативної пам'яті телефону з id: 1,
  const updatePhoneRamById = await Phone.update(
    { size_ram: '3 GB' },
    {
      where: {
        id: {
          [Op.eq]: '10',
        },
      },
    }
  );

  //-----*оновлення: додати нфс всім телефонам 2024 року випуску,
  const updatePhoneAddNfc = await Phone.update(
    { is_nfc: true },
    {
      where: {
        year_production: {
          [Op.gte]: '2024',
        },
      },
    }
  );

  //------видалення телефону з id: 2.
  // const deletePhoneById = await Phone.destroy({ where: { id: 2 } });

  //-----*видалення телефонів 2016 року випуску.
  const deletePhoneByDate = await Phone.destroy({
    where: {
      year_production: {
        [Op.eq]: '2016',
      },
    },
  });
})();
