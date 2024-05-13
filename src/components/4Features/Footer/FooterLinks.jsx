import { Link } from 'react-router-dom';
import { LangChangingContext } from '@context/LangContext';
import { useContext } from 'react';

export default function FooterLinks() {
  const { t } = useContext(LangChangingContext);

  return (
    <div className='flex items-center justify-center md:w-full'>
      <div className='flex flex-col gap-2 md:flex-row md:w-full md:justify-center'>
        <div className='2sm:flex 2sm:gap-2 md:grid md:grid-cols-2'>
          <div className='flex flex-col gap-2'>
            <Link to={'/'}>{t('footer.main')}</Link>
            <a
              href='https://lordcord.gitbook.io'
              target='blank'>
              {t('footer.documentation')}
            </a>
            <Link to={'/commands'}>{t('footer.commands')}</Link>
            <a
              href='https://discord.gg/us7feXU4xS'
              target='blank'>
              {t('footer.feedback')}
            </a>
          </div>
          <div className='flex flex-col text-end md:text-start gap-2'>
            {/* <Link to={'/support'}>{t('footer.supportUs')}</Link> */}
            <a
              href='https://discord.com/oauth2/authorize?client_id=1095713975532007434&scope=bot+applications.commands&permissions=-1&response_type=code&redirect_uri=https%3A%2F%2Flordcord.fun%2Flink-role-callback'
              target='blank'>
              {t('footer.invite')}
            </a>
            <a
              href='https://jino.ru'
              target='blank'>
              {t('footer.poweredBy')}
            </a>
            {/* <a
              href=''
              target='blank'>
              {t('footer.status')}
            </a> */}
            <a
            href='https://lordcord.gitbook.io/other-information/terms-of-service'
            target='blank'>
            {t('footer.termsOfUse')}
          </a>
          <a
            href='https://lordcord.gitbook.io/other-information/privacy-policy'
            target='blank'>
            {t('footer.confidentiality')}
          </a>
          </div>
        </div>
        {/* <div className='flex flex-col 2sm:text-center md:text-start gap-2'>
          <a
            href=''
            target='blank'>
            {t('footer.termsOfUse')}
          </a>
          <a
            href=''
            target='blank'>
            {t('footer.confidentiality')}
          </a>
          <a
            href=''
            target='blank'>
            {t('footer.cookies')}
          </a>
        </div> */}
      </div>
    </div>
  );
}
