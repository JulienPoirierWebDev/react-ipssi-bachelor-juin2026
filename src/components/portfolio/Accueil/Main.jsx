const Main = (props) => {
  console.log(props);

  return (
    <main>
      <h3>Mes infos importantes</h3>
      {props.children}
    </main>
  );
};

export default Main;
