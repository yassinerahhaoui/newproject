function testjs(){
    var dm = document.getElementById('demo');
    dm.innerHTML = "yassine rahhaoui";
    dm.style.color = "red";
    dm.style.fontSize = "50px";
    dm.style.fontWeight = "bold";
    dm.style.fontStyle = "italic";
    dm.style.position = "absolute";
    dm.style.top = "50%";
    dm.style.left = "50%";
    dm.style.transform = "translate(-50%,-50%)";
    dm.style.border = "2px solid blue";
    dm.style.backgroundColor = "yellow";
    dm.style.padding = "10px";
    dm.style.borderRadius = "50px";

    if (dm.style.display === 'block') {
        dm.style.display = 'none';
    }else{
        dm.style.display = 'block';
    }
}
function dark(){
    var dr = document.getElementById('theme');
    dr.style.backgroundColor = "black";
}
function light(){
    var dr = document.getElementById('theme');
    dr.style.backgroundColor = "blueviolet";
}
function amg1(){
    document.getElementById('demo2').innerHTML = "في العام الماضي أعلنت جوجل عن نطاق علوي جديد يدعى .نيو واستخدمته في خدماتها كاختصارلإنشاء مستندات أو عروض تقديمية أو جداول بيانات جديدة مباشرة بمجرد إدخال رابط في شريطالعناوين، وقريباً سيمكن لأي شخص أو شركة الحصول على رابط اختصاراته الخاص";
    document.getElementById('demo2').style.backgroundColor = "#badc58";
}
function amg2(){
    document.getElementById('demo2').innerHTML = "فعمر سماعات أبل لن يتجاوز 3 سنوات كحد أقصى، وذلك بسبب البطاريات التي يستمر ادائها في الانحدار إلى أن تصل مرحلة تفقد فيها الشحن بسرعة يجعلها غير عملية. وهذا الشيء سيجبرك على العودة إلى السماعات السلكية، أو شراء سماعات جديدة، لتعيد نفس السيناريو السابق بعد 3 سنوات اخرى";
    document.getElementById('demo2').style.backgroundColor = "#e056fd";
}
function amg3(){
    document.getElementById('demo2').innerHTML = "تعودنا أن الالكترونيات التي تستخدم بطاريات قابلة للشحن، والتي لا تستطيع استبدالها، أن يوماً ما سيأتي وتتوقف هذه الأجهزة عن العمل، ومهما حاولت أن تحافظ على جهازك القيم الذي دفعت فيه “دم قلبك” (وهذا على افتراض أنك من الطبقة الكادحة مثلي) فسوف يتوقف الجهاز فيها عن وأصبحت تنتهي خلال دقائق معدودة";
    document.getElementById('demo2').style.backgroundColor = "#ffbe76";
}
function amg4(){
    document.getElementById('demo2').innerHTML = "أحد أسباب هذه المشكلة هو أن عدم وجود قفزة كبيرة في عالم البطاريات القابلة للشحن. وكل سمعناه وقرأناه خلال السنوات الماضية عن قفزات كبيرة أو تطور تقني في عالم البطاريات، هو مجرد بيان صحفي. فلم نلحظ أي تطورِِ على في بداية التسعينات، أي أننا نستخدم تقنية تجاوز عمرها العشرين سنة دون أي تطور";
    document.getElementById('demo2').style.backgroundColor = "#1abc9c";
}
function amg5(){
    document.getElementById('demo2').innerHTML = "لو كنت ممن عاصروا ظهور النقال، وقد تتذكر أن بطاريات الهواتف النقالة كانت قابلة للإزالة. سمح لنا هذا الشيء بالاحتفاظ بهواتفنا لفترة أطول، لأننا لو واجهنا مشكلة في البطارية، أو قمنا باستهلاكها خلال سنتين، فكل ما هاتف نوكيا 3310 لما بعد 2010 واستبدله حين لم يتمكن من ";
    document.getElementById('demo2').style.backgroundColor = "#95a5a6";
}
function slide1(){
    document.getElementById('slide').src = "image/01.jpeg";
    document.getElementById('s1').style.backgroundColor = 'white';
    document.getElementById('s2').style.backgroundColor = 'rgba(255, 255, 255, 0.24)';
    document.getElementById('s3').style.backgroundColor = 'rgba(255, 255, 255, 0.24)';
}
function slide2(){
    document.getElementById('slide').src = "image/02.jpg";
    document.getElementById('s2').style.backgroundColor = 'white';
    document.getElementById('s1').style.backgroundColor = 'rgba(255, 255, 255, 0.24)';
    document.getElementById('s3').style.backgroundColor = 'rgba(255, 255, 255, 0.24)';
}
function slide3(){
    document.getElementById('slide').src = "image/03.jpg";
    document.getElementById('s3').style.backgroundColor = 'white';
    document.getElementById('s1').style.backgroundColor = 'rgba(255, 255, 255, 0.24)';
    document.getElementById('s2').style.backgroundColor = 'rgba(255, 255, 255, 0.24)';
}
