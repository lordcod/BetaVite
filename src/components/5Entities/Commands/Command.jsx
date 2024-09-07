import React from 'react';
import ReactMarkdown from 'react-markdown';
import SVGExpand from '@/components/5Entities/SVG/SVGExpand';

export default function Command(data) {
  let name = data.name;
  let ales = data.aliases[0] && `${data.aliases.join(' | ')}`;
  let args = data.arguments.join(' ');
  let dact = data.allowed_disabled;
  let brde = data.brief_descriptrion;
  let desc = <ReactMarkdown>{data.descriptrion}</ReactMarkdown>;
  let exms = !data.examples ? null : examplesList(data.examples);

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
}
