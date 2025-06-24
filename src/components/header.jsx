import headerImg from '../assets/img/header.jpg';

function Header() {
  const headerStyle = {
    backgroundImage: `url(${headerImg})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    padding: '100px 20px',
    color: 'white',
    textShadow: '1px 1px 4px black'
  };

  return (
    <header style={headerStyle} className="text-center">
      <h1>Pizzería Mamma Mía</h1>
      <p>¡Tenemos las mejores pizzas que podrás encontrar!</p>
    </header>
  );
}

export default Header;
