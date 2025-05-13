import ImageShow from "./ImageShow";

export default function ImageList({ images }) {
  return (
    <div className="container">
      <div className="row g-3">
        {images.map((image) => {
          return <ImageShow image={image} key={image.id} />;
        })}
      </div>
    </div>
  );
}
