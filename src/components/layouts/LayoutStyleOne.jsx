import HeaderCommon from "@/src/components/header/HeaderCommon";

const LayoutStyleOne = ({ children }) => {
  return (
    <>
      <HeaderCommon />
      {children}
    </>
  );
};

export default LayoutStyleOne;
