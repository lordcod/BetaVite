import SVGDocumentation from '@/components/5Entities/SVG/SVGDocumentation';

export default function HeaderDocsBtn() {
  return (
    <a
      id='documentation'
      href='https://docs.lordcord.fun/english/'
      className='animate-entry2'
      target='blank'>
      <div className='header-btn py-1 px-[18px]'>
        <SVGDocumentation />
        <h1 className='font-bold'>ДОКУМЕНТАЦИЯ</h1>
      </div>
    </a>
  );
}
