import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
export function ImageGallery({ images }) {
  return (
    <ul>
      {images.map(({ webformatURL, id, tag }) => {
        return <ImageGalleryItem key={id} src={webformatURL} alt={tag} />;
      })}
    </ul>
  );
}
