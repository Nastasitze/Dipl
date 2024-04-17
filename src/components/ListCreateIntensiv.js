import React, { Component } from "react";


class ListCreateIntensiv extends Component {
  render() {
    return (
      <div className="main-block">
        <div className="center-block">
          <div className="list-content column-container">
            <div className="title ">
              <div className="font-32">Создать мероприятие</div>
            </div>
            <div className="column-container">
              <div className="element-list-input">
                <div className="font-18 bold-font">Мероприятие</div>
              </div>
              <div className="element-list-input column-container">
                <div className="">Название мероприятия</div>
                <input
                  className="element-input-style"
                  placeholder="Название мероприятия"
                ></input>
              </div>
              <div className="element-list-input column-container">
                <div className="">Описание мероприятия</div>
                <input
                  className="element-input-style"
                  placeholder="Описание мероприятия"
                ></input>
              </div>
              <div className="element-list-input">
                <div className="font-18 bold-font">Время проведения</div>
              </div>
              <div className="displey-row">
                <div className="element-list-input column-container">
                  <div className="">Дата начала</div>
                  <input
                    type="date"
                    className="element-input-style"
                    placeholder="Дата начала"
                  ></input>
                </div>
                <div className="element-list-input column-container">
                  <div className="">Дата окончания</div>
                  <input
                    type="date"
                    className="element-input-style"
                    placeholder="Дата окончания"
                  ></input>
                </div>
              </div>

              <div className="displey-row">
                <div className="element-list-input column-container">
                  <div className="">Время начала</div>
                  <input
                    className="element-input-style"
                    placeholder="Время начала"
                  ></input>
                </div>
                <div className="element-list-input column-container">
                  <div className="">Время окончания</div>
                  <input
                    className="element-input-style"
                    placeholder="Время окончания"
                  ></input>
                </div>
              </div>
              <div className="element-list-input">
                <div className="font-18 bold-font">Результат мероприятия</div>
              </div>
              <div className="element-list-input column-container">
                <div className="radio-button">
                  <input type="radio" name="drone" value="louie" />
                  <label for="louie">Без оценивания</label>
                </div>
                <div className="radio-button">
                  <input type="radio" name="drone" value="louie" />
                  <label for="louie">Зачет/Незачет</label>
                </div>
              </div>
              <div className="element-list-input">
                <div className="font-18 bold-font"> Участники</div>
              </div>
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
                <div className="border-2 border-dashed border-[#9CA3AF] rounded-md p-4 text-[#6B7280] file-block">
                  <label
                    htmlFor="fileUpload"
                    className="block text-sm font-medium mb-1 cursor-pointer">
                    Перетащите необходимые файлы
                  </label>
                  <input
                    id="fileUpload"
                    name="fileUpload"
                    type="file"
                    className="block w-full text-sm text-[#6B7280] file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-[#E0E7FF] file:text-[#1D4ED8] cursor-pointer"
                    multiple
                  />
                </div>
              </div>
              <div>
                <button className="mt-4 w-full bg-[#2563EB] text-white font-medium py-2 px-4 rounded-md hover:bg-[#1E40AF]">Создать интенсив</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ListCreateIntensiv;
