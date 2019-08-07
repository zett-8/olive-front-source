import React from 'react'

export default () => {
  return (
    <div className="help">
      <p className="help__chapter typ_terms_chapter">Q. 購入するには？</p>
      <ol className="help__sentence">
        <li>会員登録の後、ユーザーページで発送先住所等を設定をしていただくと準備完了です。</li>
        <li>
          作品詳細の「Buy」ボタンから２種類の支払方法を選んで購入できます。
          <br />
          購入後はアーティストとのコミュニケーションが可能です。
        </li>
        <li>作品の受け取り後、取引ページで「受取完了」のボタンを押していただき、取引完了です。</li>
      </ol>
      <p className="help__chapter typ_terms_chapter">Q. 支払方法</p>
      <ul className="help__sentence">
        <li>支払方法は現在、銀行振込、クレジットカード(VISA・Mastercard・AMEX)がご利用できます。</li>
      </ul>
      <p className="help__chapter typ_terms_chapter">Q. キャンセル方法</p>
      <ul className="help__sentence">
        <li>
          基本的に購入確定後1週間以内に、
          <a href="/contact" style={{ textDecorationLine: 'underline' }}>問い合わせフォーム</a>
          よりご連絡下さい。
        </li>
        <li>作品の不備、破損などございましたらお問い合わせ下さい。 速やかに対応致します。</li>
      </ul>
      <p className="help__chapter typ_terms_chapter">Q. アーティストとして登録するには？</p>
      <ol className="help__sentence">
        <li>ユーザー登録時に招待コードを入力するか、招待メールに記載されたURLからユーザー登録をしてください。</li>
        <li>仮登録メールが届きますので、記載のURLをクリックすると本登録が完了します。</li>
        <li>必要なアーティスト情報を入力すると、作品の出品が可能になります。</li>
      </ol>
      <p className="help__chapter typ_terms_chapter">Q. 出展する</p>
      <ol className="help__sentence">
        <li>出展条件として、アーティスト情報の必須項目が設定されていることが前提です。ユーザーページの「Artist profile」より設定をお願いします。</li>
        <li>ユーザーページの「Upload」より、写真、必要情報を記入の上、最後の「Upload」ボタンで出展が完了します。</li>
      </ol>
      <p className="help__chapter typ_terms_chapter">Q. 出展した作品の編集をする</p>
      <ul className="help__sentence">
        <li>作品詳細ページに行くと、ご自身の作品の場合に限り「Buy」ボタンが「Edit」ボタンになっていますので、Uploadと同じ要領で編集できます。</li>
        <li>原則、一度アップロードした画像は編集/削除はできません。（作品のすり替え防止）</li>
      </ul>
      <p className="help__chapter typ_terms_chapter">Q. 入金受け取り方法</p>
      <ul className="help__sentence">
        <li>購入者からの受取を確認後、事務局より入金スケジュールを明記し、ご連絡をさせて頂きます。</li>
        <li>基本的に翌週末でご入金をさせて頂きます。</li>
        <li>作品の不備、破損などがございましたら速やかにご連絡させて頂きます。</li>
      </ul>
    </div>
  )
}
