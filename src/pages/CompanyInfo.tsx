import { ArrowLeft, Building, MapPin, Calendar, Briefcase, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function CompanyInfo() {
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
              <Building className="w-6 h-6 text-yellow-dark" />
            </div>
            <h1 className="text-3xl font-bold text-gray-900">会社概要</h1>
          </div>

          <div className="prose max-w-none">
            <section className="mb-8">
              <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg p-6 border-l-4 border-blue-500">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">株式会社サーチエンジン</h2>
                <p className="text-gray-700 text-lg">Search Engine Co., Ltd.</p>
              </div>
            </section>

            <section className="mb-8">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-slate-50 rounded-lg p-6 border border-slate-200">
                  <div className="flex items-start gap-3 mb-3">
                    <MapPin className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-bold text-gray-900 mb-2">所在地</h3>
                      <p className="text-gray-700 leading-relaxed">
                        〒107-0062<br />
                        東京都港区南青山3-13-14 南青山ビル4階
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-slate-50 rounded-lg p-6 border border-slate-200">
                  <div className="flex items-start gap-3 mb-3">
                    <Calendar className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-bold text-gray-900 mb-2">設立</h3>
                      <p className="text-gray-700 text-lg">2013年7月</p>
                      <h3 className="font-bold text-gray-900 mb-2 mt-4">業種</h3>
                      <p className="text-gray-700">SEO／デジタルマーケティング／広告運用</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <div className="bg-blue-50 rounded-lg p-6 border-l-4 border-blue-500">
                <div className="flex items-start gap-3">
                  <Mail className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">お問い合わせ</h3>
                    <p className="text-gray-700 text-lg leading-relaxed">
                      メールアドレス：support@soaringstock.jp
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <div className="bg-slate-50 rounded-lg p-6 border border-slate-200">
                <h3 className="font-bold text-gray-900 mb-4 text-xl">事業内容</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 mt-1 font-bold">・</span>
                    <span>SEO最適化サービス、検索広告（Google Ads、Yahoo! JAPAN等）の運用・効果分析</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 mt-1 font-bold">・</span>
                    <span>コンテンツマーケティング、インフルエンサー（KOL）マーケティング</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 mt-1 font-bold">・</span>
                    <span>広告効果測定、CRO（コンバージョン率最適化）</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 mt-1 font-bold">・</span>
                    <span>データ分析を通じたブランドマーケティング支援</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 mt-1 font-bold">・</span>
                    <span>広告運用結果報告書作成、効果分析レポート</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 mt-1 font-bold">・</span>
                    <span>SEOおよびデジタルマーケティング研修</span>
                  </li>
                </ul>
                <div className="mt-6 p-4 bg-amber-50 border border-amber-200 rounded-lg">
                  <p className="text-xs text-amber-900 leading-relaxed">
                    <strong>【重要】</strong>当社は金融商品取引業者（投資助言・代理業、投資運用業等）ではありません。金融商品取引法第29条の登録を受けた事業者ではないため、個別の投資助言や特定銘柄の売買推奨を行うことはできません。本サービスは公開市場データに基づく参考情報の提供のみを目的としています。
                  </p>
                </div>
              </div>
            </section>

            <div className="bg-blue-50 rounded-lg p-6 border-2 border-blue-200 mt-8">
              <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                <Briefcase className="w-5 h-5" />
                お問い合わせ
              </h3>
              <p className="text-sm text-gray-700 mb-4">
                弊社サービスに関するお問い合わせは、お気軽にご連絡ください。
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold"
              >
                お問い合わせフォームへ
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
