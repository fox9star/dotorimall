function Products({ products, loading }) {
    if (loading)
      return (
        <article aria-busy="true">
          잠시만 기다려주세요. 상품 데이터를 불러오고 있습니다.
        </article>
      );
    return (
      <>
        {products.map((product) => (
          <article key={product.id}>
            
            <div className="product_img"><img src={product.thumbnail} alt={product.title} /></div>
            <div className="product_title">{product.title}</div>
            <div className="product_price">{product.price}원</div>
          </article>
        ))}
      </>
    );
  }

  export default Products;