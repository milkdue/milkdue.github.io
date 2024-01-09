/*
 * @Author: 可以清心
 * @Description: 
 * @Date: 2022-09-14 10:29:44
 * @LastEditTime: 2022-09-17 23:35:20
 */

/**
 * @description: 评论扁平化
 * @param {object[]} comments
 * @return {object[]}
 */
function flatComments(comments){
    let result = [];

    comments.forEach(comment => {
        result.push(comment);

        if(comment.replies.length){
            result.push(...flatComments(comment.replies));
        }
    })

    return result;
}

function popCommentBarrage(comment) {
    let divNode = document.createElement('div');
    divNode.className = "comment-barrage-item";
    divNode.innerHTML = `
        <div class="barrageHead">
            <div class="barrageTitle">热评</div>
            <div class="barrageNick">${comment.nick}</div>
            <img class="barrageAvatar" src="${comment.avatar}">
            <a class="comment-barrage-close" href="javascript:closeCommentBarrage()"><i
                    class="fa-solid fa-xmark"></i></a>
        </div>
        <div class="barrageContent">
            ${comment.comment}
        </div>
    `
    commentBarrageConfig.barrageTimer.push(divNode);
    commentBarrageConfig.dom.append(divNode);
}

function removeCommentBarrage(node){
    node.className = "comment-barrage-item out",
    setTimeout(function() {
        commentBarrageConfig.dom.removeChild(node)
    }, 200)
}

function initCommentBarrage(){
    clearInterval(commentInterval);
    commentInterval = null;

    commentInterval = setInterval(() => {
        if(commentBarrageConfig.barrageList.length && !hoverOnCommentBarrage){
            popCommentBarrage(commentBarrageConfig.barrageList[commentBarrageConfig.barrageIndex]);
            commentBarrageConfig.barrageIndex += 1;
            commentBarrageConfig.barrageIndex %= commentBarrageConfig.barrageList.length; // 无限循环

            if(commentBarrageConfig.barrageTimer.length > (commentBarrageConfig.barrageList.length > commentBarrageConfig.maxBarrage ? commentBarrageConfig.maxBarrage : commentBarrageConfig.barrageList.length) && !hoverOnCommentBarrage){
                removeCommentBarrage(commentBarrageConfig.barrageTimer.shift())
            }
        }
    }, commentBarrageConfig.barrageTime);
}

async function initComment(){
    getComments().then(res => {
        commentBarrageConfig.barrageList = flatComments(res.data);
        if(commentBarrageConfig.barrageList.length){
            initCommentBarrage()
        }
    })
}

async function getComments(){
    const resp = await fetch(commentBarrageConfig.twikooUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({event: "COMMENT_GET", url: commentBarrageConfig.pageUrl})
    })

    return resp.json();
}

var commentNode = document.createElement("div");

commentNode.className = 'comment-barrage';

document.getElementById('footer').appendChild(commentNode)

var commentBarrageConfig = {
    maxBarrage: 1,
    barrageTime: 4e3,
    twikooUrl: "https://twikoo.keyiqingxin.cn/",
    pageUrl: window.location.pathname, // 根据获取该网页的评论
    barrageTimer: [],
    barrageList: [],
    barrageIndex: 0,
    dom: commentNode
};

var commentInterval = null;
var hoverOnCommentBarrage = false;

initComment();

$(".comment-barrage").hover(function() {
    hoverOnCommentBarrage = true;
}, function() {
    hoverOnCommentBarrage = false;
})

function closeCommentBarrage(){
    clearInterval(commentInterval);
    commentBarrageConfig.dom.innerHTML = '';
}
