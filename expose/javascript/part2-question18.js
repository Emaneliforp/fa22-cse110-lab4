function print() {
    setTimeout(()=>{
      let d = new Date();
      let time = d.toLocaleTimeString();
      console.log(time);
      print();
    }, 1000);
  }