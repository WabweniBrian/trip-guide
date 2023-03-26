const LoadingSkeleton = ({ basis }) => {
  return (
    <div className="flex flex-wrap gap-4">
      {Array.apply(null, { length: 9 }).map((_, i) => (
        <div
          key={i}
          className={`flex-1 ${
            basis ? basis : "basis-[16rem]"
          } rounded-lg border dark:border-dark bg-white dark:bg-card-dark h-[300px] overflow-hidden`}
        >
          <div className="h-[100px] w-full bg-slate-200 dark:bg-dark-light skeleton"></div>
          <div className="p-1">
            <div className="mt-3 flex-center-between  gap-4">
              <div className="w-full h-3 bg-slate-200 dark:bg-dark-light skeleton"></div>
              <div className="w-full h-3 bg-slate-200 dark:bg-dark-light skeleton"></div>
            </div>
            <div className="mt-2">
              <div className="w-full h-2 mt-2 bg-slate-200 dark:bg-dark-light skeleton"></div>
              <div className="w-full h-2 mt-2 bg-slate-200 dark:bg-dark-light skeleton"></div>
              <div className="w-full h-2 mt-2 bg-slate-200 dark:bg-dark-light skeleton"></div>
              <div className="w-11/12 h-2 mt-2 bg-slate-200 dark:bg-dark-light skeleton"></div>
              <div className="w-11/12 h-2 mt-2 bg-slate-200 dark:bg-dark-light skeleton"></div>
            </div>
            <div className="w-1/2 h-10 mt-3 bg-slate-200 dark:bg-dark-light skeleton"></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default LoadingSkeleton;
