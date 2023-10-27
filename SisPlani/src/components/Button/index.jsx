
export default function Button({
    text,
    type = "button",
    className,
    variant = "primary",
  }) {
    const colors = {
      primary: " bg-red-700 shadow-sm text-white text-bold text-sm",
      secondary: "bg-blue-400 border-blue-400 text-white",
    };
  
    return (
      <>
        <button
          type={type}
          className={`mb-3 w-full py-1 rounded ${colors[variant]} ${className}`}
        >
          {text}
        </button>
      </>
    )
}