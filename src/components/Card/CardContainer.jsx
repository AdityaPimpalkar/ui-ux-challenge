export const CardContainer = (props) => {
  return (
    <>
      <label className="text-lg font-semibold">{props.title}</label>
      <div className="my-7">
        <div className="md:grid md:grid-cols-2 md:gap-6 lg:grid-cols-3">
          {props.children}
        </div>
      </div>
    </>
  );
};
