export default function Card({ children, className }) {
  return (
    <div className={`w-full flex flex-col text-black px-2 ${className}`}>
      {children}
    </div>
  );
}
