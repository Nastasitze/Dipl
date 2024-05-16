"use client";
import React from "react";
import DragElement from "./DragComponents/DragElement";
import DraggingElement from "./DragComponents/DraggingElement";
import { useState, useEffect } from "react";
import { useDrop } from "react-dnd";
import DragContainer from "./DragComponents/DragContainer";

const base = [    
  { index: 0, content: 'Мындрила М.А,' },
  { index: 1, content: 'Мындрила М.А,'},
  { index: 2, content: 'Мындрила М.А,' },
  { index: 3, content: 'Мындрила М.А,' },
  { index: 4, content: 'Мындрила М.А,' },
  { index: 5, content: 'Мындрила М.А,' },
  { index: 6, content: 'Мындрила М.А,' },
  { index: 7, content: 'Мындрила М.А,' },
  { index: 8, content: 'Мындрила М.А,' },
  { index: 9, content: 'Мындрила М.А,' },
  { index: 10, content: 'Мындрила М.А,' }]

const TEAM_NAMES = [{id:0, name:"Команда 1"}, {id:1, name:"Команда 2"}];


function CreateCommand() {
  const [teamMembers, setTeamMembers] = useState([]);
  const [teams, setTeams] = useState([]);
  const [selectedMembers, setSelectedMembers] = useState([]);

  useEffect(() => {
    setTeamMembers(base);
    setTeams(TEAM_NAMES);
  }, []);

  return (
    <div className="main-block">
      <div className="center-block">
        <div className="font-roboto bg-[#F9FAFB] min-h-screen">
          <div className="flex justify-between items-center max-w-6xl mx-auto">
            <div className="title">
              <div className="font-32">Команды</div>
              <p className="text-sm text-[#6B7280]">
                Создайте команды и распределите участников интенсива по командам
              </p>
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
            <div className="flex gap margin-top">

              <div className="">


                <div className="left-column-command">
                  <h2 className="text-lg font-bold text-[#333]">
                    Созданные команды
                  </h2>
                  <p className="text-sm text-[#6B7280]">
                    Для добавления участников в команды вы можете использовать
                    выделенный список или переместить свободных участников в
                    команды с помощью drag and drop
                  </p>
                  {TEAM_NAMES.map((teamName) => (
                    <DragContainer key={teamName.id} teamName={teamName.name} func={setTeamMembers} team={teamMembers}/>))
                    }
                </div>
              </div>
              <div>
                <div className="bg-white p-6 container-free-students">
                  <h2 className="text-lg font-bold mb-4">
                    Свободные участники
                  </h2>
                  <div className="flex items-center mb-4 search-full-screen ">
                    <i className="fa fa-search text-[#6B7280]"></i>
                    <input
                      type="text"
                      placeholder="Поиск"
                      className="w-full p-2 border-0"
                    />
                  </div>
                  <div className="space-y-2">
                    <div className="container-free-students-list">
                      {teamMembers.map((index) => (
                        <DragElement key={index.index} data={index} selectedMembers={selectedMembers} setSelectedMembers={setSelectedMembers}></DragElement>
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





export default CreateCommand;



