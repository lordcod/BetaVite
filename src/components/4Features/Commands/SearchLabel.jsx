import SVGSearch from '@/components/5Entities/SVG/SVGSearch';

export default function SearchLabel() {
  return (
    <label
      htmlFor='command'
      className='commands_search_label'>
      <SVGSearch />
    </label>
  );
}
