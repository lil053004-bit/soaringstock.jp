import { ArrowLeft, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Terms() {
  return (
    <div className="bg-white" style={{ minHeight: 'calc(100vh - 200px)' }}>
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-yellow-dark hover:text-yellow-deeper mb-6"
        >
          <ArrowLeft className="w-4 h-4" />
          トップページに戻る
        </Link>

        <div className="bg-white rounded-xl shadow-card-shadow p-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-yellow-primary/10 p-3 rounded-lg">
              <FileText className="w-6 h-6 text-yellow-dark" />
            </div>
            <h1 className="text-3xl font-bold text-gray-900">利用規約</h1>
          </div>

          <div className="prose max-w-none">
            <p className="text-sm text-gray-600 mb-6">最終更新日: 2025年10月21日</p>

            <section className="mb-8">
              <h2 className="text-xl font-bold text-gray-900 mb-4">第1条（適用）</h2>
              <p className="text-gray-700 leading-relaxed mb-3">
                本規約は、AI株式情報分析サービス（以下「当サービス」といいます）の利用に関する条件を、当サービスを利用する全ての方（以下「利用者」といいます）と株式会社マーケットインサイト（以下「当社」といいます）との間で定めるものです。
              </p>
              <p className="text-gray-700 leading-relaxed">
                利用者は、当サービスを利用することにより、本規約の全ての内容に同意したものとみなされます。
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-bold text-gray-900 mb-4">第2条（サービスの内容）</h2>
              <p className="text-gray-700 leading-relaxed mb-3">
                当サービスは、AI技術を活用して公開市場データを集約・表示し、参考情報として利用者に提供する情報提供サービスです。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                当サービスは以下の機能を提供します：
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li>公開市場データの集約・表示</li>
                <li>株価チャートの可視化</li>
                <li>市場データに基づく参考情報レポートの生成</li>
                <li>公開情報の集約・統計</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-bold text-gray-900 mb-4">第3条（利用上の注意事項）</h2>
              <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-4">
                <p className="text-red-900 font-bold mb-2">重要な注意事項</p>
                <div className="space-y-2 text-gray-700 leading-relaxed">
                  <p>
                    <strong>【参考情報提供サービス】</strong><br />
                    当サービスは公開市場データに基づく参考情報の提供のみを目的としており、投資助言業務、投資一任業務、金融商品仲介業務には該当しません。特定銘柄の売買推奨や投資助言を行うものではありません。
                  </p>
                  <p>
                    <strong>【投資リスク】</strong><br />
                    株式投資には価格変動リスク、信用リスク、流動性リスク等が伴い、元本割れの可能性があります。過去のデータや情報は将来の運用成果を示唆・保証するものではありません。
                  </p>
                  <p>
                    <strong>【投資判断の責任】</strong><br />
                    最終的な投資判断は、必ず利用者ご自身の責任において行ってください。当サービスの利用により生じたいかなる損害についても、当社は一切の責任を負いません。
                  </p>
                  <p>
                    <strong>【金融商品取引業者ではありません】</strong><br />
                    当社は金融商品取引業者（投資助言・代理業、投資運用業等）ではありません。金融商品取引法第29条の登録を受けた事業者ではないため、個別の投資助言や特定銘柄の売買推奨を行うことはできません。
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-bold text-gray-900 mb-4">第4条（AI分析の限界と不確実性）</h2>
              <p className="text-gray-700 leading-relaxed mb-3">
                当サービスの情報は、公開市場データを集約した参考情報であり、以下の限界があります：
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li>将来の市場状況や株価、運用成果を示唆・保証するものではありません</li>
                <li>一般的な市場分析の手法に基づく参考情報です</li>
                <li>突発的な市場変動、企業の重大な発表、経済情勢の変化等を完全に反映することはできません</li>
                <li>分析結果の正確性、完全性、有用性について保証するものではありません</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-bold text-gray-900 mb-4">第5条（禁止事項）</h2>
              <p className="text-gray-700 leading-relaxed mb-3">
                利用者は、当サービスの利用にあたり、以下の行為を行ってはなりません：
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li>法令または公序良俗に違反する行為</li>
                <li>犯罪行為に関連する行為</li>
                <li>当サービスの運営を妨害する行為</li>
                <li>他の利用者または第三者の権利を侵害する行為</li>
                <li>虚偽の情報を登録する行為</li>
                <li>当サービスの情報を商業目的で利用する行為</li>
                <li>不正アクセスまたはこれを試みる行為</li>
                <li>当サービスのシステムに過度な負荷をかける行為</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-bold text-gray-900 mb-4">第6条（知的財産権）</h2>
              <p className="text-gray-700 leading-relaxed mb-3">
                当サービスに含まれるコンテンツ、テキスト、画像、プログラム等の著作権その他の知的財産権は、当社または当社にライセンスを許諾している者に帰属します。
              </p>
              <p className="text-gray-700 leading-relaxed">
                利用者は、当社の事前の書面による承諾なく、これらを複製、転載、配布、改変等することはできません。
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-bold text-gray-900 mb-4">第7条（免責事項）</h2>
              <p className="text-gray-700 leading-relaxed mb-3">
                当社は、当サービスの内容、品質、正確性、完全性、有用性について、いかなる保証も行いません。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                当サービスの利用により利用者に生じた損害について、当社は一切の責任を負いません。ただし、当社の故意または重過失による場合はこの限りではありません。
              </p>
              <p className="text-gray-700 leading-relaxed">
                当サービスの提供の遅延、中断、停止、データの消失等について、当社は一切の責任を負いません。
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-bold text-gray-900 mb-4">第8条（サービスの変更・停止）</h2>
              <p className="text-gray-700 leading-relaxed">
                当社は、利用者への事前の通知なく、当サービスの内容を変更し、または当サービスの提供を停止することができるものとします。
                これにより利用者に生じた損害について、当社は一切の責任を負いません。
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-bold text-gray-900 mb-4">第9条（個人情報の取扱い）</h2>
              <p className="text-gray-700 leading-relaxed">
                当社は、利用者の個人情報を、当社が別途定めるプライバシーポリシーに従って適切に取り扱います。
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-bold text-gray-900 mb-4">第10条（規約の変更）</h2>
              <p className="text-gray-700 leading-relaxed">
                当社は、必要に応じて本規約を変更することができます。変更後の規約は、当サービス上に掲載された時点から効力を生じるものとします。
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-bold text-gray-900 mb-4">第11条（準拠法および管轄裁判所）</h2>
              <p className="text-gray-700 leading-relaxed mb-3">
                本規約の解釈にあたっては、日本法を準拠法とします。
              </p>
              <p className="text-gray-700 leading-relaxed">
                当サービスに関して紛争が生じた場合には、東京地方裁判所を専属的合意管轄裁判所とします。
              </p>
            </section>

            <div className="bg-slate-100 rounded-lg p-6 mt-8">
              <h3 className="font-bold text-gray-900 mb-3">お問い合わせ</h3>
              <p className="text-sm text-gray-700">
                本規約に関するご質問やご不明な点がございましたら、お問い合わせフォームよりご連絡ください。
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
