var searchIndex = {};
searchIndex["env_logger"] = {"doc":"A logger configured via an environment variable which writes to standard error.","items":[[3,"Logger","env_logger","The logger.",null,null],[3,"Builder","","Builder acts as builder for initializing the Logger. It can be used to customize the log format, change the enviromental variable used to provide the logging directives and also set the default log level filter.",null,null],[4,"Target","","Log target, either stdout or stderr.",null,null],[13,"Stdout","","",0,null],[13,"Stderr","","",0,null],[5,"try_init","","Initializes the global logger with an env logger.",null,{"inputs":[],"output":{"name":"result"}}],[5,"init","","Initializes the global logger with an env logger.",null,{"inputs":[],"output":null}],[11,"fmt","","",0,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"new","","Initializes the log builder with defaults",1,{"inputs":[],"output":{"name":"builder"}}],[11,"filter","","Adds filters to the logger",1,{"inputs":[{"name":"self"},{"name":"option"},{"name":"levelfilter"}],"output":{"name":"self"}}],[11,"format","","Sets the format function for formatting the log output.",1,{"inputs":[{"name":"self"},{"name":"f"}],"output":{"name":"self"}}],[11,"target","","Sets the target for the log output.",1,{"inputs":[{"name":"self"},{"name":"target"}],"output":{"name":"self"}}],[11,"parse","","Parses the directives string in the same form as the RUST_LOG environment variable.",1,{"inputs":[{"name":"self"},{"name":"str"}],"output":{"name":"self"}}],[11,"try_init","","Initializes the global logger with an env logger.",1,{"inputs":[{"name":"self"}],"output":{"name":"result"}}],[11,"init","","Initializes the global logger with an env logger.",1,{"inputs":[{"name":"self"}],"output":null}],[11,"build","","Build an env logger.",1,{"inputs":[{"name":"self"}],"output":{"name":"logger"}}],[11,"new","","",2,{"inputs":[],"output":{"name":"logger"}}],[11,"filter","","",2,{"inputs":[{"name":"self"}],"output":{"name":"levelfilter"}}],[11,"enabled","","",2,{"inputs":[{"name":"self"},{"name":"metadata"}],"output":{"name":"bool"}}],[11,"log","","",2,{"inputs":[{"name":"self"},{"name":"record"}],"output":null}],[11,"flush","","",2,{"inputs":[{"name":"self"}],"output":null}]],"paths":[[4,"Target"],[3,"Builder"],[3,"Logger"]]};
initSearch(searchIndex);