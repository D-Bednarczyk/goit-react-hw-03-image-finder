import css from './ImageGalleryItem.module.css';

export const ImageGalleryItem = ({ src, largeImageURL, alt, onClickFunc }) => {
  return (
    <li className={css.ImageGalleryItem}>
      <img
        onClick={() => onClickFunc(largeImageURL)}
        className={css.ImageGalleryItemimage}
        src={src}
        alt={alt}
      />
    </li>
  );
};
