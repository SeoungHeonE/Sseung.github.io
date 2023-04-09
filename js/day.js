        //객체.매서드(매개인자);
        //변수의 선언
        let dayarray = ["일", "월", "화", "수", "목", "금", "토"];
        let myDate;
        let year;    //년
        let month;   //월
        let date;    //일
        let day;     //요일
        let hour;    //시
        let minute;  //분
        let seconds; //초
        //2023년 4월 3일 월요일 15:30
        //D-day 99일

        //`dayarray` 변수는 일주일의 요일을 저장하는 배열입니다. 
        //`myDate` 변수는 `Date` 객체를 저장하기 위한 변수이며, `year`,
        //`month`, `date`, `day`, `hour`, `minute`, `seconds` 
        //변수는 현재 날짜와 시간을 저장하기 위한 변수입니다.


        //2. `setInterval()` 메서드를 사용한 반복 실행 
        setInterval(function () {
            myDate = new Date();
            year = myDate.getFullYear() + "년 ";
            month = myDate.getMonth() + 1 + "월 ";
            date = myDate.getDate() + "일 ";
            day = dayarray[myDate.getDay()] + "요일 ";
            hour = myDate.getHours() + " : ";
            minute = myDate.getMinutes() + " : ";
            seconds = myDate.getSeconds();
            document.getElementById("time").innerText = year + month + date + day + hour + minute + seconds;
        }, 1000);

        // D-day

        let today = new Date(); // 오늘 날짜
        let dDay = new Date("2023-06-21"); // D-day 날짜
        let gap = dDay.getTime() - today.getTime(); // D-day까지 남은
        // D-day까지 남은 일 수 
        let dDayCount = Math.floor(gap / (1000 * 60 * 60 * 24)) + 1; 

        // 출력
        let dDayText = "D-" + dDayCount;
        document.getElementById("d-day").innerText = dDayText;
        

        //`setInterval()` 메서드는 매개변수로 전달된 함수를 지정된 시간 
        //간격마다 반복해서 실행합니다. 여기서는 `1000` 밀리초(1초)마다 함수가
        //실행됩니다. 실행되는 함수는 다음과 같은 동작을 수행합니다.


        // - `myDate` 변수에 현재 시간을 저장합니다.
        // - `getFullYear()` 메서드를 사용하여 현재 연도를 구하고, `getMonth()` 메서드를 사용하여 현재 월을 구합니다. `getDate()` 메서드를 사용하여 현재 일을 구하고, `getDay()` 메서드를 사용하여 현재 요일을 구합니다. 그리고 `dayarray` 배열을 사용하여 요일 이름을 가져옵니다.
        //- `getHours()`, `getMinutes()`, `getSeconds()` 메서드를 사용하여 현재 시간을 구합니다.
        //- `innerText` 속성을 사용하여 HTML 요소의 내용을 현재 시간으로 업데이트합니다.
        
        //위 코드를 실행하면 1초마다 `time` 요소에 현재 시간이 반복적으로 출력됩니다.