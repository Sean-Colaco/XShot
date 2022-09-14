

const startGame = document.getElementById('startGame')
const redSquare = document.getElementById('shape')
const youFailed = document.getElementById('failImg')
const body = document.getElementById('body')

const rematch = document.getElementById('playAgainL')
const lossMsg = document.getElementById('lossMsg')
const respawnIn = document.getElementById('respawn')
const winMsg = document.getElementById('winMsg')
const score = document.getElementById('score')
const highScore= document.getElementById('highscore')
const rematchW = document.getElementById('playAgainW')
const trophyR = document.getElementById('trophyR')
const trophyL = document.getElementById('trophyL')
const skullL = document.getElementById('skullL')
const skullR = document.getElementById('skullR')

const tutorialOpacity =document.getElementById('tutorialOpacityDiv')
const walkthrough = document.getElementById('walkthrough')
const walkthrough1 = document.getElementById('walkthrough1')
const walkthrough2 = document.getElementById('walkthrough2')
const walkthrough3 = document.getElementById('walkthrough3')
const walkthrough4 = document.getElementById('walkthrough4')
const walkthrough5 = document.getElementById('walkthrough5')
const walkthrough6 = document.getElementById('walkthrough6')
const walkthrough7 = document.getElementById('walkthrough7')

const topLeft = document.getElementById('topLeft')
const topRight = document.getElementById('topRight')
const bottomLeft = document.getElementById('bottomLeft')
const bottomRight = document.getElementById('bottomRight')

const explodeAnimation = document.getElementById('explodeAnimation')
const button = document.getElementById('button')
const laserCutting = document.getElementById('laserCutting')
const XShot = document.getElementById('XShot')
const backgroundGreen = document.getElementById('backgroundGreen')
const soilderLeft = document.getElementById('soilderLeft')
const soilderRight = document.getElementById('soilderRight')
const topAnimation = document.getElementById('topAnimation')
const bottomAnimation = document.getElementById('bottomAnimation')
const difficulty = document.getElementById('difficulty')
const difficultyBackground = document.getElementById('difficultyBackground')
const ok = document.getElementById('ok')
const selectDifficulty = document.getElementById('selectDifficulty')
const pageFlexContainer = document.getElementById('pageFlexContainer')

const easy = document.getElementById('easy')
const medium = document.getElementById('medium')
const hard = document.getElementById('hard')

const mainMenu = document.getElementById('main-menu')
const skipAnimation = document.getElementById('skipAnimation')
const laserCutting2 = document.getElementById('laserCutting2')
const XShot2 = document.getElementById('XShot2')

let mode = 0;
const godMode = document.getElementById('godMode')
const hacksModeOn = document.getElementById('hacksModeOn')

const gameDataContainer = document.getElementById('gameDataContainer')
let Time = document.getElementById('Time')
let Targets = document.getElementById('Targets')
let tHit = document.getElementById('tHit')

let flagVariable = true;


let redSquareChecker;

let sA = 0;


let JJK;

let jjkX = null;


let timer  = null;



let allScores = []


function startTimer(){
     timer = setInterval(updateTimer,1000)
    seconds = 10;
    
function updateTimer(){
    seconds-=1;
    
    Time.innerHTML=`Time:${seconds}s`
    if(seconds==0 && shots<10){
        
            let audio = new Audio('soundEffects/timeUp.wav')
            audio.play()
        loss()
        clearInterval(timer)
        
    }
    

    else if(seconds==0 && shots>9 ){
        win()
        clearInterval(timer)
    }
   

    
    // if(seconds>0){
    //     rematch.classList.add('noButton')
    // }
    // else{
    //     rematch.classList.remove('noButton')
    // }

    
}
}

Targets.innerHTML='Targets:10';

// setInterval(loss,10000)


// let Time = document.getElementById('time')
// let start = new Date()
function disappear () {

    if(tut<7){
        // console.log('disappear')
        return
    }
    else{
        redSquare.classList.remove('center')
        redSquare.classList.add('disappear')
        // console.log('disappear1')
    

    // let end = new Date()
    // let timeTaken = (end - start) / 1000;
    // Time.innerHTML = `${timeTaken}s`
    setTimeout(newShape, 0)
    }
    
}

function newShape(){

    let top = Math.random() * 75;
    let left = Math.random() * 85;
    redSquare.classList.remove('disappear')
    redSquare.style.top =  `${top}vh`;
    redSquare.style.left =  `${left}vw`;

}

function gunShot(){
    if(tut<7){
        // console.log('gun')
        return
    }
    else{
        let audio = new Audio('soundEffects/gunShot.mp3')
        audio.play();
        // console.log('gun1')
    }
    
}

function longGameOver(){
    let audio = new Audio('soundEffects/longGameOver.wav')
    audio.play();
}

function loss (){
    godMode.classList.add('disappear')

    clearInterval(timer)
    skullL.classList.remove('disappear')
    skullR.classList.remove('disappear')
    redSquare.classList.add('disappear')
    youFailed.classList.add('disappear')
    lossMsg.classList.remove('disappear')
    body.classList.add('dead')
    tHit.classList.add('disappear')
    Time.classList.add('disappear')
    Targets.classList.add('disappear')
    gameDataContainer.classList.add('disappear')

    mainMenu.classList.remove('disappear')

    respawnIn.innerHTML= `Score:${shots}`

    
    

}



function win (){
   
    godMode.classList.add('disappear')
    
    trophyL.classList.remove('disappear')
    trophyR.classList.remove('disappear')
    redSquare.classList.add('disappear')
    youFailed.classList.add('disappear')
    winMsg.classList.remove('disappear')
    body.classList.add('alive')
    score.innerHTML=`Score:${shots}`
    allScores.push(shots)
    highScore.innerHTML=`Highscore:${Math.max(...allScores)}`
    let audio = new Audio('soundEffects/victory.mp3')
    audio.play();
    tHit.classList.add('disappear')
    Time.classList.add('disappear')
    Targets.classList.add('disappear')
    gameDataContainer.classList.add('disappear')

    mainMenu.classList.remove('disappear')

    if(shots==Math.max(...allScores)){
        setTimeout(()=>{
            let audio = new Audio('soundEffects/score.wav')
            audio
            audio.play();
            highScore.classList.add('blink')
            score.classList.add('blink')
        },3000)
    }

   
    



}

function restartGame() {
    redSquare.classList.remove('disappear')
    youFailed.classList.remove('disappear')
    lossMsg.classList.add('disappear')
    redSquare.classList.add('center')
    winMsg.classList.add('disappear')
    body.classList.remove('alive')
    skullL.classList.add('disappear')
    skullR.classList.add('disappear')
    trophyL.classList.add('disappear')
    trophyR.classList.add('disappear')
    mainMenu.classList.add('disappear')
    gameDataContainer.classList.remove('disappear')
    tHit.classList.remove('disappear')
    Time.classList.remove('disappear')
    Targets.classList.remove('disappear')
    tHit.innerHTML=`Targets Hit:0`
    Time.innerHTML='Time:10s'
    i=0;
    shots=0;
    
}


function targetsHit(){
    tHit.innerHTML=`Targets Hit:${shots}`;

}
let t = 0;
function tutorial(){
    t ++;
    if(t<2){
        tutorialOpacity.classList.add('tutorialOpacity')
        tutorialOpacity.classList.add('pointer')
        tHit.classList.add('pointer')
        Targets.classList.add('pointer')
        Time.classList.add('pointer')
        gameDataContainer.classList.add('pointer')
        redSquare.classList.add('pointer')
    }
}
tutorial()
let tut = 0;
function tutorial1(){
    gameDataContainer.classList.remove('disappear')
    
    tut ++;
    
    if(tut==1){
    walkthrough1.classList.add('disappear')
    walkthrough2.classList.add('disappear')
    walkthrough3.classList.remove('disappear')
    redSquare.classList.remove('filterBrightness')
    
    }
    else if(tut==2){
        walkthrough3.classList.add('disappear')
        walkthrough4.classList.remove('disappear')
        redSquare.classList.add('filterBrightness')
        Time.classList.remove('filterBrightness')

    }

    else if(tut==3){
        Time.classList.add('filterBrightness')
        walkthrough4.classList.add('disappear')
        Targets.classList.remove('filterBrightness')
        walkthrough5.classList.remove('disappear')
        
    }

    else if (tut==4){
        Targets.classList.add('filterBrightness')
        tHit.classList.remove('filterBrightness')
        walkthrough5.classList.add('disappear')
        walkthrough6.classList.remove('disappear')
    }

    else if(tut==5){
        
        tHit.classList.add('filterBrightness')
        walkthrough6.classList.add('disappear')
        walkthrough7.classList.remove('disappear')
    }

    else if (tut==6){
        walkthrough.classList.add('disappear')
        walkthrough7.classList.add('disappear')
        tutorialOpacity.classList.add('disappear')
        tHit.classList.remove('filterBrightness')
        Targets.classList.remove('filterBrightness')
        Time.classList.remove('filterBrightness')
        redSquare.classList.remove('filterBrightness')

        tHit.classList.remove('pointer')
        Targets.classList.remove('pointer')
        Time.classList.remove('pointer')
        redSquare.classList.remove('pointer')

        youFailed.classList.add('crossHair')
        tHit.classList.add('crossHair')
        Targets.classList.add('crossHair')
        Time.classList.add('crossHair')
        redSquare.classList.add('crossHair')
    }
    

}

let i = 0;
redSquare.addEventListener('click',

()=>{

    if(tut>5){

    i=i+1
    // console.log(i)
 if(i>1){
     return;
    }
    else{
        startTimer()
    }
}
else{return}
}


)


// redSquare.addEventListener('click',startTimer)
let shots = 0
redSquare.addEventListener('click',()=>{
    if(tut<5){
        return
    }

    else if(tut>5){
shots+=1;
targetsHit()
    }

})


// test start


// godMode.addEventListener('keydown',()=>{console.log('hi')})
let alarm = null;
function hacksModeOnFunction(){
    hacksModeOn.classList.remove('disappear')

    let audio = new Audio('soundEffects/amongUs.mp3')
        audio.play()

     alarm = setInterval(()=>{
        let audio = new Audio('soundEffects/amongUs.mp3')
        audio.play()
    },1000)
    setTimeout(godModeFunction,6000)
}
function godModeFunction(){
    clearInterval(alarm)
    hacksModeOn.classList.add('disappear')
    godMode.classList.remove('disappear')
}

godMode.addEventListener('keydown', ()=>{
    let audio = new Audio('soundEffects/gunShot.mp3')
    audio.play();})
godMode.addEventListener('keydown',()=>{ 
    redSquare.classList.remove('center')
    redSquare.classList.add('disappear')
    newShape()
    }
)
        
godMode.addEventListener('keydown',
()=>{

    if(tut>5){

    i=i+1
   
 if(i>1){
     return;
    }
    else{
        startTimer()
    }
}
else{return}
})
godMode.addEventListener('keydown',
()=>{
    if(tut<5){
        return
    }

    else if(tut>5){
shots+=1;
targetsHit()
    }

})

// wheel

// youFailed.addEventListener('wheel', ()=>{
//     let audio = new Audio('soundEffects/gunShot.mp3')
//     audio.play();})
//     youFailed.addEventListener('wheel',()=>{

        //    redSquare.classList.remove('center')
    
        // redSquare.classList.add('disappear')
        
    
//         setTimeout(newShape, 0)
//         }
//         )
//         youFailed.addEventListener('wheel',
// ()=>{

//     if(tut>5){

//     i=i+1
   
//  if(i>1){
//      return;
//     }
//     else{
//         startTimer()
//     }
// }
// else{return}
// })
// youFailed.addEventListener('wheel',
// ()=>{
//     if(tut<5){
//         return
//     }

//     else if(tut>5){
// shots+=1;
// targetsHit()
//     }

// })



// test end




redSquare.addEventListener('click',tutorial1)
walkthrough.addEventListener('click',tutorial1)
redSquare.addEventListener('click',gunShot)
redSquare.addEventListener('click',disappear)
youFailed.addEventListener('click',loss)
youFailed.addEventListener('click',longGameOver)
rematch.addEventListener('click',restartGame)
rematchW.addEventListener('click',restartGame)
console.log(allScores)

// Start of home screen content JS
function clearBody(){
    redSquare.classList.add('disappear')
    youFailed.classList.add('disappear')
    tHit.classList.add('disappear')
    Time.classList.add('disappear')
    Targets.classList.add('disappear')
    gameDataContainer.classList.add('disappear')
    // walkthrough1.classList.add('disappear')
    // walkthrough2.classList.add('disappear')
    tutorialOpacity.classList.add('disappear')
}
clearBody()

function addBody(){
    // console.log('hi')
    
    explodeAnimation.classList.add('disappear')
    startGame.classList.add('disappear')
    redSquare.classList.remove('disappear')
    pageFlexContainer.classList.add('disappear')
    
    youFailed.classList.remove('disappear')
    walkthrough.classList.remove('disappear')
    walkthrough1.classList.remove('disappear')
    walkthrough2.classList.remove('disappear')
    tHit.classList.remove('disappear')
    Time.classList.remove('disappear')
    Targets.classList.remove('disappear')
    gameDataContainer.classList.remove('disappear')
    walkthrough1.classList.remove('disappear')
    walkthrough2.classList.remove('disappear')
    tutorialOpacity.classList.remove('disappear')
    backgroundGreen.classList.add('disappear')
    XShot.classList.add('disappear')
    laserCutting.classList.add('disappear')
    soilderLeft.classList.add('disappear')
    soilderRight.classList.add('disappear')
    topAnimation.classList.add('disappear')
    bottomAnimation.classList.add('disappear')

    laserCutting2.classList.add('disappear')
    XShot2.classList.add('disappear')
    mainMenu.classList.add('disappear')


    JJK.pause()
    clearInterval(jjkX)

    redSquare.classList.add('center')

    if(redSquare.classList.contains('targetSizeE')||
       redSquare.classList.contains('targetSizeM')||
       redSquare.classList.contains('targetSizeL')){
        return
    }
    else{
        redSquare.classList.add('targetSizeM')
    }
}

startGame.addEventListener('click',addBody)


// Start of home screen content JS
let laserTimer = null;
let z = 0;
let x = 0;
function startbackgroundLaser(){
    
    let audio = new Audio('soundEffects/airplane+biplane+1.mp3')
        audio.play()
        
        topLeft.classList.remove('disappear')
        topRight.classList.remove('disappear')
        bottomLeft.classList.remove('disappear')
        bottomRight.classList.remove('disappear')
        explodeAnimation.classList.remove('disappear')
        button.classList.add('plane')
    laserTimer = setTimeout(backgroundLaser,3000)
    
}
let  timerStartUpSF = null;
let  timerShortSwingLaserSF = null;
function backgroundLaser(){
    timerStartUpSF = setTimeout(startUpSF,0200)
    timerShortSwingLaserSF = setInterval(shortSwinglaserSF,0200)
}

function shortSwinglaserSF(){
    z++;
    if(z<5){
    let audio = new Audio('soundEffects/short-swing.mp3')
    audio.play()
    }

}

let timerLaserCutting = null;
let timerExplosion = null;
let timerCrash1 = null;
let timerCrash2 = null;
let timerfadeIn = null;

function startUpSF(){
    
    timerLaserCutting = setTimeout(fadeInHandler,7000)
    timerExplosion = setTimeout(explosion,1000)
    timerCrash1 = setTimeout(crash,12000)
    timerCrash2 = setTimeout(crash2,16800)
    // timerfadeIn = setTimeout(fadeIn,18000)
    setTimeout(()=>{
        skipAnimation.classList.add('disappear')
    },16800)

}



function fadeIn(){

    if(flagVariable == true){
       pageFlexContainer.classList.remove('disappear') 
       pageFlexContainer.style.animationDelay='12s';
    //    console.log('flagVariable is true')
    } else if(flagVariable == false){
        pageFlexContainer.classList.remove('disappear')
        pageFlexContainer.style.animationDelay='0s';
        // console.log('flagVariable is false')
    }
    


    
    skipAnimation.classList.add('disappear')
    backgroundGreen.classList.remove('disappear')
    startGame.classList.remove('disappear')
    soilderLeft.classList.remove('disappear')
    soilderRight.classList.remove('disappear')
    topAnimation.classList.remove('disappear')
    bottomAnimation.classList.remove('disappear')
    button.classList.add('disappear')
    laserCutting2.classList.remove('disappear')
    XShot2.classList.remove('disappear')
    


    if(flagVariable == true){
    setTimeout(jjkRepeater,12000)
    } else if(flagVariable == false){
        jjkRepeater()
    }

    
    
}

// function clearAnimation(){
//     console.log('working!')
// }

   



function crash2(){
    let audio = new Audio('soundEffects/mixkit-explosion-hit-1704.wav')
    audio.play()
    
}




function crash(){
let audio = new Audio('soundEffects/fallingSF.mp3')
audio.play()
    XShotHandler()
    // console.log('testing 1')

}






function XShotHandler(){
    const XShot2Data = XShot2.getBoundingClientRect();

    XShot.style.width = XShot2Data.width-30 + 'px';
    XShot.style.height = XShot2Data.height-10 + 'px';

    let XShotY = XShot2Data.top;

    // XShot.style.top = XShot2Data.top + 'px';
    XShot.style.left = XShot2Data.left + 'px';

    // console.log(XShot2Data)

    XShot.classList.remove('disappear')

    // console.log(XShot2Data.height)
    // console.log(XShot2Data.width)
    // console.log(XShot2Data.top)
    // console.log(XShot2Data.left)

    const tl = gsap.timeline({defualts: {duration: 5}})

    tl.fromTo(XShot, {y:-500},{y:XShotY, duration: 1.5, delay:4.5, ease: "bounce.out"})

    
}








function fadeInHandler(){
    fadeIn()
    laserCuttingF()
}


function laserCuttingF(){
    
    let audio = new Audio('soundEffects/laserCutting.wav')
    audio.play()
    laserCutting.classList.remove('disappear')
    laserCutting.classList.remove('disappear')
    laserCutting.classList.remove('disappear')
    explodeAnimation.classList.add('disappear')
    body.style.backgroundColor = 'black';
    

    const laserHeight = laserCutting2.getBoundingClientRect();
    const laserWidth = laserCutting2.getBoundingClientRect();
    

    let realLaserWidth = laserWidth.width;

        let id = null;
        
        let pos = 0;
        id = setInterval(frame, 10);
        function frame() {
            if (pos > realLaserWidth) {
            clearInterval(id);
            } else {
            pos++; 
            laserCutting.style.width = pos + 'px'; 
            }
        }       
    laserCutting.style.height = laserHeight.height + 'px';
    let laserPosition = laserCutting2.getBoundingClientRect();
    laserCutting.style.top = laserPosition.top + 'px';
    laserCutting.style.left = laserPosition.left + 'px';  
}




function explosion(){
    x++;
    if(x<2){
    let audio = new Audio('soundEffects/fireExplosion.wav')
    audio.play()
    

    setTimeout(startUpDisappear,4000)

    function startUpDisappear(){
    // startGame.classList.remove('disappear')
    topLeft.classList.add('disappear')
    topRight.classList.add('disappear')
    bottomLeft.classList.add('disappear')
    bottomRight.classList.add('disappear')
    button.classList.add('disappear')
    }
    }
    }




function jjkRepeater(){
    setTimeout(function clearAnimation(){
        XShot.classList.add('disappear')
        laserCutting.classList.add('disappear')
    },2000)
    playJJK()
    jjkX = setInterval(playJJK,90000)
}

function playJJK(){
     JJK = new Audio('soundEffects/JUJUTSU KAISEN - Opening Kaikai Kitan.mp3')
    JJK.play()
       
}


button.addEventListener('click',startbackgroundLaser)

button.addEventListener('click',()=>{

    

    skipAnimation.classList.remove('disappear')
})

function renderDifficulty(){
    difficultyBackground.classList.remove('disappear')
    selectDifficulty.classList.remove('disappear')


}

function setEasy () {
    easy.classList.add('filterBrightness')
    medium.classList.remove('filterBrightness')
    hard.classList.remove('filterBrightness')
    redSquare.classList.add('targetSizeE')
    redSquare.classList.remove('targetSizeM')
    redSquare.classList.remove('targetSizeH')
    let audio = new Audio('soundEffects/mixkit-unlock-game-notification-253.wav')
        audio.play()
    // console.log('Easy')
}
function setMedium () {
    easy.classList.remove('filterBrightness')
    medium.classList.add('filterBrightness')
    hard.classList.remove('filterBrightness')
    redSquare.classList.remove('targetSizeE')
    redSquare.classList.add('targetSizeM')
    redSquare.classList.remove('targetSizeH')
    let audio = new Audio('soundEffects/mixkit-unlock-game-notification-253.wav')
        audio.play()
    // console.log('Medium')
}
function setHard () {
    easy.classList.remove('filterBrightness')
    medium.classList.remove('filterBrightness')
    hard.classList.add('filterBrightness')
    redSquare.classList.remove('targetSizeE')
    redSquare.classList.remove('targetSizeM')
    redSquare.classList.add('targetSizeH')
    let audio = new Audio('soundEffects/mixkit-unlock-game-notification-253.wav')
        audio.play()
    // console.log('Hard')
}

function okay(){
    difficultyBackground.classList.add('disappear')
    selectDifficulty.classList.add('disappear')
    let audio = new Audio('soundEffects/mixkit-bonus-earned-in-video-game-2058.wav')
        audio.play()
}

function goBack(){
    trophyL.classList.add('disappear')
    trophyR.classList.add('disappear')
    redSquare.classList.add('disappear')
    youFailed.classList.add('disappear')
    winMsg.classList.add('disappear')
    body.classList.remove('alive')
    mainMenu.classList.add('disappear')



    skullL.classList.add('disappear')
    skullR.classList.add('disappear')
    lossMsg.classList.add('disappear')
    body.classList.remove('dead')


    redSquare.classList.add('center')

    redSquare.classList.add('filterBrightness')

    tHit.classList.add('filterBrightness')
    Time.classList.add('filterBrightness')
    Targets.classList.add('filterBrightness')


    tHit.classList.add('disappear')
    Time.classList.add('disappear')
    Targets.classList.add('disappear')
    gameDataContainer.classList.add('disappear')
    tHit.innerHTML=`Targets Hit:0`
    Time.innerHTML='Time:10s'

    
    i=0;
    shots=0;
    tut = 0;
    t=0;

    redSquareChecker = true;
}

function stopAnimation() {
    explodeAnimation.classList.add('disappear')
    topLeft.classList.add('disappear')
    topRight.classList.add('disappear')
    bottomLeft.classList.add('disappear')
    bottomRight.classList.add('disappear')
    button.classList.add('disappear')

    clearTimeout(timerLaserCutting)
    clearTimeout(timerExplosion)
    clearTimeout(timerCrash1)
    clearTimeout(timerCrash2)
    // clearTimeout(timerfadeIn)
    clearTimeout(laserTimer)
    clearTimeout(timerStartUpSF)
    clearTimeout(timerShortSwingLaserSF)

}

function toggleFlagVariable(){
    flagVariable = false;
    fadeIn()
    body.style.background = 'black';
}

mainMenu.addEventListener('click',toggleFlagVariable)
mainMenu.addEventListener('click',goBack)

skipAnimation.addEventListener('click',toggleFlagVariable)
skipAnimation.addEventListener('click',stopAnimation)
skipAnimation.addEventListener('click',()=>{
    sA = 1;
})




difficulty.addEventListener('click',renderDifficulty)
easy.addEventListener('click',setEasy)
medium.addEventListener('click',setMedium)
hard.addEventListener('click',setHard)
ok.addEventListener('click',okay)



    
