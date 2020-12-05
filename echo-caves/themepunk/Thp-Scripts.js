//Global Initializations
var jsonData = JSON.stringify(json);
var themeData = JSON.parse(jsonData);
var json = (
    {
        "Background": {
            "NewPrimaryBackgroundColor": "",
            "NewSecondaryBackgroundColor": "",
            "NewTertiaryBackgroundColor": "",
            "NewQuaternaryBackgroundColor": "",
            "NewQuinaryBackgroundColor": ""
        },
        "Text": {
            "NewPrimaryTextColor": "",
            "NewSecondaryTextColor": "",
            "NewTertiaryTextColor": "",
            "NewPrimaryAccentTextColor": "",
            "NewSecondaryAccentTextColor": ""
        },
        "Grade": {
            "NewPrimaryGradeColor": "",
            "NewSecondaryGradeColor": "",
            "NewTertiaryGradeColor": ""
        },
        "Menu": {
            "NewPrimaryMenuColor": "",
            "NewSecondaryMenuColor": ""
        }
    }
)

function Update() {
    
    //Update Function Initializations
    var PrimaryBGColor = document.getElementById("BGColor1").value;
    var SecondaryBGColor = document.getElementById("BGColor2").value;
    var TertiaryBGColor = document.getElementById("BGColor3").value;
    var QuaternaryBGColor = document.getElementById("BGColor4").value;
    var QuinaryBGColor = document.getElementById("BGColor5").value;   
    var PrimaryTextColor = document.getElementById("TextColor1").value;
    var SecondaryTextColor = document.getElementById("TextColor2").value;
    var TertiaryTextColor= document.getElementById("AccentTextColor1").value;
    var AccentTextColor = document.getElementById("AccentTextColor2").value;
    var PrimaryGradeColor = document.getElementById("GradeColor1").value;
    var SecondaryGradeColor = document.getElementById("GradeColor2").value;
    var TertiaryGradeColor = document.getElementById("GradeColor3").value;
    var PrimaryMenuColor= document.getElementById("MenuColor1").value;
    var SecondaryMenuColor = document.getElementById("MenuColor2").value;

    //JSON Object Assignments
    themeData.Background.NewPrimaryBackgroundColor = PrimaryBGColor;
    themeData.Background.NewSecondaryBackgroundColor = SecondaryBGColor;
    themeData.Background.NewTertiaryBackgroundColor = TertiaryBGColor;
    themeData.Background.NewQuaternaryBackgroundColor = QuaternaryBGColor;
    themeData.Background.NewQuinaryBackgroundColor = QuinaryBGColor;    
    themeData.Text.NewPrimaryTextColor = PrimaryTextColor;
    themeData.Text.NewSecondaryTextColor = SecondaryTextColor;
    themeData.Text.NewPrimaryAccentTextColor= TertiaryTextColor;
    themeData.Text.NewSecondaryAccentTextColor = AccentTextColor; 
    themeData.Grade.NewPrimaryGradeColor = PrimaryGradeColor;
    themeData.Grade.NewSecondaryGradeColor = SecondaryGradeColor;
    themeData.Grade.NewTertiaryGradeColor = TertiaryGradeColor;
    themeData.Menu.NewPrimaryMenuColor = PrimaryMenuColor;
    themeData.Menu.NewSecondaryMenuColor = SecondaryMenuColor;

    //CSS Property Assignments
    document.documentElement.style.setProperty("--BackgroundColor1", themeData.Background.NewPrimaryBackgroundColor);
    document.documentElement.style.setProperty("--BackgroundColor2", themeData.Background.NewSecondaryBackgroundColor);
    document.documentElement.style.setProperty("--BackgroundColor3", themeData.Background.NewTertiaryBackgroundColor);
    document.documentElement.style.setProperty("--BackgroundColor4", themeData.Background.NewQuaternaryBackgroundColor);
    document.documentElement.style.setProperty("--BackgroundColor5", themeData.Background.NewQuinaryBackgroundColor);
    document.documentElement.style.setProperty("--TextColor1", themeData.Text.NewPrimaryTextColor);
    document.documentElement.style.setProperty("--TextColor2", themeData.Text.NewSecondaryTextColor);
    document.documentElement.style.setProperty("--AccentTextColor1", themeData.Text.NewPrimaryAccentTextColor);
    document.documentElement.style.setProperty("--AccentTextColor2", themeData.Text.NewSecondaryAccentTextColor);
    document.documentElement.style.setProperty("--GradeColor1", themeData.Grade.NewPrimaryGradeColor);
    document.documentElement.style.setProperty("--GradeColor2", themeData.Grade.NewSecondaryGradeColor);
    document.documentElement.style.setProperty("--GradeColor3", themeData.Grade.NewTertiaryGradeColor);
    document.documentElement.style.setProperty("--MenuColor1", themeData.Menu.NewPrimaryMenuColor);
    document.documentElement.style.setProperty("--MenuColor2", themeData.Menu.NewSecondaryMenuColor);

    //Confirm CSS Update Process
    var loadedText = document.getElementById('loadedText');
    loadedText.className ='loadedAnim';
    loadedText.addEventListener("animationend", function() {
    loadedText.className ='';
    });
}

function Confirm() {

    //HTML Element Value Initializations
    var PrimaryBGColor = document.getElementById("BGColor1").value;
    var SecondaryBGColor = document.getElementById("BGColor2").value;
    var TertiaryBGColor = document.getElementById("BGColor3").value;
    var QuaternaryBGColor = document.getElementById("BGColor4").value;
    var QuinaryBGColor = document.getElementById("BGColor5").value;
    var PrimaryTextColor = document.getElementById("TextColor1").value;
    var SecondaryTextColor = document.getElementById("TextColor2").value;
    var TertiaryTextColor= document.getElementById("AccentTextColor1").value;
    var AccentTextColor = document.getElementById("AccentTextColor2").value;
    var PrimaryGradeColor = document.getElementById("GradeColor1").value;
    var SecondaryGradeColor = document.getElementById("GradeColor2").value;
    var TertiaryGradeColor = document.getElementById("GradeColor3").value;
    var PrimaryMenuColor= document.getElementById("MenuColor1").value;
    var SecondaryMenuColor = document.getElementById("MenuColor2").value;

    //JSON Object Assignments
    themeData.Background.NewPrimaryBackgroundColor = PrimaryBGColor;
    themeData.Background.NewSecondaryBackgroundColor = SecondaryBGColor;
    themeData.Background.NewTertiaryBackgroundColor = TertiaryBGColor;
    themeData.Background.NewQuaternaryBackgroundColor = QuaternaryBGColor;
    themeData.Background.NewQuinaryBackgroundColor = QuinaryBGColor;
    themeData.Text.NewPrimaryTextColor = PrimaryTextColor;
    themeData.Text.NewSecondaryTextColor = SecondaryTextColor;
    themeData.Text.NewPrimaryAccentTextColor= TertiaryTextColor;
    themeData.Text.NewSecondaryAccentTextColor = AccentTextColor;
    themeData.Grade.NewPrimaryGradeColor = PrimaryGradeColor;
    themeData.Grade.NewSecondaryGradeColor = SecondaryGradeColor;
    themeData.Grade.NewTertiaryGradeColor = TertiaryGradeColor;
    themeData.Menu.NewPrimaryMenuColor = PrimaryMenuColor;
    themeData.Menu.NewSecondaryMenuColor = SecondaryMenuColor;

    //Copy All JSON Data To Clipboard
    var JsonThemeData = JSON.stringify(themeData);
    var rawThemeData = document.createElement('textarea');
    rawThemeData.value = JsonThemeData;
    document.body.appendChild(rawThemeData);
    rawThemeData.select();
    rawThemeData.setAttribute('readonly', '');
    rawThemeData.style = {position: 'absolute', left: '-9999px'};
    document.execCommand('copy');
    document.body.removeChild(rawThemeData);

    //Confirm Copy Process
    var copiedText = document.getElementById('copiedText');
    copiedText.className ='copiedAnim';
    copiedText.addEventListener("animationend", function() {
    copiedText.className ='';
    });
}