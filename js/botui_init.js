function botui_init() {
    var botui = new BotUI("hello-akilar");
    botui.message.add({
      delay: 800,
      content: "Hi, 欢迎光临可以清心の小站😊"
    }).then(function() {
      botui.message.add({
        delay: 1100,
        content: "我是可以清心😄"
      }).then(function() {
        botui.message.add({
          delay: 1100,
          content: "你也可以叫我清心~😋"
        }).then(function() {
          botui.action.button({
            delay: 1600,
            action: [{
              text: "我想知道更多关于清心的故事!😃",
              value: "sure"
            }, {
              text: "好的，就这样吧，拜拜！🙄",
              value: "skip"
            }]
          }).then(function(a) {
            "sure" == a.value && sure();
            "skip" == a.value && end()
          })
        })
      })
    });
    var sure = function() {
        botui.message.add({
          delay: 600,
          content: "🎉🎉🎉🎉🎉🎉"
        }).then(function() {
          secondpart()
        })
      },
      end = function() {
        botui.message.add({
          delay: 600,
          content: "w(ﾟДﾟ)w 不要走！再看看嘛！"
        })
      },
      secondpart = function() {
        botui.message.add({
          delay: 5000,
          content: "首先呢，很感谢您肯在这里驻足片刻❤️。这是一个个人性质的博客，我会在这里发表各种各样的内容。"
        }).then(function() {
          botui.message.add({
            delay: 15000,
            content: "👀"
          }).then(function() {
            botui.message.add({
              delay: 5000,
              content: "分类也有一点我的恶趣味在。👀"
            }).then(function() {
              botui.message.add({
                delay: 8000,
                content: "🎉"
              }).then(function() {
                botui.message.add({
                  delay: 5000,
                  content: "😶"
                }).then(function() {
                  botui.message.add({
                    delay: 4000,
                    content: "👻"
                  }).then(function() {
                    botui.action.button({
                      delay: 1100,
                      action: [{
                        text: "🤔",
                        value: "why-mashiro"
                      }]
                    }).then(function(a) {
                      thirdpart()
                    })
                  })
                })
              })
            })
          })
        })
      },
      thirdpart = function() {
        botui.message.add({
          delay: 1e3,
          content: "诶？😲"
        }).then(function() {
          botui.action.button({
            delay: 1500,
            action: [{
              text: "😲，那英文名为什么叫Akilar呢？",
              value: "why-cat"
            }]
          }).then(function(a) {
            fourthpart()
          })
        })
      },
      fourthpart = function() {
        botui.message.add({
          delay: 3000,
          content: "😲 "
        }).then(function() {
          botui.message.add({
            delay: 3000,
            content: "灵感来自于刀剑神域~"
          }).then(function() {
            botui.action.button({
              delay: 1500,
              action: [{
                text: "方便透露一下真名吗？👀",
                value: "why-domain"
              }]
            }).then(function(a) {
              fifthpart()
            })
          })
        })
      },
      fifthpart = function() {
        botui.message.add({
          delay: 5000,
          content: "emmmm,流水幽吟绕耳边，煦风馨语抚心弦，挥臂欲揽冰钩月，银星斟酌醉人涎~"
        }).then(function() {
          botui.message.add({
            delay: 3000,
            content: "只是一介无名小卒而已^_^"
          })
        })
      }
  }