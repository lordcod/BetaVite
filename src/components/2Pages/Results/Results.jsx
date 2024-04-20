import React, { useEffect, useState } from 'react';
//если делаешь не в этом проекте а отдельно, то установи таилвинд (в вебпаке нельзя) и реакт
export default function Results() {
  const [winners, setWinners] = useState([]);
  const [members, setMembers] = useState([]);

  //в эффекте сделаешь фетч на сервер, если его не будет то удали его и с импорта
  useEffect(() => {
    let win = [];
    let mem = [];
    //выше не трогать
    //форы замени на фетчи, результатом пусть будет масив с объектами как ниже (имя, ид, ссылка на аватар)
    for (let i = 0; i < 50; i++) {
      win.push({
        name: 'shashlychok#0',
        id: '804950325265825815' + i,
        avatar:
          'https://cdn.discordapp.com/avatars/804950325265825815/a30d4834245c6b7d94671c8aea043abe.png',
      });
    }
    for (let i = 0; i < 50; i++) {
      mem.push({
        name: 'shashlychok#0',
        id: '804950325265825815' + 2 * i,
        avatar:
          'https://cdn.discordapp.com/avatars/636824998123798531/a2b7ba0e13dd4df0e77e767c5fc31813.png',
      });
    }
    //ниже не трогать

    setWinners(win);
    setMembers(mem);
  }, []);

  const toElement = member => {
    return (
      <div
        key={member.id}
        className='h-8 flex items-center'>
        <img
          src={`${member.avatar}`}
          className='h-8 rounded-full'
        />
        <span className='font-bold'>{member.name}</span> ({member.id})
      </div>
    );
  };

  const winnersEl = winners.map(member => toElement(member));
  const membersEl = members.map(member => toElement(member));

  return (
    <div className='page'>
      <div className='pt-10 px-6 size-limit mx-auto'>
        <h1 className='font-bold text-6xl mb-12 animate-anti-entry1 text-center lg:text-start'>
          Giveaway Summary
        </h1>
        <div className='grid gap-3 h-full 2md:grid-cols-[auto_1fr_1fr]'>
          <div className='bg-lt-main dark:bg-dt-main rounded-2xl flex flex-col p-3 gap-1 self-start sticky top-[76px]'>
            <div className='flex flex-col gap-1'>
              <h1 className='text-xl pl-2'>Prize</h1>
              <span className='main-sec self-start'>ipad</span>
              <hr className='mt-2 border-main-purple' />
            </div>
            <div className='flex flex-col gap-1 max-w-1/2'>
              <h1 className='text-xl pl-2'>Host</h1>
              <span className='flex flex-col'>
                <span className='ping flex self-start break-words'>
                  sssssssss#0
                </span>
                (636824998123798531)
              </span>
              <hr className='mt-2 border-main-purple' />
            </div>
            <div className='flex flex-col gap-1'>
              <h1 className='text-xl pl-2'>Ended</h1>
              <span className='main-sec self-start'>14.88.1488, 14:88:14</span>
              <hr className='mt-2 border-main-purple' />
            </div>
            <div className='flex flex-col gap-1'>
              <h1 className='text-xl pl-2'>Giveaway ID</h1>
              <span className='main-sec self-start'>1226490940248555641</span>
              <hr className='mt-2 border-main-purple' />
            </div>
            <div className='flex flex-col gap-1'>
              <h1 className='text-xl pl-2'>Winners</h1>
              <span className='main-sec self-start'>1</span>
            </div>
          </div>
          <div className='bg-lt-main dark:bg-dt-main rounded-2xl flex flex-col p-3 gap-2 '>
            <h1 className='pl-2 text-xl '>Winners:</h1>
            {winnersEl}
          </div>
          <div className='bg-lt-main dark:bg-dt-main rounded-2xl flex flex-col p-3 gap-2'>
            <h1 className='pl-2 text-xl '>Members:</h1>
            {membersEl}
          </div>
        </div>
      </div>
    </div>
  );
}
