import { createContext, useContext, useEffect, useState } from 'react';
import api_commands_en from '@/Api/api_commands_en.json';
import api_commands_ru from '@/Api/api_commands_ru.json';
import { LangChangingContext } from '@context/LangContext';
import ReactMarkdown from 'react-markdown';
import SVGExpand from '@/components/5Entities/SVG/SVGExpand';

export const CommandsContext = createContext({
  category: <div />,
  toggleCategory: () => {},
  searchTerm: '',
  setSearchTerm: () => {},
  display: [],
  setDisplay: () => {},
  translations: [],
  commandsAll: [],
});

export const CommandsState = props => {
  const { lng, t } = useContext(LangChangingContext);
  const [translationsData, setTranslationsData] = useState({});
  const [translations, setTranslations] = useState({});
  const [category, setCategory] = useState(<div />);
  const [previosButton, setPreviosButton] = useState(<div />);
  const [display, setDisplay] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [commandsAll, setCommandsAll] = useState([]);

  const examplesList = list => {
    let examples = [];

    list.forEach(el => {
      let example = {
        usage: '',
        description: '',
      };
      example.usage = el[0];
      example.description = el[1];
      examples.push(example);
    });

    return examples;
  };

  function clickHandler(e) {
    let targetCommand = e.target.closest('.command');
    targetCommand.className =
      targetCommand.className == 'command' ? 'command opened' : 'command';
  }

  const commandsBuild = commands => {
    return commands.map(command => {
      let name = command.name;
      let ales = command.aliases[0] && `${command.aliases.join(' | ')}`;
      let args = command.arguments.join(' ');
      let dact = command.allowed_disabled;
      let brde = command.brief_descriptrion;
      let desc = <ReactMarkdown>{command.descriptrion}</ReactMarkdown>;
      let exms = !command.examples ? null : examplesList(command.examples);

      return (
        <div
          key={name}
          className='command'
          tabIndex='0'
          data-ales={command.aliases.join('|')}>
          <div className='flex flex-col'>
            <div
              className='command_name'
              onClick={clickHandler}>
              <span className='main-sec'>{name}</span> — {brde}
            </div>
            <div className='command_body'>
              <div className='command_body_content'>
                {desc}
                {(!!exms[0] || !!ales || !!args) && (
                  <div className='flex gap-1 flex-wrap'>
                    {!!ales && (
                      <>
                        <h4 className='font-bold w-full font text-lg'>
                          {t('commands.variants')}
                        </h4>
                        <p>
                          <span className='usage ales'>{ales}</span>
                        </p>
                      </>
                    )}
                    {!!args && (
                      <>
                        <h4 className='font-bold w-full font text-lg'>
                          {t('commands.usage')}
                        </h4>
                        <p>
                          <span className='usage'>
                            {name} {args}
                          </span>
                        </p>
                      </>
                    )}

                    {!!exms[0] && (
                      <>
                        <h4 className='font-bold w-full font text-lg'>
                          {t('commands.examples')}
                        </h4>
                        <div className='flex flex-col gap-1'>
                          {exms.map((ex, index) => {
                            return (
                              <div
                                className='flex flex-col'
                                key={name + index}>
                                <span className='usage self-start'>
                                  {ex.usage}
                                </span>
                                {ex.description}
                              </div>
                            );
                          })}
                        </div>
                      </>
                    )}
                  </div>
                )}
                <div className='flex gap-3 flex-wrap'>
                  <h4 className='font-bold w-full font text-lg'>
                    {dact ? (
                      <span className='text-green-500'>
                        {t('commands.can')}
                      </span>
                    ) : (
                      <span className='text-red-500'>{t('commands.cant')}</span>
                    )}{' '}
                    {t('commands.beTurnedOff')}
                  </h4>
                </div>
              </div>
            </div>
          </div>
          <div
            className='command_expand'
            onClick={clickHandler}>
            <SVGExpand />
          </div>
        </div>
      );
    });
  };

  useEffect(() => {
    setCategory(document.getElementById('all'));
    setPreviosButton(document.getElementById('all'));
  }, []);

  useEffect(() => {
    if (!(lng in translationsData)) {
      //pseudo fetch
      // fetch(`https://api.lordcord.fun/command_data/${lng}`).then(res => JSON.parse(res)).then(json => {translations[lng] = json}
      if (lng == 'ru') {
        setTranslationsData({
          ...translationsData,
          [lng]: { all: api_commands_ru },
        });
      } else {
        setTranslationsData({
          ...translationsData,
          [lng]: { all: api_commands_en },
        });
      }
    }

    if (translationsData.hasOwnProperty(lng)) {
      if (!translations.hasOwnProperty(lng)) {
        let transFullChache = {
          ...translations,
          [lng]: {
            all: translationsData[lng].all,
          },
        };

        setDisplay(commandsBuild(transFullChache[lng].all));

        translationsData[lng].all.forEach(command => {
          if (!transFullChache[lng][command.category])
            transFullChache[lng][command.category] = [];
          transFullChache[lng][command.category].push(command);
        });

        for (let categoryKey in transFullChache[lng]) {
          transFullChache[lng][categoryKey] = commandsBuild(
            transFullChache[lng][categoryKey],
          );
        }

        setTranslations(transFullChache);
        setDisplay(transFullChache[lng][category.id]);
        setCommandsAll(transFullChache[lng].all);

        console.log(`${lng.toUpperCase()} language is fully loaded`);
      } else {
        setDisplay(translations[lng][category.id]);
      }
    }
  }, [lng, translationsData, category]);

  useEffect(() => {
    if (
      translations.hasOwnProperty(lng) &&
      translations[lng].hasOwnProperty(category)
    ) {
      setDisplay(translations[lng].all);
    }
  }, [category]);

  const toggleCategory = clicked => {
    if (clicked !== previosButton) {
      clicked.classList.add('current');
      previosButton.classList.remove('current');
      setCategory(clicked);
      setPreviosButton(clicked);
    }
  };

  return (
    <CommandsContext.Provider
      value={{
        category,
        toggleCategory,
        searchTerm,
        setSearchTerm,
        display,
        setDisplay,
        translations,
        commandsAll,
      }}>
      {props.children}
    </CommandsContext.Provider>
  );
};
