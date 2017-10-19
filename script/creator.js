var canvas = new fabric.Canvas('canvas');
var currentObj;
$(function() {
    setSize();
})
$(window).resize(function(e) {
    setSize();
})

function setSize() {
    let height = $(window).height();
    let width = $(window).width();
    canvas.setWidth(width);
    canvas.setHeight(height);
}
canvas.name = "canvas";
canvas.on("mouse:up", function(e) {
    if (e.target != null) {
        currentObj = e.target.name;
    }
})
fabric.Canvas.prototype.getItemByName = function(name) {
    var object = null,
        objects = this.getObjects();
    for (var i = 0, len = this.size(); i < len; i++) {
        if (objects[i].name && objects[i].name === name) {
            object = objects[i];
            break;
        }
    }
    return object;
};
$(".custom").spectrum({
    color: "#4eab53",
    showInput: true,
    showPalette: true,
    cancelText: "取消",
    chooseText: "选中",
    clearText: "清除",
    preferredFormat: "hex",
    palette: [
        ["rgb(0, 0, 0)", "rgb(67, 67, 67)", "rgb(102, 102, 102)", "rgb(204, 204, 204)", "rgb(217, 217, 217)", "rgb(255, 255, 255)"],
        ["rgb(152, 0, 0)", "rgb(255, 0, 0)", "rgb(255, 153, 0)", "rgb(255, 255, 0)", "rgb(0, 255, 0)", "rgb(0, 255, 255)", "rgb(74, 134, 232)", "rgb(0, 0, 255)", "rgb(153, 0, 255)", "rgb(255, 0, 255)"],
        ["rgb(230, 184, 175)", "rgb(244, 204, 204)", "rgb(252, 229, 205)", "rgb(255, 242, 204)", "rgb(217, 234, 211)", "rgb(208, 224, 227)", "rgb(201, 218, 248)", "rgb(207, 226, 243)", "rgb(217, 210, 233)", "rgb(234, 209, 220)", "rgb(221, 126, 107)", "rgb(234, 153, 153)", "rgb(249, 203, 156)", "rgb(255, 229, 153)", "rgb(182, 215, 168)", 　　　　"rgb(162, 196, 201)", "rgb(164, 194, 244)", "rgb(159, 197, 232)", "rgb(180, 167, 214)", "rgb(213, 166, 189)", 　　　　"rgb(204, 65, 37)", "rgb(224, 102, 102)", "rgb(246, 178, 107)", "rgb(255, 217, 102)", "rgb(147, 196, 125)", 　　　　"rgb(118, 165, 175)", "rgb(109, 158, 235)", "rgb(111, 168, 220)", "rgb(142, 124, 195)", "rgb(194, 123, 160)", 　　　　"rgb(166, 28, 0)", "rgb(204, 0, 0)", "rgb(230, 145, 56)", "rgb(241, 194, 50)", "rgb(106, 168, 79)", 　　　　"rgb(69, 129, 142)", "rgb(60, 120, 216)", "rgb(61, 133, 198)", "rgb(103, 78, 167)", "rgb(166, 77, 121)", "rgb(91, 15, 0)", "rgb(102, 0, 0)", "rgb(120, 63, 4)", "rgb(127, 96, 0)", "rgb(39, 78, 19)", 　　　　"rgb(12, 52, 61)", "rgb(28, 69, 135)", "rgb(7, 55, 99)", "rgb(32, 18, 77)", "rgb(76, 17, 48)"]
    ],
    change: function(e) {

        if (canvas.isDrawingMode) {
            canvas.freeDrawingBrush.color = e.toHexString();
        }

        if (!canvas.getItemByName(currentObj)) {
            return;
        }
        canvas.getItemByName(currentObj).setColor(e.toHexString());
        canvas.renderAll();
    }
});

$(".custom_border").spectrum({
    color: "#cd843e",
    showInput: true,
    showPalette: true,
    cancelText: "取消",
    chooseText: "选中",
    clearText: "清除",
    preferredFormat: "hex",
    palette: [
        ["rgb(0, 0, 0)", "rgb(67, 67, 67)", "rgb(102, 102, 102)", "rgb(204, 204, 204)", "rgb(217, 217, 217)", "rgb(255, 255, 255)"],
        ["rgb(152, 0, 0)", "rgb(255, 0, 0)", "rgb(255, 153, 0)", "rgb(255, 255, 0)", "rgb(0, 255, 0)", "rgb(0, 255, 255)", "rgb(74, 134, 232)", "rgb(0, 0, 255)", "rgb(153, 0, 255)", "rgb(255, 0, 255)"],
        ["rgb(230, 184, 175)", "rgb(244, 204, 204)", "rgb(252, 229, 205)", "rgb(255, 242, 204)", "rgb(217, 234, 211)", "rgb(208, 224, 227)", "rgb(201, 218, 248)", "rgb(207, 226, 243)", "rgb(217, 210, 233)", "rgb(234, 209, 220)", "rgb(221, 126, 107)", "rgb(234, 153, 153)", "rgb(249, 203, 156)", "rgb(255, 229, 153)", "rgb(182, 215, 168)", 　　　　"rgb(162, 196, 201)", "rgb(164, 194, 244)", "rgb(159, 197, 232)", "rgb(180, 167, 214)", "rgb(213, 166, 189)", 　　　　"rgb(204, 65, 37)", "rgb(224, 102, 102)", "rgb(246, 178, 107)", "rgb(255, 217, 102)", "rgb(147, 196, 125)", 　　　　"rgb(118, 165, 175)", "rgb(109, 158, 235)", "rgb(111, 168, 220)", "rgb(142, 124, 195)", "rgb(194, 123, 160)", 　　　　"rgb(166, 28, 0)", "rgb(204, 0, 0)", "rgb(230, 145, 56)", "rgb(241, 194, 50)", "rgb(106, 168, 79)", 　　　　"rgb(69, 129, 142)", "rgb(60, 120, 216)", "rgb(61, 133, 198)", "rgb(103, 78, 167)", "rgb(166, 77, 121)", "rgb(91, 15, 0)", "rgb(102, 0, 0)", "rgb(120, 63, 4)", "rgb(127, 96, 0)", "rgb(39, 78, 19)", 　　　　"rgb(12, 52, 61)", "rgb(28, 69, 135)", "rgb(7, 55, 99)", "rgb(32, 18, 77)", "rgb(76, 17, 48)"]
    ],
    change: function(e) {
        if (!canvas.getItemByName(currentObj)) {
            return;
        }
        canvas.getItemByName(currentObj).set({
            stroke: e.toHexString()
        });
        canvas.renderAll();
    }
});

function uuid() {
    var s = [];
    var hexDigits = "0123456789abcdef";
    for (var i = 0; i < 36; i++) {
        s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1);
    }
    s[14] = "4"; // bits 12-15 of the time_hi_and_version field to 0010
    s[19] = hexDigits.substr((s[19] & 0x3) | 0x8, 1); // bits 6-7 of the clock_seq_hi_and_reserved to 01
    s[8] = s[13] = s[18] = s[23] = "-";

    var uuid = s.join("");
    return uuid;
}

canvas.setBackgroundColor("#0f3747");

$(".border").on("keyup", function() {

    // console.log($(this).val())
    if (!canvas.getItemByName(currentObj)) {
        return;
    }
    console.log($(".border").val())
    canvas.getItemByName(currentObj).set({
        strokeWidth: parseInt($(".border").val())
    });
    canvas.renderAll();
})

$('.add_rect').on("click", function() {
    var rect = new fabric.Rect({
        left: 100,
        top: 100,
        fill: '#ffffff',
        width: 100,
        height: 100,
        stroke: '#f5f5f5',
        strokeWidth: 1,
        name: uuid()
    });

    canvas.add(rect);
    canvas.renderAll();
})
$('.add_cirlce').on("click", function() {
    var circle = new fabric.Circle({
        radius: 50,
        fill: '#ffffff',
        left: 100,
        top: 100,
        name: uuid(),
        stroke: '#f5f5f5',
        strokeWidth: 1,
    })
    canvas.add(circle);
    canvas.renderAll();
})
$('.add_triangle').on("click", function() {
    var triangle = new fabric.Triangle({
        width: 100,
        height: 100,
        fill: '#ffffff',
        left: 50,
        top: 50,
        name: uuid(),
        stroke: '#f5f5f5',
        strokeWidth: 1,
    });
    canvas.add(triangle);
    canvas.renderAll();
})

$(".clear").on("click", function() {
    location.reload();
})

$('.free_draw').on("click", function() {
    if ($(this).hasClass("active")) {
        $(this).removeClass('active');
        canvas.isDrawingMode = 0;
    } else {
        $(this).addClass("active")
        canvas.isDrawingMode = 1;
        canvas.freeDrawingBrush.color = "purple";
        canvas.freeDrawingBrush.width = 10;
        canvas.renderAll();
    }
})

$(".brush_width").on("keyup", function() {

    // console.log($(this).val())
    canvas.freeDrawingBrush.width = $(this).val();
    canvas.renderAll();
})