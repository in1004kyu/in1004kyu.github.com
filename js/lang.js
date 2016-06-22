$(document).ready(function(){

// 언어팩 선언.
var langprofile_en = "<p>A software developer with 2 years experience with embedded system and 1 year experience with android and web from back-end to front-end.</p>\
                    <ul>\
                    <li>Experience with various fields : Virtualization Embedded system, Android App, WebApp, Web development.</li>\
                    <li>My current interests : Embedded System with IOT, Android development including Android Wear, Python.</li>\
                    <li>Specialties : C, JAVA, Device driver, Javascript, HTML, Android app, Github.</li>\
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
                    <li>전문분야 : C, JAVA, 디바이스 드라이버, 자바스크립트, HTML, 안드로이드 앱, 깃허브</li>\
                    </ul>\
                    <p>안드로이드 앱 개발과 임베디드 시스템 관련 디바이스 드라이버 개발에 강점이 있습니다.\
                    졸업 프로젝트로 페이스북과 연동되는 SNS 안드로이드 앱을 개발하였고, 굿네이버스에서 홍보용 웹앱을 개발하였습니다. \
                    클라이언트와 서버 개발을 동시에 했기 때문에 프론트/백 엔드 분야의 개발 경험이 있습니다. \
                    현재는 ARMv7 CortexA-15 칩 기반인 Exynos-5250 Arndale 보드위에 가상화 솔루션을 개발하고 있습니다.\
                    본 프로젝트로 리눅스 시스템과 ARM 어셈블러, 시스템 프로그래밍에 대한 개발 경험을 가지고 있습니다.<p>";

var langskill_en = "<p>Available skills</p>";
var langskill_ko = "<p>활용 가능한 보유기술입니다.</p>";

var langedubac_en = "<header> <h3>Kookmin University (Korea)</h3>\
                     <p>Computer Science, Bachelor's degree - <strong>Graduated : </strong> 2006 ~ 2013 (3.83/ 4.5)</p>\
                     </header>\
                     <p> My major is Computer Science at college of Electrical Engineering & Computer Science in Kookmin University, Seoul, South Korea. Starting in 2006, I studied broadly about C, C++, Java, Database, Data Structure, Algorithm, OS. I mostly developed android app and webapp.</p>";

var langedumas_en = "<header> <h3>Kookmin University (Korea) Embedded System Labs</h3>\
                     <p>Embedded system, Master's degree - <strong>Graduated : </strong> 2013 ~ 2015 (4.38/ 4.5)</p>\
                     </header>\
                     <p>I developed embedded full virtualization solution during 1 year.I took a role that implements virtual device, scheduler, guest bootloader, various device driver. After that, I loads android guest on virtualization solution and implemented virtualization monitoring system. I wrote implementaion paper about virtualization, mointoring system.</p>";
var langedubac_ko = "<header> <h3>국민대학교</h3>\
                     <p>컴퓨터 공학, 학사 - <strong>졸업 : </strong> 2006 ~ 2013 (3.83/ 4.5)</p>\
                     </header>\
                     <p>국민대학교에서 컴퓨터 공학을 전공으로 C, C++, JAVA, 데이터구조, 알고리즘 OS 등 전반적으로 공부 했습니다. 안드로이드 어플리케이션과 웹앱을 주로 개발했습니다. 프론트 엔드에 관심이 많았습니다.</p>";

var langedumas_ko = "<header> <h3>국민대학교, 임베디드 시스템 연구실</h3>\
                     <p>컴퓨터 공학, 석사 - <strong>졸업 : </strong> 2013 ~ 2015 (4.38/ 4.5)</p>\
                     </header>\
                     <p>1년간 임베디드 전가상화 솔루션을 개발하였고, 가상 디바이스, 스케줄러, 게스트 부트로더, 각종 디바이스 드라이버 개발을 맡았습니다. 이 후 2개월간 안드로이드 게스트가 동작하게끔 작업했으며, 가상화 기반의 모니터링 시스템 및 디버깅 시스템을 개발하였습니다. 석사과정 중 작성한 논문으로 뉴스 추천 시스템, 임베디드 가상화 솔루션, 동적 모니터링 시스템, 이종 운영체제상의 스케줄링 모니터링 시스템에 관해 작성했습니다.</p>";

var langexphyp_en =  "<header>\
                      <h3>Embedded System Laboratory at Kookmin University</h3>\
                      <p>Software Developer / Embedded System Laboratory at Kookmin University / 2013 - 2015</p>\
                    </header>\
                      <p>The project is supported by MKE (The Ministry of Knowledge Economy), Korea, under the Global Collaborative R&D program supervised by the KIAT, Mar. 2013 to Dec. 2013: Full virtualization solution for ARMv7-A Cortex-A15, Designed overall architecture and developed virtual device framework, virtual interrupt handling mechanism, secure boot code to enable for ARM HYP mode, several device drivers for ARM RTSM Cortex-A15 Fastmodels and Samsung Exynos5 ARNDALE Board.</p>\
                      <p>Language : C, ARM Assembly<br>\
                      Tool : ARM Fastmodels, maxview, Github, Cross-compiler<br>\
                      OS : Linux<br>\
                      HW : Samsung exynos 5250 arndale board<br>\
                      Github page : <a href=\"https://github.com/kesl/khypervisor\">https://github.com/kesl/khypervisor</a></p>";

var langexpchart_en = "<header>\
                      <h3>Developed ChartCloud, the SNS Android App</h3>\
                       <p>Software Developer / Cloud&Grid Laboratory at Kookmin University / 2012. 2 - 2013. 5</p>\
                    </header>\
                      <p>Chart based social discussion service. This service is a discussion platform on chart or image. A user can create own chart or image. Other users can discuss on char or image with marker and comments. Worked with server programmer and web programmer. I tooks a role of deveolpment Client application using JAVA and Android ADK.</p>\
                      <p>Language : Java, Sencha touch<br>\
                      Platform : Android, web<br>\
                      Tools : GAE, Trac, Jenkins<br>\
                      <p>Web version about this project: <a href=\"http://chartcloud.cs.kookmin.ac.kr\">http://chartcloud.cs.kookmin.ac.kr</a> </p>\
                      <p>Animation about this project. : \
                      <a href=\"http://www.youtube.com/watch?v=-Xfu-hZPhKg&feature=share\">http://www.youtube.com/watch?v=-Xfu-hZPhKg&feature=share</a></p>\
                      <p>Url about demo. : \
                      <a href=\"http://youtu.be/eKOP-dWNPUg\">http://youtu.be/eKOP-dWNPUg</a>\
                      Market : \
                      <a href=\"https://play.google.com/store/apps/details?id=kr.ac.kookmin.cs.chartcloud.android&hl=ko\">https://play.google.com/store/apps/details?id=kr.ac.kookmin.cs.chartcloud.android&hl=ko</a></p>";


var langexphope_en = "<header>\
                    <h3>Goodneighbors</h3>\
                     <p>Software Developer / Goodneighbors / 2012. 6 ~ 2012. 7</p>\
                  </header>\
                    <p>Developed Hope for africa, the Sponsorship App Using Sencha Touch. Sponsorship mobile web app named “Hope for africa”. Worked with designer. I tooks a role of development Client Application using Sencha Touch, HTML5 mobile application framework.</p>\
                    <p>Language : Javascript, HTML5, Sencha touch<br>\
                    Platform : Web<br>\
                    Tools : GAE, eclipse</p>\
                    <p>Web url : <a href=\"http://inkyugwt.appspot.com/index.html\">http://inkyugwt.appspot.com/index.html</a><br>\
                    Market url : <a href=\"https://play.google.com/store/apps/details?id=kr.goodneighbors.gn\">https://play.google.com/store/apps/details?id=kr.goodneighbors.gn</a></p>";
                
var langexphyp_ko =  "<header>\
                      <h3>임베디드 시스템 연구실 - 국민대학교</h3>\
                      <p> Software Developer / 임베디드 시스템 연구실 - 국민대학교 / 2013 - 2015</p>\
                    </header>\
                      <p>지식경제부가 후원하고, KIAT가 주관하는 국제공동연구과제로 2013년 3월 부터 2년간 임베디드 전 가상화 솔루션을 설계 및 구현했습니다. ARM 시뮬레이션인 RTSM Cortex-A15 Fasemodels와 삼성 Exynos5250 안델 보드에서 구현했습니다. 가상 디바이스, 스케줄러, 게스트 OS를 로드하는 부트로더, 그외 각종 디바이스 드라이버(GIC, TIMER) 외 라이브러리 구현을 도맡아 했으며, 안드로이드 OS를 가상화를 했고, 해당 솔루션 기반의 디버깅 시스템을 구현했습니다.</p>\
                      <p>사용언어 : C, ARM Assembly<br>\
                      사용도구 : ARM Fastmodels, maxview, Github, Cross-compiler<br>\
                      운영체제 : Linux<br>\
                      하드웨어 : Samsung exynos 5250 arndale board<br>\
                      Github page : <a href=\"https://github.com/kesl/khypervisor\">https://github.com/kesl/khypervisor</a></p>";

var langexpchart_ko = "<header>\
                      <h3>안드로이드 SNS 어플리케이션 (차트클라우드)</h3>\
                       <p>Software Developer / 클라우드 시스템 연구실 - 국민대학교 / 2012. 2 - 2013. 5</p>\
                    </header>\
                      <p>차트를 가지고 의견을 나누는 SNS인 안드로이드 어플리케이션을 개발하였습니다. 사용자는 차트를 생성하고, 이미지 마크와 코멘트를 이용하여 특정 차트와 이미지에 대해 토론을 할 수 있습니다.  웹 페이지를 제외한 서버와 클라이언트 전체를 구현했습니다. 구글 앱 엔진을 서버로 사용하였습니다. </p>\
                      <p>사용언어 : Java, Sencha touch<br>\
                      플랫폼 : Android, web<br>\
                      사용도구 : GAE, Trac, Jenkins<br>\
                      <p>웹 버전 : <a href=\"http://chartcloud.cs.kookmin.ac.kr\">http://chartcloud.cs.kookmin.ac.kr</a> </p>\
                      <p>소개 영상 : \
                      <a href=\"http://www.youtube.com/watch?v=-Xfu-hZPhKg&feature=share\">http://www.youtube.com/watch?v=-Xfu-hZPhKg&feature=share</a></p>\
                      <p>데모 영상 : \
                      <a href=\"http://youtu.be/eKOP-dWNPUg\">http://youtu.be/eKOP-dWNPUg</a>\
                      마켓 : \
                      <a href=\"https://play.google.com/store/apps/details?id=kr.ac.kookmin.cs.chartcloud.android&hl=ko\">https://play.google.com/store/apps/details?id=kr.ac.kookmin.cs.chartcloud.android&hl=ko</a></p>";

var langexphope_ko = "<header>\
                    <h3>굿네이버스</h3>\
                     <p>Software Developer / 굿네이버스 / 2012. 6 ~ 2012. 7</p>\
                  </header>\
                    <p>굿네이버스의 홍보 웹앱을 개발했습니다. 굿네이버스라는 단체 소개와 후원을 위한 웹 페이지, 후원 현황을 보여주는 웹앱입니다.</p>\
                    <p>사용언어 : Javascript, HTML5, Sencha touch<br>\
                    플랫폼 : Web<br>\
                    사용도구 : GAE, eclipse</p>\
                    <p>웹 페이지 : <a href=\"http://inkyugwt.appspot.com/index.html\">http://inkyugwt.appspot.com/index.html</a><br>\
                    마켓 : <a href=\"https://play.google.com/store/apps/details?id=kr.goodneighbors.gn\">https://play.google.com/store/apps/details?id=kr.goodneighbors.gn</a></p>";
 
var langaddress_ko = "서울특별시 강서구 화곡동 화곡대림아파트 5-802호";
var langaddress_en = "160, Woljeong-ro, Gangseo-gu, Seoul, 157-883 Rep. of KOREA";

var pofo_hyp_title_en = "<h2>Embedded Hypervisor Development (Embedded Virtualization)</h2>";
var pofo_hyp_des_en = "<p>Software Developer / Embedded System Laboratory at Kookmin University / 2013 - 2015 (on going)</p>\
                      <p>The project is supported by MKE (The Ministry of Knowledge Economy), Korea, under the Global Collaborative R&D program supervised by the KIAT,\
                      Mar. 2013 to Dec. 2013: Full virtualization solution for ARMv7-A Cortex-A15, Designed overall architecture and developed virtual device framework,\
                      virtual interrupt handling mechanism, secure boot code to enable for ARM HYP mode, several device drivers for ARM RTSM Cortex-A15 Fastmodels and\
                      Samsung Exynos5 ARNDALE Board.</p>\
                      <p>Language : C, ARM Assembly<br>\
                      Tool : ARM Fastmodels, maxview, Github, Cross-compiler<br>\
                      OS : Linux<br>\
                      HW : Samsung exynos 5250 arndale board<br>\
                      Github page : <a href=\"https://github.com/kesl/khypervisor\">https://github.com/kesl/khypervisor</a></p>\
                     <h4> Demo video </h4>\
                     <p>\
                     <div class=\"video-container\">\
                     <iframe width=\"560\" height=\"315\" src=\"http://www.youtube.com/embed/-BV1iic_VuQ\" frameborder=\"0\" allowfullscreen></iframe></div>\
				     <div class=\"video-container\"><iframe width=\"560\" height=\"315\" src=\"//www.youtube.com/embed/SPeo7MzZLUY\" frameborder=\"0\" allowfullscreen></iframe></div>\
                     <div class=\"video-container\"><iframe width=\"560\" height=\"315\" src=\"http://www.youtube.com/embed/Cv7NU0LpzNo\" frameborder=\"0\" allowfullscreen></iframe></div>\
                     </p>";

 
var pofo_hyp_title_ko = "<h2>임베디드 가상화 솔루션 개발</h2>";
var pofo_hyp_des_ko = "<p>Software Developer / 임베디드 시스템 연구실 - 국민대학교 / 2013 - 2015 (on going)</p>\
                      <p>지식경제부가 후원하고, KIAT가 주관하는 국제공동연구과제로 2013년 3월 부터 2년간 임베디드 전 가상화 솔루션을 설계 및 구현했습니다.\
                      ARM 시뮬레이션인 RTSM Cortex-A15 Fasemodels와 삼성 Exynos5250 안델 보드에서 구현했습니다. 가상 디바이스, 스케줄러, 게스트 OS를 로드하는 부트로더,\
                      그외 각종 디바이스 드라이버(GIC, TIMER) 외 라이브러리 구현을 도맡아 했으며, 안드로이드 OS를 가상화를 했고, 해당 솔루션 기반의 디버깅 시스템을 구현했습니다.</p>\
                      <p>사용언어 : C, ARM Assembly<br>\
                      사용도구 : ARM Fastmodels, maxview, Github, Cross-compiler<br>\
                      운영체제 : Linux<br>\
                      하드웨어 : Samsung exynos 5250 arndale board<br>\
                      Github page : <a href=\"https://github.com/kesl/khypervisor\">https://github.com/kesl/khypervisor</a></p>\
                      <h4> 데모 비디오 </h4>\
                      <p>\
                      <div class=\"video-container\">\
                      <iframe width=\"560\" height=\"315\" src=\"http://www.youtube.com/embed/-BV1iic_VuQ\" frameborder=\"0\" allowfullscreen></iframe></div>\
				      <div class=\"video-container\"><iframe width=\"560\" height=\"315\" src=\"//www.youtube.com/embed/SPeo7MzZLUY\" frameborder=\"0\" allowfullscreen></iframe></div>\
                      <div class=\"video-container\"><iframe width=\"560\" height=\"315\" src=\"http://www.youtube.com/embed/Cv7NU0LpzNo\" frameborder=\"0\" allowfullscreen></iframe></div>\
                      </p>";

var pofo_chart_title_en = "<h2>Developed ChartCloud, the SNS Android App</h2>";
var pofo_chart_des_en = "<p>Software Developer / Cloud&Grid Laboratory at Kookmin University / 2012. 2 - 2013. 5</p>\
                         <p>Chart based social discussion service. This service is a discussion platform on chart or image. A user can create own chart or image. Other users can discuss on char or image with marker and comments. Worked with server programmer and web programmer. I tooks a role of deveolpment Client application using JAVA and Android ADK.</p>\
                      <p>Language : Java, Sencha touch<br>\
                      Platform : Android, web<br>\
                      Tools : GAE, GWT, Trac, Jenkins<br>\
                      <p>Web version about this project: <a href=\"http://chartcloud.cs.kookmin.ac.kr\">http://chartcloud.cs.kookmin.ac.kr</a><br>\
                      About this project.<br>\
				      <div class=\"video-container\"><iframe width=\"420\" height=\"315\" src=\"//www.youtube.com/embed/-Xfu-hZPhKg\" frameborder=\"0\" allowfullscreen></iframe></div>\
                      Url about demo.<br>\
				      <div class=\"video-container\"><iframe width=\"560\" height=\"315\" src=\"//www.youtube.com/embed/LKG2lYMjQKE\" frameborder=\"0\" allowfullscreen></iframe></div>\
                      Market : \
                      <a href=\"https://play.google.com/store/apps/details?id=kr.ac.kookmin.cs.chartcloud.android&hl=ko\">https://play.google.com/store/apps/details?id=kr.ac.kookmin.cs.chartcloud.android&hl=ko</a></p>";

 
var pofo_chart_title_ko = "<h2>안드로이드 SNS 어플리케이션 (차트클라우드)</h2>";
var pofo_chart_des_ko = "<p>Software Developer / 클라우드 시스템 연구실 - 국민대학교 / 2012. 2 - 2013. 5</p>\
                         <p>차트를 가지고 의견을 나누는 SNS인 안드로이드 어플리케이션을 개발하였습니다. 사용자는 차트를 생성하고, 이미지 마크와 코멘트를 이용하여 특정 차트와 이미지에 대해 토론을 할 수 있습니다.  웹 페이지를 제외한 서버와 클라이언트 전체를 구현했습니다. 구글 앱 엔진을 서버로 사용하였습니다. </p>\
                      <p>Language : Java, Sencha touch<br>\
                      Platform : Android, web<br>\
                      Tools : GAE, GWT, Trac, Jenkins<br>\
                      <p>Web version about this project: <a href=\"http://chartcloud.cs.kookmin.ac.kr\">http://chartcloud.cs.kookmin.ac.kr</a><br>\
                      About this project.<br>\
				      <div class=\"video-container\"><iframe width=\"420\" height=\"315\" src=\"//www.youtube.com/embed/-Xfu-hZPhKg\" frameborder=\"0\" allowfullscreen></iframe></div>\
                      Url about demo.<br>\
				      <div class=\"video-container\"><iframe width=\"560\" height=\"315\" src=\"//www.youtube.com/embed/LKG2lYMjQKE\" frameborder=\"0\" allowfullscreen></iframe></div>\
                      Market : \
                      <a href=\"https://play.google.com/store/apps/details?id=kr.ac.kookmin.cs.chartcloud.android&hl=ko\">https://play.google.com/store/apps/details?id=kr.ac.kookmin.cs.chartcloud.android&hl=ko</a></p>";



var pofo_gdb_title_en = "<h2>Monitoring system for embedded virtualization hypervisor</h2>";
var pofo_gdb_des_en = "<p>Software Developer / Embedded System Laboratory at Kookmin University / 2014.9 - 2014.12</p>\
					   <p>The effective profiling diagnoses the failure of the system and informs risk.\
                       If target system’s failure occurs, it is impossible to diagnose more than one of the exiting tools.\
                       In this respect, monitoring of the system based on virtualization is useful.</p>\
                       <p>I developed monitoring framework which uses characteristic of hardware virtualization \
                       to prevent its side-effects from target guest and uses dynamic binary instrumentation \
                       that instruction-level trapping based on hardware virtualization to get efficiency and flexibility.<br></p>\
                       <p>This framework provides tracing of guest function, memory dump and debugger that uses GDB with gdb remote protocol. \
                       I have implemented a prototype on K-Hypervisor which has been developed in the open source and \
                       platform is Samsung Exynos 5 Dual Arndale board.</p>\
                       <p>Language : C, ARM Assembly<br>\
                       Tool : ARM Fastmodels, maxview, Github, Cross-compiler<br>\
                       OS : Linux<br>\
                       HW : Samsung exynos 5250 arndale board</p><br>";

 
var pofo_gdb_title_ko = "<h2>임베디드 가상화 환경에서의 모니터링 시스템 구현</h2>";
var pofo_gdb_des_ko = "<p>Software Developer / 임베디드 시스템 연구실 - 국민대학교 / 2014. 9 - 2014. 12</p>\
					   <p>임베디드 가상화 환경에서 가상화 레이어를 이용한 모니터링 시스템을 구현했습니다. 가상화의 분리 특성을 이용해 모니터링 대상과 모니터링 시스템을 격리시켜 모니터링 대상의 고장에도 영향을 받지않고 지속적인 모니터링이 가능하다는 장점이 있습니다. 모니터링의 대상으로는 함수의 콜 동작상태와 메모리, 레지스터 상태정보, 그리고 이것들을 이용한 GDB stub를 구현하여 디버깅 시스템을 지원합니다. 이를 통해 게스트 OS의 수정없이 모니터링 혹은 디버깅 기능을 어떠한 OS에도 지원할 수 있습니다. </p>\
					  <p>사용언어 : C, ARM Assembly<br>\
                      사용도구 : ARM Fastmodels, maxview, Github, Cross-compiler<br>\
                      운영체제 : Linux<br>\
                      하드웨어 : Samsung exynos 5250 arndale board<br>\
                      Github page : <a href=\"https://github.com/kesl/Dynamic_Monitoring\">https://github.com/kesl/Dynamic_Monitoring</a></p>";

var pofo_hope_title_en = "<h2>Hope for africa - sponsorship webapp using sencha touch</h2>";
var pofo_hope_des_en = "<p>Software Developer / Goodneighbors / 2012. 6 ~ 2012. 7</p>\
                        <p>Developed Hope for africa, the Sponsorship App Using Sencha Touch. Sponsorship mobile web app named “Hope for africa”. Worked with designer. I tooks a role of development Client Application using Sencha Touch, HTML5 mobile application framework.</p>\
                    <p>Language : Javascript, HTML5, Sencha touch<br>\
                    Platform : Web<br>\
                    Tools : GAE, eclipse</p>\
                    <p>Web url : <a href=\"http://inkyugwt.appspot.com/index.html\">http://inkyugwt.appspot.com/index.html</a><br>\
                    Market url : <a href=\"https://play.google.com/store/apps/details?id=kr.goodneighbors.gn\">https://play.google.com/store/apps/details?id=kr.goodneighbors.gn</a></p>";

var pofo_hope_title_ko = "<h2>희망학교 - 센차터치 웹앱</h2>";
var pofo_hope_des_ko = "<p>Software Developer / 굿네이버스 / 2012. 6 - 2012. 7</p>\
				<p>굿네이버스의 프로젝트인 희망학교의 소개와 후원페이지를 웹앱으로 제작한 프로젝트입니다. 디자이너와 서버 개발자와 함께 짧은 기간동안 구현했습니다.</p>\
                <p> 사용언어 : Javascript, HTML5, Sencha Touch<br>\
                Platform : 웹<br>\
                사용도구 : GAE, Eclipse</p>\
                <p>Web url : <a href=\"http://inkyugwt.appspot.com/index.html\">http://inkyugwt.appspot.com/index.html</a><br>\
                Market url : <a href=\"https://play.google.com/store/apps/details?id=kr.goodneighbors.gn\">https://play.google.com/store/apps/details?id=kr.goodneighbors.gn</a></p>";

var pofo_ads_title_en = "<h2>Ads(Active detect sensor) web page</h2> <h3>monitoring customer's traffic nearby store using wifi signal</h3>";
var pofo_ads_des_en = "<p>Web/Sever developer / wenfactory(http://www.wenfactory.com/) / 2015. 2 ~ 2015. 3 (on going)</p>\
                       <p>This website analyzes customer traffic nearby store using customer's wifi signal and shows infographic about their traffic. This website let store manager know when customer traffic is high and decide when he/she uses store advertisement.</p>\
                       <p>Language : Javascript, PHP<br>\
                       Platform : web<br>\
                       Framework : codeigniter<br>\
                       DB : mongodb<br>\
                       HW : raspberry pi<br>\
                       Chart - morris.js<br>\
                       SW - Collecting wifi signal : Airodump-ng[Aircrack-ng]<br>\
                       Web url : <a href=\"http://1.255.56.239/ads/index.html\">http://1.255.56.239/ads/index.html</a><br>";
var pofo_ads_title_ko= "<h2>Ads(Active detect sensor) web page</h2> <h3>와이파이 신호를 이용한 매장 근처 고객 방문율 모니터링 웹페이지</h3>";
var pofo_ads_des_ko = "<p>Web/Sever developer / wenfactory(http://www.wenfactory.com/) / 2015. 2 ~ 2015. 3 (on going)</p>\
                       <p>매장 주변의 고객의 방문량 및 통행량을 분석하여 인포그래픽으로 표현해주는 웹페이지입니다. 고객의 정보는 와이파이 신호를 분석하여 체크합니다. 매장 매니저는 고객의 방문 및 통행량에 대한 그래프를 보고 어느 시간에 광고를 사용해야할 지 결정 할 수 있습니다</p>\
                       <p>Language : Javascript, PHP<br>\
                       Platform : web<br>\
                       Framework : codeigniter<br>\
                       DB : mongodb<br>\
                       HW : raspberry pi<br>\
                       Chart - morris.js<br>\
                       SW - Collecting wifi signal : Airodump-ng[Aircrack-ng]<br>\
                       Web url : <a href=\"http://1.255.56.239/ads/index.html\">http://1.255.56.239/ads/index.html</a><br>";


$.lang = {};

$.lang['ko'] = {
    'profile': langprofile_ko,
    'skill': langskill_ko,
    'edu-bac': langedubac_ko,
    'edu-mas': langedumas_ko,
    'exp-hyp': langexphyp_ko,
    'exp-chart' : langexpchart_ko,
    'exp-hope' : langexphope_ko,
    'address' : langaddress_ko,
    'pofoHypTitle' : pofo_hyp_title_ko,
    'pofoHypDes' : pofo_hyp_des_ko,
    'pofoChartTitle' : pofo_chart_title_ko,
    'pofoChartDes' : pofo_chart_des_ko,
    'pofoGdbTitle' : pofo_gdb_title_ko,
    'pofoGdbDes' : pofo_gdb_des_ko,
    'pofoHopeTitle' : pofo_hope_title_ko,
    'pofoHopeDes' : pofo_hope_des_ko,
    'pofoAdsTitle' : pofo_ads_title_ko,
    'pofoAdsDes' : pofo_ads_des_ko,
	1: '안녕하세요',
};

$.lang['en'] = {
    'profile': langprofile_en,
    'skill': langskill_en,
    'edu-bac': langedubac_en,
    'edu-mas': langedumas_en,
    'exp-hyp': langexphyp_en,
    'exp-chart' : langexpchart_en,
    'exp-hope' : langexphope_en,
    'address' : langaddress_en,
    'pofoHypTitle' : pofo_hyp_title_en,
    'pofoHypDes' : pofo_hyp_des_en,
    'pofoChartTitle' : pofo_chart_title_en,
    'pofoChartDes' : pofo_chart_des_en,
    'pofoGdbTitle' : pofo_gdb_title_en,
    'pofoGdbDes' : pofo_gdb_des_en,
    'pofoHopeTitle' : pofo_hope_title_en,
    'pofoHopeDes' : pofo_hope_des_en,
    'pofoAdsTitle' : pofo_ads_title_en,
    'pofoAdsDes' : pofo_ads_des_en,
    1: 'Hello.',
};

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

/* Multi languae supporting */
	$('.lang').click(function(){
        var lang = $(this).data('lang');
        setLanguage(lang);
	});



setLanguage('en');

});
