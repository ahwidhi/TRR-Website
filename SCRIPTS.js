

    function showSidebar(){
        const sidebar = document.querySelector(".sidebar")
        sidebar.style.display = "flex"
    }
    function hideSidebar(){
        const sidebar = document.querySelector(".sidebar")
        sidebar.style.display = "none"
    }

    let time = document.getElementById('current-time');
    setInterval(() =>{
        let d = new Date();
        time.innerHTML = d.toLocaleTimeString();
    },1000)
    let date = document.getElementById('current-date');
    setInterval(() =>{
        let d = new Date();
       date.innerHTML = d.toLocaleDateString();
    },)


    function closeModel(){
        modelBox.style.display = "none";
    }
    
 async
    src="https://maps.googleapis.com/maps/api/js?key=&loading=async&callback=initMap"

