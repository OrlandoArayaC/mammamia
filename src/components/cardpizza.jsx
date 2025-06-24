function CardPizza({ name, price, ingredients, img }) {
  return (
    <div className="card m-3" style={{ width: "18rem" }}>
      <img src={img} className="card-img-top" alt={`Pizza ${name}`} />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">
          Ingredientes: {ingredients.join(", ")} <br />
          <strong>${price.toLocaleString()}</strong>
        </p>
        <button className="btn btn-info me-2">Ver más</button>
        <button className="btn btn-success">Añadir</button>
      </div>
    </div>
  );
}

export default CardPizza;
