"use client";
import React from "react";

function Intensives() {
  const [filter, setFilter] = React.useState("all");
  const [intensives, setIntensives] = React.useState([
    {
      id: 1,
      name: "Дизайн сайтов",
      description: "Изучение дизайна сайтов",
      startDate: "01/06/2023",
      endDate: "30/06/2023",
      participants: "Поток 20-ИСбо",
    },
    {
      id: 2,
      name: "Погружение в Бэк-разработку",
      description: "Изучение языка программирования",
      startDate: "01/07/2023",
      endDate: "31/07/2023",
      participants: "Поток 20-ИСбо",
    },
    {
      id: 3,
      name: "Веб-разработка",
      description: "Разработка сайта с помощью HTML, CSS, JavaScript",
      startDate: "01/08/2023",
      endDate: "31/08/2023",
      participants: "Поток 20-ИСбо",
    },
  ]);

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  const handleCreateIntensive = () => {
    console.log("Creating new intensive");
  };

  const filteredIntensives = intensives.filter((intensive) => {
    if (filter === "all") return true;
    // Additional filtering logic based on the current date or other criteria can be implemented here
    return filter === "active"; // Placeholder, update with actual filtering logic
  });

  return (
    <div className="main-block">
        <div className="center-block">
    <div className="font-roboto bg-[#F9FAFB] min-h-screen">
      <header className="bg-[#FFFFFF] p-6">
        <h1 className="text-2xl font-bold mb-4">Интенсивы</h1>
        <div className="flex justify-between items-center">
          <div className="flex space-x-2">
            <input
              className="block w-80 h-10 pl-3 pr-12 text-base rounded-lg border"
              name="search"
              placeholder="Поиск"
            />
          </div>
          <button
            className="bg-[#2563EB] text-white font-medium py-2 px-4 rounded-md hover:bg-[#1E40AF]"
            onClick={handleCreateIntensive}
          >
            Создать интенсив
          </button>
        </div>
      </header>
      <div className="px-6 py-4">
        <div className="flex justify-center space-x-2 mb-4">
          <button
            value="active"
            onClick={handleFilterChange}
            className={`rounded-md py-2 px-4 ${
              filter === "active"
                ? "bg-[#2563EB] text-white"
                : "bg-transparent text-black"
            }`}
          >
            Актуальные
          </button>
          <button
            value="past"
            onClick={handleFilterChange}
            className={`rounded-md py-2 px-4 ${
              filter === "past"
                ? "bg-[#2563EB] text-white"
                : "bg-transparent text-black"
            }`}
          >
            Прошедшие
          </button>
          <button
            value="all"
            onClick={handleFilterChange}
            className={`rounded-md py-2 px-4 ${
              filter === "all"
                ? "bg-[#2563EB] text-white"
                : "bg-transparent text-black"
            }`}
          >
            Все
          </button>
        </div>
        <div className="overflow-x-auto bg-white rounded-lg">
          <table className="min-w-full border rounded">
            <thead className="bg-[#F1F5F9] border-b">
              <tr>
                <th className="px-6 py-3 text-left font-semibold">Название</th>
                <th className="px-6 py-3 text-left font-semibold">Описание</th>
                <th className="px-6 py-3 text-left font-semibold">
                  Начало интенсива
                </th>
                <th className="px-6 py-3 text-left font-semibold">
                  Окончание интенсива
                </th>
                <th className="px-6 py-3 text-left font-semibold">Участники</th>
              </tr>
            </thead>
            <tbody>
              {filteredIntensives.map((intensive) => (
                <tr key={intensive.id} className="border-b">
                  <td className="px-6 py-4 font-medium">{intensive.name}</td>
                  <td className="px-6 py-4">{intensive.description}</td>
                  <td className="px-6 py-4">{intensive.startDate}</td>
                  <td className="px-6 py-4">{intensive.endDate}</td>
                  <td className="px-6 py-4">{intensive.participants}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
    </div>
    </div>
  );
}

export default Intensives;