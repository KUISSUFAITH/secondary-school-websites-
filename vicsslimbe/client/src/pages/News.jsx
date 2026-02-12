import React from "react";

function News() {
  return (
    <section className="page-card">
      <h1>News and Events</h1>
      <div className="news-list">
        <article>
          <h2>Term Opening Ceremony</h2>
          <p>Welcome event for new and returning students.</p>
        </article>
        <article>
          <h2>Science Fair Registration</h2>
          <p>Science fair entries are open for all classes.</p>
        </article>
      </div>
    </section>
  );
}

export default News;
