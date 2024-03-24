export default function InfoParams() {
  return (
    <div className='mb-2'>
      <h4 className='font-bold w-full font text-lg'>Синтаксис</h4>
      <ul className='pl-[30px] list-disc flex flex-col gap-3'>
        <li>
          <span className='usage_info'>[ ]</span> — Опциональный параметр
        </li>
        <li>
          <span className='usage_info'>{'<>'}</span> — Обязательный параметр
        </li>
        <li>
          <span className='usage_info'>A | Б | В</span> — Выбор параметра
        </li>
      </ul>
    </div>
  );
}
