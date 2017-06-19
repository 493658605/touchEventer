function leftSwiper(ele, callBack) {
    var startX = 0;
    var moveX = 0;
    ele.addEventListener("touchstart", function (e) {
        startX = e.touches[0].clientX;
    })
    ele.addEventListener("touchmove", function (e) {
        moveX = e.touches[0].clientX;

    })
    ele.addEventListener("touchend", function () {
        if ((moveX - startX) < 0 && moveX != 0) {
            callBack()
        }
        moveX = 0;
    })
};
//      向右滑动事件
function rightSwiper(ele, callBack) {
    var startX = 0;
    var moveX = 0;
    ele.addEventListener("touchstart", function (e) {
        startX = e.touches[0].clientX;
    })
    ele.addEventListener("touchmove", function (e) {
        moveX = e.touches[0].clientX;
    })
    ele.addEventListener("touchend", function (e) {
        if ((moveX - startX) > 0 && moveX != 0) {
            (callBack())
        }
        moveX = 0;
    })
}
//   长按事件
function longPress(ele, callBack) {
    var startDate = 0;
    var endDate = 0;
    var flang = true;
    ele.addEventListener("touchstart", function (e) {
        flang = true;
        startDate = Date.now();
    })
    ele.addEventListener("touchmove", function (e) {
        flang = false;
    })
    ele.addEventListener("touchend", function (e) {
        endDate = Date.now()
        if (flang && (endDate - startDate) > 300) {
            callBack()
        }
    })
}
//  双击事件
function dbClick(ele, callBack) {
    var endDate = 0;
    var dbDate = 0;
    var index = 0
    ele.addEventListener("touchend", function (e) {
        endDate = Date.now();
        index++;
        dbDate = endDate - dbDate;
        if (index >= 2 && dbDate <= 300) {
            index = 0;
            callBack();
        }
        if (index >= 2) {
            dbDate = 0;
            index = 0;
        }
    })
}