// Style import for Footer
import styles from './FooterStyles.module.css';
// Function for footer content
function Footer() {
  return (
    // Section for footer content containerized
    <section id="footer" className={styles.container}>
      <p>
        &copy; 2025 Damien Beltran. <br />
        Made with <span>❤️</span> in Austin, Texas.
      </p>
    </section>
  );
}

export default Footer;

