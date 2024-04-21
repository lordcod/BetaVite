import stringToElement from './parseStringToElement';
import markDown from './parseMarkDown';

export default function sortCommand(command, prefLang) {
  const translateList = list => {
    let translatedList = [];
    list.forEach(el => {
      translatedList.push(el[prefLang]);
    });
    return translatedList;
  };

  const examplesList = list => {
    let examples = [];

    list.forEach(el => {
      let example = {
        usage: '',
        description: '',
      };
      example.usage = el[0];
      example.description = el[1][prefLang];
      examples.push(example);
    });

    return examples;
  };

  const comName = command.name;
  const aliases = command.aliases[0] && `${command.aliases.join(' | ')}`;
  const argumentList = translateList(command.arguments).join(' ');
  const deactivable = command.allowed_disabled;
  const descriptionShort = command.brief_descriptrion[prefLang];
  const description = markDown(command.descriptrion[prefLang]);
  const examples = !command.examples ? null : examplesList(command.examples);

  return [
    comName,
    aliases,
    description,
    descriptionShort,
    deactivable,
    argumentList,
    examples,
  ];
}
