import { cn } from "../lib/utils";

export default function DropZone({ children }: { children?: React.ReactNode }) {
  return (
    <div
      className={cn(
        "border p-2 border-dashed w-full h-full flex items-center justify-center rounded-md",
        {
          "hover:border-solid hover:bg-gray-50 hover:border-blue-400": children,
        }
      )}
    >
      {children || <p className="py-8 text-gray-400">Drop Element Here</p>}
    </div>
  );
}
