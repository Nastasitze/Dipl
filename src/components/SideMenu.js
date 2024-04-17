import React, { Component } from "react";

class SideMenu extends Component {
  render() {
    return (
      <div className="side-menu-cont">
        <div className="column-container">
          <div className="title-block">
          <div className="font-18">Доступные роли</div>
          </div>
          <div className="header-list-conainer column-container">
            <div className="elem-list">
              <div className="font-14 ">Администратор</div>
            </div>
            <div className="elem-list">
              <div className="font-14 ">Наставник</div>
            </div>
          </div>

        </div>
        <div className="column-container">
          <div className="title-block column-container">
            <div className="font-18">Интенсив 1</div>
            <div className="font-14 color-title">10.01.2021-21.09.2022</div>
          </div>

          <div className="header-list-conainer column-container">
            <div className="elem-list">
              <div>Настройки интенсива</div>
            </div>
            <div className="elem-list">
              <div>Настройки интенсива</div>
            </div>
            <div className="elem-list">
              <div>Настройки интенсива</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SideMenu;
