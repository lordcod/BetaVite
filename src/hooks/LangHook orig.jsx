export default function useLang() {
  //Локализации сайта
  // const langList = ['en', 'ru', 'id', 'da', 'de', 'es', 'fr', 'pl', 'tr'];
  const langList = ['ru'];
  //Язык браузера
  const langBrowser = Intl.DateTimeFormat().resolvedOptions().locale;
  //Язык локального хранилища
  const langLS = localStorage.lang;
  //Если в локальном хранилище есть язык, то предпочтительный язык равен иму
  const prefLang = langList.includes(langLS)
    ? langLS
    : langList.includes(langBrowser)
    ? //Если нет, то предпочтительный язык - язык браузра
      langBrowser
    : //Если языка браузера нет в локализациях сайта то предпочтительный язык - английский
      'en';

  localStorage.lang = prefLang;

  return { prefLang };
}
