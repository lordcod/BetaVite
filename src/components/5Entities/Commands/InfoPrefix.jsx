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
      <p className='mb-2'>
        Можно использовать <span className='ping'>@LordCord#2170</span>.
      </p>
      <p className='mb-2'>
        <span className='py-1 px-4 rounded-lg bg-lt-third dark:bg-dt-third font-inconsolata'>
          l.help
        </span>{' '}
        <span className='py-1 px-4 rounded-lg bg-lt-third dark:bg-dt-third font-inconsolata'>
          <span className='ping'>@LordCord#2170</span> help
        </span>
      </p>
    </div>
  );
}
