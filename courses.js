
setTimeout(() => {
    let loader1 = document.getElementById('loader3')
    loader1.style.display = 'none'

    let mainCont = document.getElementById('mainCont')
    mainCont.style.display = 'block'
}, 1000)
let javascript = () => {

    swal({
        title: `Let's Start the Quiz`,
        text: `10 Questions
        Each Question have four Options
        Each Question have ${30} Seconds`,
        // icon: "warning",
        buttons: `Start Quiz`,
        // buttons: true,
        // dangerMode: true,
    }).then((willDelete) => {
        if (willDelete) {
            window.location = "quizQues.html";
        }
    });
    // swal({
    //     title: `Let's Start the Quiz`,
    //     text: `10 Questions
    //     Each Question have four Options
    //     Each Question have ${30} Seconds`,
    //     button: `Start`
    // }).then(function () {
    //     window.location = "quizQues.html";
    // })
}
let html = () => {
    swal({
        title: `Let's Start the Quiz`,
        text: `10 Questions
        Each Question have four Options
        Each Question have ${30} Seconds`,
        // icon: "warning",
        buttons: `Start Quiz`,
        // buttons: true,
        // dangerMode: true,
    }).then((willDelete) => {
        if (willDelete) {
            window.location = "htmlquiz.html";
        }
    });
    // swal({
    //     title: `Let's Start the Quiz`,
    //     text: `10 Questions
    //     Each Question have four Options
    //     Each Question have ${30} Seconds`,
    //     button:`Start`
    //   }).then(function() {
    // });
}
let css = () => {
    swal({
        title: `Let's Start the Quiz`,
        text: `10 Questions
        Each Question have four Options
        Each Question have ${30} Seconds`,
        // icon: "warning",
        buttons: `Start Quiz`,
        // buttons: true,
        // dangerMode: true,
    }).then((willDelete) => {
        if (willDelete) {
            window.location = "css.html";
        }
    });
}

