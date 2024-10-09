// libraries
import React from "react";

type ArticleChildren = {
  // dar inja chon ma 'children' ke ferestadim az tag ha mesl 'h1' estefade kardim amalan mesl ferestadan element ke type mishe in:
  // children: JSX.Element

  // agar bekhaim alave bar tag haye mokhtalef az neveshte sade estefade konim pas oun moghe bayad az type zir estefade konim:
  children: React.ReactNode
}

function Article({children}: ArticleChildren) {
  return(
    <>
      {children}
      <h1>it`s article</h1>
    </>
  );
}

export default Article