import FooterLinks from '@/components/4Features/Footer/FooterLinks';
import FooterLogo from '@/components/4Features/Footer/FooterLogo';
import FooterSocials from '@/components/4Features/Footer/FooterSocials';
import Copyright from '@/components/5Entities/UI/Copyright';

export default function Footer() {
  return (
    <footer>
      <nav className='size-limit py-2 mx-a gap-4 flex flex-col md:w-full 2md:grid 2md:grid-cols-[1fr,1fr,2fr]'>
        <FooterLogo />
        <FooterSocials />
        <FooterLinks />
      </nav>
      <Copyright />
    </footer>
  );
}
