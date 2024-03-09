export default function Books({book}){
    return (
        <div>
                <div className="card">
                <div className="img-box">
                <img src={book.image} alt=""></img>
                </div>
                  <h2 style={{fontSize: '16px'}}>Name : {book.name}</h2>
                 <h3 style={{fontSize: '18px'}}>Orginal Price : <span className="overline">{book.originalPrice}</span> Tk</h3>
                 <h3 style={{fontSize: '18px'}}>Discount Price : {book.discountPrice} Tk</h3>
                 <h4>Rating : {book.rating}</h4>
                 <button>Add to cart</button>
                </div>
        </div>
    )
}