interface Date {
    addDaysToCurrentDay(days : number): Date;
    Format() : String;
}

Date.prototype.addDaysToCurrentDay = function(days : number) : Date{

    let dat = new Date(this.valueOf());
    dat.setDate(dat.getDate()+days);
    return dat;
}

Date.prototype.Format = function() : String{
    let dat = new Date(this.valueOf());
    dat.setDate(dat.getDate());
    let days = dat.getDate();
    let year = dat.getFullYear();
    let month = dat.getMonth ();
//    month++;

    return `${days}/${++month}/${year}`

}

window.onload = function()
{
    var currentDay = new Date();
    console.log(currentDay);
    console.log(currentDay.addDaysToCurrentDay(5));
    console.log(currentDay.Format());
    
}