import FooterLinks from '@/components/4Features/Footer/FooterLinks';
import FooterLogo from '@/components/4Features/Footer/FooterLogo';
import FooterSocials from '@/components/4Features/Footer/FooterSocials';
import Copyright from '@/components/5Entities/UI/Copyright';

export default function Footer() {
  return (
    <footer className='h-[156px] bg-lt-main dark:bg-dt-main py-2 px-4 flex items-center flex-col'>
      <nav className='h-[120px] size-limit mx-a gap-4 grid grid-cols-[1fr_1fr_2fr]'>
        <FooterLogo />
        <FooterSocials />
        <FooterLinks />
      </nav>
      <Copyright />
    </footer>
  );
}
