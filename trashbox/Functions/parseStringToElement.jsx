// import { ping } from '@/styles/index.css';
let ping = 'ping';
export default function stringToElement(rawString) {
  if (!rawString) return;

  const mapObj = {
    // Для описаний
    '@member': `<span class=${ping}>@member</span>`,
    '@role1': `<span class=${ping}>@role1</span>`,
    '@role2': `<span class=${ping}>@role2</span>`,
    //Для аргументов
    '[member]': `[<span class=${ping}>@member</span> | ID]`,
    '<member>': `<<span class=${ping}>@member</span> | ID>`,
    '[roles]': `[<span class=${ping}>@role1</span> <span class=${ping}>@role2</span>]`,
    '<roles>': `<<span class=${ping}>@role1</span> <span class=${ping}>@role2</span>>`,
  };

  const string = rawString.replace(
    /@member|@role1|@role2|\[member\]|<member>|<roles>|<amount>/gi,
    function (matched) {
      return mapObj[matched];
    },
  );

  const element = <span dangerouslySetInnerHTML={{ __html: string }}></span>;

  return element;
}
