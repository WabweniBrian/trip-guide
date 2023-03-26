const NewsLetter = () => {
  return (
    <div className="mt-10 px-[3%] md:px-[6%]">
      <div className="flex-align-center gap-5 text-slate-100 flex-wrap p-8 rounded-lg bg-secondaryBlue">
        <div className="flex-1 basis-[18rem]">
          <h1 className="text-2xl font-bold mb-4">Get our pro offers</h1>
          <p>Create visual identity for your company, and an overall brand</p>
        </div>
        <div className="flex-1 basis-[18rem]">
          <div className="flex-center-between gap-x-3 bg-white px-4 py-1 dark:bg-card-dark rounded-md">
            <input
              type="text"
              className="border-none w-full text-slate-600 dark:text-slate-300 outline-none bg-transparent px-2 py-1"
              placeholder="Type your email here..."
            />
            <button className="btn btn-secondary">subscribe</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
