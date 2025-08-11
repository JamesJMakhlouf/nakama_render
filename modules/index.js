"use strict";
/// <reference path="./nkruntime.d.ts" />
var InitModule = function (ctx, logger, nk, initializer) {
    logger.info("Hello World!");
    createMainLeaderBoard(ctx, logger, nk);
};
function createMainLeaderBoard(ctx, logger, nk) {
    var leaderBoardId = "main_leaderboard";
    var authoritative = false;
    var sortOrder = "descending" /* nkruntime.SortOrder.DESCENDING */;
    var operator = "best" /* nkruntime.Operator.BEST */;
    var resetSchedule = null;
    var metadata = {};
    try {
        nk.leaderboardCreate(leaderBoardId, authoritative, sortOrder, operator, resetSchedule, metadata);
        logger.info("Leaderboard created or already exists: %s", leaderBoardId);
    }
    catch (error) {
        logger.error("Error creating leaderboard %v", error);
    }
}
