import chalk from "chalk";

const msgLevel = {
    info: chalk.green,
    warn: chalk.yellow,
    error: chalk.red
};

function getDate() {
    let now = new Date(), nowStr = "";

    nowStr += now.getFullYear() + '/';
    nowStr += ((now.getMonth()+1) < 10 ? '0' + (now.getMonth()+1) : (now.getMonth()+1)) + '/';
    nowStr += (now.getDate() < 10 ? '0' + now.getDate() : now.getDate()) + '-';
    nowStr += (now.getHours() < 10 ? '0' + now.getHours() : now.getHours()) + ':';
    nowStr += (now.getMinutes() < 10 ? '0' + now.getMinutes() : now.getMinutes()) + ':';
    nowStr += (now.getSeconds() < 10 ? '0' + now.getSeconds() : now.getSeconds());
    return nowStr;
}

function Log (level, tags = [], ...data) {
    if(tags == null ||  tags.length == 0 && data.length == 0){
        console.warn("Null, undefined, or empty parameter(s).");
    }
    else {

        let logStr = "", haveTags = true, haveObject = false;

        // Default date tag
        const dateStr = '[' + getDate() + ']';

        // Did we have 'data' ?
        if(data.length == 0){
            // Did we have to push 'tags' into 'data' ?
            if(typeof(tags) !== "object"){
                // No real tags -> push
                haveTags = false;
                data.splice(0,0, tags);
            }
            else {
                // Real tags ?
                if(Array.isArray(tags)){
                    haveTags = true;
                }
                else {
                    haveObject = true;
                    haveTags = false;
                    data.splice(0,0, tags);
                }
            }
        }
        else {
            if(data.length == 1 && data[0] != null && typeof(data[0]) === "object") {
                haveObject = true;
            }
            else {
                let isNullable = true;
                data.forEach(function(element) {
                    if(element != null && typeof(element) !== "undefined") {
                        isNullable = false;
                    }
                }, this);

                if(isNullable) {
                    console.warn("Null, undefined, or empty parameter(s).");
                    return;
                }
            }
        }

        if(haveTags) {
            for(let indexTag in tags)
                logStr += '[' + tags[indexTag] + ']';
        }

        if(!haveObject){
            console.log(dateStr + logStr, level(data.join(", ")));
        }
        else {
            console.log(dateStr + logStr);
            console.log(...data);
        }
    }
}

export const SagaSphere_Logger = {
    info:   (tags, ...data) => Log(msgLevel.info, tags, ...data),
    warn:   (tags, ...data) => Log(msgLevel.warn, tags, ...data),
    err:    (tags, ...data) => Log(msgLevel.error, tags, ...data)
};

export default SagaSphere_Logger;