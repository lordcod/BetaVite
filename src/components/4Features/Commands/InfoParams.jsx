export default function InfoParams() {
  return (
    <div className='mb-2'>
      <h4 className='font-bold w-full font text-lg'>Синтаксис</h4>
      <ul className='pl-[30px] list-disc flex flex-col gap-3'>
        <li>
          <span className='px-2 py-1 bg-lt-second dark:bg-dt-second rounded-lg'>
            [ ]
          </span>{' '}
          — Опциональный параметр
        </li>
        <li>
          <span className='px-2 py-1 bg-lt-second dark:bg-dt-second rounded-lg'>
            {'<>'}
          </span>{' '}
          — Обязательный параметр
        </li>
        <li>
          <span className='px-2 py-1 bg-lt-second dark:bg-dt-second rounded-lg'>
            A | Б | В
          </span>{' '}
          — Выбор параметра
        </li>
      </ul>
    </div>
  );
}
