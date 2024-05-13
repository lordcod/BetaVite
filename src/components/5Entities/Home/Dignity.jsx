import SVGDiscord from '@components/5Entities/SVG/SVGDiscord';
import { LangChangingContext } from '@context/LangContext';
import { useContext } from 'react';

export default function Dignity(props) {
  const { t } = useContext(LangChangingContext);

  return (
    <div
      className={`dignity wow animate__animated animate__${
        props.postition == 'left' ? 'fadeInLeft' : 'fadeInRight'
      }`}>
      <div className='flex items-center justify-center'>
        {props.image}
        {/* <img
          src={props.image}
          srcSet={`${props.imgs} 128w, ${props.imgm} 256w, ${props.imgb} 384w, ${props.imgl} 512w`}
          className='max-h-64 rounded'
          alt='dignity'
          height='100%'
          sizes='100vw'
        /> */}
      </div>
      <div className='flex flex-col justify-center gap-4'>
        <h1 className='text-4xl font-bold text-center'>{props.title}</h1>
        <p>{props.body}</p>
        <a
          href='https://discord.com/oauth2/authorize?client_id=1095713975532007434&scope=bot+applications.commands&permissions=-1&response_type=code&redirect_uri=https%3A%2F%2Flordcord.fun%2Flink-role-callback'
          target='blank'
          className='flex items-center gap-4 py-3 px-6 rounded-3xl font-bold text-dt-font bg-dt-main hover:bg-dt-main-hover  dark:text-lt-font dark:bg-lt-main dark:hover:bg-lt-main-hover'>
          <SVGDiscord
            height='18px'
            width='18px'
            className='fill-dt-svg dark:fill-lt-svg h-6 w-6 2xl:w-3.5 2xl:h-3.5 select-none'
          />
          {t('main.addToDiscord')}
        </a>
      </div>
    </div>
  );
}
