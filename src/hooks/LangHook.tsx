export default function useLang() {
  const prefLang = 'ru';

  localStorage.lang = prefLang;

  return { prefLang };
}
