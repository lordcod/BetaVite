import SVGDiscord from '@/components/5Entities/SVG/SVGDiscord';

export default function FooterSocials() {
  return (
    <div className='flex items-center justify-center'>
      <a
        href=''
        target='blank'
        className='p-2'
        aria-label='discord'>
        <SVGDiscord />
      </a>
    </div>
  );
}
