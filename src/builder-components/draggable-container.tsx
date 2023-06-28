export default function DraggableContainer({
  children,
}: {
  children: React.ReactElement;
}) {
  return (
    <div className="p-4 border border-dashed rounded hover:border-solid hover:shadow hover:border-blue-400 cursor-grab group hover:bg-gray-50">
      <div className="pointer-events-none select-none scale-90 group-hover:scale-100 transition-transform">
        {children}
      </div>
    </div>
  );
}
