export default function useLang() {
  const langList = ['en', 'ru', 'id', 'da', 'de', 'es', 'fr', 'pl', 'tr'];
  let prefLang = 'da';
  if (!langList.includes(prefLang)) {
    prefLang = 'en';
  }

  localStorage.lang = prefLang;

  return { prefLang };
}
