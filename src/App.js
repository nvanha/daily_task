import "./App.css";
import React, { Component } from "react";

class App extends Component {
  render() {
    return (
      <div className="wrapper">
        <div className="container">
          <nav className="dashboard">
            <div className="dashboard-header">
              <div className="dashboard-header__avt">
                <img
                  src="https://raw.githubusercontent.com/nvanha/myweb/master/images/logo/logo.png"
                  alt="logo"
                />
              </div>
              <div className="dashboard-header__title">
                <p>nvan.ha</p>
              </div>
            </div>
            <ul className="dashboard-nav">
              <li className="dashboard-item selected">
                <span>
                  <i className="fas fa-play"></i>
                </span>
                <a href="#">
                  <i className="fas fa-check"></i>Daily Task
                </a>
              </li>
              <li className="dashboard-item">
                <span>
                  <i className="fas fa-play"></i>
                </span>
                <a href="#">
                  <i className="fas fa-user-clock"></i>Personal
                </a>
              </li>
              <li className="dashboard-item">
                <span>
                  <i className="fas fa-play"></i>
                </span>
                <a href="#">
                  <i className="fas fa-briefcase"></i>Work
                </a>
              </li>
              <li className="dashboard-item">
                <span>
                  <i className="fas fa-play"></i>
                </span>
                <a href="#">
                  <i className="fas fa-handshake"></i>Errands
                </a>
              </li>
            </ul>
            <div className="dashboard-add-work">
              <div className="taskform">
                <form>
                  <div className="form-group">
                    <input type="text" placeholder="Write a new task" />
                    <select name="" id="">
                      <option value="">Active</option>
                      <option value="">tmp</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <button type="submit">Add</button>
                    <button type="button">Cancel</button>
                  </div>
                </form>
              </div>
              <button className="addwork">
                <i className="fas fa-plus"></i>New Task
              </button>
            </div>
          </nav>
          <div className="content">
            <div className="content-inner">
              <header className="header">
                <div className="header-title">
                  <h1>Daily Task</h1>
                </div>
                <div className="header-description">
                  <p>
                    Click <span>+ New</span> To create new list and wait for
                    project manager card.
                  </p>
                  <p>
                    Don't Create a card by yourself to manage a good
                    colaboration.
                  </p>
                </div>
                <div className="header-control">
                  <div className="header-control__search">
                    <form>
                      <input type="text" placeholder="Search work..." />
                      <button>
                        <i className="fas fa-search"></i>
                      </button>
                    </form>
                  </div>
                  <div className="header-control__sort">
                    <div className="dropdown">
                      <button>
                        Sort<i className="fas fa-sort-down"></i>
                      </button>
                      <ul className="dropdown-menu">
                        <li className="sort_selected">
                          <a role="button">Work A-Z</a>
                        </li>
                        <li>
                          <a role="button">Work Z-A</a>
                        </li>
                        <li className="divider"></li>
                        <li>
                          <a role="button">Active</a>
                        </li>
                        <li>
                          <a role="button">Tmp</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </header>
              <main className="main">
                <div className="work-list">
                  <div className="work-item">
                    <div className="work-item__name">Di Danh Cau.</div>
                    <div className="work-item__control">
                      <span className="status true">Active</span>
                      <div className="space"></div>
                      <button className="edit">
                        <i className="fas fa-pen"></i>
                      </button>
                      <button className="delete">
                        <i className="fas fa-trash"></i>
                      </button>
                    </div>
                  </div>
                  <div className="work-item">
                    <div className="work-item__name">Di Choi</div>
                    <div className="work-item__control">
                      <span className="status false">Active</span>
                      <div className="space"></div>
                      <button className="edit">
                        <i className="fas fa-pen"></i>
                      </button>
                      <button className="delete">
                        <i className="fas fa-trash"></i>
                      </button>
                    </div>
                  </div>
                  <div className="work-item">
                    <div className="work-item__name">Di Rua Chen</div>
                    <div className="work-item__control">
                      <span className="status true">Active</span>
                      <div className="space"></div>
                      <button className="edit">
                        <i className="fas fa-pen"></i>
                      </button>
                      <button className="delete">
                        <i className="fas fa-trash"></i>
                      </button>
                    </div>
                  </div>
                  <div className="work-item">
                    <div className="work-item__name">Don Nha Ve Sinh</div>
                    <div className="work-item__control">
                      <span className="status true">Active</span>
                      <div className="space"></div>
                      <button className="edit">
                        <i className="fas fa-pen"></i>
                      </button>
                      <button className="delete">
                        <i className="fas fa-trash"></i>
                      </button>
                    </div>
                  </div>
                  <div className="work-item">
                    <div className="work-item__name">
                      Create Prototype Mobile for Get Notification in Principle
                    </div>
                    <div className="work-item__control">
                      <span className="status false">Active</span>
                      <div className="space"></div>
                      <button className="edit">
                        <i className="fas fa-pen"></i>
                      </button>
                      <button className="delete">
                        <i className="fas fa-trash"></i>
                      </button>
                    </div>
                  </div>
                  <div className="work-item">
                    <div className="work-item__name">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Unde sapiente doloribus nihil. Vel autem odio molestiae
                      deserunt voluptatem dolore non est ea rem expedita
                      facilis, minima accusantium debitis natus sed.
                    </div>
                    <div className="work-item__control">
                      <span className="status true">Off</span>
                      <div className="space"></div>
                      <button className="edit">
                        <i className="fas fa-pen"></i>
                      </button>
                      <button className="delete">
                        <i className="fas fa-trash"></i>
                      </button>
                    </div>
                  </div>
                  <div className="work-item">
                    <div className="work-item__name">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Unde sapiente doloribus nihil. Vel autem odio molestiae
                      deserunt voluptatem dolore non est ea rem expedita
                      facilis, minima accusantium debitis natus sed.
                    </div>
                    <div className="work-item__control">
                      <span className="status true">Off</span>
                      <div className="space"></div>
                      <button className="edit">
                        <i className="fas fa-pen"></i>
                      </button>
                      <button className="delete">
                        <i className="fas fa-trash"></i>
                      </button>
                    </div>
                  </div>
                  <div className="work-item">
                    <div className="work-item__name">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Unde sapiente doloribus nihil. Vel autem odio molestiae
                      deserunt voluptatem dolore non est ea rem expedita
                      facilis, minima accusantium debitis natus sed.
                    </div>
                    <div className="work-item__control">
                      <span className="status true">Off</span>
                      <div className="space"></div>
                      <button className="edit">
                        <i className="fas fa-pen"></i>
                      </button>
                      <button className="delete">
                        <i className="fas fa-trash"></i>
                      </button>
                    </div>
                  </div>
                  <div className="work-item">
                    <div className="work-item__name">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Unde sapiente doloribus nihil. Vel autem odio molestiae
                      deserunt voluptatem dolore non est ea rem expedita
                      facilis, minima accusantium debitis natus sed.
                    </div>
                    <div className="work-item__control">
                      <span className="status true">Off</span>
                      <div className="space"></div>
                      <button className="edit">
                        <i className="fas fa-pen"></i>
                      </button>
                      <button className="delete">
                        <i className="fas fa-trash"></i>
                      </button>
                    </div>
                  </div>
                  <div className="work-item">
                    <div className="work-item__name">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Unde sapiente doloribus nihil. Vel autem odio molestiae
                      deserunt voluptatem dolore non est ea rem expedita
                      facilis, minima accusantium debitis natus sed.
                    </div>
                    <div className="work-item__control">
                      <span className="status true">Off</span>
                      <div className="space"></div>
                      <button className="edit">
                        <i className="fas fa-pen"></i>
                      </button>
                      <button className="delete">
                        <i className="fas fa-trash"></i>
                      </button>
                    </div>
                  </div>
                  <div className="work-item">
                    <div className="work-item__name">
                      Create Prototype Mobile for Get Notification in Principle
                    </div>
                    <div className="work-item__control">
                      <span className="status true">Active</span>
                      <div className="space"></div>
                      <button className="edit">
                        <i className="fas fa-pen"></i>
                      </button>
                      <button className="delete">
                        <i className="fas fa-trash"></i>
                      </button>
                    </div>
                  </div>
                  <div className="work-item">
                    <div className="work-item__name">
                      Create Prototype Mobile for Get Notification in Principle
                    </div>
                    <div className="work-item__control">
                      <span className="status true">Active</span>
                      <div className="space"></div>
                      <button className="edit">
                        <i className="fas fa-pen"></i>
                      </button>
                      <button className="delete">
                        <i className="fas fa-trash"></i>
                      </button>
                    </div>
                  </div>
                  <div className="work-item">
                    <div className="work-item__name">
                      Create Prototype Mobile for Get Notification in Principle
                    </div>
                    <div className="work-item__control">
                      <span className="status true">Active</span>
                      <div className="space"></div>
                      <button className="edit">
                        <i className="fas fa-pen"></i>
                      </button>
                      <button className="delete">
                        <i className="fas fa-trash"></i>
                      </button>
                    </div>
                  </div>
                  <div className="work-item">
                    <div className="work-item__name">
                      Create Prototype Mobile for Get Notification in Principle
                    </div>
                    <div className="work-item__control">
                      <span className="status true">Active</span>
                      <div className="space"></div>
                      <button className="edit">
                        <i className="fas fa-pen"></i>
                      </button>
                      <button className="delete">
                        <i className="fas fa-trash"></i>
                      </button>
                    </div>
                  </div>
                  <div className="work-item">
                    <div className="work-item__name">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Unde sapiente doloribus nihil. Vel autem odio molestiae
                      deserunt voluptatem dolore non est ea rem expedita
                      facilis, minima accusantium debitis natus sed.
                    </div>
                    <div className="work-item__control">
                      <span className="status true">Off</span>
                      <div className="space"></div>
                      <button className="edit">
                        <i className="fas fa-pen"></i>
                      </button>
                      <button className="delete">
                        <i className="fas fa-trash"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </main>
            </div>
          </div>
        </div>
        <a role="button" id="toggle-show-dashboard">
          <i className="fas fa-plus"></i>
        </a>
      </div>
    );
  }
}

export default App;
