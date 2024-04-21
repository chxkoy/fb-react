import _0x423e01 from 'fs';
import { exec, execSync } from 'child_process';
const RequiredDependencies = ["inquirer", "axios", "ora", "password-prompt"];
String.prototype.toTitle = function () {
  const _0x5ba2b2 = this.slice(0, 1).toUpperCase();
  return _0x5ba2b2 + this.slice(1, undefined);
};
function setClear() {
  if (process.platform === 'win32') {
    execSync("cls", {
      'stdio': "inherit"
    });
    return;
  }
  execSync('clear', {
    'stdio': 'inherit'
  });
}
function getTimeStamp() {
  const _0x4a1414 = new Date();
  const _0x290c6c = String(_0x4a1414.getHours()).padStart(2, '0');
  const _0x43c2c6 = String(_0x4a1414.getMinutes()).padStart(2, '0');
  const _0x5329ca = String(_0x4a1414.getSeconds()).padStart(2, '0');
  return "[1;33m[" + _0x290c6c + ':' + _0x43c2c6 + ':' + _0x5329ca + ']' + "[0m" + " ";
}
class prompts {
  static ["getMainCommand"] = {
    'type': 'input',
    'name': "cmd",
    'prefix': '',
    'message': "[1;33m[?][1;37m Facebook Auto React",
    'validate': cmd => {
      if (cmd.trim() === '') {
        return "[1;31m[!][1;37m Invalid Option.";
      }
      if (!/^\d+$/.test(cmd)) {
        return "[1;31m[!][1;37m Invalid Option. Please Enter Only Numbers";
      }
      cmd = parseInt(cmd);
      if (cmd <= 0 || cmd >= 6) {
        return "[1;31m[!][1;37m Invalid Option. Out of Range";
      }
      return true;
    }
  };
  static ['getPostURL'] = {
    'type': "input",
    'name': "url",
    'prefix': '',
    'message': "[1;33m[?][1;37m Facebook Post URL (press h to help)~$",
    'validate': url => {
      if (url.toLowerCase() === 'h') {
        return "\n[1;32m**COMMANDS**\n[1;34m[+][1;37m [1;33mB - [1;32m(BACK)\n\n[1;32m**NOTE**\n[1;34m[+][1;37m DON'T USE THE FACEBOOK APPLICATION TO COPY THE LINK OF THE POST, USE FACEBOOK LITE OR CHROME INSTEAD.\n";
      }
      if (url.toLowerCase() === 'b') {
        return true;
      }
      if (url.trim() === '') {
        return "[1;31m[!][1;37m Invalid URL";
      }
      if (!url.startsWith("https://www.facebook.com/") && !url.startsWith("http://www.facebook.com/")) {
        return "[1;31m[×][1;37m Invalid URL";
      }
      return true;
    }
  };
  static ["getReaction"] = {
    'type': "list",
    'name': 'react_type',
    'prefix': '',
    'message': "[1;33m[?][1;37m Reaction Type: ",
    'choices': ["[1;36mLIKE", "[1;35mLOVE", "[1;33mHAHA", "[38;5;208mWOW", "[1;34mSAD", "[1;31mANGRY", "[1;32mCARE"]
  };
  static ["getCookieCommand"] = {
    'type': "input",
    'name': "cookieCommand",
    'prefix': '',
    'message': "[1;33m[?][1;37m CookieManagement",
    'validate': cookieCommand => {
      if (cookieCommand.trim() === '') {
        return "[1;31m[×][1;37m Invalid Option.";
      }
      if (!/^\d+$/.test(cookieCommand)) {
        return "[1;31m[×][1;37m Invalid Option. Please Enter Only Numbers";
      }
      cookieCommand = parseInt(cookieCommand);
      if (cookieCommand <= 0 || cookieCommand >= 4) {
        return "[1;31m[×][1;37m Invalid Option. Out of Range";
      }
      return true;
    }
  };
  static ['addCookie'] = {
    'type': "input",
    'name': "email",
    'prefix': '',
    'message': "[1;33m[?][1;37m Facebook (Email/ID/Phone): ",
    'validate': email => {
      if (email.trim() === '') {
        return "[1;31m[×][1;37m Really Nigga";
      }
      if (email.toLowerCase() === 'b') {
        return true;
      }
      return true;
    }
  };
  static ['deleteCookie'] = {
    'type': "input",
    'name': "cookieIndex",
    'prefix': '',
    'message': "[1;33m[?][1;37m Delete Cookie (press a to delete all)~$",
    'validate': cookieIndex => {
      if (cookieIndex.trim() === '') {
        return "[1;31m[×][1;37m Invalid Option";
      }
      if (cookieIndex.toLowerCase() === 'b') {
        return true;
      }
      if (cookieIndex.toLowerCase() === 'a') {
        return true;
      }
      if (!/^\d+$/.test(cookieIndex)) {
        return "[1;31m[×][1;37m Invalid Option. Please Enter Only Numbers";
      }
      cookieIndex = parseInt(cookieIndex);
      if (cookieIndex < 1 || cookieIndex > cookiesJSONParsed.Cookies.length) {
        return "[1;31m[×][1;37m Invalid Option. Out of Range";
      }
      return true;
    }
  };
  static ["askBack"] = {
    'type': "input",
    'name': "back",
    'prefix': '',
    'message': "[1;33m[?][1;37m Do You Want To Go Back? (y/n, default: y): "
  };
  static ["askToContinue"] = {
    'type': "input",
    'name': '_',
    'prefix': '',
    'message': "[1;33m[?][1;37m Press Enter To Continue"
  };
}
async function InstallDependencies(_0x14b10b) {
  if (!_0x423e01.existsSync('./node_modules/')) {
    execSync("mkdir -p ./node_modules/");
  }
  for (const _0x3fb4eb of _0x14b10b) {
    if (!_0x423e01.existsSync('./node_modules/'.concat(_0x3fb4eb))) {
      console.log("[1;34m[+][1;37m Installing [1;33m[4m" + _0x3fb4eb.toTitle() + "[0m" + "[1;37m" + " Dependency");
      try {
        execSync("npm i --save " + _0x3fb4eb, {
          'stdio': 'inherit'
        });
        console.log("[1;34m[+][1;37m [1;33m[4m" + _0x3fb4eb.toTitle() + "[0m" + "[1;37m" + " Installed Successfully");
      } catch (_0x330c36) {
        console.log("[1;34m[×][1;37m Failed to install " + _0x3fb4eb);
        console.log("[1;31m[!][1;37m " + _0x330c36);
        process.exit();
      }
    }
  }
  console.log(getTimeStamp() + "[1;34m[+][1;37m " + "All Required Dependencies Installed Successfully");
}
function delay(_0xb245) {
  return new Promise(_0x8f397 => setTimeout(_0x8f397, _0xb245));
}
async function animate(_0x841c5d, _0x24218a = 4) {
  _0x841c5d = _0x841c5d.toString();
  for (const _0x2ca5aa of _0x841c5d) {
    await delay(_0x24218a);
    process.stdout.write(_0x2ca5aa);
  }
  console.log();
}
async function exit() {
  await animate(getTimeStamp() + "[1;34m[+][1;37m " + "IF YOU ENCOUNTER ANY BUGS OR ISSUES, PLEASE FEEDBACK YOUR MESSAGE IS VALUABLE TO US :)", 25);
  await animate(getTimeStamp() + "[1;34m[+][1;37m " + "THANKS FOR USING", 25);
  process.exit();
}
await InstallDependencies(RequiredDependencies);
const {
  default: inquirer
} = await import("inquirer");
const {
  default: ora
} = await import("ora");
const {
  default: axios
} = await import("axios");
const {
  default: getPassword
} = await import("password-prompt");
try {
  console.log(getTimeStamp() + "[1;34m[+][1;37m " + "Checking for updates...");
  const response = execSync("git pull").toString();
  if (response.includes("Already up to date.")) {
    console.log(getTimeStamp() + "[1;34m[+][1;37m " + "No updates found.");
  } else {
    const commitMessage = execSync("git log -1 --pretty=%B").toString();
    console.log(getTimeStamp() + "[1;34m[+][1;37m " + "Update successful. Please run the script again using: " + "[1;33m" + "node index.js");
    console.log(getTimeStamp() + "[1;34m[+][1;37m " + ("Update Message : " + ("[1;32m" + commitMessage)));
    process.exit();
  }
} catch (_0x287f26) {
  console.log(getTimeStamp() + "[1;31m[!][1;37m " + "Update failed. Please ensure that git is installed.");
  console.log(getTimeStamp() + "[1;31m[!][1;37m " + _0x287f26);
  process.exit();
}
try {
  execSync("pip -V", {
    'stdio': "ignore"
  });
} catch (_0x5e1652) {
  console.log("[1;34m[+][1;37m Installing Python");
  execSync("pkg install python -y", {
    'stdio': "inherit"
  });
}
try {
  execSync("pip show requests", {
    'stdio': "ignore"
  });
  execSync("pip show bs4", {
    'stdio': "ignore"
  });
  execSync("pip show flask", {
    'stdio': 'ignore'
  });
} catch (_0x32cdf2) {
  try {
    console.log("[1;34m[+][1;37m Installing Python [1;33m[4mRequests[0m[1;37m Module");
    execSync("pip install requests", {
      'stdio': "inherit"
    });
    console.log("[1;34m[+][1;37m Installing Python [1;33m[4mBs4[0m[1;37m Module");
    execSync("pip install bs4", {
      'stdio': "inherit"
    });
    console.log("[1;34m[+][1;37m Installing Python [1;33m[4mFlask[0m[1;37m Module");
    execSync("pip install flask", {
      'stdio': 'inherit'
    });
  } catch (_0x57ac82) {
    console.log(getTimeStamp() + "[1;31m[!][1;37m " + _0x57ac82);
    process.exit();
  }
}
console.log(getTimeStamp() + "[1;34m[+][1;37m " + "Starting API");
const port = Math.floor(Math.random() * 64511) + 1025;
exec("python cookieGetter.py " + port, (_0x553342, _0x1862d1, _0x2f508f) => {
  if (_0x553342) {
    console.log(getTimeStamp() + "[1;31m[!][1;37m " + "Unable to start the API");
    console.log(getTimeStamp() + "[1;31m[!][1;37m " + "Error Details: " + _0x553342.message);
    process.exit();
  }
});
console.log(getTimeStamp() + "[1;34m[+][1;37m " + "API Started Successfully");
await delay(5000);
const {
  getCookie
} = await import('./cookieGetter.js');
let loading = ora({
  'spinner': "point",
  'prefixText': getTimeStamp() + "[1;34m[+][1;37m " + 'Authenticating',
  'interval': 0x50,
  'color': "green"
});
let cookiesJSON;
let cookiesJSONParsed;
async function Goback() {
  const {
    back: _0x52eced
  } = await inquirer.prompt(prompts.askBack);
  if (_0x52eced.toLowerCase() === 'n') {
    await exit();
  }
  main();
}
async function Feedback() {
  setClear();
  const {
    feedbackType: _0x4bfabd
  } = await inquirer.prompt({
    'name': "feedbackType",
    'type': 'list',
    'prefix': '',
    'message': "[1;33m[?][1;37m Where would you like to leave your feedback?",
    'choices': ["[1;36mFacebook", "[1;34mTelegram"]
  });
  if (_0x4bfabd.includes("Facebook")) {
    try {
      execSync("xdg-open http://www.facebook.com/xenvrnslol");
    } catch (_0x4b1702) {
      execSync("gio open http://www.facebook.com/xenvrnslol");
    }
    main();
  } else {
    try {
      execSync("xdg-open http://t.me/ufxeen");
    } catch (_0x4ec4fb) {
      execSync("gio open http://t.me/ufxeen");
    }
    main();
  }
}
function UpdateCookies() {
  try {
    cookiesJSON = _0x423e01.readFileSync('./cookies.json', "utf8");
    cookiesJSONParsed = JSON.parse(cookiesJSON);
  } catch (_0x2f49da) {
    console.log(getTimeStamp() + "[1;31m[!][1;37m " + _0x2f49da);
    process.exit();
  }
}
UpdateCookies();
async function Continue() {
  await inquirer.prompt(prompts.askToContinue);
}
async function ShowCookie() {
  setClear();
  console.log(getTimeStamp() + "[1;34m[+][1;37m " + "[1;33mNOTE: [1;32mMORE COOKIES MORE LIKES :D");
  console.log("[1;36m---------------------[1;32mCookies[1;36m---------------------");
  if (cookiesJSONParsed.Cookies.length === 0) {
    console.log(getTimeStamp() + "[1;31m[!][1;37m " + "No Cookies Found.");
    console.log(getTimeStamp() + "[1;34m[+][1;37m " + "Please add a cookie first so you can use Facebook Auto React.");
    console.log("[1;36m---------------------[1;32mCookies[1;36m---------------------");
    console.log();
    await Continue();
    await CookieManagement();
    return;
  }
  for (let _0x2054ff = 0; _0x2054ff < cookiesJSONParsed.Cookies.length; _0x2054ff++) {
    console.log(getTimeStamp() + "[1;34m[+][1;37m " + ("[1;33mACCOUNT NUMBER" + (_0x2054ff + 1) + " : " + ("[1;32m" + cookiesJSONParsed.Emails[_0x2054ff].slice(0, 10)) + "..."));
    console.log(getTimeStamp() + "[1;34m[+][1;37m " + ("[1;32mCOOKIES[1;33m NUMBER" + (_0x2054ff + 1) + ") : " + "[1;32m" + (cookiesJSONParsed.Cookies[_0x2054ff].length >= 20 ? cookiesJSONParsed.Cookies[_0x2054ff].slice(0, 20) : cookiesJSONParsed.Cookies[_0x2054ff]) + "..."));
  }
  console.log("[1;36m=====================[1;32mCookies[1;36m=====================");
  console.log();
  await Continue();
  main();
}
async function CookieManagement() {
  setClear();
  await animate("[1;32m ___  ___  _    _  _  [1;33mDeveloped by [1;34mvixeenn[1;32m\n| __>| . >| |  <_>| |__ ___  _ _  ___\n| _> | . \\| |_ | || / // ._>| '_><_-<\n|_|  |___/|___||_||_\\_\\___. |_|  /__/ ");
  await animate("\n[1;33m(1) ~ [1;34mAdd Cookie Datr ~ [1;32m(Add Facebook Cookie)\n[1;33m(2) ~ [1;34mDelete Cookie Datr ~ [1;32m(Delete Facebook Cookie)\n[1;33m(3) ~ [1;34mBack ~ [1;32m(Previous Menu)\n");
  let {
    cookieCommand: _0x68a6fa
  } = await inquirer.prompt(prompts.getCookieCommand);
  _0x68a6fa = parseInt(_0x68a6fa);
  if (_0x68a6fa === 1) {
    InsertCookie();
  } else {
    if (_0x68a6fa === 2) {
      DeleteCookie();
    } else if (_0x68a6fa === 3) {
      main();
    }
  }
}
async function InsertCookie() {
  try {
    setClear();
    console.log(getTimeStamp() + "[1;34m[+][1;37m " + "PLEASE WAIT FOR THE COUNTDOWN | [1;32m5s");
    await delay(5000);
    setClear();
    await animate("[1;32m ___  ___  _    _  _  [1;33mDeveloped by [1;34mvixxeenn[1;32m\n| __>| . >| |  <_>| |__ ___  _ _  ___\n| _> | . \\| |_ | || / // ._>| '_><_-<\n|_|  |___/|___||_||_\\_\\___. |_|  /__/ ");
    console.log();
    await animate(getTimeStamp() + "[1;31m[!][1;37m " + "[1;33mWARNING: [1;31mPLEASE DO NOT USE YOUR PERSONAL ACCOUNT IF YOU WANT TO AVOID SUSPENDING YOUR ACCOUNT. INSTEAD, USE A NEW ACCOUNT. THE AUTHOR IS NOT RESPONSIBLE FOR ACCOUNT SUSPENSIONS.", 10);
    console.log();
    const {
      email: _0xf0f3f1
    } = await inquirer.prompt(prompts.addCookie);
    const _0x16b9cc = await getPassword("[1;33m[?][1;37m Facebook Password: ", {
      'method': "mask"
    });
    loading.start();
    const _0x1b3265 = await getCookie(_0xf0f3f1, _0x16b9cc, port);
    loading.stop();
    if (_0x1b3265.includes('Invalid') || _0x1b3265.includes("Error")) {
      console.log(getTimeStamp() + "[1;31m[!][1;37m " + _0x1b3265);
      await Continue();
      await CookieManagement();
      return;
    }
    console.log(getTimeStamp() + "[1;34m[+][1;37m " + "Saving Cookie Datr in [1;33mcookies.json...");
    if (_0x423e01.existsSync('./cookies.json')) {
      cookiesJSONParsed.Cookies.push(_0x1b3265);
      cookiesJSONParsed.Emails.push(_0xf0f3f1);
      _0x423e01.writeFileSync('./cookies.json', JSON.stringify(cookiesJSONParsed), "utf8");
      UpdateCookies();
      console.log(getTimeStamp() + "[1;34m[+][1;37m " + ("New Cookie Added | Total Cookies : " + cookiesJSONParsed.Cookies.length));
      await Goback();
    } else {
      console.log(getTimeStamp() + "[1;31m[×][1;37m " + "[1;33mcookies.json [1;37mNot Found");
      console.log(getTimeStamp() + "[1;34m[+][1;37m " + "Y u do this");
      process.exit();
    }
  } catch (_0x5949a4) {
    console.log(getTimeStamp() + "[1;31m[×][1;37m " + "InsertionCookie Function Error");
    console.log(getTimeStamp() + "[1;31m[×][1;37m " + _0x5949a4);
    process.exit();
  }
}
async function DeleteCookie() {
  setClear();
  await animate("[1;32m ___  ___  _    _  _  [1;33mDeveloped by [1;34mvixeenn[1;32m\n| __>| . >| |  <_>| |__ ___  _ _  ___\n| _> | . \\| |_ | || / // ._>| '_><_-<\n|_|  |___/|___||_||_\\_\\___. |_|  /__/ ");
  console.log();
  console.log("[1;36m---------------------[1;32mCookies[1;36m---------------------");
  if (cookiesJSONParsed.Cookies.length === 0) {
    console.log(getTimeStamp() + "[1;31m[×][1;37m " + "No Cookies Found.");
    console.log(getTimeStamp() + "[1;34m[+][1;37m " + "Please add a cookie first so you can use Facebook Auto Liker.");
    console.log("[1;36m=====================[1;32mCookies[1;36m=====================");
    console.log();
    await Continue();
    await CookieManagement();
    return;
  }
  for (let _0x4b09bd = 0; _0x4b09bd < cookiesJSONParsed.Cookies.length; _0x4b09bd++) {
    console.log(getTimeStamp() + "[1;34m[+][1;37m " + ("[1;33mACCOUNT NUMBER" + (_0x4b09bd + 1) + " : " + ("[1;32m" + cookiesJSONParsed.Emails[_0x4b09bd].slice(0, 10)) + "..."));
    console.log(getTimeStamp() + "[1;34m[+][1;37m " + ("[1;32mCOOKIES NUMBER[1;33m" + (_0x4b09bd + 1) + " : " + "[1;32m" + (cookiesJSONParsed.Cookies[_0x4b09bd].length >= 20 ? cookiesJSONParsed.Cookies[_0x4b09bd].slice(0, 20) : cookiesJSONParsed.Cookies[_0x4b09bd]) + "..."));
  }
  console.log("[1;36m=====================[1;32mCookies[1;36m====================");
  console.log(getTimeStamp() + "[1;34m[+][1;37m " + "[1;33mB [1;37mTO [1;32m(BACK)");
  console.log();
  let {
    cookieIndex: _0x4d5dc6
  } = await inquirer.prompt(prompts.deleteCookie);
  if (_0x4d5dc6.toLowerCase() === 'a') {
    try {
      cookiesJSONParsed.Emails = [];
      cookiesJSONParsed.Cookies = [];
      _0x423e01.writeFileSync('./cookies.json', JSON.stringify(cookiesJSONParsed), "utf8");
      UpdateCookies();
      console.log(getTimeStamp() + "[1;34m[+][1;37m " + "All cookies were removed successfully.");
      await Goback();
    } catch (_0x2caff7) {
      console.log(getTimeStamp() + "[1;31m[!][1;37m " + _0x2caff7);
      process.exit();
    }
  } else {
    if (_0x4d5dc6.toLowerCase() === 'b') {
      await CookieManagement();
    } else {
      try {
        _0x4d5dc6 = parseInt(_0x4d5dc6);
        cookiesJSONParsed.Cookies.splice(_0x4d5dc6 - 1, 1);
        cookiesJSONParsed.Emails.splice(_0x4d5dc6 - 1, 1);
        _0x423e01.writeFileSync('./cookies.json', JSON.stringify(cookiesJSONParsed), 'utf8');
        UpdateCookies();
        console.log(getTimeStamp() + "[1;34m[+][1;37m " + ("[1;33mDatr(" + _0x4d5dc6 + ')' + "[1;37m" + " Removed Successfully"));
        await Goback();
      } catch (_0x26dfa8) {
        console.log(getTimeStamp() + "[1;31m[!][1;37m " + _0x26dfa8);
        process.exit();
      }
    }
  }
}
async function FBLikers() {
  setClear();
  await animate(getTimeStamp() + "[1;34m[+][1;37m " + "[1;33mNOTE: [1;32mENSURE THAT YOUR FACEBOOK POST IS SET TO PUBLIC", 10);
  await animate(getTimeStamp() + "[1;34m[+][1;37m " + "[1;33mNOTE: [1;32mDON'T USE THE FACEBOOK APPLICATION TO COPY THE LINK OF THE POST, USE FACEBOOK LITE OR CHROME INSTEAD.", 10);
  await Continue();
  setClear();
  await animate("[1;32m ___  ___  _    _  _  [1;33mDeveloped by [1;34mvixeenn[1;32m\n| __>| . >| |  <_>| |__ ___  _ _  ___\n| _> | . \\| |_ | || / // ._>| '_><_-<\n|_|  |___/|___||_||_\\_\\___. |_|  /__/ ");
  console.log();
  const {
    url: _0x370ae8
  } = await inquirer.prompt(prompts.getPostURL);
  if (_0x370ae8.toLowerCase() === 'b') {
    await main();
    return;
  }
  let {
    react_type: _0x553e4a
  } = await inquirer.prompt(prompts.getReaction);
  if (cookiesJSONParsed.Cookies.length === 0) {
    console.log(getTimeStamp() + "[1;31m[×][1;37m " + "No Cookies Found.");
    console.log(getTimeStamp() + "[1;34m[+][1;37m " + "Please add a cookie first so you can use FBLikers.");
    await Continue();
    await CookieManagement();
    return;
  }
  await logInfo(_0x370ae8, _0x553e4a);
  let _0x10863c = 0;
  let _0x2951d3 = 1;
  if (_0x553e4a.includes("WOW")) {
    _0x553e4a = _0x553e4a.slice(11, undefined);
  } else {
    _0x553e4a = _0x553e4a.slice(7, undefined);
  }
  for (let _0x3e27d8 = 0; _0x3e27d8 < cookiesJSONParsed.Cookies.length; _0x3e27d8++) {
    try {
      console.log(getTimeStamp() + "[1;34m[+][1;37m " + ("[1;33mUsing Cookie Datr" + _0x2951d3 + " ~ " + "[1;32m" + (cookiesJSONParsed.Cookies[_0x3e27d8].length >= 20 ? cookiesJSONParsed.Cookies[_0x3e27d8].slice(0, 20) : cookiesJSONParsed.Cookies[_0x3e27d8].slice(0, 10)) + "..."));
      console.log(getTimeStamp() + "[1;34m[+][1;37m " + "[1;32mStarting...");
      const _0x1c4a0d = {
        'headers': {
          'User-Agent': "Dalvik/2.1.0 (Linux; U; Android 12; V2134 Build/SP1A.210812.003)",
          'Connection': "Keep-Alive",
          'Accept-Encoding': "gzip",
          'Content-Type': "application/json",
          'Cookie': cookiesJSONParsed.Cookies[_0x3e27d8]
        }
      };
      const _0x1d2a4d = {
        'post_id': _0x370ae8,
        'react_type': _0x553e4a,
        'version': "v1.7"
      };
      const _0x3a51f2 = await axios.post("https://flikers.net/android/android_get_react.php", _0x1d2a4d, _0x1c4a0d);
      const _0x56e274 = _0x3a51f2.data;
      if (_0x56e274.status === "FAILED") {
        if (_0x56e274.message.includes("outdated")) {
          console.log(getTimeStamp() + "[1;34m[+][1;37m " + "Something Went Wrong [1;31m(Error #1)");
        } else {
          if (_0x56e274.message.includes('Invalid')) {
            console.log(getTimeStamp() + "[1;31m[!][1;37m " + ("[1;33mDatr(" + _0x2951d3 + ") " + ("[1;31m#" + _0x56e274.status) + " | " + "[1;34m" + "@KairuDev"));
            console.log(getTimeStamp() + "[1;31m[!][1;37m " + _0x56e274.message.toUpperCase());
            console.log(getTimeStamp() + "[1;31m[!][1;37m " + "PLEASE UPDATE YOUR COOKIE");
          } else if (_0x56e274.message.includes('wait')) {
            console.log(getTimeStamp() + "[1;31m[!][1;37m " + ("[1;33mDatr(" + _0x2951d3 + ") " + ("[1;31m#" + _0x56e274.status) + " | " + "[1;34m" + "@vixeenn"));
            console.log(getTimeStamp() + "[1;31m[!][1;37m " + _0x56e274.message.concat(" | 20min").toUpperCase());
          } else {
            console.log(getTimeStamp() + "[1;31m[!][1;37m " + ("[1;33mDatr(" + _0x2951d3 + ") " + ("[1;31m#" + _0x56e274.status) + " | " + "[1;34m" + "@vixeenn"));
            console.log(getTimeStamp() + "[1;31m[!][1;37m " + _Fb-auto-react0x56e274.message.toUpperCase());
          }
        }
      } else {
        if (_0x56e274.status === "SUCCESS") {
          let _0x333de8 = _0x56e274.message.match(/\d+/g)[0];
          _0x333de8 = parseInt(_0x333de8);
          _0x10863c += _0x333de8;
          console.log(getTimeStamp() + "[1;34m[+][1;37m " + ("[1;33mDatr(" + _0x2951d3 + ") " + ("[1;32m#" + _0x56e274.status) + " | " + "[1;33m" + "Received " + _0x553e4a + " : " + ("[1;32m" + _0x333de8) + " | " + "[1;34m" + "@vixeenn"));
        } else {
          console.log(getTimeStamp() + "[1;34m[×][1;37m " + "Something Went Wrong [1;31m(Error #2)");
        }
      }
      _0x2951d3++;
    } catch (_0x2ffabd) {
      console.log(getTimeStamp() + "[1;34m[+][1;37m " + ("[1;33mDatr(" + _0x2951d3 + ") " + "[1;32m" + "#SUCCESS | " + "[1;33m" + "Received " + _0x553e4a + " : " + "[1;32m" + "UNKNOWN | " + "[1;34m" + "@vixeenn"));
      console.log(getTimeStamp() + "[1;31m[!][1;37m " + "IGN " + _0x2ffabd);
      _0x2951d3++;
    }
  }
  if (!_0x10863c) {
    console.log(getTimeStamp() + "[1;34m[+][1;37m " + "[1;33mLikes Count : [1;32mUNKNOWN");
  } else {
    console.log(getTimeStamp() + "[1;34m[+][1;37m " + ("[1;33mLikes Count : " + ("[1;32m" + _0x10863c)));
  }
  await Goback();
}
async function logInfo(_0x384b15, _0x5d6dda) {
  await animate(getTimeStamp() + "[1;34m[+][1;37m " + ("Target > " + ("[1;32m" + _0x384b15)), 15);
  await animate(getTimeStamp() + "[1;34m[+][1;37m " + ("Selected Reaction > " + ("[1;32m" + _0x5d6dda)), 15);
}
async function main() {
  setClear();
  await animate("[1;32m ___  ___  _    _  _  [1;33mDeveloped by [1;34mvixeenn[1;32m\n| __>| . >| |  <_>| |__ ___  _ _  ___\n| _> | . \\| |_ | || / // ._>| '_><_-<\n|_|  |___/|___||_||_\\_\\___. |_|  /__/ ");
  await animate("\n[1;33m(1) ~ [1;34mFBLikers ~ [1;32m(LIKE, LOVE, HAHA, WOW, SAD, CARE, ANGRY)\n[1;33m(2) ~ [1;34mShowCookie ~ [1;32m(Display Cookie Information)\n[1;33m(3) ~ [1;34mCM ~ [1;32m(AddCookie, DeleteCookie)\n[1;33m(4) ~ [1;34mFeedback ~ [1;32m(Chat With Developer)\n[1;33m(5) ~ [1;34mExit ~ [1;32m(Exit The Program)\n");
  let {
    cmd: _0x2dc0d9
  } = await inquirer.prompt(prompts.getMainCommand);
  _0x2dc0d9 = parseInt(_0x2dc0d9);
  if (_0x2dc0d9 === 1) {
    FBLikers();
  } else {
    if (_0x2dc0d9 === 2) {
      ShowCookie();
    } else {
      if (_0x2dc0d9 === 3) {
        CookieManagement();
      } else {
        if (_0x2dc0d9 === 4) {
          Feedback();
        } else if (_0x2dc0d9 === 5) {
          await exit();
        }
      }
    }
  }
}
main();
process.on("SIGINT", () => {
  console.log("\n" + getTimeStamp() + "[1;34m[+][1;37m " + "Keyboard Interrupt");
  process.exit();
});