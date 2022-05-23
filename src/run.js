const string = `
/*画一个简单的皮卡丘*/
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
/*首先，画一下皮卡丘的皮*/
.skin {
  background: #FEE433;
  height: 100vh;
}
/*接下来画皮卡丘的眼睛*/
.eye {
  position: absolute;
  width: 64px;
  height: 64px;
  border-radius: 50px;
  background: #2E2E2E;
  left: 50%;
  top: 245px;
  margin-left: -32px;
}
.eye.left {
  transform: translateX(-100px);
}
.eye.right {
  transform: translateX(100px);
}
/*眼睛里面的珠子*/
.eye::before {
  border: 1px solid black;
  content: '';
  display: block;
  width: 25px;
  height: 25px;
  background: white;
  border-radius: 50%;
  position: relative;
  left: 8px;
  top: 5px;
}
/*然后画一下皮卡丘的鼻子*/
.nose {
  position: absolute;
  border-style: solid;
  border-width: 14px;
  border-color: black transparent transparent;
  border-radius: 14px;
  left: 50%;
  top: 280px;
  margin-left: -14px;
}
/*再画皮卡丘的脸*/
.face {
  width: 68px;
  height: 68px;
  border-radius: 50%;
  background: #FC0D1C;
  position: absolute;
  top: 340px;
}
.face.left {
  right: 50%;
  margin-right: 120px;
}
.face.right {
  left: 50%;
  margin-left: 120px;
}
/*再画皮卡丘的上嘴唇*/
.upperLip {
  height: 25px;
  width: 80px;
  border: 2px solid black;
  position: absolute;
  top: 310px;
  background: #FDE348;
  z-index: 10;
}
.upperLip.left {
  right: 50%;
  border-bottom-left-radius: 40px 25px;
  border-top: none;
  border-right: none;
  transform: rotate(-20deg);
  /*倾斜*/
}
.upperLip.right {
  left: 50%;
  border-bottom-right-radius: 40px 25px;
  border-top: none;
  border-left: none;
  transform: rotate(20deg);
}
/*再画皮卡丘的嘴巴*/
.downLip {
  position: absolute;
  width: 160px;
  height: 230px;
  left: 50%;
  top: 320px;
  margin-left: -80px;
  overflow: hidden;
}
/*最后画皮卡丘的舌头*/
.lip1 {
  border: 1px solid black;
  position: absolute;
  width: 140px;
  height: 500px;
  right: 10px;
  background: #990513;
  border-radius: 85px/300px;
  top: -320px;
  overflow: hidden;
}
.lip2 {
  width: 140px;
  height: 150px;
  position: absolute;
  background: #FC4A62;
  bottom: -32px;
  border-radius: 100px;
}`
let n = 1
demo.innerText = string.substr(0, n)
demo2.innerHTML = string.substr(0, n)

let time = 100
const run = () => {
  n += 1
  if (n > string.length) {
    window.clearInterval(id)
    return
  }
  demo.innerText = string.substr(0, n)
  demo2.innerHTML = string.substr(0, n)
  demo.scrollTop = demo.scrollHeight
}
const onplay = () => {
  return setInterval(run, time)
}
const onpause = () => {
  window.clearInterval(id)
}
let id = onplay()

pause.onclick = () => {
  onpause()
}
play.onclick = () => {
  id = onplay()
}
slow.onclick = () => {
  onpause()
  time = 300
  id = onplay()
}
fast.onclick = () => {
  onpause()
  time = 0
  id = onplay()
}