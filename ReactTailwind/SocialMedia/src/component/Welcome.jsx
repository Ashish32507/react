const Welcome = () => {
  return (
    <>
      <center className="h-32 w-full text-3xl py-24 relative">
        <h1>There Are No Post</h1>
        <div className="flex justify-center items-center h-screen">
          <div className="animate-spin rounded-full h-20 w-20 border-b-4 border-gray-800"></div>
        </div>
      </center>
    </>
  );
};

export default Welcome;
