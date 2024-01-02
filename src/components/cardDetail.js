function CardDetail() {
  return (
    <div>
      <div>
        <h1>Motor Matic bolo</h1>
        <div class="row row-cols-1 row-cols-md-3 g-4">
          <div class="card text-bg-dark">
            <img
              class="background card-img-top"
              src="https://images.tokopedia.net/blog-tokopedia-com/uploads/2021/11/Featured_Motor-Honda-Terbaru.jpg"
              alt="..."
            />
            <div class="card-img-overlay d-flex flex-column justify-content-end">
              <h5 class="card-title text-start ms-2">Product</h5>
              <a href="#" class="button-spek text-end me-2">
                Go somewhere ➝
              </a>
            </div>
          </div>
        </div>
      </div>
      ;
    </div>
  );
}

export default CardDetail;
