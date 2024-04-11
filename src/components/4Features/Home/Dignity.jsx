import Avatar from '@/Assets/1.webp';
import SVGDiscord from '@components/5Entities/SVG/SVGDiscord';

export default function Dignity(props) {
  return (
    <div
      className={`dignity wow animate__animated animate__${
        props.postition == 'left' ? 'fadeInLeft' : 'fadeInRight'
      }`}>
      <div className='flex items-center'>
        <img
          src={Avatar}
          className='w-full max-h-64 rounded'
        />
      </div>
      <div className='flex flex-col justify-center gap-4'>
        <h1 className='text-4xl font-bold text-center'>
          Lorem ipsum dolor sit amet consectetur
        </h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem placeat
          officia architecto dignissimos sed, ipsam perspiciatis voluptatum
          magnam exercitationem quam debitis id pariatur consequuntur, tempora
          ducimus? Cumque dolor eius optio?Lorem ipsum dolor sit, amet
          consectetur adipisicing elit. Rem placeat officia architecto
          dignissimos sed, ipsam perspiciatis voluptatum magnam exercitationem
          quam debitis id pariatur consequuntur, tempora ducimus? Cumque dolor
          eius optio?Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          Rem placeat
        </p>
        <a
          href=''
          target='blank'
          className='flex items-center gap-4 py-3 px-6 rounded-3xl font-bold text-dt-font bg-dt-main hover:bg-dt-main-hover  dark:text-lt-font dark:bg-lt-main dark:hover:bg-lt-main-hover'>
          <SVGDiscord
            height='18px'
            width='18px'
            className='fill-dt-svg dark:fill-lt-svg h-6 w-6 2xl:w-3.5 2xl:h-3.5'
          />
          ДОБАВИТЬ В DISCORD
        </a>
      </div>
    </div>
  );
}
