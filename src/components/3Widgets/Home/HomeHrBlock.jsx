import Avatar from '@/components/5Entities/Assets/1.webp';

export default function CHomeHrBlock() {
  return (
    <div className='bg-lt-main dark:bg-dt-main'>
      <div className='size-limit mx-auto grid grid-cols-2 gap-10 p-8'>
        <p className='text-2xl text-bold flex items-center'>
          Больее чем N серверов используют LordBot
        </p>
        <div className='flex gap-8 justify-end w-full'>
          <img
            src={Avatar}
            className='w-[60px] h-[60px] rounded-xl'
          />
          <img
            src={Avatar}
            className='w-[60px] h-[60px] rounded-xl'
          />
          <img
            src={Avatar}
            className='w-[60px] h-[60px] rounded-xl'
          />
          <img
            src={Avatar}
            className='w-[60px] h-[60px] rounded-xl'
          />
          <img
            src={Avatar}
            className='w-[60px] h-[60px] rounded-xl'
          />
          <img
            src={Avatar}
            className='w-[60px] h-[60px] rounded-xl'
          />
        </div>
      </div>
    </div>
  );
}
