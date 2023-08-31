import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';

export const ImageGallery = ({ gallery }) => {
  return (
    <ul className="gallery">
      {gallery.map(item => {
        return <ImageGalleryItem item={item} key={item.id} />;
      })}
    </ul>
  );
};
