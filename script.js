const images = [
  { src: 'images/image_page1.jpg', text: 'みなさん、私のシンプルなウェブサイトへようこそ。これは、イスラムの奇跡を紹介し、なぜイスラムがあなたにとって正しい選択なのかを非常にシンプルに説得するためのものです。\nこのウェブサイトでは、クルアーン（イスラムの聖典）に記載された多くの奇跡や、現代科学がその正確性を証明した方法をご覧いただけます。\n右矢印をクリックして、始めましょう。\nこのクルアーンが1600年前に砂漠で紹介されたことを常に心に留めておいてください。ですので、ここでいくつかの奇跡があなたにとって些細に見えるかもしれませんが、常にこれが古代に書かれたものであることを忘れないでください。' },
  { src: 'images/image_page2.jpg', text: '<div class="quran-quote">天と，ノック者によって（誓う）。<br>ノック者が何であるかを，あなたに理解させるものは何か。<br>（それは）きらめき輝く星。</div>' +
'<p><a href="https://quranpedia.net/surah/1/86/book/1976" target="_blank" rel="noopener noreferrer">https://quranpedia.net/surah/1/86/book/1976</a></p>' +
'<div class="explanation-title">説明</div>' +
'<p>上記のクルアーンのパラグラフでは、神は空とノッカーによって誓います。しかし、ノッカーとは何でしょうか？答えは最後の文で「それは星です」と出てきます。これは奇妙で理解しにくいですよね？ノッカーと空の星との関連性は何でしょうか？</p>' +
'<p>答えはNASAからきました。そこで彼らは新しいタイプの星を発見しました。これらの星は電磁パルスを生成し、その音が木をノックする音に非常に似ています。それを聞くためには、下の動画をチェックしてください。面白いですね、そうでしょう？</p>' +
'<p><a href="https://www.youtube.com/shorts/NfV6zFuZiIk" target="_blank" rel="noopener noreferrer">参考</a></p>' },
  { src: 'images/image_page3.jpg', text: '<div class="quran-quote">2.ビザンチンの民は打ち負かされた。<br>3.近接する地において（打ち負かされた）。だがかれらは，（この）敗北の後直ぐに勝つであろう。</div>' +
'<p><a href="https://quranpedia.net/surah/1/30/book/1976" target="_blank" rel="noopener noreferrer">https://quranpedia.net/surah/1/30/book/1976</a></p>' +
'<div class="explanation-title">説明</div>' +
'<p>この部分は、約1600年前にローマ帝国とペルシャの間で行われた古い戦争を描いています（ペルシャが勝利しました）。それは単にその戦争が最も低い地点で起きたこと（死海の近く）だけでなく、またローマが数年以内にペルシャを打ち破るであろうこと（実際には10年未満で実現しました）も述べています。</p>' +
'<p><a href="https://example.com/reference1" target="_blank" rel="noopener noreferrer">参考</a></p>' +
'<p><a href="https://example.com/reference2" target="_blank" rel="noopener noreferrer">参考</a></p>' },
  { src: 'images/image_page4.jpg', text: '<div class="quran-quote">75.わたしは，沈んでゆく星にかけて誓う。<br>76.それは本当に偉大な誓いである。もしあなたがたに分るならば，</div>' +
'<p><a href="https://quranpedia.net/surah/1/56/book/1976" target="_blank" rel="noopener noreferrer">https://quranpedia.net/surah/1/56/book/1976</a></p>' +
'<div class="explanation-title">説明</div>' +
'<p>この部分で、神は星の位置を誓わないと述べています。その理由は20世紀になるまで分かりませんでした。アルバート・アインシュタインが発見するまで、空の星は実際の場所にないことがわかりませんでした。星の光が私たちに届くのに非常に長い時間（数百万年かかるかもしれません）がかかるため、空に見える星は実際の時間の位置にないのです。</p>' +
'<p><a href="https://example.com/reference" target="_blank" rel="noopener noreferrer">参考</a></p>' },
  { src: 'images/image_page5.jpg', text: '<div class="quran-quote">われは誓う、隠れる諸星に。それらはいずれ現れる。<br>そして軌道を走り、そして暁と共に沈むもの。それは、自分の穴に戻るガゼルのようなもの。</div>' +
'<p><a href="https://quranpedia.net/surah/1/81/book/1976" target="_blank" rel="noopener noreferrer">https://quranpedia.net/surah/1/81/book/1976</a></p>' +
'<div class="explanation-title">説明</div>' +
'<p>この部分は非常に興味深いですね。ほとんど見えない空の中のもので、絶えず動き回り、その通り道にあるものを引き寄せてしまうものは何だと思いますか？答えはブラックホールです。</p>' +
'<p><a href="https://example.com/reference" target="_blank" rel="noopener noreferrer">参考</a></p>' },
  { src: 'images/image_page6.jpg', text: '<div class="quran-quote">また山々を、大地の安定のための杭にしたではないか。</div>' +
'<p><a href="https://quranpedia.net/surah/1/78/book/27828" target="_blank" rel="noopener noreferrer">https://quranpedia.net/surah/1/78/book/27828</a></p>' +
'<div class="explanation-title">説明</div>' +
'<p>この部分では、クルアーンは山を地球の安定のための杭や支柱として言及しています。驚くべきことに、現代の科学は山が地球の地殻を安定させるために地球の下に杭のような働きをすることを証明しました。</p>' +
'<p><a href="https://example.com/reference1" target="_blank" rel="noopener noreferrer">参考</a></p>' +
'<p>1. Lisitzin, E. (1974) “Sea level changes”. Elsevier Oceanography Series, 8.</p>' +
'<p>2. AB Watts (2001). Isostasy and Flexure of the Lithosphere. Cambridge University Press.</p>' +
'<p>3. Crittenden, M. D., Jr., 1963, Effective viscosity of the earth derived from isostatic loading of Pleistocene Lake Bonneville: Journal of Geophysical Research, v. 68, p. 5517-5530.</p>' +
'<p>4. Farrand, W. R., 1962, Postglacial rebound in North America: American Journal of Science, v. 260, p. 181-198.</p>' +
'<p>5. Gutenberg, B., 1941, Changes in sea level, post-glacial uplift, and mobility of the</p>' },
  { src: 'images/image_page7.jpg', text: '<div class="quran-quote">アッラーは二つの海を塩水と真水とで混ぜ、目に見えるかたちで合わさるようにした。<br>二つの間にはそれぞれが侵食しないように壁があり、真水は真水のまま、塩水は塩水のまま保たれる。</div>' +
'<p><a href="https://quranpedia.net/surah/1/55/book/1976" target="_blank" rel="noopener noreferrer">https://quranpedia.net/surah/1/55/book/1976</a></p>' +
'<div class="explanation-title">説明</div>' +
'<p>アッラーはここで、２つの海が交わる地点を描写しています。視覚的には同じように見えますが、実際には混ざっていません。現代の科学は、海と川の交わる地点が水の性質の違いから完全に混ざっていないことを証明しました。空から見ると、それは非常に明確です。</p>' },
  { src: 'images/image_page8.jpg', text: '<div class="quran-quote">また、かれらへの唯一性の印の1つには、太陽がある。それはアッラーの定めに従って、ある一点までは動いて、それ以上を越えることはない。それは偉大なお方の定めであり誰の挑戦も受けず、そのお方からは何事も隠すことはできないのである。</div>' +
'<p><a href="https://quranpedia.net/surah/1/36/book/27828" target="_blank" rel="noopener noreferrer">https://quranpedia.net/surah/1/36/book/27828</a></p>' +
'<div class="explanation-title">説明</div>' +
'<p>長い間、太陽が中心で、他のすべてがその周りを動いていると信じられてきました。しかし最近の証拠によれば、宇宙の中ですべてが動いている、太陽も含めてです。これがこの部分が取り巻く内容です。リソースを表示する必要はありませんね？</p>' +
'<p><a href="https://example.com/reference" target="_blank" rel="noopener noreferrer">参考</a></p>' },
  { src: 'images/image_page9.jpg', text: '<div class="quran-quote">アッラーを否定する者たちは、諸天と大地がかつて重なり合っていて、隙間なくそこから雨が降っていたのをわれらが両者をわけ、天から地へ降る雨によりすべての動植物をつくったのを知らないのか。それを考慮してアッラーのみを信じようとはしないのか。</div>' +
'<p><a href="https://quranpedia.net/surah/1/21/book/1976" target="_blank" rel="noopener noreferrer">https://quranpedia.net/surah/1/21/book/1976</a></p>' +
'<div class="explanation-title">説明</div>' +
'<p>ここでは2つのことが言及されています。ビッグバン理論と、すべての生命体が水に依存しているという事実です。アッラーはここで地球が空から噴火したことを語り、またあらゆる生命体が生きるために水に依存していることも述べています。</p>' +
'<p><a href="https://example.com/reference" target="_blank" rel="noopener noreferrer">参考</a></p>' },
  { src: 'images/image_page10.jpg', text: '<div class="quran-quote">諸天をわれらは打ち立て、力によってその構築を完全なものとした。われらはその両端をさらに広げよう。</div>' +
'<p><a href="https://quranpedia.net/surah/1/51/book/27828" target="_blank" rel="noopener noreferrer">https://quranpedia.net/surah/1/51/book/27828</a></p>' +
'<div class="explanation-title">説明</div>' +
'<p>最近まで、宇宙のサイズは限定されていると信じられていました。現代の科学がそれを証明するまで、誰もが宇宙が拡大していることを知りませんでした。この部分はまた、アッラーが宇宙を創造し、それが拡大し続けていることを描写しています。</p>' +
'<p><a href="https://example.com/reference1" target="_blank" rel="noopener noreferrer">参考</a></p>' +
'<p><a href="https://example.com/reference2" target="_blank" rel="noopener noreferrer">参考</a></p>' },
  { src: 'images/image_page11.jpg', text: '<div class="quran-quote">7.また山々を，杭としたてはないか。</div>' +
'<p><a href="https://quranpedia.net/surah/1/78/book/1976" target="_blank" rel="noopener noreferrer">https://quranpedia.net.com/surah/1/78/book/1976</a></p>' +
'<div class="explanation-title">説明</div>' +
'<p>この部分では、クルアーンは山を杭と表現しています。最近の研究により、大陸地が実際に溶岩の上に浮いており、山が地殻を支える杭の役割を果たしていることが証明されました。山は地中に深い根を持ち、これは以前知られていませんでした。</p>' },
  { src: 'images/image_page12.jpg', text: '<div class="quran-quote">かれはあなたがたを一つの魂から創り，それからその配偶者を創り，またかれは8頭の家畜を雌雄であなたがたに遣わされた。かれはあなたがたを母の胎内に創られ，3つの暗黒の中において，創造につぐ創造をなされた。このように，あなたがたの主アッラーに大権は属する。かれの外に神はないのである。なのにあなたがたはどうして背き去るのか。</div>' +
'<p><a href="https://quranpedia.net/surah/1/39/book/1976" target="_blank" rel="noopener noreferrer">https://quranpedia.net/surah/1/39/book/1976</a></p>' +
'<div class="explanation-title">説明</div>' +
'<p>クルアーンがここで議論している3つの種類の暗黒は何ですか？答えはかなり興味深いです。胎児の暗黒、その中に胎児がある胎盤の暗黒、そして腹部の暗黒、女性の腹部です。</p>' },
  { src: 'images/image_page13.jpg', text: '<div class="quran-quote">それからまだ煙（のよう）であった天に転じられた。そして天と地に向かって，『両者は，好むと好まざるとに関わらず，われに来たれ。」と仰せられた。天地は（答えて），『わたしたちは喜んで参上します。』と申し上げた</div>' +
'<p><a href="https://quranpedia.net/surah/1/41/book/1976" target="_blank" rel="noopener noreferrer">https://quranpedia.net/surah/1/41/book/1976</a></p>' +
'<div class="explanation-title">説明</div>' +
'<p>それは奇妙ですね。長い間、私たちは空が固体の物体でいっぱいだと考えていました。私たちは、一部の星（さらには一部の惑星）が煙やガスから創造されたとは知りませんでした。</p>' +
'<p><a href="https://example.com/reference" target="_blank" rel="noopener noreferrer">参考</a></p>' },
  { src: 'images/image_page14.jpg', text: '<div class="quran-quote">アッラー*が誰かを導くことをお望みになれば、かれはその者の胸を服従（イスラーム*）へと広げて下さる。また、かれが誰かを迷わせることをお望みになれば、かれはその者の胸をひどく狭められる。それは、あたかも（上）空に何とか昇ろうとする¹ようなもの。同様にアッラー*は、信仰しない者たちに穢れ²をお与えになるのだ。</div>' +
'<p><a href="https://quranpedia.net/surah/1/6/book/27817" target="_blank" rel="noopener noreferrer">https://quranpedia.net/surah/1/6/book/27817</a></p>' +
'<div class="explanation-title">説明</div>' +
'<p>Allahはここで、自分の存在を否定し、空に上昇しているような痛みを感じる人の例を挙げています。空では空気圧が低いため、同じ感覚を得ることができると知っていますよね？</p>' +
'<p><a href="https://example.com/reference1" target="_blank" rel="noopener noreferrer">参考</a></p>' +
'<p><a href="https://example.com/reference2" target="_blank" rel="noopener noreferrer">参考</a></p>' +
'<p><a href="https://example.com/reference3" target="_blank" rel="noopener noreferrer">参考</a></p>' },
  { src: 'images/image_page15.jpg', text: '<div class="quran-quote">37.またかれらへの印には，夜がある。われがそれから昼を退かせると，見よ，真っ暗になる。<br>https://quranpedia.net/surah/1/36/book/1976<br>5.かれは灯明（星）をもって，最下層の天を飾り，悪魔たちに対する磔（流星）となし，またかれらのために烈火の懲罰を準備した<br>https://quranpedia.net/surah/1/67/book/1976</div>' +
'<div class="explanation-title">説明</div>' +
'<p>二つの尊い詩句に示されているように、宇宙は深い闇に包まれており、私たちは地球の表面で明るい日中であっても同様です。科学者たちは、太陽系に属する地球や他の惑星が明るい日中に照らされているのを見てきましたが、その周りの天空は深い闇に覆われています。ムハンマド、神に祝福と平安あれ、の時代に、闇が宇宙の支配的な状態であることを誰が知っていたでしょうか？そして、これらの銀河や星々が、周囲を取り囲む広大な宇宙の闇をほんのわずかに照らすだけの小さな弱いランプであることを、装飾やランプのように見えるだけであるということを、誰が知っていたでしょうか？</p>' },
  { src: 'images/image_page16.jpg', text: '<div class="quran-quote">32.更にわれは，天を屋根とし守護した。それでもかれらは，これらの印から背き去る。</div>' +
'<p><a href="https://quranpedia.net/surah/1/21/book/1976" target="_blank" rel="noopener noreferrer">https://quranpedia.net/surah/1/21/book/1976</a></p>' +
'<div class="explanation-title">説明</div>' +
'<p>現代の科学は、地球を取り囲む大気の存在を証明しています。この大気は有害な太陽光線や破壊的な隕石から地球を保護します。これらの隕石が地球の大気に触れると、その接触によって点火され、私たちには夜に空から大きな速さで落下する小さな発光塊として現れます。その後、すぐに消えて消えてしまい、これが私たちが流星と呼ぶものです。</p>' +
'<p><a href="https://example.com/reference" target="_blank" rel="noopener noreferrer">参考</a></p>' },
  { src: 'images/image_page17.jpg', text: '<div class="quran-quote">88.あなたは山々を見て堅固であると思うだろう。だがそれは雲が散るように通り過ぎていくのである。それは凡てのものを，完成なされるアッラーの御業である。本当にかれはあなたがたの行うことを熟知なされる</div>' +
'<p><a href="https://quranpedia.net/surah/1/27/book/1976" target="_blank" rel="noopener noreferrer">https://quranpedia.net/surah/1/27/book/1976</a></p>' +
'<div class="explanation-title">説明</div>' +
'<p>私たちはみな、山が固定されていることを知っていますが、もし地球から重力や大気から離れて上昇し、地球の回転を見ると、地球が驚異的な速さで回転しているのを見るでしょう（時速100マイル）、その後、山々が雲のように動いているように見えます。つまり、その動きは固有のものではなく、むしろ地球の動きにリンクしているということです。動かない雲のように、自ら動くのではなく、風によって駆動されています。そして、これが地球の動きの証拠です。</p>' },
  { src: 'images/image_page18.jpg', text: '<div class="quran-quote">22.またわれは豊沃にする風を送り，天から雨を降らせて，それをあなたがたに飲ませる。だがあなたがたはその（宝庫の）管理者ではない。</div>' +
'<p><a href="https://quranpedia.net/surah/1/15/book/1976" target="_blank" rel="noopener noreferrer">https://quranpedia.net/surah/1/15/book/1976</a></p>' +
'<div class="explanation-title">説明</div>' +
'<p>これは、風の利点の1つとして、風が花粉粒子を運び、後で果物になる花を受粉させることができるということが現代科学で証明されています。</p>' },
  { src: 'images/image_page19.jpg', text: '<div class="quran-quote">本当にわが印を信じない者は，やがて火獄に投げ込まれよう。かれらの皮膚が焼け尽きる度に，われは他の皮膚でこれに替え，かれらに（飽くまで）懲罰を味わわせるであろう。誠にアッラーは偉力ならびなく英明であられる。</div>' +
'<p><a href="https://quranpedia.net/surah/1/4/book/1976" target="_blank" rel="noopener noreferrer">https://quranpedia.net/surah/1/4/book/1976</a></p>' +
'<div class="explanation-title">説明</div>' +
'<p>現代科学は、痛みや熱に関連する感覚粒子が皮膚層にのみ存在することを証明しています。そして、皮膚はその下の筋肉や他のものと一緒に焼けるにも関わらず、クルアーンではそれらを言及していません。なぜなら、痛みの感覚は皮膚層に特有のものだからです。</p>' },
  { src: 'images/image_page20.jpg', text: '<div class="quran-quote">また（不信者の状態は），深海の暗黒のようなもので，波がかれらを覆い，その上に（また）波があり，その上を（更に）雲が覆っている。暗黒の上に暗黒が重なる。かれが手を差し伸べても凡んどそれは見られない。アッラーが光を与えられない者には，光はない。</div>' +
'<p><a href="https://quranpedia.net/surah/1/24/book/1976" target="_blank" rel="noopener noreferrer">https://quranpedia.net/surah/1/24/book/1976</a></p>' +
'<div class="explanation-title">説明</div>' +
'<p>古代の人間は、2分以上息を止めることができなかったため、15メートル以上潜ることができませんでした。また、彼の体内の血管は水の圧力で爆発してしまう可能性がありました。 20世紀に潜水艦が利用可能になった後、科学者たちは海底が非常に暗いことを発見しました。また、すべての海には2層の水があることも発見されました。 最初の層は深くて非常に暗く、強い波に覆われています。そして、もう1つの層は表面的で、また暗く、海面の波に覆われています。</p>' +
'<p>アメリカの科学者（ヒル）は、このクルアーンの偉大さに驚きました。そして、その驚異がクルアーンの一節の後半で議論されたとき、その驚きはさらに増しました。気象条件は北米、ロシア、極近くのスカンジナビア諸国にしか起こらず、これらはムハンマドの時代には発見されていませんでした。</p>' +
'<p><a href="https://example.com/reference" target="_blank" rel="noopener noreferrer">参考</a></p>' },
  { src: 'images/image_page21.jpg', text: '<div class="quran-quote">あなたがたは見ないか。アッラーは雲を駆り，やがてそれを相い合わせ，さらに固まりにされ，やがて慈雨が，その間から降るのを。また雹を含む，山（のような雲）を天から下し，かれは，御好みの者をそれで撃ち，御好みの者を避けられる。稲妻の閃きは，本当に目を奪おうとする。</div>' +
'<p><a href="https://quranpedia.net/surah/1/24/book/1976" target="_blank" rel="noopener noreferrer">https://quranpedia.net/surah/1/24/book/1976</a></p>' +
'<div class="explanation-title">説明</div>' +
'<p>科学者たちは言います。積乱雲の形成は、風によって押しやられた数個の細胞、綿の塊のようなものから始まり、それらが合体して高さ45,000フィートに達する巨大な山のような雲を形成します。雲の頂部はその基部と比べて非常に寒く、この温度差のために渦巻が生成され、雲の中で雹が形成されることにつながります。山型の雲の頂点は、まばゆい火花を放つ電気放電を引き起こし、これが空中のパイロットに一時的な失明と呼ばれるものをもたらします。そして、これがまさにクルアーンの一節で描写されていることです。</p>' },
  { src: 'images/image_page22.jpg', text: '<div class="quran-quote">12.われは泥の精髄から人間を創った。<br>13.次に，われはかれを精液の一滴として，堅固な住みかに納めた。<br>14.それからわれは，その精滴を一つの血の塊に創り，次にその塊から肉塊を創り，次いでその肉塊から骨を創り，次に肉でその骨を覆い，それからかれを外の生命体に創り上げた。ああ，何と素晴しいアッラー，最も優れた創造者であられる。</div>' +
'<p><a href="https://quranpedia.net/surah/1/23/book/1976" target="_blank" rel="noopener noreferrer">https://quranpedia.net/surah/1/23/book/1976</a></p>' +
'<div class="quran-quote">5.人びとよ，あなたがたは復活に就いて疑うのか。われがあなたがたを創る際には先ず土から始め，次いで精液の一滴，次いで血の固まりとし，更に形をなした。また形をなさない肉魂から （あなたがたを創った）。あなたがたに（わが偉力を）明示するためである。われは欲する者を ，定めた時期まで胎内に置き，それから赤ん坊としてあなたがたを出生させ，それから成年に到達させる。あなたがたの中或る者は（若くして）死なせる者もあり，また或る者は何がしかを知った後，凡て忘れ去る程に弱まる老齢に返される者もある。またあなたは大地が枯れて荒れ果てるのを見よう。だがわれが一度それに雨を降らせると，（生気が）躍動し膨らんで，凡ての植物が雌雄で美しく萌え出る。</div>' +
'<p><a href="https://quranpedia.net/surah/1/23/book/1976" target="_blank" rel="noopener noreferrer">https://quranpedia.net/surah/1/23/book/1976</a></p>' +
'<div class="explanation-title">説明</div>' +
'<p>前の尊い節から、人間の創造が次の段階で行われることが明らかです。</p>' +
'<p>1- 土: これを示す証拠は、人体を構成するすべての鉱物と有機物が土や粘土に存在することです。2番目の証拠は、彼の死後、それが土とまったく同じように塵になることです。</p>' +
'<p>2- 精子: それは卵の壁に貫通し、受精卵（配偶子精子）を生じ、その配偶子精子の細胞分裂を刺激して、それが成長して増殖するまでの細胞分裂が行われます。これにより、統合された胎児が形成されます。全能者の言葉にあるように、「実に、我々は人間を配偶子精子から創造しました。」（人間: 2）</p>' +
'<p>3- ヒル: 受精卵で起こる細胞分裂の後、マスターセルが形成されます。このマスターセルは、その微視的な外観においてベリー（ヒル）に似ており、子宮壁に付着して、そこから必要な栄養を血管から摂取する驚異的な能力で特徴付けられます。</p>' +
'<p>4- 胎児: 胎児の細胞は、肢やさまざまな臓器、身体のシステムのつぼみを生じるように作られています。したがって、それらは合成細胞で構成されていますが、胎児を取り囲む膜（絨毛膜および後に胎児に変化するへその緒）は非合成細胞であり、顕微鏡的な研究の結果、胎児の胎児段階の形が現れます。噛んだ肉や歯の痕跡がついたガムのように見えることがわかります。</p>' +
'<p>これは全能者の言葉（創造された胎児と未創造の胎児）を確認しませんか？ムハンマドは、この真実を知るためのエコー装置を持っていたのでしょうか？</p>' +
'<p>5- 骨の出現: 骨が胎児段階の終わりに出現し始めることが科学的に証明されており、これは詩句に記載された順序と一致しています（我々は胎児を骨として創造しました）。</p>' +
'<p>6- 骨に肉を覆う: 現代の胎児学は、骨の数週間後に筋肉（肉）が形成されることを証明しています。そして、筋肉の覆いは、胎児の皮膚の覆いとともに胎児を伴います。これは全能者の言葉（我々は骨に肉を覆いました）と完全に一致しています。</p>' +
'<p>妊娠7週目が終わる頃には、胎児形成の段階が終了し、その形は胎児に似るようになります。成長し、成長を完了し、身長と体重を増やし、おなじみの形になるために、少しの時間が必要です。</p>' },
  { src: 'images/image_page23.jpg', text: '<div class="quran-quote">14.仮令われがかれらのために天の門を開いて，（随時）かれらを登らせようとしても，<br>15.かれらは必ず，「わたしたちの目は本当に眩んでしまった。いやわたしたちは魔法にかけられている。」と言うであろう。</div>' +
'<p><a href="https://quranpedia.net/surah/1/15/book/1976" target="_blank" rel="noopener noreferrer">https://quranpedia.net/surah/1/15/book/1976</a></p>' +
'<div class="explanation-title">説明</div>' +
'<p>人類が宇宙に到達できるようになった後、彼は、宇宙の大部分が完全な闇に覆われていること、そして太陽に面した半球の昼間帯が海面上空でわずか200キロしかないことを発見しました。その上空に人が上昇すれば、彼は太陽を漆黒のページの上の青い円盤として見るでしょう。</p>' +
'<p>聖クルアーンは、科学がそれを発見する前に、空を通って上昇する者を、目が曇った者に例え、彼がもはや何も見えず、完全な暗闇と全くの暗闇しか見ないようにしました。あるいは、彼を魔法にかかった者に例え、周りで起こっていることを理解しなくなった者に例えました。これらの比喩の両方が、最初の宇宙飛行士が昼光の範囲を超え、宇宙の暗闇に入った時に起こったことを正確に表現しています。そして、彼らはクルアーンの詩が私たちに伝えたこととほぼ同じ表現をした、それについての知識なしに。</p>' +
'<p><a href="https://example.com/reference1" target="_blank" rel="noopener noreferrer">参考</a></p>' +
'<p><a href="https://example.com/reference2" target="_blank" rel="noopener noreferrer">参考</a></p>' },
  { src: 'images/image_page24.jpg', text: '<div class="quran-quote">41.アッラーを差し置いて外の主人を取る者を譬えれば，（自分で自分の）家を造る蜘蛛のようなものである。本当に家の中でも最も弱いのは，蜘蛛の家である。かれらに分っていたならば，よかったのに。</div>' +
'<p><a href="https://quranpedia.net/surah/1/29/book/1976" target="_blank" rel="noopener noreferrer">https://quranpedia.net/surah/1/29/book/1976</a></p>' +
'<p>この部分は、日本語では性別を示す代名詞がないため、あまり明確にならないかもしれません。アラビア語では、この部分は雌のクモを指し、雄のクモではありません。これは、最近の発見によるもので、クモが巣を作っているのを見ると、そのクモは雌性のクモであることがわかります。なぜなら、雄のクモは昆虫を捕らえるために巣を使いますが、巣の建設には向いていないからです。</p>' +
'<p><a href="https://example.com/reference1" target="_blank" rel="noopener noreferrer">参考</a></p>' +
'<p><a href="https://example.com/reference2" target="_blank" rel="noopener noreferrer">参考</a></p>' },
  { src: 'images/image_page25.jpg', text: 'コンテンツはここまでです。ウェブサイトをご利用いただきありがとうございます。イスラムとその奇跡についての理解を深める一助となれば幸いです。さらにご質問がある場合や、イスラムについてもっと学びたい場合は、地域のイスラムセンターにお問い合わせいただくか、信頼できる情報源をオンラインで検索してください。\n\n平和あれ。' }
];

let currentImageIndex = 0;

const galleryImage = document.getElementById('gallery-image');
const galleryText = document.getElementById('gallery-text');
const prevButton = document.getElementById('prev-button');
const nextButton = document.getElementById('next-button');

function showImage(index) {
  if (images && images.length > 0 && images[index]) {
    galleryImage.src = images[index].src;
    // Update to use innerHTML instead of textContent
    galleryText.innerHTML = images[index].text;
    currentImageIndex = index;
  } else {
    galleryImage.src = '';
    // Clear innerHTML as well
    galleryText.innerHTML = 'Error: Image data is missing or corrupt.';
    console.error('Error: images array is not properly initialized or index is out of bounds. Index:', index, 'Images:', images);
  }
}

prevButton.addEventListener('click', () => {
  if (images && images.length > 0) {
    currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
    showImage(currentImageIndex);
  }
});

nextButton.addEventListener('click', () => {
  if (images && images.length > 0) {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    showImage(currentImageIndex);
  }
});

if (images && images.length > 0) {
  showImage(currentImageIndex);
} else {
  galleryImage.src = '';
  // Clear innerHTML as well
  galleryText.innerHTML = 'No images loaded. Please check the image data.';
  console.error('Initial load error: images array is empty or undefined.');
}
