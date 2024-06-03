const ChooseModal = (props) => {
  return (
    <div
      className="absolute bg-white border modal p-8 rounded"
      style={{
        top: "50%",
        left: "50%",
        zIndex: "10",
        transform: "translate(-50%, -50%)",
        width: "70vw",
        height: "70vh",
      }}
    >
      <div className="space-y-2">
      <div className="border-b text-lg">Заголовок</div>
        <input
          type="text"
          placeholder="Поиск"
          className="w-full element-input-style"
        />
        <div className="container-model-choose w-full">
            {
                props.items.map((elem)=>( <div className="ml-4 text-sm element-st">{elem.item}</div>))
            }
        </div>
      </div>
      <button className="button-classic">Сохранить</button>
    </div>
  );
};

export { ChooseModal };
