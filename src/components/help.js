import React from 'react'

export default () => {
  return (
    <div className="help">
      <label className="help__question typ_terms_chapter" htmlFor="buy">Q. 購入するには？</label>
      <input type="checkbox" className="help__toggle" id="buy" />
      <p className="help__answer">
        1. 会員登録の後、ユーザーページで発送先住所等を設定をしていただくと準備が完了します。
        <br />
        2. 作品詳細の「Buy」ボタンから２種類の支払方法を選んで購入できます。
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;購入後はアーティストとのコミュニケーションが可能です。
        <br />
        3. 作品の受け取り後、取引ページで「受取完了」のボタンを押していただき、取引完了です。
      </p>
      <label className="help__question typ_terms_chapter" htmlFor="payment">Q. 支払方法</label>
      <input type="checkbox" className="help__toggle" id="payment" />
      <p className="help__answer">・支払方法は現在、銀行振込、クレジットカード(VISA・Mastercard・AMEX)がご利用できます。</p>
      <label className="help__question typ_terms_chapter" htmlFor="cancel">Q. キャンセル方法</label>
      <input type="checkbox" className="help__toggle" id="cancel" />
      <p className="help__answer">
        ・基本的に購入確定後1週間以内に、
        <a href="/contact" style={{ textDecorationLine: 'underline' }}>問い合わせフォーム</a>
        よりご連絡下さい。
        <br />
        ・作品の不備、破損などございましたらお問い合わせ下さい。 速やかに対応致します。
      </p>
      <label className="help__question typ_terms_chapter" htmlFor="register">Q. アーティストとして登録するには？</label>
      <input type="checkbox" className="help__toggle" id="register" />
      <p className="help__answer">
        1. ユーザー登録時に招待コードを入力するか、招待メールに記載されたURLからユーザー登録をしてください。
        <br />
        2. 仮登録メールが届きますので、記載されているURLをクリックすると本登録が完了します。
        <br />
        3. 必要なアーティスト情報を入力すると、作品の出品が可能になります。
      </p>
      <label className="help__question typ_terms_chapter" htmlFor="display">Q. 出展するには？</label>
      <input type="checkbox" className="help__toggle" id="display" />
      <p className="help__answer">
        1. 出展条件として、アーティスト情報の必須項目が設定されていることが前提です。ユーザーページの「Artist profile」より設定をお願いします。
        <br />
        2. ユーザーページの「Upload」より、写真、必要情報を記入の上、最後の「Upload」ボタンで出展が完了します。
      </p>
      <label className="help__question typ_terms_chapter" htmlFor="edit">Q. 出展した作品の編集をする</label>
      <input type="checkbox" className="help__toggle" id="edit" />
      <p className="help__answer">
        ・作品詳細ページに行くと、ご自身の作品の場合に限り「Buy」ボタンが「Edit」ボタンになっていますので、Uploadと同じ要領で編集できます。
        <br />
        ・原則、一度アップロードした画像は編集/削除はできません。（作品のすり替え防止）
      </p>
      <label className="help__question typ_terms_chapter" htmlFor="deposit">Q. 入金受け取り方法</label>
      <input type="checkbox" className="help__toggle" id="deposit" />
      <p className="help__answer">
        ・購入者からの受取を確認後、事務局より入金スケジュールを明記し、ご連絡をさせて頂きます。
        <br />
        ・基本的に翌週末にご入金をさせて頂きます。
        <br />
        ・作品の不備、破損などがございましたら速やかにご連絡させて頂きます。
      </p>
    </div>
  )
}
