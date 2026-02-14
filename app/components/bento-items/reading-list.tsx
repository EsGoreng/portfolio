const books = [
  {
    title: "Atomic Habits",
    author: "James Clear",
    gradient: "from-purple-500 to-indigo-600",
  },
  {
    title: "Clean Code",
    author: "Robert C. Martin",
    gradient: "from-green-400 to-emerald-600",
  },
  {
    title: "The Pragmatic Programmer",
    author: "David Thomas",
    gradient: "from-orange-400 to-red-500",
  },
];

export const ReadingList = () => {
  return (
    <div className="flex h-full flex-col p-6">
      <h3 className="mb-4 flex items-center gap-2 text-lg font-bold">
        <span>📚</span> Reading List
      </h3>
      <div className="flex flex-col gap-3">
        {books.map((book, idx) => (
          <div
            key={idx}
            className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-3"
          >
            <div
              className={`h-14 w-10 shrink-0 rounded-sm bg-linear-to-br ${book.gradient} shadow-sm`}
            ></div>
            <div>
              <p className="text-sm font-bold">{book.title}</p>
              <p className="text-[10px] opacity-60">{book.author}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
