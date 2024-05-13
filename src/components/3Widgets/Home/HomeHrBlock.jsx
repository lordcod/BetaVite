import Avatar from '@/Assets/Imgs/1.webp';
import { useEffect, useState } from 'react';
import { LangChangingContext } from '@context/LangContext';
import { useContext } from 'react';

export default function CHomeHrBlock() {
  const [serversAmount, setServersAmount] = useState(100);
  const { t } = useContext(LangChangingContext);

  useEffect(() => {
    async function req() {
      if (
        !localStorage.servsAmount ||
        Date.now() - 60000 > Number(localStorage.servsReqTime) ||
        isNaN(Number(localStorage.servsReqTime))
      ) {
        fetch('https://discord.bots.gg/api/v1/bots/1095713975532007434')
          .then(res => {
            return res.json();
          })
          .then(data => {
            if (data.guildCount == undefined) return;
            localStorage.servsReqTime = Date.now();
            localStorage.servsAmount = data.guildCount;
            setServersAmount(localStorage.servsAmount);
          });
      }
    }

    req();
  }, []);

  return (
    <div className='bg-lt-main dark:bg-dt-main'>
      <div className='size-limit mx-auto gap-5 p-8 grid 2md:grid-cols-[1fr_auto] 2md:gap-10 '>
        <p className='text-2xl text-bold flex items-center text-center 2md:text-start'>
          {t('main.serverConquestPart1')} {!!serversAmount && serversAmount}{' '}
          {t('main.serverConquestPart2')}
        </p>
        {/* <div className='flex flex-wrap gap-8 w-full justify-center items-center 2md:justify-end'>
          <img
            src={Avatar}
            className='w-[60px] h-[60px] rounded-xl'
            alt='server avatar'
          />
          <img
            src={Avatar}
            className='w-[60px] h-[60px] rounded-xl'
            alt='server avatar'
          />
          <img
            src={Avatar}
            className='w-[60px] h-[60px] rounded-xl'
            alt='server avatar'
          />
          <img
            src={Avatar}
            className='w-[60px] h-[60px] rounded-xl'
            alt='server avatar'
          />
          <img
            src={Avatar}
            className='w-[60px] h-[60px] rounded-xl'
            alt='server avatar'
          />
          <img
            src={Avatar}
            className='w-[60px] h-[60px] rounded-xl'
            alt='server avatar'
          />
        </div> */}
      </div>
    </div>
  );
}
