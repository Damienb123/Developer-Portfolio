{/*style import for footer*/}
import styles from './FooterStyles.module.css';
{/*function for footer content*/}
function Footer() {
  return (
    <section id="footer" className={styles.container}>
      <p>
        &copy; 2025 Damien Beltran. <br />
        Made with <span>❤️</span> in Austin, Texas.
      </p>
    </section>
  );
}

export default Footer;



