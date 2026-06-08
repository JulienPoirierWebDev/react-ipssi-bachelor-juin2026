const NavItem = ({oneItem}) => {
  return (
    <li>
      <a href={oneItem.href}>{oneItem.content}</a>
    </li>
  );
};

export default NavItem;
