import sortCommand from '@/components/5Entities/Functions/sortCommand';
import SVGExpand from '@/components/5Entities/SVG/SVGExpand';
import useLang from '@/hooks/LangHook';

const prefLang = useLang();

export default function CommandsList(category) {
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
      errorMes,
    ] = sortCommand(command, prefLang);

    return (
      <div
        key={comName}
        className='command'>
        <div className='command_wrapper'>
          <div
            className='command__title'
            onClick={clickHandler}>
            <div>
              <span className='command__title_name'>{comName}</span> —{' '}
              {descriptionShort}
            </div>
          </div>
          <div className='command__body_wrapper'>
            <div className='command__body'>
              <div className='command__body_paragraph'>
                {aliases && (
                  <>
                    <h4 className='font-bold w-full font text-lg'>Варианты</h4>
                    <p>
                      <span className='usage'>{aliases}</span>
                    </p>
                  </>
                )}
                <h4 className='font-bold w-full font text-lg'>Использование</h4>
                <p>
                  <span className='usage'>
                    {comName} {argumentList}
                  </span>
                </p>
              </div>
              <div className='command__body_paragraph'>
                <h4 className='font-bold w-full font text-lg'>
                  {deactivable ? <>Можно</> : <>Нельзя</>} выключить
                </h4>
                {description}
              </div>
              <>{errorMes}</>
            </div>
          </div>
        </div>
        <div
          className='command_switch'
          onClick={clickHandler}>
          <SVGExpand />
        </div>
      </div>
    );
  });

  return <>{List}</>;
}
