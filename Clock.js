setInterval(() => {
    let hours = document.getElementById("hrs");
    let minutes = document.getElementById("mins");
    let seconds = document.getElementById("secs");
    let ampm = document.getElementById("ampm");
  
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    let ap = h >= 12 ? "PM" : "AM";
  
    if (h > 12) {
      h = h - 12;
    }
  
    h = h < 10 ? "0" + h : h;
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;
  
    hours.innerHTML = h;
    minutes.innerHTML = m;
    seconds.innerHTML = s;
    ampm.innerHTML = ap;
  
    document.getElementById("hh").style.strokeDashoffset = 440 - (440 * h) / 12;
    document.getElementById("mm").style.strokeDashoffset = 440 - (440 * m) / 60;
    document.getElementById("ss").style.strokeDashoffset = 440 - (440 * s) / 60;
  
    document.getElementById("h-dot").style.transform = `rotate(${h * 30 + (m / 60) * 30}deg)`;
    document.getElementById("m-dot").style.transform = `rotate(${m * 6}deg)`;
    document.getElementById("s-dot").style.transform = `rotate(${s * 6}deg)`;
  }, 1000);