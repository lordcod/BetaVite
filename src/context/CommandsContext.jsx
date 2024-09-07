import { createContext, useContext, useEffect, useState } from 'react';
// import api_commands_en from '@/Api/api_commands_en.json';
// import api_commands_ru from '@/Api/api_commands_ru.json';
import { LangChangingContext } from '@context/LangContext';
import ReactMarkdown from 'react-markdown';
import SVGExpand from '@/components/5Entities/SVG/SVGExpand';
import Error from '../components/5Entities/UI/Messages/Error';
import MainLoader from '@components/5Entities/Loaders/MainLoader';

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

  async function getLng(lang) {
    setDisplay(
      <div
        className='dd-menu command'
        tabIndex='0'>
        <div className='dd-menu_container'>
          <div
            className='dd-menu_name'
            onClick={clickHandler}>
            <span className='main-sec'>Загрузка</span> — Список команд
            загружается
          </div>
          <div className='dd-menu_body'>
            <div className='dd-menu_body_content'>
              Немного подождите пока список команд бота загрузится
            </div>
          </div>
        </div>
        <div
          className='dd-menu_expand'
          onClick={clickHandler}>
          <SVGExpand />
        </div>
      </div>,
    );

    await fetch(`https://api.lordcord.fun/command_data/${lang}`)
      .then(response => response.json())
      .then(data =>
        setTranslationsData({ ...translationsData, [lang]: { all: data } }),
      )
      .catch(e => {
        console.error(
          `Failed to get a list of commands:\n%c${e.stack}`,
          `color: #f44;`,
        );

        // setDisplay(
        //   Error(
        //     `Failed to get a list of commands (${e.name})`,
        //     e.message,
        //     e.stack,
        //   ),
        // );

        setDisplay(
          <div
            className='dd-menu command'
            tabIndex='0'>
            <div className='dd-menu_container'>
              <div
                className='dd-menu_name'
                onClick={clickHandler}>
                <span className='main-sec'>Ошибка</span> — Скопируйте эту ошибку
                и отправьте в наш{' '}
                <a
                  href='https://support.lordcord.fun/'
                  className='link'>
                  сервер поддержки
                </a>
              </div>
              <div className='dd-menu_body'>
                <div className='dd-menu_body_content'>
                  Подождите некоторое время и перезагрузите страницу
                  <h4>{e.message}</h4>
                  {e.stack}
                </div>
              </div>
            </div>
            <div
              className='dd-menu_expand'
              onClick={clickHandler}>
              <SVGExpand />
            </div>
          </div>,
        );
      });
  }

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
    let targetCommand = e.target.closest('.dd-menu');
    targetCommand.className =
      targetCommand.className == 'dd-menu command'
        ? 'dd-menu command active'
        : 'dd-menu command';
  }

  const commandsBuild = commands => {
    return commands.map(command => {
      let name = command.name;
      let ales = command.aliases[0] ?? `${command.aliases.join(' | ')}`;
      let args = command.arguments.join(' ');
      let dact = command.allowed_disabled;
      let brde = command.brief_descriptrion;
      let desc = <ReactMarkdown>{command.descriptrion}</ReactMarkdown>;
      let exms = !command.examples ? null : examplesList(command.examples);

      return (
        <div
          key={name}
          className='dd-menu command'
          tabIndex='0'
          data-search={name + (!!ales ? '|' + command.aliases.join('|') : '')}>
          <div className='dd-menu_container'>
            <div
              className='dd-menu_name'
              onClick={clickHandler}>
              <span className='main-sec'>{name}</span> — {brde}
            </div>
            <div className='dd-menu_body'>
              <div className='dd-menu_body_content'>
                {desc}
                {(!!exms[0] || !!ales || !!args) && (
                  <div className='command-info'>
                    {!!ales && (
                      <>
                        <h4>{t('commands.variants')}</h4>
                        <span className='usage ales'>{ales}</span>
                      </>
                    )}
                    {!!args && (
                      <>
                        <h4>{t('commands.usage')}</h4>
                        <span className='usage'>
                          {name} {args}
                        </span>
                      </>
                    )}

                    {!!exms[0] && (
                      <>
                        <h4>{t('commands.examples')}</h4>
                        <div className='command-exams'>
                          {exms.map((ex, index) => {
                            return (
                              <div
                                className='command-exam'
                                key={name + index}>
                                <span className='usage'>{ex.usage}</span>
                                {ex.description}
                              </div>
                            );
                          })}
                        </div>
                      </>
                    )}
                  </div>
                )}
                <div className='command-disable'>
                  <h4>
                    {dact ? (
                      <span className='command-switchable'>
                        {t('commands.can')}
                      </span>
                    ) : (
                      <span className='commads-non-switchable'>
                        {t('commands.cant')}
                      </span>
                    )}{' '}
                    {t('commands.beTurnedOff')}
                  </h4>
                </div>
              </div>
            </div>
          </div>
          <div
            className='dd-menu_expand'
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
    try {
      if (!(lng in translationsData)) {
        getLng(lng);
      }

      if (translationsData.hasOwnProperty(lng)) {
        if (!translations.hasOwnProperty(lng)) {
          let transFullChache = {
            ...translations,
            [lng]: {
              all: translationsData[lng].all,
            },
          };

          // setDisplay(commandsBuild(transFullChache[lng].all));

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
    } catch (e) {
      console.error(
        `The list of commands could not be compiled:\n%c${e.stack}`,
        `color: #f44;`,
      );
      setDisplay(
        <div
          className='dd-menu command'
          tabIndex='0'>
          <div className='dd-menu_container'>
            <div
              className='dd-menu_name'
              onClick={clickHandler}>
              <span className='main-sec'>Ошибка</span> — Скопируйте эту ошибку и
              отправьте в наш{' '}
              <a
                href='https://support.lordcord.fun/'
                className='link'>
                сервер поддержки
              </a>
            </div>
            <div className='dd-menu_body'>
              <div className='dd-menu_body_content'>
                Подождите некоторое время и перезагрузите страницу
                <h4>{e.message}</h4>
                {e.stack}
              </div>
            </div>
          </div>
          <div
            className='dd-menu_expand'
            onClick={clickHandler}>
            <SVGExpand />
          </div>
        </div>,
      );
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
      clicked.classList.add('active');
      previosButton.classList.remove('active');
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
