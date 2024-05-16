import { useState, useEffect } from "react";
import { useDrop } from "react-dnd";
import DraggingElement from "./DraggingElement";

const DragContainer = ({teamName, func, team}) => {
  const [draggedElements, setDraggedElements] = useState([]);

  const [{ isDragging }, dropRef] = useDrop({
    accept: "ball",
    drop(data) {
      setDraggedElements([...draggedElements, data]);
      func(team.filter((item) => item.index !== data.index));
    },
    collect: (monitor) => ({
      isDragging: monitor.isOver(),
    }),
  });

  return (
    <div
      key={teamName}
      ref={dropRef}
      className={
        isDragging
          ? "flex flex-col column-command-create border-drag-and-drop"
          : "flex flex-col column-command-create"
      }
      onDragOver={(evt) => evt.preventDefault()}
    >
      <div className="flex items-center space-x-2">
        <span className="font-semibold text-[#333]">{teamName}</span>
      </div>

      <span className="text-sm text-[#6B7280]">Нет участников</span>

      {draggedElements.map((smile) => (
        <DraggingElement key={smile.index} data={smile} />
      ))}
      <select className="mini-element-input-style">
        <option>Добавить участника</option>
      </select>
    </div>
  );
};
export default DragContainer;
