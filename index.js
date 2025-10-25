function generateBusinessName() {
    //Adjectives 
    let adj1 = "Crazy"
    let adj2 = "Amazing"
    let adj3 = "Fire"

    //Shop name
    let shop_name1 = "Engine"
    let shop_name2 = "Foods"
    let shop_name3 = "Garments"

    //Random Suffix
    let random_suffix1 = "Bros"
    let random_suffix2 = "Limited"
    let random_suffix3 = "Hub"

    // let pick = Math.floor(Math.random() * 3) + 1;
    let adjectivePick = Math.floor(Math.random() *3) + 1;
    let Shop_namePick = Math.floor(Math.random() *3) + 1;
    let random_suffixPick = Math.floor(Math.random() *3) + 1;


    //Declare final parts 
    let adjective = " "
    if (adjectivePick === 1) {
        adjective = "Crazy";
    }
    else if (adjectivePick === 2) {
        adjective = "Amazing";
    }
    else{
        adjective = "Fire";
    }
    let Shop_name = " "
    if (Shop_namePick === 1) {
        Shop_name = "Engine";
    }
    else if (Shop_namePick === 2) {
        Shop_name = "Foods";
    }
    else {
        Shop_name = "Garments";
    }
    let random_suffix = " "
    if (random_suffixPick === 1) {
        random_suffix = "Bros";
    }
    else if (random_suffixPick === 2) {
        random_suffix = "Limited";
    }
    else{ 
        random_suffix = "Hub";
    }

    // Now picking time
    // if (pick === 1) {
    //     adjective = adj1;
    //     Shop_name = shop_name1;
    //     random_suffix = random_suffix2
    // } else if (pick === 2) {
    //     adjective = adj2;
    //     Shop_name = shop_name2;
    //     random_suffix = random_suffix3;
    // } else {
    //     adjective = adj3;
    //     Shop_name = shop_name3;
    //     random_suffix = random_suffix3;
    // }

    let businessname = `${adjective} ${Shop_name} ${random_suffix}`
    return businessname
}
//Run time
console.log("Your business name is: ", generateBusinessName());