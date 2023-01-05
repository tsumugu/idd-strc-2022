import { facilities } from "./facilities";
import { teachers } from "./teachers";

export const classes = {
  ui: {
    className: "UI/UXデザイン",
    key: "ui",
    img: require("@/assets/imgs/shindan/class/ui.png"),
    notextImg: require("@/assets/imgs/shindan/class_notext/ui.png"),
    about: "AdobeのXDを使って自分の理想のアプリをデザインすることができる授業。XDの使い方を知らなくても、授業内で丁寧に説明してくれる為、使い方で困る事はあまり無い",
    kataru: "商業用にデザインするには何を気を付けたら良いのか、どうやってデザインされているのかも教えてくれる為、デザインがあまり得意ではない人でも何処さえ気を付けていれば良いのか分かることができる。操作ボタンや細かい物をデザインするのが好きな人、スマホアプリを一度作ってみたいと思った人にはオススメ",
    teachers: [
      teachers.uemura
    ]
  },
  jouhou: {
    className: "情報設計演習",
    key: "jouhou",
    img: require("@/assets/imgs/shindan/class/jouhou.png"),
    notextImg: require("@/assets/imgs/shindan/class_notext/jouhou.png"),
    about: "グループワークがメインで、ウェブサイトを作れる授業。",
    kataru: "ジャーニーマップを制作したり、実装するまでの行程をグループで制作し、協力しながら取り組める授業。メンバーとの仲も自然に深まる。会社でのいろんな部との体験を味わえる授業でもある。サイト案はMIROやFigma、Adobe XDを使う。コンセプトを考えるのが好きな人、オリジナルサイトを一度は作ってみたい人、グループワークをやってみたい人にオススメ。",
    teachers: [
      teachers.taki
    ]
  },
  info: {
    className: "インフォグラフィック演習",
    key: "info",
    img: require("@/assets/imgs/shindan/class/info.png"),
    notextImg: require("@/assets/imgs/shindan/class_notext/info.png"),
    about: "自分のスタイル、グラフィックデザインが活かせる授業。",
    kataru: "1年次にインフォグラフィックスを学び、苦手意識を持っていたが、データや根拠などデザインに必要な感覚的ではない考え方が身に付く為、デザインをするうえでとても役立っている。課題内容は大枠のみ指定され、題材は自分で選ぶことが多い為、既に持っている知識などが参考になることがある。なので、好きなものややりたいことがはっきりしていて、かつグラフィックで表現したい人にオススメ。",
    teachers: [
      teachers.nagahara
    ],
    facilities: [
      facilities.epsonprinter
    ]
  },
  moji: {
    className: "文字表現演習",
    key: "moji",
    img: require("@/assets/imgs/shindan/class/moji.png"),
    notextImg: require("@/assets/imgs/shindan/class_notext/moji.png"),
    about: "陽気な先生と共に新しいフォントを考えられる授業。前半と後半で内容が異なり全体を通して飽きるタイミングがない。",
    kataru: "グリフィスというアプリを使用してフォントを作るので、タイポグラフィーに興味がある人だけでなく新たなツールを使いたい人にもオススメ!",
    teachers: [
      teachers.tsukada,
      teachers.hide
    ]
  },
  intara: {
    className: "インタラクティブ演習",
    key: "intara",
    img: require("@/assets/imgs/shindan/class/intara.png"),
    notextImg: require("@/assets/imgs/shindan/class_notext/intara.png"),
    about: "arduinoとUnityやprocessing、TouchDesignerと連携させて学ぶことが出来る授業。arduinoを使って電子工作をしたい方や、ものづくりがしたい人にはオススメ。",
    kataru: "コードが苦手な人は苦しいかもしれないけど、先生が授業内で簡単な例から優しく教えてくれる。また、scrapboxに今までの授業説明のスクショやポイントを書き残してくれる。課題は最終課題のみで実習日はSlackでの進捗報告なため、自分でスケジュールを考えて綿密に進める必要がある。",
    teachers: [
      teachers.fujimoto
    ],
    facilities: [
      facilities.arduino
    ]
  },
  programing: {
    className: "プログラミング演習",
    key: "programing",
    img: require("@/assets/imgs/shindan/class/programing.png"),
    notextImg: require("@/assets/imgs/shindan/class_notext/programing.png"),
    about: "毎週レクチャーがあり、その後に授業内課題をこなすので短時間でスキルが身に付く。TouchDesignerを使ったり、学んだものでプログラミング系ももちろん、グラフィックなど平面的な作品を作りたい人も素材などを作ることができる授業。",
    kataru: "1年生の頃の授業でProcessingやvisual studio codeを触って、プログラミングに対する苦手意識を持ってしまったが、プログラミング演習で使用したソフトのTouchDesignerはノードを繋げていくタイプだったので、それが私には合っていてとても楽しく学ぶことができた。毎週課題が出るので少し大変だが、先生に質問したり動画を見たりして積極的にこなしていけばかなり上達すると思う。",
    teachers: [
      teachers.aoki
    ]
  },
  ensyutu: {
    className: "演出表現演習",
    key: "ensyutu",
    img: require("@/assets/imgs/shindan/class/ensyutu.png"),
    notextImg: require("@/assets/imgs/shindan/class_notext/ensyutu.png"),
    about: "主に実写映像の映像制作を学ぶことができる授業。推奨はされていないが、2D・3Dアニメーションも制作可能。",
    kataru: "カメラや編集の知識がなくても先生が教えてくれたり研究室から借りることが出来る他、自前のカメラを使用することもできる。また、映像を撮影するために実習日の講評を休み、県外へ行くなどとても自由な制作スタイルで挑める。映像が好きな人にオススメ。",
    teachers: [
      teachers.hayashi
    ],
    facilities: [
      facilities.camera,
      facilities.studio
    ]
  },
  sutoteri: {
    className: "ストーリーテリング演習",
    key: "sutoteri",
    img: require("@/assets/imgs/shindan/class/sutoteri.png"),
    notextImg: require("@/assets/imgs/shindan/class_notext/sutoteri.png"),
    about: "広告やキャンペーンを学び、作る授業。",
    kataru: "自由に制作できるが、グループワークなので仲間との協力が必要になる。自由な形で提出していい為、アイデアを考えて形にするのが好きな人にはオススメの授業。",
    teachers: [
      teachers.aida
    ]
  },
  kondeza: {
    className: "コンテンツデザイン演習",
    key: "kondeza",
    img: require("@/assets/imgs/shindan/class/kondeza.png"),
    notextImg: require("@/assets/imgs/shindan/class_notext/kondeza.png"),
    about: "1からコンテンツを考え、そのプロモーションビデオまで制作する授業。また、グループワークの大切さを学べる授業でもある。",
    kataru: "コンテンツを考えるにあたって自分では思いつかない意見をたくさん吸収できるのでオススメ。またプロモーションビデオも制作するので動画編集技術やカメラワーク等も学ぶことができる。",
    teachers: [
      teachers.osada
    ]
  },
  tisiki: {
    className: "知識と表現演習",
    key: "tisiki",
    img: require("@/assets/imgs/shindan/class/tisiki.png"),
    notextImg: require("@/assets/imgs/shindan/class_notext/tisiki.png"),
    about: "テーマの魅力をまとめ→それを伝えるためにはどうすればいいかを設計し→模型やポスターなど何らかの形の作品としてまとめ→学期末のオーブンキャンパスで実際に展示する、という複合的な能力を実践的に学ぶことができる授業。",
    kataru: "授業でUnityというゲーム制作ソフトの使い方を教わることができる。院生の先輩がサポートしてくれるので初心者でも安心。自分でスケジュールを組み立てたり、やることを考えて進めることが必要なので、自律が求められる。自分で考えることが多い分、その考えを先生や他の受講者に説明するプレゼンの機会が多い。勝手に発表スキルが身につく。",
    teachers: [
      teachers.kusunoki
    ]
  },
  "3d": {
    className: "3D表現演習",
    key: "3d",
    img: require("@/assets/imgs/shindan/class/3d.png"),
    notextImg: require("@/assets/imgs/shindan/class_notext/3d.png"),
    about: "プロトタイピングの方法を実践的に学べる授業。プロトタイプとは、商品の価値をわかりやすく伝えたり、動作を検証するためにミニマムに動作する造形物のこと。",
    kataru: "ボール盤などの木工工作機械・3Dプリンター・レーザー加工機などの機械を使った加工や、3DCADを使った設計について学べる。このような機材を2年生のうちから扱える貴重な授業。塗装など仕上げの綺麗さも求められるので、普段からプラモデルなど工作が好きな人には特におすすめ。",
    teachers: [
      teachers.narita
    ],
    facilities: [
      facilities.printer_3d,
      facilities.drillpress,
      facilities.beltsander,
      facilities.lasercutter
    ]
  },
  tenji: {
    className: "展示計画演習",
    key: "tenji",
    img: require("@/assets/imgs/shindan/class/tenji.png"),
    notextImg: require("@/assets/imgs/shindan/class_notext/tenji.png"),
    about: "30人で1つの展示を作り上げる授業の為、グループワークの大切さを学べる授業でもある。",
    kataru: "30人で1つの展示を作るので展示のコンセプトを決める際などに衝突はあるが、すり合わせていく中でより良いものになっていく過程が個人的に勉強になった。展示班、Web班、カタログ班、総括、グラフィック班など様々な班に分かれて作業するので、自分のやりたいこともできる授業でもある。",
    teachers: [
      teachers.ando
    ]
  }
};