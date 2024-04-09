import SVGError from '@components/5Entities/SVG/SVGError';

export default function Error(name) {
  return (
    <div className='w-full bg-error-red py-1 px-4 border-solid border-2 border-black dark:border-white rounded-lg flex gap-4 justify-between'>
      {name} <SVGError />
    </div>
  );
}
