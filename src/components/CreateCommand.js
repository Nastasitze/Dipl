"use client";
import React from "react";
import SideMenu from "./SideMenu";

function CreateCommand() {
  const teamMembers = [
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
  ];
  const teams = TEAM_NAMES.map((teamName) => (
    <div key={teamName} className="bg-white rounded-lg p-4 mb-4">
      <div className="flex items-center space-x-2">
        <i className="fa fa-user-secret text-[#6B7280] text-xl"></i>
        <span className="font-semibold text-[#333]">{teamName}</span>
      </div>
      <span className="text-sm text-[#6B7280]">Нет участников</span>
      <select className="flex items-center justify-center p-2">
        <option>Добавить участника</option>
      </select>
    </div>
  ));

  return (
    <div className="body">
    <SideMenu />
    <div className="main-block">
      <div className="center-block">
        <div className="font-roboto bg-[#F9FAFB] min-h-screen">
          <div className="flex justify-between items-center max-w-6xl mx-auto">
            <div className="title">
              <div className="font-32">Команды</div>
            </div>
          </div>


          <div className="max-w-6xl mx-auto p-6 space-y-6">
          <div className="flex items-center space-x-2 mb-4  flex-row">
                  <input
                    type="number"
                    className="w-12 p-2 border border-[#D1D5DB] rounded-md text-center"
                    defaultValue={3}
                  />
                  <button className="button-classic">Изменить</button>
                </div>
            <div className="flex justify-between space-x-6">
              
              <div className="">

                <div className="space-y-4">
                  <h2 className="text-lg font-semibold text-[#333]">
                    Созданные команды
                  </h2>
                  <p className="text-sm text-[#6B7280]">
                    Для добавления участников в команды вы можете использовать
                    выделенный список или переместить свободных участников в
                    команды с помощью drag and drop
                  </p>
                  {teams}
                </div>
              </div>

              <div className="bg-white p-6 container-free-students">
                <h2 className="text-lg font-semibold mb-4">
                  Свободные участники
                </h2>
                <div className="flex items-center mb-4">
                  <i className="fa fa-search text-[#6B7280]"></i>
                  <input
                    type="text"
                    placeholder="Поиск"
                    className="w-full p-2 border-0"
                  />
                </div>
                <div className="space-y-2">
                  <div className="container-free-students-list">
                    {teamMembers.map((icon, index) => (
                      <div key={index} className="flex items-center">
                        <span className="ml-4 text-sm element-st">
                          20-ИСбо-2 Мындрила М.А.
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
                <button className="button-classic">
                  Сохранить
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

const TEAM_NAMES = ["Команда 1", "Команда 2", "Команда 3"];

export default CreateCommand;
