import Avatar from '@/Assets/1.webp';
import { useEffect, useState } from 'react';

export default function CHomeHrBlock() {
  const [serversAmount, setServersAmount] = useState(100);

  useEffect(() => {
    if (!localStorage.seram || Date.now() - 60000 > localStorage.seramtime) {
      fetch('https://discord.bots.gg/api/v1/bots/1095713975532007434')
        .then(res => {
          return res.json();
        })
        .then(data => {
          localStorage.seramtime = Date.now();
          if (localStorage.seram == 'undefined')
            localStorage.seram = data.guildCount;
        });
    }
    setServersAmount(localStorage.seram);
  }, []);

  return (
    <div className='bg-lt-main dark:bg-dt-main'>
      <div className='size-limit mx-auto gap-5 p-8 grid 2md:grid-cols-[1fr_auto] 2md:gap-10 '>
        <p className='text-2xl text-bold flex items-center text-center 2md:text-start'>
          LordCord завоевал сердца не только на {serversAmount} серверах
          Discord, но и за их пределами!
        </p>
        <div className='flex flex-wrap gap-8 w-full justify-center items-center 2md:justify-end'>
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
