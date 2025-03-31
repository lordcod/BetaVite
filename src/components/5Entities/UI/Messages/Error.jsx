import SVGError from '@components/5Entities/SVG/SVGError';
// import { useContext } from 'react';
// import { LangChangingContext } from '@context/LangContext';

export default function Error(name, desc, stack) {
  // const { t } = useContext(LangChangingContext);

  return (
    <div className='flex flex-col w-full bg-error-red py-1 px-4 border-solid border-2 border-black dark:border-white rounded-lg gap-1'>
      <div className='flex justify-between'>
        <strong>
          Copy this message in full or screenshot this message and write about
          it to our support server.{' '}
          <a
            href='/support'
            className='text-blue-500'>
            LINK
          </a>
          <hr />
          Полностью скопируйте это сообщение или заскриншотьте это сообщение и
          напишите о нем в наш сервер поддержки.{' '}
          <a
            href='/support'
            className='text-blue-500'>
            ССЫЛКА
          </a>
        </strong>
        <SVGError />
      </div>
      <hr />
      <div>{name}</div>
      <div>{desc}</div>
      <div>{stack}</div>
    </div>
  );
}
