import styles from "./Navbar.module.css";
import NavItem from "./NavItem";

const Navbar = () => {
  const items = [
    {
      href: "index.html",
      content: "Home",
    },
    { href: "about.html", content: "About" },
    { href: "portfolio.html", content: "Portfolio" },
    { href: "contact.html", content: "Contact" },
  ];

  //  className="active"
  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <h1 className={styles.logo}>Your Name</h1>
        <ul className={styles.menu}>
          {items.map((oneItem) => (
            <NavItem key={oneItem.href} oneItem={oneItem} />
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
