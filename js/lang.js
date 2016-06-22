$(document).ready(function(){

// 언어팩 선언.
var langprofile_en = "<p>A software developer with 2 years experience with embedded system and 1 year experience with android and web from back-end to front-end.</p>\
                    <ul>\
                    <li>Experience with various fields : Virtualization Embedded system, Android App, WebApp, Web development.</li>\
                    <li>My current interests : Embedded System with IOT, Android development including Android Wear, Python.</li>\
                    <li>Specialties : C, JAVA, Device driver, Web Development, Eclipse, Visual Studio, Github.</li>\
                    </ul>\
                    <p>My competitive advantage is I have substantial working experiences in Android app programming and device driver programming.\
                    I developed Android App about SNS application interwork between facebook and twitter for Graduation portfolio project. Through \
                    the project, I took a proficiency about Android, server and JAVA. Currently, I working one \
                    of ongoing projects, Virtualization System platform ARMv7 Cortex-A15 based, and the project helped me to understand Linux system \
                    regarding scheduler, mmu, and I have acquired ARM assembler, C programming skills.</p>";

var langprofile_ko = "<p>2년의 임베디드 시스템 프로그래밍 개발 경험과 1년의 안드로이드/웹 관련 프론트/백 엔드 개발 경력을 가지고 있습니다.</p>\
                    <ul>\
                    <li>다양한 분야 경험 : 임베디드 가상화 솔루션 개발, 안드로이드 앱, 웹앱 및 웹 개발.</li>\
                    <li>관심분야 : 임베디드 시스템을 이용한 IOT, 안드로이드 웨어 디바이스, 파이썬</li>\
                    <li>전문분야 : C, JAVA, 디바이스 드라이버, 안드로이드 앱,  웹 및 웹앱, 이클립스, 비주얼 스튜디오, 깃허브</li>\
                    </ul>\
                    <p>안드로이드 앱 개발과 임베디드 시스템 관련 디바이스 드라이버 개발에 강점이 있습니다.\
                    졸업 프로젝트로 페이스북과 연동되는 SNS 안드로이드 앱을 개발하였고, 굿네이버스에서 홍보용 웹앱을 개발하였습니다. \
                    클라이언트와 서버 개발을 동시에 했기 때문에 프론트/백 엔드 분야의 개발 경험이 있습니다. \
                    현재는 ARMv7 CortexA-15 칩 기반인 Exynos-5250 Arndale 보드위에 가상화 솔루션을 개발하고 있습니다.\
                    본 프로젝트로 리눅스 시스템과 ARM 어셈블러, 시스템 프로그래밍에 대한 개발 경험을 가지고 있습니다.<p>";

var langskill_en = "<p>Available skills</p>";
var langskill_ko = "<p>활용 가능한 보유기술입니다.</p>";

var langedubac_en = "<header> <h3>Kookmin University (Korea)</h3>\
                     <p>Computer Science, Bachelor of Science in Engineering - <strong>Graduated:</strong> 2006 ~ 2013 (3.83/ 4.5)</p>\
                     </header>\
                     <p>GOOD.</p>";

var langedumas_en = "<header> <h3>Kookmin University (Korea) Embedded System Labs</h3>\
                     <p>Computer Science, Master of Science in Engineering - <strong>Graduated:</strong> 2013 ~ 2015 (4.38/ 4.5)</p>\
                     </header>\
                     <p>SO GOOD.</p>";
var langedubac_ko = "<header> <h3>국민대학교</h3>\
                     <p>컴퓨터 공학, 학사 - <strong>졸업:</strong> 2006 ~ 2013 (3.83/ 4.5)</p>\
                     </header>\
                     <p>GOOD.</p>";

var langedumas_ko = "<header> <h3>국민대학교, 임베디드 시스템 연구실</h3>\
                     <p>컴퓨터 공학, 석사 - <strong>졸업:</strong> 2013 ~ 2015 (4.38/ 4.5)</p>\
                     </header>\
                     <p>SO GOOD.</p>";

$.lang = {};

$.lang['ko'] = {
    'profile': langprofile_ko,
    'skill': langskill_ko,
    'edu-bac': langedubac_ko,
    'edu-mas': langedumas_ko,
	1: '안녕하세요',
	2: '오늘은 금요일 입니다.',
	3: '불금을 즐겨 보아요.'
};

$.lang['en'] = {
    'profile': langprofile_en,
    'skill': langskill_en,
    'edu-bac': langedubac_en,
    'edu-mas': langedumas_en,
    1: 'Hello.',
	2: 'Today is Friday',
	3: 'Fire~!!'
};

/* Write body */
//document.getElementById('text_profile').innerHTML = langprofile_en;
//document.getElementById('text_skill').innerHTML = langskill_en;

/**
* setLanguage 
* use $.lang[currentLanguage][languageNumber]
*/
function setLanguage(currentLanguage) {
   $('[data-langID]').each(function() {
    var $this = $(this); 
    $this.html($.lang[currentLanguage][$this.data('langid')]); 
  });	
}  

setLanguage('en');

/* Multi languae supporting */
	$('.lang').click(function(){
        var lang = $(this).data('lang');
        setLanguage(lang);
	});

/*
	$('.lang').click(function(){
        var path = location.pathname;
        var id = this.getAttribute('id');
        if (id == 'ko' && path == '/inkyu/index.html') {
            location.href = "/inkyu/index_ko.html";
        } else if (id == 'en' && path == '/inkyu/index_ko.html') {
            location.href = "/inkyu/index.html";
        }
	});
*/


});
