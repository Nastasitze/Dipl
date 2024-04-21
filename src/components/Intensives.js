"use client";
import React from "react";
import PostService from "../API/PostService";
import { Link } from "react-router-dom";


function Intensives() {
  const [filter, setFilter] = React.useState("all");
  PostService.getIntensives();
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
    // console.log(event.target);
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
        <div className="">
          <div className="bg-[#FFFFFF] p-6 w-full flex flex-col">
            <div className="title font-32">Интенсивы</div>
            <button
              className="button-classic margin-right"
              onClick={handleCreateIntensive}
            >
             <Link to='/createInt'> Создать интенсив</Link>
            </button>
            

            <div className="search-full-screen">
              <input
                className="w-full"
                name="search"
                placeholder="Поиск"
              />
            </div>
          </div>




          <div className="px-6 py-4">




            <div className="filter">
              <button
                value="active"
                onClick={handleFilterChange}
                className={`rounded-md py-2 px-4 ${filter === "active"
                    ? "font-bold"
                    : ""
                  }`}
              >
                Актуальные
              </button>
              <button
                value="past"
                onClick={handleFilterChange}
                className={`rounded-md py-2 px-4 ${filter === "past"
                  ? "font-bold"
                  : ""
                  }`}
              >
                Прошедшие
              </button>
              <button
                value="all"
                onClick={handleFilterChange}
                className={`rounded-md py-2 px-4 ${filter === "all"
                  ? "font-bold"
                  : ""
                  }`}
              >
                Все
              </button>
              <div className="common-line-filter">
                <div className={filter === "active"? "line-filter" : ""}></div>
                <div className={filter === "past"? "line-filter" : ""}></div>
                <div className={filter === "all"? "line-filter" : ""}></div>
                {/* <div className="line-filter"></div> */}
                <div className="black-line-filter"></div>
              </div>
            </div>




            <div className="overflow-x-auto bg-white rounded-lg">
              <table className="border rounded">
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
                      <td className="px-6 py-4 "><Link to='/commands'>{intensive.name}</Link></td>
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

