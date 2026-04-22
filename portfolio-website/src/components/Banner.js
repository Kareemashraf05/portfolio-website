import Container from 'react-bootstrap/Container';

function Banner() {
  return (
    <Container 
  fluid 
  className="d-flex flex-column align-items-center mt-5 pt-5" // Added mt-5 and pt-5
  style={{ backgroundColor: 'transparent' }} 
>
  <p className="mb-1 text-white">Welcome to my portfolio</p>
  <h1 className="text-center fw-bold text-white">Hi! My Name Is Kareem Ashraf</h1>
  <button className="btn btn-outline-light mt-3">Learn More</button>
</Container>
  );
}

export default Banner;