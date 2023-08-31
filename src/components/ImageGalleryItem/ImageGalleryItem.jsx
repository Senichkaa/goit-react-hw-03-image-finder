export const ImageGalleryItem = ({ item }) => {
  const { webformatURL, tags } = item;
  return (
    <li className="gallery-item">
      <img src={webformatURL} alt={tags} loading="lazy" />
    </li>
  );
};
