import { useState } from 'react';
import SVGInfo from '@/components5Entities/SVG/SVGInfo';
import SVGExpand from '@/components5Entities/SVG/SVGExpand';

export default function CommandsInfo() {
  const [opened, setOpened] = useState(false);

  return (
    <div className='sidebar__info_wrapper'>
      <div
        className={['sidebar__block sidebar__info ', opened ? ' opened' : '']}>
        <div
          className='sidebar__info__title'
          onClick={() => setOpened(!opened)}>
          <div>
            <SVGInfo /> Справка
          </div>
          <SVGExpand />
        </div>
        <div className='sidebar__info__body_wrapper'>
          <div className='sidebar__info__body'>
            <div className='sidebar__info__body_paragraph'>
              <p>
                Стандартный префикс <span className='usage_info'>l.</span>. Вы
                можете поменять его в панели управления.
              </p>
              <p>
                Можно использовать
                <span className='ping'>@LordCord#2170</span>.
              </p>
              <p>
                <span className='usage_short'>l.help</span>{' '}
                <span className='usage_short'>
                  <span className='ping'>@LordCord#2170</span> help
                </span>
              </p>
            </div>
            <hr />

            <div className='sidebar__info__body_paragraph'>
              <h4>Синтаксис</h4>
              <ul>
                <li>
                  <span className='usage_info'>[ ]</span> — Опциональный
                  параметр
                </li>
                <li>
                  <span className='usage_info'>{'<>'}</span> — Обязательный
                  параметр
                </li>
                <li>
                  <span className='usage_info'>A | Б | В</span> — Выбор
                  параметра
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
