"use client";
import React, { Component } from "react";
import PostService from "../API/PostService";
import { Link } from "react-router-dom";

class Intensives extends Component {
  constructor(props) {
    super(props);

    this.state = {
      filter:"all",
      data: {
        count: null,
        next: null,
        previous: null,
        results: [
          {
            id: null,
            group: [
              {
                id: null,
                name: null,
              },
            ],
            name: null,
            description: null,
            is_open: null,
            open_dt: null,
            close_dt: null,
            created_at: null,
            updated_at: null,
          },
        ],
      },
    };

    this.handleFilterChange = this.handleFilterChange.bind(this);

  }

  fillIntensiveTable() {
    let intensives = this.state.data.results.map((results) => (
      
      <tr key={results.id} className="border-b">
        <td className="px-6 py-4 "><Link to={`/commands/${results.id}`}>{results.name}</Link></td>
        <td className="px-6 py-4">{results.description}</td>
        <td className="px-6 py-4">{results.created_at}</td>
        <td className="px-6 py-4">{results.updated_at}</td>
        <td className="px-6 py-4">
        {results.group.map((group)=>(group.name))}
        </td>
      </tr>
    ));

    return intensives;
  }

  componentDidMount() {
    PostService.getIntensives().then((res) => {
      this.setState({ data: res });
    });
  }


  handleFilterChange(event){
    this.setState({filter:event.target.value});
  };


  render() {

    let intensives = this.fillIntensiveTable();
    return (
      <div className="main-block">
        <div className="center-block">
          <div className="">
            <div className="bg-[#FFFFFF] p-6 w-full flex flex-col">
              <div className="title font-32">Интенсивы</div>
              <button className="button-classic margin-right">
                <Link to="/createInt"> Создать интенсив</Link>
              </button>

              <div className="search-full-screen">
                <input className="w-full" name="search" placeholder="Поиск" />
              </div>
            </div>

            <div className="px-6 py-4">
              <div className="filter">
                <button
                  value="active"
                  onClick={this.handleFilterChange}
                  className={`rounded-md py-2 px-4 ${this.state.filter === "active" ? "font-bold" : "" }`}>
                  Актуальные
                </button>
                <button
                  value="past"
                  onClick={this.handleFilterChange}
                  className={`rounded-md py-2 px-4 ${this.state.filter === "past"? "font-bold" : ""}`}>
                  Прошедшие
                </button>
                <button
                  value="all"
                  onClick={this.handleFilterChange}
                  className={`rounded-md py-2 px-4 ${this.state.filter === "all" ? "font-bold" : "" }`}>
                  Все
                </button>
                <div className="common-line-filter">
                  <div className={this.state.filter === "active"? "line-filter" : ""}></div>
                <div className={this.state.filter === "past"? "line-filter" : ""}></div>
                <div className={this.state.filter === "all"? "line-filter" : ""}></div> 
                  {/* <div className="line-filter"></div> */}
                  <div className="black-line-filter"></div>
                </div>
              </div>

              <div className="overflow-x-auto bg-white rounded-lg">
                <table className="border rounded">
                  <thead className="bg-[#F1F5F9] border-b">
                    <tr>
                      <th className="px-6 py-3 text-left font-semibold">
                        Название
                      </th>
                      <th className="px-6 py-3 text-left font-semibold">
                        Описание
                      </th>
                      <th className="px-6 py-3 text-left font-semibold">
                        Начало интенсива
                      </th>
                      <th className="px-6 py-3 text-left font-semibold">
                        Окончание интенсива
                      </th>
                      <th className="px-6 py-3 text-left font-semibold">
                        Участники
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                  {intensives}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Intensives;
