const CONTACT_METHODS = [
  "звонок на телефон",
  "по почте",
  "написать в телеграм",
  "в вотсап"
];

window.FORMS_CONFIG = [
  // 1
  {
    formId: "form_01",
    title: "Работа маркетолога",
    sheetName: "01_Работа маркетолога",
    fields: [
      { name: "clinicName", label: "Название медицинского центра", type: "text", required: true },
      { name: "phone", label: "Номер телефона", type: "text", required: true },
      { name: "email", label: "Почта", type: "text", required: false },
      { name: "telegram", label: "Телеграм", type: "text", required: false },
      { name: "contactMethod", label: "Предпочтительный способ связи", type: "select", required: true, options: CONTACT_METHODS }
    ]
  },

  // 2
  {
    formId: "form_02",
    title: "Полное маркетинговое сопровождение",
    sheetName: "02_Полное сопровождение",
    fields: [
      { name: "clinicName", label: "Название медицинского центра", type: "text", required: true },
      { name: "phone", label: "Номер телефона", type: "text", required: true },
      { name: "email", label: "Почта", type: "text", required: false },
      { name: "telegram", label: "Телеграм", type: "text", required: false },
      { name: "specialistsCount", label: "Количество специалистов", type: "text", required: false },
      { name: "contactMethod", label: "Предпочтительный способ связи", type: "select", required: true, options: CONTACT_METHODS }
    ]
  },

  // 3
  {
    formId: "form_03",
    title: "Запись на консультацию",
    sheetName: "03_Консультация",
    fields: [
      { name: "fio", label: "ФИО", type: "text", required: true },
      { name: "phone", label: "Номер телефона", type: "text", required: true },
      { name: "email", label: "Почта", type: "text", required: false },
      { name: "telegram", label: "Телеграм", type: "text", required: false },
      { name: "question", label: "Какой у вас вопрос", type: "textarea", required: true },
      { name: "contactMethod", label: "Предпочтительный способ связи", type: "select", required: true, options: CONTACT_METHODS },
      { name: "desiredTime", label: "Желаемое время для консультации", type: "time", required: true },
      { name: "desiredDate", label: "Желаемая дата для консультации", type: "date", required: true }
    ]
  },

  // 4
  {
    formId: "form_04",
    title: "Анализ внутренних процессов маркетинга",
    sheetName: "04_Внутренние процессы",
    fields: [
      { name: "clinicName", label: "Название медицинского центра", type: "text", required: true },
      { name: "phone", label: "Номер телефона", type: "text", required: true },
      { name: "email", label: "Почта", type: "text", required: false },
      { name: "telegram", label: "Телеграм", type: "text", required: false },
      { name: "contactMethod", label: "Предпочтительный способ связи", type: "select", required: true, options: CONTACT_METHODS }
    ]
  },

  // 5
  {
    formId: "form_05",
    title: "Анализ бренда и репутации",
    sheetName: "05_Бренд и репутация",
    fields: [
      { name: "clinicName", label: "Название медицинского центра", type: "text", required: true },
      { name: "phone", label: "Номер телефона", type: "text", required: true },
      { name: "email", label: "Почта", type: "text", required: false },
      { name: "telegram", label: "Телеграм", type: "text", required: false },
      { name: "contactMethod", label: "Предпочтительный способ связи", type: "select", required: true, options: CONTACT_METHODS }
    ]
  },

  // 6
  {
    formId: "form_06",
    title: "Анализ воронки продаж клиники",
    sheetName: "06_Воронка продаж",
    fields: [
      { name: "clinicName", label: "Название медицинского центра", type: "text", required: true },
      { name: "phone", label: "Номер телефона", type: "text", required: true },
      { name: "email", label: "Почта", type: "text", required: false },
      { name: "telegram", label: "Телеграм", type: "text", required: false },
      { name: "contactMethod", label: "Предпочтительный способ связи", type: "select", required: true, options: CONTACT_METHODS }
    ]
  },

  // 7
  {
    formId: "form_07",
    title: "Анализ конкурентов",
    sheetName: "07_Конкуренты",
    fields: [
      { name: "clinicName", label: "Название медицинского центра", type: "text", required: true },
      { name: "phone", label: "Номер телефона", type: "text", required: true },
      { name: "email", label: "Почта", type: "text", required: false },
      { name: "telegram", label: "Телеграм", type: "text", required: false },
      { name: "contactMethod", label: "Предпочтительный способ связи", type: "select", required: true, options: CONTACT_METHODS }
    ]
  },

  // 8
  {
    formId: "form_08",
    title: "Анализ работы администраторов",
    sheetName: "08_Администраторы",
    fields: [
      { name: "clinicName", label: "Название медицинского центра", type: "text", required: true },
      { name: "phone", label: "Номер телефона", type: "text", required: true },
      { name: "email", label: "Почта", type: "text", required: false },
      { name: "telegram", label: "Телеграм", type: "text", required: false },
      { name: "contactMethod", label: "Предпочтительный способ связи", type: "select", required: true, options: CONTACT_METHODS }
    ]
  },

  // 9
  {
    formId: "form_09",
    title: "Анализ рекламных каналов",
    sheetName: "09_Рекламные каналы",
    fields: [
      { name: "clinicName", label: "Название медицинского центра", type: "text", required: true },
      { name: "phone", label: "Номер телефона", type: "text", required: true },
      { name: "email", label: "Почта", type: "text", required: false },
      { name: "telegram", label: "Телеграм", type: "text", required: false },
      { name: "contactMethod", label: "Предпочтительный способ связи", type: "select", required: true, options: CONTACT_METHODS }
    ]
  },

  // 10
  {
    formId: "form_10",
    title: "Анализ сайта и онлайн-присутствия",
    sheetName: "10_Сайт и онлайн",
    fields: [
      { name: "clinicName", label: "Название медицинского центра", type: "text", required: true },
      { name: "phone", label: "Номер телефона", type: "text", required: true },
      { name: "email", label: "Почта", type: "text", required: false },
      { name: "telegram", label: "Телеграм", type: "text", required: false },
      { name: "contactMethod", label: "Предпочтительный способ связи", type: "select", required: true, options: CONTACT_METHODS }
    ]
  },

  // 11
  {
    formId: "form_11",
    title: "Анализ социальных сетей клиники и врачей",
    sheetName: "11_Соцсети",
    fields: [
      { name: "clinicName", label: "Название медицинского центра", type: "text", required: true },
      { name: "phone", label: "Номер телефона", type: "text", required: true },
      { name: "email", label: "Почта", type: "text", required: false },
      { name: "telegram", label: "Телеграм", type: "text", required: false },
      { name: "contactMethod", label: "Предпочтительный способ связи", type: "select", required: true, options: CONTACT_METHODS }
    ]
  },

  // 12
  {
    formId: "form_12",
    title: "Анализ среднего чека и LTV пациента",
    sheetName: "12_Средний чек и LTV",
    fields: [
      { name: "clinicName", label: "Название медицинского центра", type: "text", required: true },
      { name: "phone", label: "Номер телефона", type: "text", required: true },
      { name: "email", label: "Почта", type: "text", required: false },
      { name: "telegram", label: "Телеграм", type: "text", required: false },
      { name: "contactMethod", label: "Предпочтительный способ связи", type: "select", required: true, options: CONTACT_METHODS }
    ]
  },

  // 13
  {
    formId: "form_13",
    title: "Анализ целевой аудитории и портрет пациентов",
    sheetName: "13_ЦА и портрет",
    fields: [
      { name: "clinicName", label: "Название медицинского центра", type: "text", required: true },
      { name: "phone", label: "Номер телефона", type: "text", required: true },
      { name: "email", label: "Почта", type: "text", required: false },
      { name: "telegram", label: "Телеграм", type: "text", required: false },
      { name: "contactMethod", label: "Предпочтительный способ связи", type: "select", required: true, options: CONTACT_METHODS }
    ]
  },

  // 14
  {
    formId: "form_14",
    title: "Маркетинговый аудит клиники",
    sheetName: "14_Маркетинговый аудит",
    fields: [
      { name: "clinicName", label: "Название медицинского центра", type: "text", required: true },
      { name: "phone", label: "Номер телефона", type: "text", required: true },
      { name: "email", label: "Почта", type: "text", required: false },
      { name: "telegram", label: "Телеграм", type: "text", required: false },
      { name: "contactMethod", label: "Предпочтительный способ связи", type: "select", required: true, options: CONTACT_METHODS }
    ]
  },

  // 15
  {
    formId: "form_15",
    title: "Финансово-маркетинговый анализ",
    sheetName: "15_Финмаркетинг",
    fields: [
      { name: "clinicName", label: "Название медицинского центра", type: "text", required: true },
      { name: "phone", label: "Номер телефона", type: "text", required: true },
      { name: "email", label: "Почта", type: "text", required: false },
      { name: "telegram", label: "Телеграм", type: "text", required: false },
      { name: "contactMethod", label: "Предпочтительный способ связи", type: "select", required: true, options: CONTACT_METHODS }
    ]
  },

  // 16
  {
    formId: "form_16",
    title: "Диагностика",
    sheetName: "16_Диагностика",
    fields: [
      { name: "fio", label: "ФИО", type: "text", required: true },
      { name: "phone", label: "Номер телефона", type: "text", required: true },
      { name: "email", label: "Почта", type: "text", required: false },
      { name: "telegram", label: "Телеграм", type: "text", required: false },
      { name: "instaNick", label: "Ваш ник в Инстаграм", type: "text", required: true },
      { name: "contactMethod", label: "Предпочтительный способ связи", type: "select", required: true, options: CONTACT_METHODS },
      { name: "desiredTime", label: "Желаемое время для консультации", type: "time", required: true },
      { name: "desiredDate", label: "Желаемая дата для консультации", type: "date", required: true }
    ]
  },

  // 17
  {
    formId: "form_17",
    title: "Ведение страницы в инстаграм врача",
    sheetName: "17_Инстаграм врач",
    fields: [
      { name: "fio", label: "ФИО", type: "text", required: true },
      { name: "phone", label: "Номер телефона", type: "text", required: true },
      { name: "email", label: "Почта", type: "text", required: false },
      { name: "telegram", label: "Телеграм", type: "text", required: false },
      { name: "instaNick", label: "Ваш ник в Инстаграм", type: "text", required: true },
      { name: "contactMethod", label: "Предпочтительный способ связи", type: "select", required: true, options: CONTACT_METHODS },
      { name: "desiredTime", label: "Желаемое время для консультации", type: "time", required: true },
      { name: "desiredDate", label: "Желаемая дата для консультации", type: "date", required: true }
    ]
  },

  // 18
  {
    formId: "form_18",
    title: "Ведение страницы в инстаграм и Youtube врача",
    sheetName: "18_Инста+YouTube",
    fields: [
      { name: "fio", label: "ФИО", type: "text", required: true },
      { name: "phone", label: "Номер телефона", type: "text", required: true },
      { name: "email", label: "Почта", type: "text", required: false },
      { name: "telegram", label: "Телеграм", type: "text", required: false },
      { name: "instaNick", label: "Ваш ник в Инстаграм", type: "text", required: true },
      { name: "contactMethod", label: "Предпочтительный способ связи", type: "select", required: true, options: CONTACT_METHODS },
      { name: "desiredTime", label: "Желаемое время для консультации", type: "time", required: true },
      { name: "desiredDate", label: "Желаемая дата для консультации", type: "date", required: true }
    ]
  }
];
