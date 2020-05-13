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
  //var userInput = $(".text-box");
  let userInput = document.getElementById("chatSend").value;
  //     var newMessage = userInput.html().replace(/\<div\>|\<br.*?\>/ig, '\n').replace(/\<\/div\>/g, '').trim().replace(/\n/g, '<br>');

  //     if (!newMessage) return;
  if (userInput != "") {
    var messagesContainer = $(".chat_converse");
    messagesContainer.append(
      [
        `<span class="chat_msg_item chat_msg_item_user"> ${userInput}
        </span>`,
      ].join("")
    );

    // clean out old message
    //userInput.html('');
    // focus on input
    //userInput.focus();

    messagesContainer.finish().animate(
      {
        scrollTop: messagesContainer.prop("scrollHeight"),
      },
      250
    );
    var messageBOT = responseMessage(userInput);
    //console.log(`message is ${messageBOT}`);
    messagesContainer.append(
      [
        `<span class="chat_msg_item chat_msg_item_admin">
      <div class="chat_avatar">
        <img
          src="http://res.cloudinary.com/dqvwa7vpe/image/upload/v1496415051/avatar_ma6vug.jpg"
        />
      </div>
      ${messageBOT}</span>`,
      ].join("")
    );
    document.getElementById("chatSend").value = "";
  }
}

function responseMessage(message) {
  //console.log(`what is ${message}`)
  return message;
}
