/// <reference path="./nkruntime.d.ts" />

let InitModule: nkruntime.InitModule = function(
    ctx: nkruntime.Context, 
    logger: nkruntime.Logger, 
    nk: nkruntime.Nakama, 
    initializer: nkruntime.Initializer
) {
    logger.info("Hello World!");
    createMainLeaderBoard(ctx, logger, nk);
}

function createMainLeaderBoard(ctx: nkruntime.Context, logger: nkruntime.Logger, nk: nkruntime.Nakama) {
    let leaderBoardId = "main_leaderboard";
    let authoritative = false;
    let sortOrder = nkruntime.SortOrder.DESCENDING;
    let operator = nkruntime.Operator.BEST;
    let resetSchedule = null;
    let metadata: {} = {};

    try {
        nk.leaderboardCreate(leaderBoardId, authoritative, sortOrder, operator, resetSchedule, metadata);
        logger.info("Leaderboard created or already exists: %s", leaderBoardId);
    } catch (error) {
        logger.error("Error creating leaderboard %v", error);
    }
}