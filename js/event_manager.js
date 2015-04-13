// 事件处理类
function EventManager() {
    // 注册事件容器
    this.events = {};

    // 初始化监听
    this.listen();
}

// 添加事件，事件可绑定多个响应
EventManager.prototype.on = function (event, callback) {
    if (!this.events[event]) {
        this.events[event] = [];
    }
    this.events[event].push(callback);
};

// 执行某个事件，可传递参数
EventManager.prototype.emit = function (event, data) {
    var callbacks = this.events[event];
    if (callbacks) {
        callbacks.forEach(function (callback) {
            callback(data);
        });
    }
};

// 执行元素事件监听
EventManager.prototype.listen = function () {
    var gameContainer = document.getElementsByClassName('game-container')[0];
    gameContainer.addEventListener(this.eventTouchmove, function (event) {
        event.preventDefault();
    });

    // 绑定用户点击棋盘事件和重新开始按钮事件
    this.bindPress('.touchpad-cell', this.touchpadPress);
    this.bindPress('.restart-button', function () {
        this.emit('restart');
    });

    // tip事件绑定
    document.querySelector('.game-tip').addEventListener('webkitAnimationEnd', function (event) {
        if (event.animationName == 'remove') {
            event.target.style.display = 'none';
        }
    });
};

// 用户点击棋盘事件传递
EventManager.prototype.touchpadPress = function (event) {
    var currentCell = event.target,
        node = currentCell,
        x = 0,
        y = 0;
    while (node = node.previousSibling) {
        if (node.nodeType == 1) {
            y++;
        }
    }
    var currentParent = currentCell.parentNode;
    node = currentParent;
    while (node = node.previousSibling) {
        if (node.nodeType == 1) {
            x++;
        }
    }
    this.emit('press', {
        x: x,
        y: y
    });
};

// 定义点击事件，兼容触屏和鼠标
EventManager.prototype.bindPress = function (selector, fn) {
    var els = document.querySelectorAll(selector);
    var self = this;
    var info = navigator.userAgent;
    var eventName = '';
    if (info.indexOf('iPod') != -1 || info.indexOf('iPad') != -1 || info.indexOf('iPhone') != -1 || info.indexOf('Android') != -1) {
        eventName = 'touchstart';
    } else {
        eventName = 'click';
    }
    Array.prototype.forEach.call(els, function (el) {
        el.addEventListener(eventName, fn.bind(self));
    });
};
