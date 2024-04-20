export default function InfoPrefix() {
  return (
    <div className='mb-2'>
      <p className='mb-2'>
        Стандартный префикс{' '}
        <span className='px-2 py-1 bg-lt-second dark:bg-dt-second rounded-lg'>
          l.
        </span>
        . Вы можете поменять его в панели управления.
      </p>
      <p className='mb-2 flex flex-wrap'>
        Можно использовать <span className='ping'>@LordCord#2170</span>.
      </p>
      <p className='mb-2 flex flex-wrap gap-2'>
        <span className='flex flex-wrap'>
          <span className='py-1 px-4 rounded-lg bg-lt-third dark:bg-dt-third font-inconsolata '>
            l.help
          </span>
        </span>
        <span className='flex flex-wrap'>
          <span className='py-1 px-4 rounded-lg bg-lt-third dark:bg-dt-third font-inconsolata flex flex-wrap items-center gap-2'>
            <span className='ping'>@LordCord#2170</span> help
          </span>
        </span>
      </p>
    </div>
  );
}
