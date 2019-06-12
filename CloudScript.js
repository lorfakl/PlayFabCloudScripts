// Should be invoked from a task that runs over certain segment
handlers.Rule_TestProfile = function (args, context)
{
    var profile = context.playerProfile;
    var totalAmt = profile.TotalValueToDateInUSD/100;
//changes yo
    log.debug(totalAmt);

    for(var i=0; i<profile.ValuesToDate.length; i++)
    {
        var vtd = profile.ValuesToDate[i];
        var s= "value: "+vtd.TotalValueAsDecimal;
        //log.debug(s);
    }

    log.debug(profile.ValuesToDate)

}
// Utility method to generate random number
let getRandomInRange = (min, max) => {
    return Math.round(Math.random() * (max - min) + min);
}
