window.addEventListener("load", function () {
    console.log('게시판에 들어옴')

    const search = document.querySelector("#search");
    search.addEventListener('click', filter)
    function filter() {
        const optionS = document.querySelector('#viewfilter')
        const optionT = document.querySelector('#fillvalue')
        console.log(optionS.value)
        console.log(optionT.value)

        // 필터링 후 표시시
    }

    const write = document.querySelector('.write');
    write.addEventListener('click', writeprocess)
    function writeprocess() {
        window.location.href="writeprocess_nam.html"
        console.log("글쓰기 페이지 진입")


//         const writeprocess = document.querySelector('.boardcontents')
//         writeprocess.innerHTML += `<tr class='boardcontents' style="height: 30px; border: 1px solid black;">
//     <td class='num'> 번호 </td>
// <td class='writetitle'> 제목 </td>
// <td class='writeuser'> 작성자 </td>
// <td class='writedate'> 작성일 </td>
// <td class='viewcount'> 조회수 </td>
// </tr>`
    }
})