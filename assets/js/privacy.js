var en = "<h3>Our Privacy Policy</h3><p>It specifies how to handle the information provided when you use applications <strong>Jesus Password</strong>, further - program.</p><p><strong>The data that you provide.</strong> The data that you store in the application (the data account for Internet resources) are stored both locally and cloud service <strong>Microsoft OneDrive.</strong> All that you enter and save in rpm being used 'and there is' because we do not pass it to third parties. The program may collect, store and transmit usage statistics to improve, namely, the frequency of failures, launch, the number of records and so on.</p><p><strong>Attention!</strong> When installing the program you agree with the text above!</p><p>Yours faithfully,<br /> <strong>Verloka Vadim.</strong></p><p>Translation by Google Translator</p>";
var de = "<h3>Unsere Datenschutzerklärung</h3><p>Er gibt an, wie die Informationen zu behandeln zur Verfügung gestellt, wenn Sie Anwendungen verwenden <strong>Jesus Password</strong>, weiter - Programm.</p><p><strong>Daten, die Sie.</strong> Die Daten, die Sie in der Anwendung speichern (das Datenkonto für Internet-Ressourcen) sind sowohl lokal als auch Cloud-Dienst gespeichert <strong>Microsoft OneDrive.</strong> Alles, was Sie in Umdrehungen pro Minute eingeben und speichern verwendet wird 'und es ist', weil wir geben sie nicht an Dritte weitergegeben. Das Programm kann sammeln, zu speichern und Nutzungsstatistiken übertragen zu, und zwar verbessern, die Häufigkeit von Fehlern, zu starten, die Anzahl der Datensätze und so weiter.</p><p><strong>Achtung!</strong> Wenn Sie das Programm installieren stimmen Sie mit dem Text oben!</p><p>Mit freundlichen Grüßen,<br /> <strong>Werloka Wadim.</strong></p><p>Übersetzung Google Übersetzer.</p>";
var ru = "<h3>Наша политика конфиденциальности</h3><p>Определяет способ обращения с информацией, предоставляемой при использовании приложения <strong>Jesus Password</strong>, далее - программа.</p><p><strong>Данные которые Вы предоставляете.</strong> Данные которые Вы храните в приложении (данные учетных записей для интернет ресурсов) хранятся как локально так и облачном сервисе <strong>Microsoft OneDrive.</strong> Все что Вы вводите и сохраняете в прграмме 'там и остается' т.к. мы не передаем ее третим лицам. Программа может собирать, хранить и передавать статистику использования для улучшения работы, а именно, частоту сбоев, запусков, количество записей и тд.</p><p><strong>Внимание!</strong> Устанавливая программу Вы соглашаетесь с текстом выше!</p><p>С уважением,<br /> <strong>Верлока Вадим.</strong></p>";
var ua = "<h3>Наша політика конфіденційності</h3><p>Визначає спосіб поводження з інформацією, яка надається при використанні програми <strong>Jesus Password</strong>, далі - програма.</p><p><strong>Дані які Ви надаєте.</strong> Дані які Ви зберігаєте у програмі (дані облікових записів для інтернет ресурсів) зберігаються як локально так і хмарному сервісі <strong>Microsoft OneDrive.</strong> Все що Ви вводите і зберігаєте в прграмі 'там і лишається' тому що ми не передаємо її третім особам. Програма може збирати, зберігати і передавати статистику використання для поліпшення роботи, а саме, частоту збоїв, запусків, кількість записів і тд.</p><p><strong>Увага!</strong> Встановлюючи програму Ви погоджуєтеся з текстом вище!</p><p>З повагою,<br /> <strong>Верлока Вадим.</strong></p>";
var zh = "<h3>我们的隐私政策</h3><p>它规定，当您使用的应用程序如何处理所提供的信息 <strong>Jesus Password</strong>, 进一步的 - 程序。</p><p><strong>您提供的资料。</strong> 您在应用商店（数据占互联网资源）的数据存储在本地和云服务 <strong>Microsoft OneDrive.</strong> 您输入和保存rpm所有正在使用“，并有”，因为我们不把它传递给第三方。该程序可收集，存储和传送的使用统计来改善，即，故障，发射的次数，记录的数量等。</p><p><strong>警告！</strong> 当安装程序，你同意上面的文字！</p><p>真诚的，<br /> <strong>Verloka Vadim。</strong></p><p>翻译谷歌翻译</p>"
var jp = "<h3>私たちのプライバシーポリシー</h3><p>アプリケーションの使用時に提供される情報を処理する方法を定義します。 <strong>Jesus Password</strong>, さらに - プログラム。</p><p><strong>あなたが提供するデータ。</strong> アプリケーションに保存するデータ（インターネットリソースのアカウントデータ）は、ローカルとクラウドの両方に格納されます <strong>Microsoft OneDrive.</strong> あなたが入力して保存したすべてのプログラムは、そこに残っています。なぜなら、 それを第三者に譲渡することはありません。 プログラムは、パフォーマンス、すなわち失敗の頻度、開始回数、エントリ数などを向上させるために、使用統計を収集、格納、および送信することができます。</p><p><strong>注目してください！</strong> プログラムをインストールすることにより、上記のテキストに同意します！</p><p>敬具、<br /> <strong>Verloka Vadim.</strong></p>";


function GetPrivacyCode() {
    var $_GET = {};
    var __GET = window.location.search.substring(1).split("&");
    for (var i = 0; i < __GET.length; i++) {
        var getVar = __GET[i].split("=");
        $_GET[getVar[0]] = typeof (getVar[1]) == "undefined" ? "" : getVar[1];
    }
    return $_GET;
}
function GetPrivacyHTML() {
    switch (GetPrivacyCode().p) {
        default:
        case "en":
            return en;
        case "de":
            return de;
        case "ru":
            return ru;
        case "ua":
            return ua;
        case "zh":
            return zh;
		case "jp":
            return jp;
    }
}