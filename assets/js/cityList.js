/*
 * 城市选择组件
**/


// 城市列表对象， 为数组格式，可以存储在文件
// 中， 直接前端加载，也可以从Ajax获取。请注意
// 遵循给出的格式。
var cityList = (function () {
    var cityList = [
        {
            tabName: "热门城市",
            subtitle: false,
            cities: [
                ["Beijing", "北京"],
                ["shanghai", "上海"],
                ["guangzhou", "广州"],
                ["shenzhen", "深圳"],
                ["hangzhou", "杭州"],
                ["nanjing", "南京"],
            ]
        },
        {
            tabName: "A~G",
            subtitle: true,
            cities: [
               {
                    "subtitle" : "A",
                    "subCityList" : [
                        ["anlu", "安陆"],
                        ["anning", "安宁"],
                        ["ankang", "安康"],
                        ["anshun", "安顺"],
                        ["anyang", "安阳"],
                        ["anqing", "鞍山"]
                    ]
               },{
                    "subtitle" : "B",
                    "subCityList" : [
                        ["bijie", "毕节"],
                        ["bazhou", "霸州"],
                        ["bazhong", "巴中"],
                        ["baishan", "白山"],
                        ["baoshan", "保山"],
                        ["baise", "百色"],
                        ["bayanchuoer", "巴彦淖尔"],
                        ["baiyin", "白银"],
                        ["bozhou", "亳州"],
                        ["beihai", "北海"],
                        ["benxi", "本溪"],
                        ["bengbo", "蚌埠"],
                        ["baoding", "保定"],
                        ["binzhou", "滨州"],
                        ["baotou", "包头"],
                        ["baoji", "宝鸡"],
                        ["beijing", "北京"]
                    ]
               }
            ]
        },
        {
            tabName: "H~L",
            subtitle: true,
            cities: [
                {
                    "subtitle" : "H",
                    "subCityList" : [
                        ["haiyan", "海盐"],
                        ["hulin", "虎林"]
                    ]
                },{
                    "subtitle" : "J",
                    "subCityList" : [
                        ["jinchangshi", "金昌市"],
                        ["jiangshan", "江山"]
                    ]
                }
            ]
        },
        {
            tabName: "M~T",
            subtitle: true,
            cities: [
                {
                    "subtitle" : "M",
                    "subCityList" : [
                        ["haiyan", "海盐"],
                        ["hulin", "虎林"]
                    ]
                },{
                    "subtitle" : "N",
                    "subCityList" : [
                        ["jinchangshi", "金昌市"],
                        ["jiangshan", "江山"]
                    ]
                }
            ]
        },
        {
            tabName: "U~Z",
            subtitle: true,
            cities: [
                {
                    "subtitle" : "U",
                    "subCityList" : [
                        ["haiyan", "海盐"],
                        ["hulin", "虎林"]
                    ]
                },{
                    "subtitle" : "Z",
                    "subCityList" : [
                        ["jinchangshi", "金昌市"],
                        ["jiangshan", "江山"]
                    ]
                }
            ]
        },
    ];

    return cityList;
})();

// 将城市数据转化为dom, 加到dom上
var composeCitySelector = function(cityList){

    var dom = $('<div class="cityList" id="cityTopList">');
    var title = $('<div class="title">'+
                            '<a href="javascript:;" class="close"></a>'+
                            '<ul class="titleChar"></ul></div>');
    title.appendTo(dom);
    var cityListBox = $('<div id="cityListBox" class="cityListBox">');
    for(var i = 0; i < cityList.length; i++){
        var city = cityList[i];
        var cityName = city.tabName;
        var cityTitleDom = $('<li class="first"></li>').attr('rel', '#cityList_' + i).html(cityName);
        cityTitleDom.appendTo(title.find('.titleChar'));

        if(city.subtitle){
            var cities = city.cities;
            var cityDom = $('<div id="cityList_' + i + '" class="cityListGroup none"></div>');
            for(var j = 0; j < cities.length; j++){
                var subCityTitle = cities[j].subtitle;
                var subCityList = cities[j].subCityList;
                var subCityListDom = $('<dl><dt>' + subCityTitle + '</dt><dd></dd></dl>');
                for(k = 0; k < subCityList.length; k++){
                    var cityNode = $('<a href="#" >' + subCityList[k][1] + '</a>');
                    cityNode.appendTo(subCityListDom.find('dd'));
                }
                subCityListDom.appendTo(cityDom);
            }
            cityDom.appendTo(cityListBox);
        }else{
            var cityDom = $('<div id="cityList_' + i + '" class="cityListGroup hotCity"><dl><dd></dd></dl></div>');
            for(var j = 0; j < city.cities.length; j++){
                var cityNode = $('<a href="#" >' + city.cities[j][1] + '</a>');
                cityNode.appendTo(cityDom.find('dd'));
            }
            cityDom.appendTo(cityListBox);
        }

    }
    dom.find('.titleChar li').eq(0).addClass('on');
    cityListBox.appendTo(dom);
    return dom;
};

// city tab hover事件绑定
var handleCityTab = function(){
    $("#cityTopList .titleChar li").live("hover", function(){
        $("#cityTopList .titleChar li.on").removeClass('on');
        $(this).addClass('on');
        var elemId = $(this).attr('rel');
        $("#cityListBox").find(".cityListGroup").addClass('none');
        $(elemId).removeClass('none');
    });
    $("#cityTopList .title .close").live("click", function(){
        $("#cityTopList").hide();
    });
    // $("#cityTopList .titleChar li").eq(0).trigger('hover');
};


// 城市选择事件处理
var handleCitySelectAction = function(){
    var _ipt = $(".city-picker");

    $("#cityListBox").find("dd").find("a").live("click", function(){
        $("#cityTopList").hide();
        $("#city-wrapper").find(".city-name").html($(this).html());
    });
};

// main函数，put things together
var handleCitySelect = function(){
    var dom = composeCitySelector(cityList);
    var wrappper = $("#city-wrapper");
    wrappper.css("position", "relative");
    wrappper.addClass("city-picker-wrapper");
    dom.appendTo(wrappper);
    wrappper.find(".area").on("click", function(){
        dom.toggle();
    });
    handleCityTab();
    handleCitySelectAction();
};

$(function(){
    handleCitySelect();
});
