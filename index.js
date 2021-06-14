const arr = [
    {
        sno: 1,
        src: "https://images.unsplash.com/photo-1614680376408-81e91ffe3db7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=667&q=80",
        feature: "We are Number One Messaging WebApp"
    },
    {
        sno: 2,
        src: "https://images.unsplash.com/photo-1521931961826-fe48677230a5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
        feature: "Privacy/Safety is our first priority"
    },
    {
        sno: 3,
        src: "https://images.unsplash.com/photo-1581287053822-fd7bf4f4bfec?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=777&q=80",
        feature: "We offer quality UI"

    },
    {
        sno: 4,
        src: "https://images.unsplash.com/photo-1529078155058-5d716f45d604?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=749&q=80",
        feature: "Messages are end to end encrypted"
    },
    {
        sno: 5,
        src: "https://images.unsplash.com/photo-1509822929063-6b6cfc9b42f2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
        feature: "Now Login to Continue"
    }

] ;


let a = document.getElementById('image');
        c= a.attributes;
        d= c[0].value;
        
        
        let b = document.getElementById('feat');
        var count = 1;
        
        
        
        
        const next = ()=>{
            if(count<5){b.innerHTML = arr[count].feature;
                d= arr[count].src;
                a.setAttribute('src', d);
                
                console.log(count);
              count++;
            }
            else if(count=5){
                b.innerHTML = arr[0].feature;
                d = arr[0].src;
                a.setAttribute('src', d);
                console.log(count);
                
                count = 1;
            }
            else{}
           
        
         
        };
        setInterval(next,3000);