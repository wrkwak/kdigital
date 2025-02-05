window.addEventListener('load',init)

                
                
function init(){

    //메뉴 열었다 닫았다 하기<시작>
    document.querySelector('#ham').addEventListener('click',function(){
        
        
        if(document.querySelector('.mainmenu').classList.length == 1){
            document.querySelector('.mainmenu').classList.add('hide')
        } else if (document.querySelector('.mainmenu').classList.length == 2){
            document.querySelector('.mainmenu').classList.remove('hide')
        }

    }) //메뉴 열었다 닫았다 하기<끝>
    // 탑 버튼 내용나오게 하기 <시작>
    console.log(document.querySelector('.mainmenu').classList.length)// 클래스 개수
    let menus = document.querySelectorAll('.menu')
    for (menu of menus){//탑 메뉴탭에 클릭이벤트 주기
        menu.addEventListener('click',function(e){

            // console.log(e.target.textContent) // 어떤 메뉴를 눌렀는지 확인
            // 클릭했을때 해당 페이지로 넘어가는 Java Script
            if(e.target.textContent=='작업관리'){
                // 작업관리 메인
                window.location.href="#"
            } else if (e.target.textContent=='생산관리'){
                // 생산관리 메인 
                window.location.href="#"
            } else if (e.target.textContent=='생산리포팅'){
                // 생산리포팅 메인 
                window.location.href="#"
            } else if (e.target.textContent=='자재관리'){
                // 자재관리 메인 
                window.location.href="#"
            } else if (e.target.textContent=='품질관리'){
                // 품질관리 메인 
                window.location.href="#"
            }  else if (e.target.textContent=='기준관리'){
                // 품질관리 메인 
                window.location.href="#"
            } 
        })
    }// 탑 버튼 내용나오게 하기  <끝>


    // 메뉴 버튼 눌렀을때 해당 내용 나오게 하기<시작>
    let buttons = document.querySelectorAll('.menuBut')
    for(button of buttons){
        button.addEventListener('click',function(e){
            if(e.target.textContent=='대시보드'){
                 // 대시보드 메인
                window.location.href="#"
            } else if (e.target.textContent=='게시판'){
                 // 게시판 메인
                window.location.href="#"
            } else if (e.target.textContent=='공지사항'){
                 // 공지사항 메인
                window.location.href="#"
            } 
        })
    }// 메뉴 버튼 눌렀을때 해당 내용 나오게 하기<끝>

}