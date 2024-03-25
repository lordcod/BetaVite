import errors from '@/components/6Shared/Server/errors.json';
import useLang from '@/hooks/LangHook';
import SVGError from '@/components/5Entities/SVG/SVGError';
const lang = useLang();

export default function Error(name) {
  const error = errors[name][lang.prefLang];
  return (
    <div className='w-full bg-error-red py-1 px-4 border-solid border-2 border-black dark:border-white rounded-lg flex gap-4 justify-between'>
      {error} <SVGError />
    </div>
  );
}
