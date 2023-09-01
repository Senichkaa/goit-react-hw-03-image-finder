export const ImageGalleryItem = ({ item, onImageClick }) => {
  const { webformatURL, tags } = item;

  const handleModalClick = () => {
    console.log('handleModalClick');
    onImageClick(item);
  };

  return (
    <li className="gallery-item">
      <img
        src={webformatURL}
        alt={tags}
        loading="lazy"
        onClick={handleModalClick}
      />
    </li>
  );
};
