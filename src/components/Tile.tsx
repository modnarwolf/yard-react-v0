import React from "react";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { GripVertical } from "lucide-react";

interface TileProps {
  id: string;
  title: string;
  children: React.ReactNode;
  isDraggingEnabled: boolean;
}

export function Tile({ id, title, children, isDraggingEnabled }: TileProps) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id, disabled: !isDraggingEnabled });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    zIndex: isDragging ? 10 : 1,
    height: "100%", // Make all tiles the same height
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      className={`relative bg-white rounded-lg shadow-md overflow-hidden h-full ${
        isDragging ? "shadow-xl ring-2 ring-blue-400" : ""
      }`}
    >
      <div className="p-4 h-full flex flex-col">
        <div className="flex justify-between items-center mb-2">
          <h3 className="text-lg font-medium">{title}</h3>
          {isDraggingEnabled && (
            <div
              {...attributes}
              {...listeners}
              className="cursor-grab active:cursor-grabbing p-1 rounded hover:bg-gray-100"
            >
              <GripVertical size={18} className="text-gray-500" />
            </div>
          )}
        </div>
        <div className="flex-1">{children}</div>
      </div>
    </div>
  );
}
