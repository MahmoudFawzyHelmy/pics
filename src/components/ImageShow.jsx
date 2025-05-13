import Card from "react-bootstrap/Card";

export default function ImageShow({ image }) {
  return (
    <div className="col-md-3">
      <Card>
        <Card.Img
          variant="top"
          src={image.urls.regular}
          style={{ height: "250px" }}
        />
        <Card.Body>
          <Card.Title>{image.user.username}</Card.Title>
          <Card.Text>{image.alt_description}</Card.Text>
          <button className="btn btn-info">Go somewhere</button>
        </Card.Body>
      </Card>
    </div>
  );
}
