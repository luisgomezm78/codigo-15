export default function Frame ({ children, className, wmiddle }) {
    return (
        <div className="min-h-screen py-40 bg-gray-200">
        <div className={`${wmiddle} mx-auto`}>
          <div className={`flex flex-col lg:flex-row  bg-white rounded-xl mx-auto shadow-lg overflow-hidden ${className}`}>
            {children}
          </div>
        </div>
      </div>
    );

}