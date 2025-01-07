export const UserRating = () => {
  return (
    <>
      <div className="flex items-center gap-3 mt-9">
        <div className="flex items-center ">
          <img
            src="/images/avatar.jpg"
            alt="User 1"
            className="w-8 h-8 rounded-full border-2 border-[#37383c] -ml-2"
          />
          <img
            src="/images/avatar.jpg"
            alt="User 2"
            className="w-8 h-8 rounded-full border-2 border-[#37383c] -ml-2"
          />
          <img
            src="/images/avatar.jpg"
            alt="User 3"
            className="w-8 h-8 rounded-full border-2 border-[#37383c] -ml-2"
          />
          <img
            src="/images/avatar.jpg"
            alt="User 4"
            className="w-8 h-8 rounded-full border-2 border-[#37383c] -ml-2"
          />
          <div className="w-8 h-8 flex items-center justify-center bg-red-500 text-white font-bold rounded-full border-2 border-[#37383c] -ml-2">
            +
          </div>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-yellow-400 text-lg">⭐</span>
          <span className="font-semibold text-white text-lg">4.9</span>
          <span className="text-gray-200 text-sm">(450 Reviews)</span>
        </div>
      </div>
    </>
  );
};
