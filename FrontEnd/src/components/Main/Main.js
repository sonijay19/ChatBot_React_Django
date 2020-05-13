import React from "react";
import $ from "jquery";
import {
  SendMessage,
  hideChat,
  SendMessageAll,
  toggleFab,
} from "./DOMJs";
import "./Main.css";

class Main extends React.Component {
  constructor() {
    super();
    this.sendData = this.sendData.bind(this);
  }
  sendData() {
    SendMessage();
  }
  componentDidMount() {

    let flag = 1;
    $("#chatSend").on("keydown", function (e) {
      if (e.keyCode === 13) {
        SendMessage();
      }
    });
    let amount = 0;
    $("#fab_send").click(() => {
      amount += 1;
      if (amount == 2)
        if (amount == 2) {
          if (flag < 4) {
            hideChat(flag);
            flag += 1;
          }
          amount = 0;
        }
    });
    hideChat(0);
    $("#prime").click(function () {
      toggleFab();
    });
    $("#chat_first_screen").click(function (e) {
      flag = 2;
      hideChat(1);
    });

    $("#chat_second_screen").click(function (e) {
      flag = 3;
      hideChat(2);
    });

    $("#chat_third_screen").click(function (e) {
      flag = 4;
      hideChat(3);
    });

    $("#chat_fourth_screen").click(function (e) {
      flag = 5;
      hideChat(4);
    });

    $("#back_second").click((e) => {
      if (flag >= 2) {
        hideChat(flag + 3);
        flag -= 1;
      }
    });

    $("#chat_fullscreen_loader").click(function (e) {
      $(".fullscreen").toggleClass("zmdi-window-maximize");
      $(".fullscreen").toggleClass("zmdi-window-restore");
      $(".chat").toggleClass("chat_fullscreen");
      $(".fab").toggleClass("is-hide");
      $(".header_img").toggleClass("change_img");
      $(".img_container").toggleClass("change_img");
      $(".chat_header").toggleClass("chat_header2");
      $(".fab_field").toggleClass("fab_field2");
      $(".chat_converse").toggleClass("chat_converse2");
    });
    function getEventTarget(e) {
      e = e || window.event;
      return e.target || e.srcElement;
    }

    var ul = document.getElementById("Ful");
    ul.onclick = function (event) {
      var target = getEventTarget(event);
      //alert(target.innerHTML);
      SendMessageAll(target.innerHTML);
    };
  }
  render() {
    return (
      <div>
        <h3>Click it and Chat with Our Bot</h3>

        <div className="fabs">
          <div className="chat">
            <div className="chat_header">
              <div className="chat_option">
                <div className="header_img">
                  <img
                    src="http://res.cloudinary.com/dqvwa7vpe/image/upload/v1496415051/avatar_ma6vug.jpg"
                    alt="Page Loading"
                  />
                </div>
                <span id="chat_head">ADIT Collage</span> <br />
                <span className="agent">Agent</span>
                <span className="online">(Online)</span>
                <span
                  id="chat_fullscreen_loader"
                  className="chat_fullscreen_loader"
                >
                  <i className="fullscreen zmdi zmdi-window-maximize"></i>
                </span>
              </div>
            </div>
            <div className="chat_body chat_login">
              <a id="chat_first_screen" className="fab">
                <i className="zmdi zmdi-arrow-right"></i>
              </a>
              <p>
                We make it simple and seamless for businesses and people to talk
                to each other. Ask us anything
              </p>
            </div>
            <div id="chat_converse" className="chat_conversion chat_converse">
              <a id="chat_second_screen" className="fab">
                <i className="zmdi zmdi-arrow-right"></i>
              </a>

              <span className="chat_msg_item chat_msg_item_admin">
                <div className="chat_avatar">
                  <img src="http://res.cloudinary.com/dqvwa7vpe/image/upload/v1496415051/avatar_ma6vug.jpg" />
                </div>
                Hey there! Any question?
              </span>
              <span className="chat_msg_item chat_msg_item_user"> Hello!</span>
              <span className="chat_msg_item chat_msg_item_admin">
                <div className="chat_avatar">
                  <img src="http://res.cloudinary.com/dqvwa7vpe/image/upload/v1496415051/avatar_ma6vug.jpg" />
                </div>
                Hey! Would you like to talk clg details or anyone?
              </span>
              <span className="chat_msg_item chat_msg_item_user">
                Yes, Tell me about co-curriculum activities
              </span>
              <span className="chat_msg_item">
                <ul id="Ful" className="tags">
                  <li>Fees</li>
                  <li>Placement</li>
                  <li>Transport Facilities</li>
                </ul>
              </span>
            </div>
            <div id="chat_body" className="chat_body">
              <div className="chat_category">
                <a id="chat_third_screen" className="fab">
                  <i className="zmdi zmdi-arrow-right"></i>
                </a>
                <p style={{ fontSize: "20px", textAlign: "center" }}>
                  {/* "font-size:20px;text-align: center;" */}
                  What would you like to talk about?
                </p>
                <ul style={{ fontSize: "15px" }}>
                  <li>Placement</li>
                  <li>Labs</li>
                  <li>Fees</li>
                  <li>other</li>
                </ul>
              </div>
            </div>
            <div id="chat_form" className="chat_converse chat_form">
              <span className="chat_msg_item chat_msg_item_admin">
                <div className="chat_avatar">
                  <img src="http://res.cloudinary.com/dqvwa7vpe/image/upload/v1496415051/avatar_ma6vug.jpg" />
                </div>
                Hey there! Any question?
              </span>
              <span className="chat_msg_item chat_msg_item_user"> Hello!</span>
              <span className="status">20m ago</span>
              <span className="chat_msg_item chat_msg_item_admin">
                <div className="chat_avatar">
                  <img src="http://res.cloudinary.com/dqvwa7vpe/image/upload/v1496415051/avatar_ma6vug.jpg" />
                </div>
                Agent typically replies in a few hours. Don't miss their reply.
                <div>
                  <br />
                  <form className="get-notified">
                    <label for="chat_log_email">Get notified by email</label>
                    <input id="chat_log_email" placeholder="Enter your email" />
                    <i className="zmdi zmdi-chevron-right"></i>
                  </form>
                </div>
              </span>

              <span className="chat_msg_item chat_msg_item_admin">
                <div className="chat_avatar">
                  <img src="http://res.cloudinary.com/dqvwa7vpe/image/upload/v1496415051/avatar_ma6vug.jpg" />
                </div>
                Send message to agent.
                <div>
                  <form className="message_form">
                    <input placeholder="Your email" />
                    <input placeholder="Technical issue" />
                    <textarea rows="4" placeholder="Your message"></textarea>
                    <button>Send</button>
                  </form>
                </div>
              </span>
            </div>
            <div className="fab_field">
              <button
                style={{ fontSize: "30px" }}
                id="back_second"
                className="simple"
              >
                <i className="zmdi zmdi-arrow-left"></i>
              </button>
              <a
                style={{ fontSize: "20px" }}
                id="fab_send"
                className="fab"
                onClick={this.sendData}
              >
                <i className="zmdi zmdi-mail-send"></i>
              </a>
              <input
                type="text"
                id="chatSend"
                name="chat_message"
                unselectable="on"
                placeholder="Send a message"
                className="chat_field chat_message"
              />
            </div>
          </div>
          <a id="prime" className="fab">
            <i className="prime zmdi zmdi-comment-outline"></i>
          </a>
        </div>
      </div>
    );
  }
}

export default Main;
