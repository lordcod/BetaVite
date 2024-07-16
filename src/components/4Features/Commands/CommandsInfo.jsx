import { useState } from 'react';
import SVGInfo from '@/components/5Entities/SVG/SVGInfo';
import SVGExpand from '@/components/5Entities/SVG/SVGExpand';
import InfoPrefix from '@/components/5Entities/Commands/InfoPrefix';
import InfoParams from '@/components/5Entities/Commands/InfoParams';
import { LangChangingContext } from '@context/LangContext';
import { useContext } from 'react';
// import InfoLang from '@/components/5Entities/Commands/InfoLang';

export default function CommandsInfo() {
  const [opened, setOpened] = useState(false);
  const { t } = useContext(LangChangingContext);

  return (
    <div
      className={`sidebar_info_container ${opened ? 'opened' : ''}`}
      tabIndex='0'
      aria-label='Справка: Стандартный префикс l точка Вы можете поменять его в панели управления. Можно использовать упоминание бота. квадратные скобки — Опциональный параметр, <> — Обязательный параметр, A вертикальный слеш Б — Выбор параметра'>
      <div
        className='sidebar_info-title'
        onClick={() => setOpened(!opened)}>
        <span>
          <SVGInfo /> {t('commands.info')}
        </span>
        <SVGExpand />
      </div>
      <div className='sidebar_info-body'>
        <div className='sidebar_info-body-container'>
          <InfoPrefix />
          <hr />
          <InfoParams />
        </div>
      </div>
    </div>
  );
}
