import { useState } from 'react';
import SVGInfo from '@/components/5Entities/SVG/SVGInfo';
import SVGExpand from '@/components/5Entities/SVG/SVGExpand';
import InfoPrefix from '../../4Features/Commands/InfoPrefix';
import InfoParams from '../../4Features/Commands/InfoParams';

export default function CommandsInfo() {
  const [opened, setOpened] = useState(false);

  return (
    <div>
      <div className={`commands_sidebar_info ${opened ? 'opened' : ''}`}>
        <div
          className='commands_sidebar_info_title'
          onClick={() => setOpened(!opened)}>
          <div className='w-full flex items-center gap-4'>
            <SVGInfo /> Справка
          </div>
          <SVGExpand />
        </div>
        <div className='commands_sidebar_info_body'>
          <div className='flex min-h-0 flex-col invisible opacity-0 transition-all duration-200 ease-out-max px-1'>
            <InfoPrefix />
            <hr className='mb-2' />
            <InfoParams />
          </div>
        </div>
      </div>
    </div>
  );
}
