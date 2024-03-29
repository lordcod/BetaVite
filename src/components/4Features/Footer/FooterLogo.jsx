import SVGCrown from '@/components/5Entities/SVG/SVGCrown';

export default function FooterLogo() {
  return (
    <div className='flex items-center justify-center'>
      <div className='flex gap-1.5 items-center'>
        <SVGCrown
          height='32px'
          width='32px'
        />
        <h1 className='text-3xl'>
          <span className='font-bold'>Lord</span>
          Bot
        </h1>
      </div>
    </div>
  );
}
