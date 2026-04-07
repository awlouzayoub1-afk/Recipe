
//GETELEMENTBYID("demo").INNERHTML=1;
//document.querySelector("button").addEventListener("click", function() {
   // alert("Button clicked!");});

             // moraja3a 
/*function smya(name){
     return "smiya dyalek " + name;
}
smya("hamid");
console.log(smya("hamid"));

             // arrays

            let arr = ["hamid", "yassine", "mohamed"];
            let arr2 = [1, 2, 3, 4, 5]; 
            console.log(arr[0]);
            console.log(arr2[2]);
            arr[0] = "hamid elghazali";
            console.log(arr[0]);

            const lmkhda = (zif) => {
    return "lmkhda dyalek " + zif;
            }
            const a9lal = (zif) => {
    return "a9lal dyalek " + zif;
            }
            //for each
        zif.forEach(zif => {
            console.log(zif);
            function kndir(zif){
                return "ayyyywa " + zif;
            }
        })
            //map
        
        let prices = [10, 20, 30];
        let pricesTTC = prices.map(p => p * 1.2);
        console.log(pricesTTC); // [12, 24, 36]

        //filter
        let numbers = [1, 2, 3, 4, 5];
        let evenNumbers = numbers.filter(n => n % 2 === 0);
        console.log(evenNumbers); // [2, 4]

        //reduce
        let sum = numbers.reduce((total, n) => total + n, 0);
        console.log(sum); // 15

        //loop
        let a=2;
        while(a<10){
            console.log(a);
            a++;
        }
        for(let i=0; i<5; i++){
            console.log(i);
        }
        //if else 
            let age = 18;
        if(age>=18){
            console.log("you are an adult");
        }
        else{
            console.log("you are a minor");
        }*/
       const input = document.getElementById("recipeInput");
            const addBtn = document.getElementById("addBtn");
            const result = document.getElementById("result");

            addBtn.addEventListener("click", () => {
            const value = input.value.toLowerCase();
            result.innerHTML = "";

            const recipe = recipes.find(r =>
                r.name.toLowerCase().includes(value)
            );

            if (recipe) {
                result.innerHTML = `<h3>${recipe.name}</h3><ul>` +
                recipe.ingredients.map(i => `<li>✅ ${i}</li>`).join("") +
                `</ul>`;
            } else {
                result.innerHTML = "<p>❌ Recipe not found</p>";
            }
            });
        