var map = AmCharts.makeChart("mapdiv",{
type: "map",
theme: "dark",
projection: "mercator",
panEventsEnabled : true,
backgroundColor : "#535364",
backgroundAlpha : 1,
zoomControl: {
zoomControlEnabled : true
},
dataProvider : {
map : "worldHigh",
getAreasFromMap : true,
areas :
[
  {
    "id": "FR",
    "showAsSelected": true
  },
  {
    "id": "DE",
    "showAsSelected": true
  },
  {
    "id": "GR",
    "showAsSelected": true
  },
  {
    "id": "IS",
    "showAsSelected": true
  },
  {
    "id": "IE",
    "showAsSelected": true
  },
  {
    "id": "IT",
    "showAsSelected": true
  },
  {
    "id": "ES",
    "showAsSelected": true
  },
  {
    "id": "CH",
    "showAsSelected": true
  },
  {
    "id": "GB",
    "showAsSelected": true
  },
  {
    "id": "VA",
    "showAsSelected": true
  },
  {
    "id": "CA",
    "showAsSelected": true
  },
  {
    "id": "MX",
    "showAsSelected": true
  },
  {
    "id": "US",
    "showAsSelected": true
  },
  {
    "id": "AR",
    "showAsSelected": true
  },
  {
    "id": "BO",
    "showAsSelected": true
  },
  {
    "id": "CL",
    "showAsSelected": true
  },
  {
    "id": "UY",
    "showAsSelected": true
  },
  {
    "id": "GH",
    "showAsSelected": true
  },
  {
    "id": "MU",
    "showAsSelected": true
  },
  {
    "id": "MA",
    "showAsSelected": true
  },
  {
    "id": "ZA",
    "showAsSelected": true
  },
  {
    "id": "CN",
    "showAsSelected": true
  },
  {
    "id": "HK",
    "showAsSelected": true
  },
  {
    "id": "IN",
    "showAsSelected": true
  },
  {
    "id": "ID",
    "showAsSelected": true
  },
  {
    "id": "JP",
    "showAsSelected": true
  },
  {
    "id": "MO",
    "showAsSelected": true
  },
  {
    "id": "PH",
    "showAsSelected": true
  },
  {
    "id": "SG",
    "showAsSelected": true
  },
  {
    "id": "VN",
    "showAsSelected": true
  },
  {
    "id": "AU",
    "showAsSelected": true
  },
  {
    "id": "FJ",
    "showAsSelected": true
  },
  {
    "id": "NZ",
    "showAsSelected": true
  }
]
},
areasSettings : {
autoZoom : true,
color : "#B4B4B7",
colorSolid : "#84ADE9",
selectedColor : "#84ADE9",
outlineColor : "#666666",
rollOverColor : "#9EC2F7",
rollOverOutlineColor : "#000000"
}
});




function getTimeRemaining(endtime) {
  var t = Date.parse(endtime) - Date.parse(new Date());
  var seconds = Math.floor((t / 1000) % 60);
  var minutes = Math.floor((t / 1000 / 60) % 60);
  var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
  var days = Math.floor(t / (1000 * 60 * 60 * 24));
  return {
    'total': t,
    'days': days,
    'hours': hours,
    'minutes': minutes,
    'seconds': seconds
  };
}

function initializeClock(id, endtime) {
  var clock = document.getElementById(id);
  var daysSpan = clock.querySelector('.days');
  var hoursSpan = clock.querySelector('.hours');
  var minutesSpan = clock.querySelector('.minutes');
  var secondsSpan = clock.querySelector('.seconds');

  function updateClock() {
    var t = getTimeRemaining(endtime);

    daysSpan.innerHTML = t.days;
    hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
    minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
    secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

    if (t.total <= 0) {
      clearInterval(timeinterval);
    }
  }

  updateClock();
  var timeinterval = setInterval(updateClock, 1000);
}

var deadline = new Date(Date.parse(new Date()) + 15 * 24 * 60 * 60 * 1000);
initializeClock('clockdiv', deadline);






