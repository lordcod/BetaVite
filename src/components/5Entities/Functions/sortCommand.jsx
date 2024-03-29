import stringToElement from './parseStringToElement';
import Error from '../UI/Messages/Error';
import markDown from './parseMarkDown';

export default function sortCommand(command, prefLang) {
  prefLang = prefLang.prefLang;
  let errorMes = '';

  function addLanguageNotFoundError(value) {
    errorMes = Error('Нам не удалось найти подходящий для вас язык :(');
    return value;
  }

  function getInfo(find) {
    const result =
      command[find][
        //ПРоверяет наличие информации на предпочтительном языке
        !!command[find][prefLang]
          ? prefLang
          : //Если она отсутствует то проверяет наличие её английского варианта
          !!command[find]['en']
          ? addLanguageNotFoundError('en')
          : //Если и его нет то возвращает "то что есть"
            addLanguageNotFoundError(Object.keys(command[find])[0])
      ];

    return result;
  }

  //Передается название переменной в json файле
  const descriptionShort = getInfo('brief_descriptrion');
  const description = markDown(getInfo('descriptrion'));
  const argumentList = stringToElement(command.arguments.join(' '));
  const aliases = command.aliases[0] && `${command.aliases.join(' | ')}`;
  const deactivable = command.allowed_disabled;
  const comName = command.name;

  return [
    comName,
    aliases,
    description,
    descriptionShort,
    deactivable,
    argumentList,
    errorMes,
  ];
}
