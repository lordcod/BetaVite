import SVGDiscord from '@components/5Entities/SVG/Socials/SVGDiscord';
import SVGTelegram from '@components/5Entities/SVG/Socials/SVGTelegram';
import SVGTopgg from '@components/5Entities/SVG/Socials/SVGTopgg';
import SVGVK from '@components/5Entities/SVG/Socials/SVGVK';

export default function FooterSocials() {
  return (
    <div className='socials'>
      <a
        href='/support'
        target='blank'
        aria-label='discord'>
        <SVGDiscord />
      </a>
      <a
        href='https://t.me/LordCordCommunity'
        target='blank'
        aria-label='telegram'>
        <SVGTelegram />
      </a>
      <a
        href='https://vk.com/lordcord'
        target='blank'
        aria-label='vk'>
        <SVGVK />
      </a>
      <a
        href='https://top.gg/bot/1095713975532007434'
        target='blank'
        aria-label='top.gg'>
        <SVGTopgg />
      </a>
    </div>
  );
}
