

const Footer = () => {
    return (
        <div className="mt-14">
            <footer className="footer p-10 bg-base-200 text-base-content">
  <aside>
  <img className="w-24"  src="https://i.ibb.co/JKgZhwS/logo.png" alt="" />
    <p>Diagnostic Industries Ltd.<br/>Providing reliable tech since 1992</p>
  </aside> 
  <nav>
    <header className="footer-title">Tests</header> 
    <a className="link link-hover">Liver Function</a>
    <a className="link link-hover">Blood Test</a>
    <a className="link link-hover">Hemoglobin A1c</a>
    <a className="link link-hover">Others</a>
  </nav> 
  <nav>
    <header className="footer-title">Company</header> 
    <a className="link link-hover">Mods us</a>
    <a className="link link-hover">Contact</a>
    <a className="link link-hover">Jobs</a>
    <a className="link link-hover">Press kit</a>
  </nav> 
  <nav>
    <header className="footer-title">Legal</header> 
    <a className="link link-hover">Terms of use</a>
    <a className="link link-hover">Privacy policy</a>
    <a className="link link-hover">Cookie policy</a>
  </nav>
</footer>
        </div>
    );
};

export default Footer;