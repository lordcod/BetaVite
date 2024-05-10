import SVGCrown from '@/components/5Entities/SVG/SVGCrown';

export default function FooterLogo() {
  return (
    <div className='flex items-center justify-center pt-2'>
      <div className='flex gap-1.5 items-center'>
        <SVGCrown
          height='40px'
          width='40px'
        />
        <h1 className='text-4xl'>
          <span className='font-bold'>Lord</span>
          Cord
        </h1>
      </div>
    </div>
  );
}
