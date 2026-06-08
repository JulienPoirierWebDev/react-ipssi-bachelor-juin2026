const Header = ({ items, image }) => {
  const allItemsCompnents = items.map((oneItem) => <li key={oneItem}>{oneItem}</li>);
  return (
    <header>
      {image && <img src={image} alt="" />}
      <nav>
        <ul>{allItemsCompnents}</ul>
      </nav>
    </header>
  );
};

export default Header;
