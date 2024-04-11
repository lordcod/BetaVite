import SVGDocumentation from '@components/5Entities/SVG/SVGDocumentation';

export default function HeaderDocsBtn() {
  return (
    <a
      href='https://docs.lordcord.fun/english/'
      className='animate-entry2 header-btn hidden'
      target='blank'>
      <SVGDocumentation />
      <h1 className='font-bold'>ДОКУМЕНТАЦИЯ</h1>
    </a>
  );
}
