// eslint-disable-next-line react/prop-types
export default function Brand({ name, active, icon }) {
  return (
    <button
      className={` px-7 py-3 rounded-3xl text-brandColor shadow-md gap-1 m-3 flex items-center   ${active}`}
    >
      {icon}
      {name}
    </button>
  );
}
