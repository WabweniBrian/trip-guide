const FAQs = () => {
  return (
    <div className="pt-8 pb-10">
      <h1 className="text-center heading">frequently asked questions</h1>
      <div className="mt-5 flex flex-wrap gap-4">
        {Array.apply(null, { length: 2 }).map((_, i) => (
          <div
            key={i}
            className="p-4 flex-1 basis-[18rem] rounded-lg bg-slate-200 border dark:bg-card-dark dark:border-dark"
          >
            <h1 className="text-lg font-semibold">
              How is TripGuide different from other hotel booking websites
            </h1>
            <p className="mt-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
              ipsam, quaerat culpa incidunt quae earum similique hic ad.
              Pariatur ipsum, ut voluptatum voluptate iusto voluptas sint
              maiores laborum animi! Vero inventore voluptatum esse tempora
              aliquam.
            </p>
          </div>
        ))}
      </div>
      <div className="flex-center-center mt-6">
        <button className="btn btn-primary">more faqs</button>
      </div>
    </div>
  );
};

export default FAQs;
