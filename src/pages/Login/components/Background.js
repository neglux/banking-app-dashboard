const Background = ({ children }) => {
  return (
    <>
      <section className="absolute flex w-screen h-screen justify-center items-center">
        <div className="relative bg-[#ffffff0b] text-[#dde2e8] z-10 w-fit h-fit rounded-2xl shadow-lg py-10">
          {children}
        </div>
      </section>
      <div className="box">&nbsp;</div>
      <div className="fixed w-screen h-screen bg-gradient-to-bl to-[#04192d] from-[#06213c] " />
    </>
  );
};

export default Background;
