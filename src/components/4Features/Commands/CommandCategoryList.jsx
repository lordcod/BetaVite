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
        className='command'
        tabIndex='0'>
        <div className='flex flex-col'>
          <div
            className='command_wrapper'
            onClick={clickHandler}>
            <div>
              <span className='main-sec'>{comName}</span> — {descriptionShort}
            </div>
          </div>
          <div className='command_body'>
            <div className='command_body_content'>
              <div className='flex gap-3 flex-wrap'>
                {aliases && (
                  <>
                    <h4 className='font-bold w-full font text-lg'>Варианты</h4>
                    <p className='w-full'>
                      <span className='usage'>{aliases}</span>
                    </p>
                  </>
                )}
                <h4 className='font-bold w-full font text-lg'>Использование</h4>
                <p className='w-full'>
                  <span className='usage'>
                    {comName} {argumentList}
                  </span>
                </p>
              </div>
              <div className='flex gap-3 flex-wrap'>
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
          className='command_expand'
          onClick={clickHandler}>
          <SVGExpand />
        </div>
      </div>
    );
  });

  return <>{List}</>;
}
