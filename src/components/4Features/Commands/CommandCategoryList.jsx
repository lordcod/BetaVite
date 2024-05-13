import sortCommand from '@/components/5Entities/Functions/sortCommand';
import SVGExpand from '@/components/5Entities/SVG/SVGExpand';
import { LangChangingContext } from '@context/LangContext';
import { useContext } from 'react';

export default function CommandsList(category) {
  const { t, lng } = useContext(LangChangingContext);

  function clickHandler(e) {
    let targetCommand = e.target.closest('.command');
    targetCommand.className =
      targetCommand.className == 'command' ? 'command opened' : 'command';
  }

  const List = category.map(command => {
    const [
      comName,
      aliases,
      description,
      descriptionShort,
      deactivable,
      argumentList,
      examples,
    ] = sortCommand(command, lng);

    return (
      <div
        key={comName}
        className='command'
        tabIndex='0'>
        <div className='flex flex-col'>
          <div
            className='command_name'
            onClick={clickHandler}>
            <span className='main-sec'>{comName}</span> — {descriptionShort}
          </div>
          <div className='command_body'>
            <div className='command_body_content'>
              {description}
              {(examples || aliases) && (
                <div className='flex gap-1 flex-wrap'>
                  {aliases && (
                    <>
                      <h4 className='font-bold w-full font text-lg'>
                        {t('commands.variants')}
                      </h4>
                      <p>
                        <span className='usage'>{aliases}</span>
                      </p>
                    </>
                  )}
                  {examples && (
                    <>
                      <h4 className='font-bold w-full font text-lg'>
                        {t('commands.examples')}
                      </h4>
                      <div className='flex flex-col gap-1'>
                        {examples.map((ex, index) => {
                          return (
                            <div
                              className='flex flex-col'
                              key={comName + index}>
                              <div className='usage self-start'>{ex.usage}</div>
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
                  {deactivable ? (
                    <span className='text-green-500'>{t('commands.can')}</span>
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

  return <>{List}</>;
}
