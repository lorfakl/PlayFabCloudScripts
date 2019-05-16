// Should be invoked from a task that runs over certain segment
handlers.PopulateLeaderboard = (args,ctx) => {
    // When handler is executed as a task over the segment
    // we can extract individual player id using the next line:
    let playerId = ctx.playerProfile.PlayerId;

    // Use player id and update player statistics as follows:
    server.UpdatePlayerStatistics({
        PlayFabId : playerId,
        Statistics : [
            {
                "StatisticName": "TestScore",
                "Value": getRandomInRange(100,1000)
            }
        ]
    });
}

// Utility method to generate random number
let getRandomInRange = (min, max) => {
    return Math.round(Math.random() * (max - min) + min);
}
