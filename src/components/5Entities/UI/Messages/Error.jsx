import errors from '@/components/6Shared/Server/errors.json';
import useLang from '@/hooks/LangHook';
const lang = useLang();

export default function Error(name) {
  const error = errors[name][lang.prefLang];
  return <div>{error}</div>;
}
