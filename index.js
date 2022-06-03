/*
    ==================== Weather app 1.0 alpha ====================
    Authors: r4nol & misterpromo145
    Documentation: 
    ; - end code string;
    console.log(var name or text) - output developer console;
    let - variable;
    const - constant;
    let - the variable type which can change during code execution;
    const - the variable type which can't change during code execution;
    function name (args) { code } - Create function 
    name() - Call function in ur code
    {} - Block of code use for optimize code
    ////////////////////////////////////////////////////////////////////
    Data types:
    If you want use letters data - use: let name = "data";
    If you want use numbers data - use: let name = 1,2...;
    If you want use boolean data - use: let name = true or false;
    ////////////////////////////////////////////////////////////////////
    typeof - identify let or const type
    ////////////////////////////////////////////////////////////////////
    Operators:
    Используем при условиях (if, while and others):
    < - меньше
    > - больше
    <= - меньше или равно
    >= - больше или равно
    == - равно
    === - строго равно 
    != - не равно заданому параметру
    !== - не равно строго заданому параметру
    || - или
    !name (name - название переменной или число/слово) - не равно бла бла бла
    && - И ( if(login == "Admin" && password=="admin") )
    ТЕРНАРНЫЙ ОПЕРАТОР (Замена if else)
    вместо if используем условие
    вместо else используем :
    Пример:
    10<12 ? console.log("ВЕРНО БЛЯДЬ") : console.log("НЕ ВЕРНО СУКА");

    Используем для присвоений значений: 
    =
    ////////////////////////////////////////////////////////////////////



    ////////////////////////////////////////////////////////////////////
    DO NOT USE VAR FOR CREATE VARIEBLES!
*/

/*####################################################################################################################################*/
const path = require('path');
const url = require('url');
const {app, BrowserWindow} = require('electron');
const fetch = require('electron-fetch').default
let win;

function createWindow() {
	win = new BrowserWindow({
		width: 700,
		height: 500,
    frame: false, 
    resizable: false, 
    show: true,
    transparent: true,
    maximizable: false,
		icon: "assets/cloudy.png",
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false
    }
	});
  

  // win.removeMenu();

	win.loadURL(url.format({
		pathname: path.join('index.html'),
		protocol: 'file:',
		slashes: true
	}));

	win.on('closed', () => {
		win = null;
	});
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
	app.quit();
});

