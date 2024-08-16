
            function onm(){
                window.location.reload
            }
       

  function testcompanynum(){
   var num = document.getElementById("foinput");
   var now = num.value;
switch(now){

      ///////////////////////// // مكتب المدير العام  ////////////////////////////////////////

  case "177826" :  //بركان حسن عبدالله
      return "insalaryemppage/177826بركان.html";
   break;
   case "152625" :  //بدران جمال عمر
      return "insalaryemppage/152625بدران.html";
   break;
   case "193248" :  //ابتسام عبد الله خالد
      return "insalaryemppage/193248مكتب.html";
   break;
   case "239008" :  //ابراهيم احمد رجا
      return "insalaryemppage/239008مكتب.html";
   break;
   case "103510" :  //احسان عبد الرحمن
   return "insalaryemppage/103510مكتب.html";
   break;
   case "246301" :  //ريان لويس بهجت
   return "insalaryemppage/246301مكتب.html";
   break;
   case "983081" :  //ناهدة جبار حسين
   return "insalaryemppage/983081مكتب.html";
   break;
   case "830500" :  //وسام احمد جاسم
   return "insalaryemppage/830500مكتب.html";
   break;
   case "178915" :  //وسام عدنان تيك
   return "insalaryemppage/178915مكتب.html";
   break;

       ////////////////////////////   ادارة الانظمة البرمجية //////////////////////
  case "166750" :  //احمد عباس خليل
      return "insalaryemppage/166750ادارة الانظمة.html";
   break;
   case "270413" :  // سارة حمود حسين
    return "insalaryemppage/270413ادارة الانظمة.html";
   break;
   case "405658":  // د.سناء رياض الخزاعي
    return "insalaryemppage/405658ادارة الانظمة.html";
   break;
   case "607607": //احمد تحسين علي
    return "insalaryemppage/607607ادارة الانظمة.html";
   break;
   case "390225": //احمد حسن رمضان
    return "insalaryemppage/390225ادارة الانظمة.html";
   break;
   case "117018": //احمد شامل
    return "insalaryemppage/117018ادارة الانظمة.html";
   break;
   case "379401": //احمد عبد الامير احمد تقي
    return "insalaryemppage/379401ادارة الانظمة.html";
   break;
   case "271711": //ايمان سعد ابراهيم
   return "insalaryemppage/271711ادارة الانظمة.html";
   break;
   case "749100": //حردان ستار محمد امين
   return "insalaryemppage/794100ادارة الانظمة.html";
   break;
   case "308517": //رادي فرج بنو 
   return "insalaryemppage/308517ادارة الانظمة.html";
   break;
   case "769307": //رعد حسين علي محمد
   return "insalaryemppage/769307ادارة الانظمة.html";
   break;
   case "725802": //رفاه عبد المنعم عباس
   return "insalaryemppage/725802ادارة الانظمة.html";
   break;
   case "355256": //زينب اسماعيل داود
   return "insalaryemppage/355256ادارة الانظمة.html";
   break;
   case "564014": //سامر ثائر شعيب
   return "insalaryemppage/564014ادارة الانظمة.html";
   break;
   case "392425": //سعاد يعقوب يلدا
   return "insalaryemppage/392425ادارة الانظمة.html";
   break;
   case "397848": //سهيلة شاكر مجيد
   return "insalaryemppage/397848ادارة الانظمة.html";
   break;
   case "450241": //صوناي رشيد عبدالله
   return "insalaryemppage/450241ادارة الانظمة.html";
   break;
   case "557502": //فيان صلاح محمد
   return "insalaryemppage/557502ادارة الانظمة.html";
   break;
   case "897501": //نازك اسماعيل
   return "insalaryemppage/897501ادارة الانظمة.html";
   break;
   case "308616": //هاني زهير نوري
   return "insalaryemppage/308616ادارة الانظمة.html";
   break;
   case "565807": //احمد محمد يونس
   return "insalaryemppage/565807ادارة الانظمة.html";
   break;
   case "11361": //جيا حسن نجم الدين
   return "insalaryemppage/11361.html";
   break;
   case "574002": //الاء حسين محمد
   return "insalaryemppage/574002.html";
   break;
   case "574101": //بناز غازي عبد الرحمن
   return "insalaryemppage/574101.html";
   break;
   case "735603": //بيريفان نور الدين عبد الرحمن
   return "insalaryemppage/735603.html";
   break;
   case "573804": //روشنا ناظم 
   return "insalaryemppage/573804.html";
   break;
            ///////////////////////////////////قسم الموارد البشرية//////////////////////////////
   
   case "637505": //وعد حمود ابراهيم
   return "insalaryemppage/637505.html";
   break;
 
  /////////////////////////////////////////// هيأة الحقول/ //////////////////////////////
   
  case "779207": // وسام حمود حسين
  return "insalaryemppage/779207حقول.html";
  break;
  
   
  default:
 window.alert(" ERROR NUMBER ");
}
}
function element(){
  var a=document.createElement('a');
  a.href =testcompanynum();
  window.open(a.href);
}
