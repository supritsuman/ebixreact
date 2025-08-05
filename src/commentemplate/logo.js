const Logo = () => {
  const logoimg = `${process.env.PUBLIC_URL}/images/logo.svg`;

  return (
    <>
      <img src={logoimg} alt="Logo" className="logotop" />
    </>
  );
};

export default Logo;
