import React, { Component, useState } from "react";
import SideMenu from "./SideMenu";
import { InputDescription } from "./InputDescription";
import { InputRadio } from "./InputRadio";
import { InputRadioDescription } from "./InputRadioDescription";
import { InputDelete } from "./InputDelete";
import { InputDeleteConteiner } from "./InputDeleteConteiner";
import { SelectDescription } from "./SelectDescription";
import { ChooseModal } from "./ChooseModal";

const ListCreateIntensiv = () => {

  const [showCrit, setShowCrit]=useState(false);

  return (
    <div className="body">
      <SideMenu />
      <div className="main-block">
        <div className="center-block">
        {/* <ChooseModal /> */}
          <div className="list-content column-container">
            <div className="title ">
              <div className="font-32">Создать мероприятие</div>
            </div>
            <div className="column-container">
              <div className="element-list-input">
                <div className="font-18 bold-font">Мероприятие</div>
              </div>
              <InputDescription descriptionProp={"Название мероприятия"} />
              <InputDescription descriptionProp={"Описание мероприятия"} />
              <div className="element-list-input">
                <div className="font-18 bold-font">Время проведения</div>
              </div>
              <div className="displey-row">
                <InputDescription
                  descriptionProp={"Дата начала"}
                  typeProp={"date"}
                />
                <InputDescription
                  descriptionProp={"Дата окончания"}
                  typeProp={"date"}
                />
              </div>

              <div className="displey-row">
                <InputDescription
                  descriptionProp={"Время начала"}
                  typeProp={"time"}
                />
                <InputDescription
                  descriptionProp={"Время окончания"}
                  typeProp={"time"}
                />
              </div>

              <div className="element-list-input">
                <div className="font-18 bold-font">Результат мероприятия</div>
              </div>
              <div className="element-list-input column-container">
                <InputRadioDescription showFunc={setShowCrit} />
              </div>

              <div className="element-list-input column-container">
              { showCrit? <InputDeleteConteiner/>: null}
              </div>

              <div className="element-list-input">
                <div className="font-18 bold-font"> Участники</div>
              </div>
              <SelectDescription descriptionProp={'Список учебных групп'} 
              option={[{id:1,Name:'Учитель 1'},{id:2,Name:'Учитель 2'},{id:3,Name:'Учитель 4'}]}/>

              <div className="element-list-input column-container">
                <div className="">Список учебных групп</div>
                <select className="element-input-style">
                  <option>Выбрать</option>
                  <option>Список учебных групп</option>
                </select>
              </div>

              <div className="element-list-input column-container">
                <div className="">Список ролей для студентов</div>
                <select className="element-input-style">
                  <option>Выбрать</option>
                  <option>Список учебных групп</option>
                </select>
              </div>

              <div className="element-list-input">
                <div className="font-18 bold-font"> Файлы для студентов</div>
              </div>

              <div>
                <div className="border-2 border-dashed border-[#9CA3AF] rounded-md p-4 text-[#6B7280] file-block ">
                  <label
                    htmlFor="fileUpload"
                    className="block text-sm font-medium mb-1 cursor-pointer"
                  >
                    Перетащите необходимые файлы
                  </label>
                  <input
                    id="fileUpload"
                    name="fileUpload"
                    type="file"
                    className="block text-sm text-[#6B7280] file:mr-4 file:py-2 file:px-4 file:rounded-md
                               file:border-0 file:text-sm file:font-semibold file:bg-[#E0E7FF] file:text-[#1D4ED8] cursor-pointer"
                    multiple
                  />
                </div>
              </div>
              <div>
                <button className="button-classic margin element-list-input">
                  Создать интенсив
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListCreateIntensiv;
