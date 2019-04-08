import React from 'react';

function renderMd(filename: string): object{
  const html = require(`../../markdown/${filename}.md`)
  return { __html: html };
}

export default function Markdown({ match }): React.ReactNode {

  return (
    <section className="page-doc md-body" dangerouslySetInnerHTML={renderMd(match.params.md)}></section>
  );
}
