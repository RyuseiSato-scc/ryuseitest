import React, { useState,useEffect } from "react";
import "./App.css";
import { post } from "aws-amplify/api";
import {Bar, Component42,Component43,Component44, Component45, Component46, Component47, Component48, Component49, Component50, Component52, Component54, Component56,Component58, Component62, Delete, Register, Return} from './ui-components';
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import AppRouter from "./AppRouter";


function App() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/Component43Page");
  };
  // 状態を切り替える関数
  const handleSwitchComponent = (componentName) => {
    setActiveComponent(componentName); // 状態を変更
  };

  const [formData, setFormData] = useState({furigana: "",gender: "",name: "",chance: "",birth: "",informationsessiondate: "",graduationYear: "2025年度",tel: "",
    univercity: "",email:"",facltydepartment:"",path:"",post: "",remarks:"",address: "",isAgreed: "0",});
  
  const [isComponent42, setIsComponent42] = useState(true); // 初期状態は Component42 を表示
  // コンポーネント切り替え用ハンドラー
  const [activeComponent, setActiveComponent] = useState("Component42"); // 現在表示中のコンポーネント状態
  const [isComponent46, setIsComponent46] = useState(true);
  const [isComponent62, setIsComponent62] = useState(false);
  const [isComponent46Visible, setIsComponent46Visible] = useState(true);
  const [isComponent62Visible, setIsComponent62Visible] = useState(false); // Component62の表示状態
  const [isComponent56Visible, setIsComponent56Visible] = useState(false); // Component56の表示状態
  const [isComponent45Visible, setIsComponent45Visible] = useState(false); 
  const [isComponent44Visible, setIsComponent44Visible] = useState(true); // Component44の表示状態
  useEffect(() => {
    if (isComponent56Visible) {
      setIsComponent46Visible(false); // Component46を非表示
      setIsComponent45Visible(true);  // Component45を表示
    }
  }, [isComponent56Visible]);

  // Component56が表示されたらComponent46を非表示にし、Component45を表示する
  useEffect(() => {
    if (isComponent56Visible) {
      setIsComponent46Visible(false); // Component46を非表示
    }
  }, [isComponent56Visible]);

  // Component62が表示されたらComponent44をComponent43に切り替える
  useEffect(() => {
    if (isComponent62Visible) {
      setIsComponent44Visible(false); // Component44を非表示
    }
  }, [isComponent62Visible]); 

  

  // Component56を表示するための処理（例えばボタンをクリックで表示）
  const handleComponent56Click = () => {
    setIsComponent56Visible(true); // Component56を表示
  };
  const handleComponent46Click = () => {
    setIsComponent46Visible(false); // Component46を非表示
  };
  // Component45クリック時の処理
  const handleComponent45Click = () => {
    setIsComponent62Visible(true); // Component62を表示
  };

  // Component62クリック時の処理
  const handleComponent62Click = () => {
    setIsComponent62Visible(false); // Component62を非表示
  };
  // 説明会日時が変更されたときの処理
  const handleSessionDateChange = (e) => {
  const { value } = e.target;
  setFormData({ ...formData, informationsessiondate: value });
  // 説明会日時が選択されたときだけ Component54 を表示
  if (value) {
    setActiveComponent("Component54");
  } else {
    setActiveComponent("Component42"); // "null" または空の値が選ばれた場合は Component42
  }
};
// Component54 クリック時の処理
const handleComponent54Click = () => {
  if (formData.informationsessiondate) {
    setActiveComponent("Component56");
    setIsComponent46(true); // 必要であれば初期化
  } 
};

useEffect(() => {
  if (activeComponent === "Component56" && isComponent46) {
    setIsComponent46(false); // Component46をComponent45に切り替える
  }
}, [activeComponent, isComponent46]);

const [errors, setErrors] = useState({});

  // 郵便番号の処理
const handlePostChange = (e) => {
  const { value } = e.target;
  // 数字とハイフンのみ許可
  const sanitizedValue = value.replace(/[^0-9-]/g, "");
  // 前半3桁と後半4桁にハイフンを自動挿入
  const formattedValue = sanitizedValue
    .replace(/^(\d{3})(\d{1,4})$/, "$1-$2") // フォーマット適用
    .substring(0, 8); // 最大8文字に制限
setFormData({ ...formData, post: formattedValue });
};

  // 許可する文字: 半角英数字と一部記号
const handleEmailInputChange = (e) => {
  const { value } = e.target;
  const sanitizedValue = value.replace(/[^a-zA-Z0-9@._-]/g, "");
  setFormData({ ...formData, email: sanitizedValue });
};

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setFormData({ ...formData, [name]: checked ? "1" : "0" });
  };
  const validateTel = (tel,) => {
    const telPattern = /^[0-9]*$/; // 数字のみ許可
    return telPattern.test(tel);
  };
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (name === "tel" && !validateTel(value)) {
      setErrors({ ...errors, tel: <span className="required">電話番号は数字のみ入れてください。</span> });
    } else {
      setErrors({ ...errors, [name]: "" });
    }
    if (name === "informationsessiondate" && value !== "") {
      setIsComponent42(false); // Component42 を Component54 に切り替え
    }
    setFormData({ ...formData, [name]: value });
    // 入力のたびにエラーをクリア
    if (errors[name]) {
      setErrors({ ...errors, [name]: "" });
    }
  };
  const validateForm = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = <span className="required">氏名は必須です。</span>;
    if (!formData.univercity) newErrors.univercity = <span className="required">大学名は必須です。</span>;
    if (!formData.chance) newErrors.chance = <span className="required">当社を知ったきっかけは必須です。</span>;
    if (!formData.tel) newErrors.tel = <span className="required">電話番号は必須です。</span>;
    if (!formData.email) newErrors.email = <span className="required">メールは必須です。</span>;
    
    return newErrors;
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return; // エラーがあれば送信しない
    }
      // フリガナ、性別、卒業年度、学部学科が未入力の場合、確認ダイアログを表示
  const requiredFields = ['furigana', 'gender', 'graduationYear', 'facltydepartment'];
  const missingFields = requiredFields.filter(field => !formData[field]);
  if (missingFields.length > 0) {
    const confirmMessage = `以下の項目が未入力です。送信を続けますか？\n\n${missingFields.join(', ')}`;
    const confirmSend = window.confirm(confirmMessage);
    if (!confirmSend) return; // キャンセルなら送信を中止
  }
    try {
      const response = await fetch(
        "https://0hc093rawc.execute-api.ap-northeast-1.amazonaws.com/dev/",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          mode: "cors",
          body: JSON.stringify(formData),
        }
      );
      const data = await response.json();
      alert("Data inserted successfully: " + data.body);
    } catch (error) {
      console.error("Error inserting data:", error);
      alert("Error inserting data");
    }
  };
  // 削除処理: ユーザー確認後にフォームデータをリセット
  const handleReset = () => {
    const confirmDelete = window.confirm("本当に削除しますか?");
    if (confirmDelete) {
      setFormData({furigana: "",gender: "",name: "",chance: "",birth: "",informationsessiondate: "",graduationYear: "2025年度",tel: "",univercity: "",email: "",facltydepartment: "",path: "",post: "",remarks: "",address: "",isAgreed: "0",});
      setErrors({});
    }
  };

  
  return (  
    


    <div className="form-container">
      <h1>登録者情報</h1>
      <div className="return-container"> 
      <Return /></div>


      <div className="parent-container">
        <div className="components-wrapper">
          {activeComponent === "Component42" && <Component42 />}
          {activeComponent === "Component56" && <Component56 />}
          {activeComponent === "Component54" && (
            <Component54 onClick={handleComponent54Click} />
          )}
          </div>
          
          
          <div className="components-wrapper">
        {isComponent46Visible && (
          <Component46 onClick={handleComponent46Click} />
        )}
        {!isComponent46Visible && !isComponent62Visible && (
          <Component45 onClick={handleComponent45Click} />
        )}
        {!isComponent46Visible && isComponent62Visible && (
          <Component62 onClick={handleComponent62Click} />
        )}
      </div>
      <div className="components-wrapper">
        {isComponent56Visible && (
          <Component56 />
        )}
        {isComponent62Visible && !isComponent44Visible && (
          < Component43 onClick={handleClick}/>
        )}
        {isComponent44Visible && !isComponent62Visible && (
          <Component44 />
        )}
      </div>
      <div className="parent-container">
          <div className="components-wrapper">
            {/* 状態に応じてコンポーネントを切り替え */}
            {activeComponent === "Component43" && <Component43 />}
            {activeComponent === "Component58" && <Component58 />}
          </div>
        </div>
      
      

  <div className="components-wrapper"> 
<Component50/><Component52/><Component47 /></div>
</div>

<div>
    </div>

      <form onSubmit={handleSubmit} className="grid-container">
        <div className="grid-item">
          <label htmlFor="furigana">フリガナ(*)</label>
          <input
            type="text"
            id="furigana"
            name="furigana"
            value={formData.furigana}
            onChange={handleInputChange}
          />
          {errors.furigana && <p className="error-message">{errors.furigana}</p>}
        </div>
        <div className="grid-item">
          <label htmlFor="gender">性別(*)</label>
          <select
            id="gender"
            name="gender"
            value={formData.gender}
            onChange={handleInputChange}
          >
            <option value="null"></option>
            <option value="0">男性</option>
            <option value="1">女性</option>
            <option value="2">その他</option>
          </select>
          {errors.gender && <p className="error-message">{errors.gender}</p>}
        </div>
        <div className="grid-item">
          <label htmlFor="name">氏名<span className="required">(*)</span></label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
          />
          {errors.name && <p className="error-message">{errors.name}</p>}
        </div>
        <div className="grid-item">
          <label htmlFor="chance">当社を知ったきっかけ<span className="required">(*)</span></label>
          <input
            type="text"
            id="chance"
            name="chance"
            value={formData.chance}
            onChange={handleInputChange}
          />
          {errors.chance && <p className="error-message">{errors.chance}</p>}
        </div>

        <div className="grid-item">
          <label htmlFor="birth">生年月日</label>
          <input
            type="date"
            id="birth"
            name="birth"
            value={formData.birth}
            onChange={handleInputChange}
          />
        </div>

        <div className="grid-item">
          <label htmlFor="informationsessiondate">説明会日時</label>
          <select
            id="informationsessiondate"
            name="informationsessiondate"
            value={formData.informationsessiondate}
            onChange={handleSessionDateChange}
          >
            <option value="null"></option>
            <option value="男性">一月</option>
            <option value="女性">二月</option>
            <option value="その他">三月</option>
          </select>
        </div>
        <div className="grid-item">
          <label htmlFor="graduationYear">卒業年度(*)</label>
          <select
            id="graduationYear"
            name="graduationYear"
            value={formData.graduationYear}
            onChange={handleInputChange}
          >
            <option value="2022年度">2022年度</option>
            <option value="2023年度">2023年度</option>
            <option value="2024年度">2024年度</option>
            <option value="2025年度">2025年度</option>
            <option value="2026年度">2026年度</option>
            <option value="2027年度">2027年度</option>
          </select>
          {errors.graduationYear && <p className="error-message">{errors.graduationYear}</p>}
        </div>
        <div className="grid-item">
          <label htmlFor="tel">TEL<span className="required">(*)</span></label>
          <input
            type="tel"
            id="tel"
            name="tel"
            value={formData.tel}
            onChange={handleInputChange}
          />
          {errors.tel && <p className="error-message">{errors.tel}</p>}
        </div>
        <div className="grid-item">
          <label htmlFor="univercity">大学<span className="required">(*)</span></label>
          <input
            type="text"
            id="univercity"
            name="univercity"
            value={formData.univercity}
            onChange={handleInputChange}
          />
          {errors.univercity && <p className="error-message">{errors.univercity}</p>}
        </div>
        <div className="grid-item">
  <label htmlFor="email">E-mail<span className="required">(*)</span></label>
  
  {/* セレクトボックスの作成 */}
  <select
    id="emailType"
    name="emailType"
    value={formData.emailType}
    onChange={handleInputChange}
  >
    <option value="null">選択してください</option>
    <option value="0">E-mail</option>
    <option value="1">紹介会社E-mail</option>
  </select>
  
{/* E-mail 入力欄 */}
<input
  type="text"
  id="email"
  name="email"
  value={formData.email}
  onChange={handleEmailInputChange} // ハンドラーを変更
  placeholder={
    formData.emailType === "1"
      ? "紹介会社からのE-mailを入力"
      : "E-mailを入力"
  }
/>

  
  {errors.email && <p className="error-message">{errors.email}</p>}
</div>



        <div className="grid-item">
          <label htmlFor="facltydepartment">学部・学科(*)</label>
          
          <input
            type="text"
            id="facltydepartment"
            name="facltydepartment"
            value={formData.facltydepartment}
            onChange={handleInputChange}
          />
        </div>
        <div className="grid-item">
          <label htmlFor="path">格納パス</label>
          <input
            type="path"
            id="path"
            name="path"
            value={formData.path}
            onChange={handleInputChange}
          />
        </div>

        <div className="grid-item">
          <label htmlFor="address">住所</label>
          <textarea
            type="text"
            id="address"
            name="address"
            value={formData.address}
            onChange={handleInputChange}
            className="remarks-input" // クラスを追加
          />
        </div>

<div className="grid-item">
  <label htmlFor="remarks">備考</label>
  <textarea
    type="text"
    id="remarks"
    name="remarks"
    value={formData.remarks}
    onChange={handleInputChange}
    className="remarks-input" // クラスを追加
  />
</div>

<div className="grid-item">
  <label htmlFor="post">郵便番号〒</label>
  <input
    type="text"
    id="post"
    name="post"
    value={formData.post}
    onChange={handlePostChange} // ハンドラーを変更
    maxLength="8" // ハイフン込みで最大8文字
    placeholder="例: 123-4567" // プレースホルダーでフォーマットを表示
  />
</div>

        <div className="grid-item-agree">
  <label>辞退<input
      type="checkbox"
      id="isAgreed"
      name="isAgreed"
      checked={formData.isAgreed === "1"}
      onChange={handleCheckboxChange}
    />
  </label>
</div>  
      
        <div className="parent-container">
          <button type="submit"><Register /></button>
                    <button type="button" onClick={handleReset}><Delete /></button>
        </div>
      </form>
    </div>
  );
}
export default App;
