// dar inja mikhaim mesali az zakhire dade dar localStorage ro dar 3 senario mokhtalef emtehan konim.

/*
  senario 1: agar bekhaim data hamun bargozarie aval component ya initialization az localStorage gerefte shavad bayad oun ro dakhel 'useEffect'
  begirim.
*/

// import React, { useState, useEffect } from 'react';

// const ArticleComponent = () => {
//   const [article, setArticle] = useState({
//     title: '',
//     content: '',
//     author: ''
//   });

//   localStorage.setItem('article', JSON.stringify(article));

//   useEffect(() => {
//     /*
//       gereftan data az localStorage hengham render avalie ke mishe initialization. hala chon momkene data dakhel localStorage null bashe
//       ya aslan data faghad dakhel system ma bashe pas miaim type ro bar asas 'string' mikonim yani harchi data az localStorage gerefti 
//       string bashe hata age null bud badesh bia be object tabdil kon.
//     */
//     const savedArticle = JSON.parse(localStorage.getItem('article') as string );

//     // console.log(savedArticle);
//     // '{title: '', content: '', author: ''}'
    
//   }, []); // وابستگی خالی برای اجرای فقط یک بار هنگام لود

//   return (
//     <>
//       <h1>موضوع: {article.title}</h1>
//       <p>متن: {article.content}</p>
//       <p><strong>نویسنده:</strong> {article.author}</p>
//     </>
//   );
// };

// export default ArticleComponent;

/*
  senario 2: agar bekhaim har baer data taghyir kone va be surat khodkar dar localStorage zakhire beshe bayad az 'useEffect' estefade
  konim va be 'useState' data vabaste bashe
*/

// import React, { useState, useEffect } from 'react';

// const ArticleComponent = () => {
//   const [article, setArticle] = useState({
//     title: '',
//     content: '',
//     author: ''
//   });

//   useEffect(() => {
//     // ذخیره‌سازی خودکار اطلاعات مقاله در localStorage هنگام تغییر state
//     localStorage.setItem('article', JSON.stringify(article) as string);
//   }, [article]); // هر زمان article تغییر کرد، این useEffect اجرا می‌شود

//   const handleChange = (e:(React.ChangeEvent<HTMLTextAreaElement> | React.ChangeEvent<HTMLInputElement>)) => {
//     console.log(e.target);
//     const { name, value } = e.target;
//     console.log(name);
//     console.log(value);
    
//     setArticle((prevArticle) => ({
//       ...prevArticle,
//       [name]: value
//     }));
//   };

//   return (
//     <div>
//       <input
//         name="title"
//         value={article.title}
//         onChange={handleChange}
//         placeholder="عنوان مقاله"
//       />
//       <textarea
//         name="content"
//         value={article.content}
//         onChange={handleChange}
//         placeholder="محتوای مقاله"
//       />
//       <input
//         name="author"
//         value={article.author}
//         onChange={handleChange}
//         placeholder="نویسنده"
//       />
//       <h2>موضوع: {article.title}</h2>
//       <p>متن: {article.content}</p>
//       <p><strong>نویسنده:</strong> {article.author}</p>
//     </div>
//   );
// };

// export default ArticleComponent;

/*
  senario 3: agar bekhaim zakhire data dar localStorage ro ba zadan ye dokme anjam bedim niazi be estefade az 'useEffect' nist va ye function baraye onClick misazim.
*/

// import React, { useState } from 'react';

// const ArticleComponent = () => {
//   const [article, setArticle] = useState({
//     title: '',
//     content: '',
//     author: ''
//   });

//   const saveToLocalStorage = () => {
//     localStorage.setItem('article', JSON.stringify(article));
//     alert("اطلاعات مقاله ذخیره شد!");
//   };

//   const handleChange = (e:(React.ChangeEvent<HTMLTextAreaElement> | React.ChangeEvent<HTMLInputElement>)) => {
//     console.log(e.target);
//     const { name, value } = e.target;
//     console.log(name);
//     console.log(value);
//     setArticle((prevArticle) => ({
//       ...prevArticle,
//       [name]: value
//     }));
//   };

//   return (
//     <div>
//       <input
//         name="title"
//         value={article.title}
//         onChange={handleChange}
//         placeholder="عنوان مقاله"
//       />
//       <textarea
//         name="content"
//         value={article.content}
//         onChange={handleChange}
//         placeholder="محتوای مقاله"
//       />
//       <input
//         name="author"
//         value={article.author}
//         onChange={handleChange}
//         placeholder="نویسنده"
//       />
//       <button onClick={saveToLocalStorage}>ذخیره مقاله</button>
//       <h2>موضوع: {article.title}</h2>
//       <p>متن: {article.content}</p>
//       <p><strong>نویسنده:</strong> {article.author}</p>
//     </div>
//   );
// };

// export default ArticleComponent;
