const loading = () => {
  return (
    <div className="flex min-h-screen items-center justify-center text-black md:mt-20 md:py-16">
      <div className="flex h-full w-full max-w-[1200px] items-center">
        <div className="flex h-full w-full flex-col gap-2 rounded-lg border border-gray-100 bg-white p-10 drop-shadow-sm">
          <div className="h-12 w-[20rem] animate-pulse rounded-lg bg-gray-200"></div>
          <div className="h-6 w-[20rem] animate-pulse rounded-lg bg-gray-200"></div>
          <div className="mt-8 flex gap-2">
            <div className="h-10 w-1/2 animate-pulse rounded-lg bg-gray-200"></div>
            <div className="h-10 w-1/2 animate-pulse rounded-lg bg-gray-200"></div>
          </div>
          <div className="mt-2 flex gap-2">
            <div className="h-10 w-1/2 animate-pulse rounded-lg bg-gray-200"></div>
            <div className="h-10 w-1/2 animate-pulse rounded-lg bg-gray-200"></div>
          </div>
          <div className="mt-2 h-10 w-full animate-pulse rounded-lg bg-gray-200"></div>
          <div className="mt-2 flex items-center justify-between gap-2">
            <div className="h-6 w-1/4 animate-pulse rounded-lg bg-gray-200"></div>
            <div className="h-10 w-1/5 animate-pulse rounded-lg bg-gray-200"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default loading;
