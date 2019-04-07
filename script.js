var chartjson = {
    "data": [{
      "month": "JAN",
      "withinSla": 90,
      "outsideSla": 10
      
    }, {
      "month": "FEB",
      "withinSla": 30,
      "outsideSla": 50
      
    }, {
      "month": "MAR",
      "withinSla": 49,
      "outsideSla": 11
      
    }, {
      "month": "APRL",
      "withinSla": 24,
      "outsideSla": 66
      
    }, {
      "month": "MAY",
      "withinSla": 86,
      "outsideSla": 14
      
    }, {
      "month": "JUN",
      "withinSla": 26,
      "outsideSla": 39
      
    }, {
      "month": "JUL",
      "withinSla": 71,
      "outsideSla": 29
      
    }
    , {
        "month": "AUG",
        "withinSla": 45,
        "outsideSla": 55
        
      }
      , {
        "month": "SEPT",
        "withinSla": 17,
        "outsideSla": 31
        
      }
      , {
        "month": "OCT",
        "withinSla": 78,
        "outsideSla": 22
        
      }
      , {
        "month": "NOV",
        "withinSla": 64,
        "outsideSla": 36
        
      },{
        "month": "DEC",
        "withinSla": 55,
        "outsideSla": 45
        
      }, ],
  }

const bar = document.querySelector('.bar');
let barData = chartjson.data.map((data, index)=>{
    let bar = `<div class='bar'> <div class='outside-sla${index} outside-sla'></div> <div class='within-sla${index} within-sla'></div></div>`;
    let months = `<span class='month'> ${data.month}</span>`; 
    let outsideSlaPercentage = `<span>${data.outsideSla}%</span>`;
    let withinSlaPercentage = `<span>${data.withinSla}%</span>`;
    document.getElementById('chart').innerHTML += bar;
    document.getElementById('months').innerHTML += months;
    document.getElementById('outside-sla-percentage').innerHTML += outsideSlaPercentage;
    document.getElementById('within-sla-percentage').innerHTML += withinSlaPercentage;
    let outsideSla = document.querySelector(`.outside-sla${index}`);
    let withinSla = document.querySelector(`.within-sla${index}`);
    outsideSla.style.setProperty('height', `${data.outsideSla}%`);
    withinSla.style.setProperty('height', `${data.withinSla}%`);
})

