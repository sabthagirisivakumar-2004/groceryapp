import ImageSlider from "./carousel";
const App = () => {
  const slides = [
    { url: "https://www.shutterstock.com/image-vector/10-off-blue-banner-ten-260nw-2223898141.jpg", title: "beach" },
    { url: "https://img.freepik.com/premium-vector/winter-landscape-flat-illustration-big-sale-offer-discount-promotion-banner-template_22052-4634.jpg", title: "boat" },
    { url: "https://img.freepik.com/free-psd/social-media-promo-template-sales_23-2149533432.jpg?size=626&ext=jpg&ga=GA1.1.1546980028.1702598400&semt=ais", title: "forest" },
    { url: "https://www.shutterstock.com/image-illustration/30-off-summer-sale-creative-260nw-2283278125.jpg", title: "city" },
    { url: "https://www.shutterstock.com/image-illustration/30-off-summer-sale-creative-260nw-2283278125.jpg", title: "italy" },
  ];
  const containerStyles = {
    width: "500px",
    height: "280px",
    margin: "0 auto",
  };
  return (
    <div>
    <br></br>
    <h1 style={{position:"absolute",left:"20px"}}>Welcome Zayn</h1>
    <br></br>
    <br></br>
      <div style={containerStyles}>
        <ImageSlider slides={slides} />
      </div>
    </div>
  );


};

export default App;