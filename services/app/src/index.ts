import RedditRequestHandler from "./requestHandlers/redditRequestHandler/redditRequestHandler"
import PgDatabaseAdapter from "./DatabaseAdapters/PgDatabaseAdapter/PgDatabaseAdapter";


// let requestHandler = new RedditRequestHandler();
let DatabaseAdapter = new PgDatabaseAdapter();

// Test insertion into collection
DatabaseAdapter.query(
    'insert into collection(col_id, col_name, last_refresh) values($1, $2, DEFAULT)',
    ['txvs1s121', 'mySubreddit'])
    .then(res => {
        console.log(res)
        return DatabaseAdapter.query('select * from collection')
    })
    .then(res => console.log(res)).catch(err => console.log(err))
    .catch(err => console.log(err));

    while(true){
        continue;
    }
// // Test select statement
// DatabaseAdapter.query('select * from collection')
//     .then(res => console.log(res)).catch(err => console.log(err));

//let databaseAdapter = new postgresDBAdapter()

//let analyzer = new dataAnalyser

// Listen to RSS feed
    // on new RSS feed item
        // get comment that mention came from
        // get parent comment
        // get user from parent comment
        // get user's last n comments
