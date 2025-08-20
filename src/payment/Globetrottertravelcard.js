
const Globetrottertravelcard = () => {
  return (
    <>
      <div className="container-fluid px-5 deliveringbox custpx ebixsmartbox" id='globettravelcard'>
        <div className="row justify-content-center">
          <div className="col-lg-9 py-5">
            <h2 className="mt-0 mt-md-5 text-center">Globetrotter Travel Card</h2>
            <p className="mt-4 text-center">
              The Globetrotter Prepaid Forex Card is a smart, secure, and globally accepted payment solution, enabling seamless international spending. Customers can load multiple currencies, lock exchange rates, and transact across millions of global ATMs and merchant outlets. <br />

              Supported by a robust service network and 24x7 assistance, the card is ideal for corporate travelers, students, and families alike. Features such as real-time expense tracking, instant reloads, and PIN-based transactions enhance both control and convenience.
            </p>
            

            <div className="bannerreadmore text-center">
              <a className="bannerbtn" href="#">
                <span className="btn-content">
                  <span className="text-top">Read More →</span>
                  <span className="text-bottom">Read More →</span>
                </span>
              </a>
            </div>

       <div className="w-100 mt-5 text-center"> <img src={`${process.env.PUBLIC_URL}/images/cards.svg`} className="img-fluid" width={500} /></div>



          </div>
        </div>

      </div>
    </>
  );
};

export default Globetrottertravelcard;
