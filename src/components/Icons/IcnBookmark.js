import "./Icons.scss";

const IcnBookmark = ({ isBookmarked }) => {
  return (
    <>
      {isBookmarked ? (
        <svg
          width="24"
          height="31"
          viewBox="0 0 31 31"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0 4.5C0 2.01472 2.01472 0 4.5 0H19.5C21.9853 0 24 2.01472 24 4.5V28.5426C24 30.3727 21.9314 31.4372 20.4422 30.3735L12 24.3434L3.55779 30.3735C2.06858 31.4372 0 30.3727 0 28.5426V4.5Z" />
        </svg>
      ) : (
        <svg
          width="24"
          height="31"
          viewBox="0 0 31 31"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0 4.5C0 2.01472 2.01472 0 4.5 0H19.5C21.9853 0 24 2.01472 24 4.5V28.5426C24 30.3727 21.9314 31.4372 20.4422 30.3735L12 24.3434L3.55779 30.3735C2.06858 31.4372 0 30.3727 0 28.5426V4.5ZM4.5 3C3.67157 3 3 3.67157 3 4.5V27.0852L10.6922 21.5908C11.4745 21.032 12.5255 21.032 13.3078 21.5908L21 27.0852V4.5C21 3.67157 20.3284 3 19.5 3H4.5Z"
          />
        </svg>
      )}
    </>
  );
};

export default IcnBookmark;
