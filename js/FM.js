(function () {
  var time = 1;
  var tim = 1;
  var t = 1;
  var kid;
  var jsq;
  var js;

  function tuqieHua() {
    var arr = document.getElementsByClassName("datu");
    arr[0].style.display = "none";
    arr[1].style.display = "none";
    arr[2].style.display = "none";
    arr[3].style.display = "none";
    arr[4].style.display = "none";
    arr[5].style.display = "none";
    arr[time].style.display = "block";
    time = (time + 1) % 6;
  }

  function wenziqieHua() {
    var arr = document.getElementsByClassName("lie");
    arr[0].style.display = "none";
    arr[1].style.display = "none";
    arr[2].style.display = "none";
    arr[3].style.display = "none";
    arr[4].style.display = "none";
    arr[5].style.display = "none";
    arr[tim].style.display = "block";
    tim = (tim + 1) % 6;
  }

  function numqieHua() {
    var arr = document.getElementsByClassName("num");
    arr[0].style.backgroundColor = "#D4E1DC";
    arr[1].style.backgroundColor = "#D4E1DC";
    arr[2].style.backgroundColor = "#D4E1DC";
    arr[3].style.backgroundColor = "#D4E1DC";
    arr[4].style.backgroundColor = "#D4E1DC";
    arr[5].style.backgroundColor = "#D4E1DC";
    arr[t].style.backgroundColor = "#9dd6c5";
    t = (t + 1) % 6;
  }

  onload = function () {
    kid = window.setInterval(tuqieHua, 2000);
    jsq = window.setInterval(wenziqieHua, 2000);
    js = window.setInterval(numqieHua, 2000);
    if (true) {
    } else {
    }
  }
  var tu = document.getElementById('tu');
  tu.onmouseover = function over() {
    window.clearInterval(kid);
    window.clearInterval(jsq);
    window.clearInterval(js);
  }
  tu.onmouseout = function out() {
    kid = window.setInterval(tuqieHua, 2000);
    jsq = window.setInterval(wenziqieHua, 2000);
    js = window.setInterval(numqieHua, 2000);
  }

  /*var zhankai = document.getElementById("zhankai");
   var quanbu = document.getElementById("quanbu");
   var banquan = document.getElementById("banquan");
   zhankai.onclick = function() {
   quanbu.style.display = "none";
   banquan.style.display = "block";
   //quanbu.transition="display 10s";
   }
   var zhankai1 = document.getElementById("zhankai1");
   zhankai1.onclick = function() {
   quanbu.style.display = "block";
   banquan.style.display = "none";
   quanbu.style.transitionProperty = "display";
   quanbu.style.transitionDuration = "6s";
   }*/
  $(document).ready(function () {
    $('#zhankai1').click(function () {
      $('#quanbu').show(1000);
    });
  });
  $(document).ready(function () {
    $('#zhankai').click(function () {
      $('#quanbu').hide(1000);
    });
  });

  var same = document.getElementById("same");
  var yinfu = document.getElementById("yinfu");
  same.onmouseover = function () {
    yinfu.src = "img/35.jpg";
  }
  same.onmouseout = function () {
    yinfu.src = "img/7.jpg";
  }


  var share = document.getElementById("share");
  var fenxiang = document.getElementById("fenxiang");
  var duan = document.getElementById("duan");
  fenxiang.style.left = '72px';
  duan.style.left = '1104px';
  share.onmouseover = function () {
    fenxiang.style.left = '3px';
    duan.style.left = '1034px';
    duan.style.display = "block";
  }
  share.onmouseout = function () {
    fenxiang.style.left = '72px';
    duan.style.left = '1104px';
    duan.style.display = "none";
  }


  var poster = document.getElementById("poster");
  var album = document.getElementById("album");
  var chakan = document.getElementById("chakan");
  poster.onmouseover = function () {
    chakan.style.display = "block";
    album.style.display = "block";
  }
  album.onmouseout = function () {
    chakan.style.display = "none";
    album.style.display = "none";
  }

  var audio = document.getElementById('audio');
  var xstime = document.getElementById('xstime');
  audio.autoplay = true;
  audio.onloadedmetadata = function () {
    var ztime = audio.duration;
    var zmiao = (parseInt(ztime)) % 60;
    var zfen = (parseInt(ztime / 60));
    xstime.innerHTML = '-' + zfen + ':' + zmiao;
  }

  var dice = document.getElementById('dice');
  var jice = document.getElementById('jice');
  audio.ontimeupdate = function () {
    var ztime = audio.duration;
    var bshiJian = audio.currentTime;
    var futime = audio.duration - audio.currentTime;
    var miao = (parseInt(futime)) % 60;
    var fen = (parseInt(futime / 60));
    if (miao < 10) {
      miao = '0' + miao;
    }
    xstime.innerHTML = '-' + fen + ':' + miao;

    var t = (bshiJian / ztime);
    jice.style.width = t * (dice.offsetWidth) + "px";
  }


  var volum = document.getElementById("volum");
  var yinliang = document.getElementById("yinliang");
  var youse = document.getElementById("youse");
  var kongbai = document.getElementById("kongbai");
  yinliang.onmouseover = function () {
    youse.style.display = 'block';
    kongbai.style.display = 'block';
    xstime.style.display = 'none';
    yinliang.style.left = '47px';
    youse.style.left = '57px';
    kongbai.style.left = '57px';
  }
  youse.onmouseover = function () {
    youse.style.display = 'block';
    kongbai.style.display = 'block';
    xstime.style.display = 'none';
    yinliang.style.left = '47px';
    youse.style.left = '57px';
    kongbai.style.left = '57px';
  }
  kongbai.onmouseover = function () {
    youse.style.display = 'block';
    kongbai.style.display = 'block';
    xstime.style.display = 'none';
    yinliang.style.left = '47px';
    youse.style.left = '57px';
    kongbai.style.left = '57px';
  }
  volum.onmouseout = function () {
    youse.style.display = 'none';
    kongbai.style.display = 'none';
    xstime.style.display = 'none';
    yinliang.style.left = '90px';
    youse.style.left = '100px';
    kongbai.style.left = '100px';
  }
  youse.onclick = function () {
    youse.style.backgroundColor = "#aaa";
    youse.style.width = '43px';
    var e = event.x - 1070;
    kongbai.style.width = e + 'px';
    audio.volume = (parseInt(kongbai.style.width) / parseInt(youse.style.width));

    youse.style.display = 'block';
    kongbai.style.display = 'block';
    xstime.style.display = 'none';
    yinliang.style.left = '47px';
    youse.style.left = '57px';
    kongbai.style.left = '57px';
  }
  kongbai.onclick = function () {

    youse.style.width = '43px';
    youse.style.backgroundColor = "#aaa";
    var e = event.x - 1070;
    kongbai.style.width = e + 'px';
    audio.volume = (parseInt(kongbai.style.width) / parseInt(youse.style.width));

    youse.style.display = 'block';
    kongbai.style.display = 'block';
    xstime.style.display = 'none';
    yinliang.style.left = '47px';
    youse.style.left = '57px';
    kongbai.style.left = '57px';
  }


  var ting1 = document.getElementById("ting1");
  var ting2 = document.getElementById("ting2");
  var jixu = document.getElementById("jixu");
  var contin = document.getElementById("continue");
  var ting = document.getElementById("ting");
  ting1.onmouseover = function () {
    ting2.style.display = 'block';
    ting1.style.display = 'none';
  }
  ting2.onmouseout = function () {
    ting1.style.display = 'block';
    ting2.style.display = 'none';
  }
  ting2.onclick = function () {
    ting.style.display = 'none';
    jixu.style.display = 'block';
    contin.style.display = 'block';
    audio.pause();
  }
  contin.onclick = function () {
    ting.style.display = 'block';
    ting2.style.display = 'none';
    jixu.style.display = 'none';
    contin.style.display = 'none';
    audio.play();
  }
  jixu.onclick = function () {
    ting.style.display = 'block';
    ting2.style.display = 'none';
    jixu.style.display = 'none';
    contin.style.display = 'none';
    audio.play();
  }


  var heixin = document.getElementById("heixin");
  var huixin = document.getElementById("huixin");
  var hongxin1 = document.getElementById("hongxin1");
  var hongxin2 = document.getElementById("hongxin2");
  heixin.onmouseover = function () {
    huixin.style.display = 'block';
    hongxin1.style.display = 'none';
    hongxin2.style.display = 'none';
    heixin.style.display = 'none';
  }
  huixin.onmouseout = function () {
    heixin.style.display = 'block';
    hongxin1.style.display = 'none';
    hongxin2.style.display = 'none';
    huixin.style.display = 'none';
  }
  huixin.onclick = function () {
    hongxin1.style.display = 'block';
    heixin.style.display = 'none';
    huixin.style.display = 'none';
    hongxin2.style.display = 'none';
  }
  hongxin1.onmouseover = function () {
    hongxin2.style.display = 'block';
    hongxin1.style.display = 'none';
    heixin.style.display = 'none';
    huixin.style.display = 'none';
  }
  hongxin2.onmouseout = function () {
    hongxin1.style.display = 'block';
    hongxin2.style.display = 'none';
    heixin.style.display = 'none';
    huixin.style.display = 'none';
  }
  hongxin2.onclick = function () {
    heixin.style.display = 'block';
    huixin.style.display = 'none';
    hongxin1.style.display = 'none';
    hongxin2.style.display = 'none';
  }

  var tong1 = document.getElementById("tong1");
  var tong2 = document.getElementById("tong2");
  tong1.onmouseover = function () {
    tong2.style.display = 'block';
    tong1.style.display = 'none';
  }
  tong2.onmouseout = function () {
    tong1.style.display = 'block';
    tong2.style.display = 'none';
  }
  tong2.onclick = function () {
    if (audio.src.match('BAE')) {
      audio.src = "music/BANG BANG BANG.mp3";
      picture.src = 'img/bb.jpg';
      xiliename.innerHTML = 'The Hunger Games';
      zhujiname.innerHTML = '< Songs from District 12 and Beyond > 2011';
      song.innerHTML = 'BANG BANG BANG';
    } else {
      audio.src = "music/BAE BAE.mp3";
      picture.src = 'img/b.jpg';
      xiliename.innerHTML = 'Made Series';
      zhujiname.innerHTML = '< A >2016';
      song.innerHTML = 'BAE BAE';
    }
  }

  var xiayi1 = document.getElementById("xiayi1");
  var xiayi2 = document.getElementById("xiayi2");
  xiayi1.onmouseover = function () {
    xiayi2.style.display = 'block';
    xiayi1.style.display = 'none';
  }
  xiayi2.onmouseout = function () {
    xiayi1.style.display = 'block';
    xiayi2.style.display = 'none';
  }

  var picture = document.getElementsByClassName('picture')[0];
  var xiliename = document.getElementById('xiliename');
  var zhujiname = document.getElementById('zhujiname');
  var song = document.getElementById('song');
  xiayi2.onclick = function () {
    if (audio.src.match('BAE')) {
      audio.src = "music/BANG BANG BANG.mp3";
      picture.src = 'img/bb.jpg';
      xiliename.innerHTML = 'The Hunger Games';
      zhujiname.innerHTML = '< Songs from District 12 and Beyond > 2011';
      song.innerHTML = 'BANG BANG BANG';
    } else {
      audio.src = "music/BAE BAE.mp3";
      ;
      picture.src = 'img/b.jpg';
      xiliename.innerHTML = 'Made Series';
      zhujiname.innerHTML = '< A >2016';
      song.innerHTML = 'BAE BAE';
    }
  }
//第二页
  var yuan = document.getElementsByClassName("yuan");
  var yin = document.getElementsByClassName("yin");
  var jianjie = document.getElementsByClassName("jianjie");
  for (var i = 0; i < yuan.length; i++) {
    (function (i) {
      yuan[i].onmouseover = function () {
        yin[i].style.display = "block";
        jianjie[i].style.display = 'block'
      }
      yin[i].onmouseout = function () {
        yin[i].style.display = 'none';
        jianjie[i].style.display = 'none';
      }
    })(i)
  }

//  登录注册页
  var opacity = document.getElementById("opacity");
  var dl = document.getElementById('dl');
  var denglu = document.getElementById('denglu');
  var close = document.getElementById("guanbione");
  var gbzc = document.getElementById("guanbizhuce");
  var dler = document.getElementById("dengluer");
  var zc = document.getElementById("zc");
  dl.onclick = function(){
    opacity.style.display = 'block';
    denglu.style.display = 'block';
  }
  close.onclick = function(){
    denglu.style.display = 'none';
    opacity.style.display = 'none';
  }
  zc.onclick = function(){
    opacity.style.display = 'block';
    dler.style.display = 'block';
  }
  gbzc.onclick = function(){
    dler.style.display = 'none';
    opacity.style.display = 'none';
  }
}(window))
