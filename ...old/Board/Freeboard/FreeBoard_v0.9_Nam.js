window.addEventListener('load', init)

function init() {
    if (window.innerWidth == 500) { // 새로고침일때만 적용됨 일단 보류
        document.querySelector('#main-menu').textContent = 'MENU'
    }



    //메뉴 열었다 닫았다 하기<시작>
    document.querySelector('#main-menu').addEventListener('click', function () {


        if (document.querySelector('.mainmenu').classList.length == 1) {
            document.querySelector('.mainmenu').classList.add('hide')
            document.querySelector('#main-menu').textContent = 'MENU 열기'
        } else if (document.querySelector('.mainmenu').classList.length == 2) {
            document.querySelector('.mainmenu').classList.remove('hide')
            document.querySelector('#main-menu').textContent = 'MENU 닫기'
        }

    }) //메뉴 열었다 닫았다 하기<끝>
    // 탑 버튼 내용나오게 하기 <시작>
    console.log(document.querySelector('.mainmenu').classList.length)// 클래스 개수
    let menus = document.querySelectorAll('.menu')
    for (menu of menus) {//탑 메뉴탭에 클릭이벤트 주기
        menu.addEventListener('click', function (e) {

            console.log(e.target.textContent) // 어떤 메뉴를 눌렀는지 확인

            if (e.target.textContent == '작업관리') {
                document.querySelector('.menuPage-con').innerHTML = `작업관리내용`
            } else if (e.target.textContent == '생산관리') {
                document.querySelector('.menuPage-con').innerHTML = `생산관리내용`
            } else if (e.target.textContent == '생산리포팅') {
                document.querySelector('.menuPage-con').innerHTML = `생산리포팅`
            } else if (e.target.textContent == '자재관리') {
                document.querySelector('.menuPage-con').innerHTML = `자재관리`
            } else if (e.target.textContent == '품질관리') {
                document.querySelector('.menuPage-con').innerHTML = `품질관리`
            }
        })
    }// 탑 버튼 내용나오게 하기  <끝>


    // 메뉴 버튼 눌렀을때 해당 내용 나오게 하기<시작>
    let buttons = document.querySelectorAll('.menuBut')
    for (button of buttons) {
        button.addEventListener('click', function (e) {

            console.log(e.target.textContent) // 클릭한 요소 텍스트 나오는지 확인

            if (e.target.textContent == '대시보드') {
                document.querySelector('.menuPage-con').innerHTML = `대시보드`
            } else if (e.target.textContent == '게시판') {
                document.querySelector('.menuPage-con').innerHTML = 
                `<div>
<div>
<p id='pageinfo'>
자유게시판
</p>
<hr>
<div class='boardarea'>
<div class='middle_board'>
    <div class='searcharea'>
        <div class='selectbox'>
            <form>
                <select name='viewfilter' id='viewfilter'>
                    <option value='allview'>모두</option>
                    <option value='tilteview'>제목</option>
                    <option value='contentview'>내용</option>
                    <option value='writeuserview'>작성자</option>
                </select>
            </form>
        </div>
        <div class='fillvalue'>
            <input type='text' id ='fillvalue' placeholder="검색어를 입력해주세요">
        </div>
        <div class='searchB'>
            <button type="button" id='search'>검색</button>
        </div>
    </div>
    <hr>
    <div>
    <table class='boardtable'>
        <tr class='boardlist' style="height: 30px; border: 1px solid black;">
            <td class='num'> 번호 </td>
            <td class='writetitle'> 제목 </td>
            <td class='writeuser'> 작성자 </td>
            <td class='writedate'> 작성일 </td>
            <td class='viewcount'> 조회수 </td>
        </tr>
    </table>
    <table class='boardcontents'>
        
    </table>
</div>
    <div class='pageline'>
        <div class='pagemanger'>
            <button type="button" class='prevp'> 이전페이지 </button>
        </div>
        <div class='pnum'>
            <span class='pnum1'> 1 </span>
            <span class='pnum2'> 2 </span>
            <span class='pnum3'> 3 </span>
            <span class='pnum4'> 4 </span>
            <span class='pnum5'> 5 </span>
        </div>
        <div>
            <button type="button" class='nextp'> 다음페이지 </button>
        </div>
        <div>
            <button type="button" class='write'> 글쓰기 </button>
        </div>
    </div>
</div>
</div>
</div>
</div>`
const search = document.querySelector("#search");
search.addEventListener('click', filter)
function filter() {
    const optionS = document.querySelector('#viewfilter')
    const optionT = document.querySelector('#fillvalue')
    console.log(optionS.value)
    console.log(optionT.value)
    
}

const write = document.querySelector('.write');
write.addEventListener('click', writeprocess)
function writeprocess(){
    const writeprocess = document.querySelector('.boardcontents')
    writeprocess.innerHTML += `<tr class='boardcontent' style="height: 30px; border: 1px solid black;">
    <td class='num'> 번호 </td>
<td class='writetitle'> 제목 </td>
<td class='writeuser'> 작성자 </td>
<td class='writedate'> 작성일 </td>
<td class='viewcount'> 조회수 </td>
</tr>`
}


            } else if (e.target.textContent == '공지사항') {
                document.querySelector('.menuPage-con').innerHTML = `공지사항`
            }
        })
    }// 메뉴 버튼 눌렀을때 해당 내용 나오게 하기<끝>

}