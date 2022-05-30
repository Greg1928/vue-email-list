const app = new Vue({
    el: "#app",
    data: {
        emails: []
    },
    created(){
        for(let i = 0; i<10; i++){
            axios.get("https://flynn.boolean.careers/exercises/api/random/mail")
            .then((res) => {
                this.emails.push(res.data.response);
            });
        }
        setTimeout(() => {
            document.getElementById("load").style.display = "none";
            document.getElementById("app").style.display = "block";
        }, 3000);

        console.log(this.emails);
    }
})
