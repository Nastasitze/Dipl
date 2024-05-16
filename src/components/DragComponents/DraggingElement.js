const DraggingElement = ({ data, onDrag }) => {
    const onDragStart = () => {
      onDrag(data);
    };
    return (
      <div className="smile" draggable onDragStart={onDragStart}>
        {data.content}
      </div>
    );
  };
  
  export default DraggingElement;