var options = {
  chatPanel: {
    header: {
      title: "Sol",
    },
    styling: {
      avatarShape: "rounded",
      avatarUrl:
        "",
      primaryColor: "#A98AB0",
      chatBubbles:{
        userBackgroundColor: "#C6E9EA",
      },
      buttons:{
        backgroundColor: "#6C6D6D",
      }

    },
    messageFeedback: {
      hide: true,
    },
    settings: {
      requestFeedback: false,
      startTriggerActionId: 0000,
      authStartTriggerActionId: 0000,
      enableProactivityForSmallDevices: true,
      alwaysFullscreen: false,
    },
  },
};

function openChat(intentID) {  
  options.chatPanel.settings.startTriggerActionId = intentID;
  options.chatPanel.settings.authStartTriggerActionId = intentID;
  var boost = window.boostInit("turesearch", options);
  boost.chatPanel.show();
}
