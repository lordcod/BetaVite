import FooterLinks from '@/components/4Features/Footer/FooterLinks';
import FooterLogo from '@/components/4Features/Footer/FooterLogo';
import FooterSocials from '@/components/4Features/Footer/FooterSocials';
import Copyright from '@/components/5Entities/UI/Copyright';

export default function Footer() {
  return (
    <footer>
      <nav>
        <FooterLogo />
        <FooterSocials />
        <FooterLinks />
      </nav>
      <Copyright />
    </footer>
  );
}
