// 创建一个浏览器插件，可以访问poe.com 这个网站。
// 当用户按下alt+o的时候，触发一个事件，点击聊天框的切换按钮。

// 使用 JavaScript 和 Chrome 扩展 API 创建一个浏览器插件
chrome.commands.onCommand.addListener(function (command) {
  if (command == "newChat") {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      chrome.tabs.executeScript(tabs[0].id, {
        code: `
          let toggleButton = document.querySelector("#__next > div.PageWithSidebarLayout_centeringDiv___L9br > div > section > div.PageWithSidebarLayout_scrollSection__IRP9Y.PageWithSidebarLayout_startAtBottom__wKtfz > div > div > footer > div > button ");
          if (toggleButton) {
            toggleButton.click();
          } else {
            console.error('Toggle button not found');
          }
        `,
      });
    });
  }
  // 选择第一个回复
  if (command == "helpPrompt1") {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      chrome.tabs.executeScript(tabs[0].id, {
        code: `
          let toggleButton = document.querySelector("#__next > div.PageWithSidebarLayout_centeringDiv___L9br > div > section > div.PageWithSidebarLayout_scrollSection__IRP9Y.PageWithSidebarLayout_startAtBottom__wKtfz > div > div > div.InfiniteScroll_container__kzp7X.ChatMessagesView_infiniteScroll__K_SeP > div:nth-child(12) > section.ChatMessageSuggestedReplies_suggestedRepliesContainer__JgW12 > button:nth-child(1)")
          if (toggleButton) {
            toggleButton.click();
          } else {
            console.error('helpPrompt1 not found');
          }
        `,
      });
    });
  }
  // 选择第二个回复
  if (command == "helpPrompt2") {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      chrome.tabs.executeScript(tabs[0].id, {
        code: `
          let toggleButton = document.querySelector("#__next > div.PageWithSidebarLayout_centeringDiv___L9br > div > section > div.PageWithSidebarLayout_scrollSection__IRP9Y.PageWithSidebarLayout_startAtBottom__wKtfz > div > div > div.InfiniteScroll_container__kzp7X.ChatMessagesView_infiniteScroll__K_SeP > div:nth-child(13) > section.ChatMessageSuggestedReplies_suggestedRepliesContainer__JgW12 > button:nth-child(2)")
          if (toggleButton) {
            toggleButton.click();
          } else {
            console.error('helpPrompt2 not found');
          }
        `,
      });
    });
  }
  // 选择第三个回复
  if (command == "helpPrompt3") {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      chrome.tabs.executeScript(tabs[0].id, {
        code: `
          let toggleButton = document.querySelector("#__next > div.PageWithSidebarLayout_centeringDiv___L9br > div > section > div.PageWithSidebarLayout_scrollSection__IRP9Y.PageWithSidebarLayout_startAtBottom__wKtfz > div > div > div.InfiniteScroll_container__kzp7X.ChatMessagesView_infiniteScroll__K_SeP > div:nth-child(14) > section.ChatMessageSuggestedReplies_suggestedRepliesContainer__JgW12 > button:nth-child(3)")
          if (toggleButton) {
            toggleButton.click();
          } else {
            console.error('helpPrompt3 not found');
          }
        `,
      });
    });
  }
});
