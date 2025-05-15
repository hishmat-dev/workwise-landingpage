import loading from "../assets/loading.gif";

const LoadingComponent = () => {
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <img
        alt="Loading..."
        src={loading}
        className="w-full object-contain"
      />
    </div>
  );
};

export default LoadingComponent;
