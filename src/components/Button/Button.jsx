export const Button = ({ handleLoadMoreClick }) => {
  return (
    <>
      <button type="button" onClick={handleLoadMoreClick}>
        Load More
      </button>
    </>
  );
};
