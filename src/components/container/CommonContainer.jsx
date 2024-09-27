const CommonContainer = ({ Children }) => {
  return (
    <div className="py-15">
      <div className="container">{Children}</div>
    </div>
  );
};

export default CommonContainer;
