import React from "react";
import $ from "jquery";


let userInputText
//Toggle chat and links
function toggleFab() {
  $(".prime").toggleClass("zmdi-comment-outline");
  $(".prime").toggleClass("zmdi-close");
  $(".prime").toggleClass("is-active");
  $(".prime").toggleClass("is-visible");
  $("#prime").toggleClass("is-float");
  $(".chat").toggleClass("is-visible");
  $(".fab").toggleClass("is-visible");
}

function hideChat(hide) {
  switch (hide) {
    case 0:
      $("#chat_converse").css("display", "none");
      $("#chat_body").css("display", "none");
      $("#chat_form").css("display", "none");
      $(".chat_login").css("display", "block");
      $(".chat_fullscreen_loader").css("display", "none");
      $("#chat_fullscreen").css("display", "none");
      break;
    case 1:
      $("#chat_converse").css("display", "block");
      $("#chat_body").css("display", "none");
      $("#chat_form").css("display", "none");
      $(".chat_login").css("display", "none");
      $(".chat_fullscreen_loader").css("display", "block");
      break;
    case 2:
      $("#chat_converse").css("display", "none");
      $("#chat_body").css("display", "block");
      $("#chat_form").css("display", "none");
      $(".chat_login").css("display", "none");
      $(".chat_fullscreen_loader").css("display", "block");
      break;
    case 3:
      $("#chat_converse").css("display", "none");
      $("#chat_body").css("display", "none");
      $("#chat_form").css("display", "block");
      $(".chat_login").css("display", "none");
      $(".chat_fullscreen_loader").css("display", "block");
      break;
    case 4:
      $("#chat_converse").css("display", "none");
      $("#chat_body").css("display", "none");
      $("#chat_form").css("display", "none");
      $(".chat_login").css("display", "none");
      $(".chat_fullscreen_loader").css("display", "block");
      $("#chat_fullscreen").css("display", "block");
      break;

    case 5:
      hideChat(0);
      break;
    case 6:
      hideChat(1);
      break;
    case 7:
      hideChat(2);
      break;
    case 8:
      hideChat(3);
      break;
  }
}

function SendMessage() {
  userInputText = document.getElementById("chatSend").value;
  SendMessageAll(userInputText);
}

// send a message from input box
function SendMessageAll(userInput) {
  userInputText = userInput
  //if no message write however click the button
  if (userInput != "") {
    var messagesContainer = $(".chat_converse");
    messagesContainer.append(
      [
        `<span class="chat_msg_item chat_msg_item_user"> ${userInput}
            </span>`,
      ].join("")
    );

    //scroll the container with animation
    messagesContainer.finish().animate(
      {
        scrollTop: messagesContainer.prop("scrollHeight"),
      },
      250
    );
    let api = `http://127.0.0.1:8000/api/?message=${userInputText}`
    console.log(api)
    fetch(api)
    .then(response => response.json())
    .then(message => {
      responseMessage(message.response)
    })
    document.getElementById("chatSend").value = "";
  }
}

// reponse message from NLP
function responseMessage(message) {
  console.log(`i am in response message ${message}`);
  var messagesContainer = $(".chat_converse");
  //console.log(message.response)
  console.log(userInputText)
  if (userInputText != "") {
    messagesContainer.append(
      [
        `<span class="chat_msg_item chat_msg_item_admin">
        <div class="chat_avatar">
          <img
            src="http://res.cloudinary.com/dqvwa7vpe/image/upload/v1496415051/avatar_ma6vug.jpg"
          />
        </div>
        ${message}</span>`,
      ].join("")
    );
    document.getElementById("chatSend").value = "";
  }
}

export { SendMessage, hideChat, SendMessageAll, toggleFab};
