import SVGSearch from '@/components/5Entities/SVG/SVGSearch';

export default function SearchLabel() {
  return (
    <label
      htmlFor='sbs'
      className='sidebar_search-label'>
      <SVGSearch />
    </label>
  );
}
