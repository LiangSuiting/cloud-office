function time() {
  var date = new Date();
  var year = date.getFullYear();
  var month = date.getMonth() + 1;
  var day = date.getDate();
  var weekday = ["日", "一", "二", "三", "四", "五", "六"][date.getDay()];
  var hour = date.getHours();
  hour=hour<10?"0"+hour:hour;
  var minutes = date.getMinutes();
  minutes=minutes<10?"0"+minutes:minutes;
  var seconds = date.getSeconds();
  seconds=seconds<10?"0"+seconds:seconds;
  var ls = year + "/" + month + "/" + day + " " + hour + ":" + minutes + ":" + seconds + " 星期" + weekday ;
  var date = document.getElementById("date");
  date.innerHTML = ls;

}

setInterval(time,50);

function logout(){
window.open("/welcome/index.html","_self")
}
