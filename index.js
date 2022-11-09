let data = document.getElementById('para');
let header = document.getElementsByTagName("h1");
console.log(header);

let second = 1000,
    minute = 60 * second,
    hour = 60 * minute,
    day = 24 * hour;


let timerFunction = () => {



    let now = new Date(),
    dd = String(now.getDate()).padStart(2,"0"),
    mm = String(now.getMonth()+1).padStart(2,"0"),
    
    yyyy = now.getFullYear();

    let enterDay =prompt("Enter Date").padStart(2,'0');
    let enterMonth = prompt("Enter Month").padStart(2,'0');

    now  = `${mm}/${dd}/${yyyy}`;
    let targetDate  = `${enterMonth}/${enterDay}/${yyyy}`;


    if(now> targetDate) targetDate = `${enterMonth}/${enterDay}/${yyyy+1}`;

    
    // let targetTime = new Date('04/11/2023').getTime();


    let interval = setInterval(() => {

        // console.log(currentTime)
        let currentTime = new Date().getTime();

        let targetTime  = new Date(targetDate).getTime();

        let difference = targetTime - currentTime; 

        let leftDay = Math.floor(difference / day);
        let leftHour = Math.floor((difference % day) / hour);
        let leftMinute = Math.floor((difference % hour) / minute);
        let leftSecond = Math.floor((difference % minute) / second);

        let left = `${leftDay} days ${leftHour} hours ${leftMinute} minutes and ${leftSecond} seconds`;

        data.innerText = left;

        if(difference < 0){
           header.innerText = "Time's Up :)";
           
            data.innerText = "Time is Up";
          //  data.style.display = "none";
            clearInterval(interval);


            
        }




        //  console.log(left);


    }, 1000);




};

timerFunction();