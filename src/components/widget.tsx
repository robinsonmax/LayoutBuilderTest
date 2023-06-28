export default function Widget({
  children,
  title,
}: {
  children: React.ReactNode;
  title: string;
}) {
  return (
    <div className="border shadow-md rounded-lg w-full @container/widget bg-white">
      <p className="w-full p-4 text-lg border-b border-b-orange-500 font-bold">
        {title}
      </p>
      <div className="w-full p-4 grid grid-flow-dense items-center gap-6 @[600px]/widget:grid-cols-2 @[900px]/widget:grid-cols-3 @[1200px]/widget:grid-cols-4">
        {children}
      </div>
    </div>
  );
}
