for(const prop in statistics){
    if(prop.startsWith('r') || stat[prop] % 2 == 1){
        console.log(stat[prop]);
    }
}