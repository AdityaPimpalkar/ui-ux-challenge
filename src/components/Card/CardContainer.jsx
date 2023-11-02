export const CardContainer = (props) => {
  return (
    <>
      <label className="text-lg font-semibold lg:text-xl">{props.title}</label>
      <div className="my-7">
        <div className="md:grid md:grid-cols-2 md:gap-3 lg:gap-10 lg:grid-cols-3 2xl:grid-cols-4">
          {props.children}
        </div>
      </div>
    </>
  );
};
