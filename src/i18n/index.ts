import { createI18n } from 'vue-i18n';

const messages = {
  en: {
    message: 'Hello, world!',
  },
  zh: {
    message: '你好，世界！'
  },
};

const i18n = createI18n({
  legacy: false, // you must set `false`, to use Compostion API
  locale: 'zh', // set locale
  messages, // set locale messages
});

export default i18n;
