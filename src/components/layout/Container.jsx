/* eslint-disable react/prop-types */
function Container({ children }) {
  return (
    <div className="container mx-auto px-5 sm:px-10 md:px-16 py-5">
      {children}
    </div>
  );
}

export default Container;
