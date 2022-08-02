const counters = document.querySelectorAll('.counter');

counters.forEach((counter)=>{
    // console.log(counter);

    counter.innerHTML= 0;

    const updateCounter = ()=>{
        const targetCounter = +counter.getAttribute('data-target');

        const startingNumber = Number(counter.innerHTML);

        const increament = targetCounter / 100;

        if(startingNumber < targetCounter){
            counter.innerHTML = `${Math.round(startingNumber + increament)}`;
            setTimeout(updateCounter,10);
        }else{
            counter.innerHTML =  targetCounter;
        }
    }







    updateCounter();
})